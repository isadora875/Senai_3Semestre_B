import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuarios
router.get('/usuarios', async(req, res) =>{
    try{
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`

        //cria uma variavel para receber o retorno do sql
        const usuarios = await BD.query(query);

        //retorno para a pagina, o json com os dados 
        //buscados do sql
        res.status(200).json(usuarios.rows);//200 ok
    }catch(error){
        console.error('Erro ao listar usuários', error.message);
      return  res.status(500).json({error: 'Erro ao listar usuarios'})
    }
})

//Endpoint para adicionar um novo usuario
//O endpoint com parametros diretos no comando sql, permite o sql injection
// router.post('/usuarios', async(req, res) => {
//   const nome = req.body.nome;
//   const email = req.body.email;
//   const senha = req.body.senha;
//   try{
//   const comando = `INSERT INTO teste(nome, email, senha) 
//   VALUES('${nome}', '${email}', '${senha}')`
  
//   console.log(comando);
//   await BD.query(comando)
//   res.status(201).json("Usuário cadastrado.");
//   }catch(error){
//     console.error('Erro ao cadastrar usuários', error.message);
//     res.status(500).json({error: 'Erro ao cadastrar usuarios'}) 
//     }
// })
//Endpoint seguro contra sql injection
router.post('/usuarios', async(req, res) => {
 const {nome, email, senha} = req.body;
  try{
  const comando = `INSERT INTO USUARIOS(nome, email, senha) VALUES($1, $2, $3)`
  const valores = [nome, email, senha];

  await BD.query(comando, valores)
  console.log(comando, valores);
  
   return res.status(201).json("Usuário cadastrado.");
  }catch(error){
    console.error('Erro ao cadastrar usuários', error.message);
   return res.status(500).json({error: 'Erro ao cadastrar usuarios'}) 
    }
})

// endpoint para atualizar um unico usuário
//recebendo o parametro pelo id e buscando o usuario
router.put('/usuarios/:id_usuario', async(req, res) => {
    
    // id recebido via parametro
    const {id_usuario} = req.params;
  
    //dados do usuario recebido via Corpo da página
    const {nome, email, senha} = req.body;
    try{
        //Verificar se o usuario existe
        const verificarUsuario = await BD.query(`SELECT* FROM USUARIOS
            WHERE id_usuario = $1`, [id_usuario])
        if(verificarUsuario.rows.legth === 0) {
            return res.status(404).json({message: 'Usuario não encontrado'})
        }
        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE USUARIOS SET nome = $1, email = $2, senha = $3 WHERE
        id_usuario = $4`;
        const valores = [nome, email, senha, id_usuario];
        await BD.query(comando, valores);

        return res.status(200).json('Usuario foi atualizado!')
    }catch(error){
        console.error('Erro ao atualizar usuários', error.message);
        return res.status(500).json({error: 'Erro ao atualizar usuarios'})
    }
})

export default router