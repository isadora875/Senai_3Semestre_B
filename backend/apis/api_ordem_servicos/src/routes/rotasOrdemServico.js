import {Router} from "express";
import {BD} from "../../db.js";

router.get('/ordem_servicos', async(req, res) =>{
    try{
        const comando = `SELECT * FROM ordem_servicos`
        const ordens = await BD.query(comando);
        return res.status(200).json(ordens.rows)
    }catch(error){
        console.error('Erro ao listar ordens', error.message)
        res.status(500).json({error: 'Erro ao listar ordens'})
        
    }
});

router.post('/ordem_servicos', async(req, res) => {
 const {numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento} = req.body;
  try{
  const comando = `INSERT INTO ORDEM_SERVICOS
  (numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento) 
  VALUES($1, $2, $3)`
  const valores = [nome, email, senha];

  await BD.query(comando, valores)
  console.log(comando, valores);
  
   return res.status(201).json("Usuário cadastrado.");
  }catch(error){
    console.error('Erro ao cadastrar usuários', error.message);
   return res.status(500).json({error: 'Erro ao cadastrar usuarios'}) 
    }
})