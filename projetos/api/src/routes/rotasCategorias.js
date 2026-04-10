import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos as categorias
router.get('/categorias', async(req, res) =>{
    try{
        //cria uma variavel para enviar o comando sql
        const comando = `SELECT * FROM categorias WHERE ativo = true`

        //cria uma variavel para receber o retorno do sql
        const categorias = await BD.query(comando);

        //retorno para a pagina, o json com os dados 
        //buscados do sql
       return res.status(200).json(categorias.rows);//200 ok
    }catch(error){
        console.error('Erro ao listar categorias', error.message);
        return res.status(500).json({error: 'Erro ao listar categorias'})
    }
})

//Endpoint seguro contra sql Injection
router.post('/categorias', async(req, res) => {
    const {id_categoria, nome, descricao, cor, icone, tipo, ativo } = req.body;
    try{
        
        const comando = `INSERT INTO Categorias(id_categoria, nome, descricao, cor, icone, tipo, ativo) VALUES($1, $2, $3, $4, $5, $6, $7)`
        const valores = [id_categoria, nome, descricao, cor, icone, tipo, ativo];

        await BD.query(comando, valores)
        console.log(comando,valores);

       return res.status(201).json("Categoria cadastrado.");
    }catch(error){
        console.error('Erro ao cadastrar categorias', error.message);
        return  res.status(500).json({error: 'Erro ao cadastrar categorias'})
    }
})

// endpoint para atualizar um unico usuário
// recebendo o parametro pelo id e buscando a categoria
router.put('/categorias/:id_categoria', async(req, res) =>{
    // Id recebido via parametro
    const {id_categoria} = req.params;

    // Dados do categoria recebido via Corpo da página
    const { nome, descricao, cor, icone, tipo} = req.body;
    try{
        //Verificar se o usuario existe
        const verificarCategoria = await BD.query(`SELECT * FROM CATEGORIAS
            WHERE id_categoria = $1 and ativo = true`, [id_categoria])
        if(verificarCategoria.rows.length === 0){
            return res.status(404).json({message: 'Categoria não encontrado'})
        }

        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE CATEGORIAS SET nome = $1, email = $2, senha =$3, tipo_acesso = $4 WHERE
        id_categoria = $5`;
        const valores = [nome, email, senhaCriptografada,tipo_acesso, id_usuario];
        await BD.query(comando, valores);

        return res.status(200).json('Categoria foi atualizado!');
    }catch(error){
        console.error('Erro ao atualizar usuarios', error.message);
        return  res.status(500).json({error: 'Erro ao atualizar categorias'})
    }
})

//Rota patch atualizando parcialmente as informações
router.patch('/categorias/:id_categoria', async(req,res) =>{
    const { id_categoria } = req.params;
    const {nome, descricao, cor, icone, tipo} = req.body;

    try{
         //Verificar se o usuario existe
        const verificarCategoria = await BD.query(`SELECT * FROM categorias
            WHERE id_categoria = $1`, [id_categoria])
        if(verificarCategoria.rows.length === 0){
            return res.status(404).json({message: 'categoria não encontrado'})
        }

        //Montar o update dinamicamente(apenas campos enviados)
        const campos = [];
        const valores = [];
        let contador = 1;

        if(nome !== undefined){
            campos.push(`nome = $${contador}`);
            valores.push(nome);
            contador++;
        }
        if(descricao !== undefined){
            campos.push(`descricao = $${contador}`);
            valores.push(descricao);
            contador++;
        }
        if(cor !== undefined){
            campos.push(`cor = $${contador}`);
            valores.push(cor);
            contador++;
        }
        if(icone !== undefined){
            campos.push(`icone = $${contador}`);
            valores.push(icone);
            contador++;
        }
        if(tipo !== undefined){
            campos.push(`tipo = $${contador}`);
            valores.push(tipo);
            contador++;
        }

        //se nenhum campo foi enviado
        if(campos.length === 0 ){
            return res.status(400).json({message: "Nenhum campo a atualizar"})
        }

        //Adicionando ID ao final de valores
        valores.push(id_categoria);
        
        //montando a query dinamicamente
        const comando = `UPDATE CATEGORIAS SET ${campos.join(', ')} WHERE id_categoria = $${contador}`
        await BD.query(comando, valores)

        return res.status(200).json('Categoria atualizado com sucesso');
    }catch(error){
        console.error('Erro ao atualizar categoria', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

router.delete('/categorias/:id_categoria', async(req, res) =>{
    const {id_categoria} = req.params;
    try{
        //Executa o comando de delete
        // const comando = `DELETE FROM USUARIOS WHERE id_usuario = $1`
        const comando = `UPDATE CATEGORIAS SET ativo = false WHERE id_categoria = $1 `
        await BD.query(comando, [id_categoria])
        return res.status(200).json({message: "Categoria removido com sucesso"})
    }catch(error){
        console.error('Erro ao atualizar categoria', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

export default router