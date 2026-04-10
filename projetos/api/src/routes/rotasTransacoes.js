import { Router } from "express";
import { BD } from "../../db.js";
const router = Router();

//Criando o endpoint para listar todos os usuarios
router.get('/transacoes', async(req, res) =>{
    try{
        //cria uma variavel para enviar o comando sql
        const comando = `
                        SELECT 
                            t.id_transacao,
                             t.valor,
                             t.descricao,
                             TO_CHAR(t.data_transacao, 'DD/MM/YYYY') AS data_registro,
                             TO_CHAR(t.data_transacao, 'DD/MM/YYYY') AS data_vencimento,
                             TO_CHAR(t.data_transacao, 'DD/MM/YYYY') AS data_pagamento,
                             t.tipo,
                             c.nome AS nome_categoria,
                             s.nome AS nome_subcategoria,
                        FROM transacoes t
                        LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
                        LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
         `
        //cria uma variavel para receber o retorno do sql
        const transacoes = await BD.query(comando);

        //retorno para a pagina, o json com os dados 
        //buscados do sql
       return res.status(200).json(transacoes.rows);//200 ok
    }catch(error){
        console.error('Erro ao listar transacoes', error.message);
        return res.status(500).json({error: 'Erro ao listar transacoes'})
    }
})

//Endpoint seguro contra sql Injection
router.post('/usuarios', async(req, res) => {
    const {nome, email, senha, tipo_acesso } = req.body;
    try{
        //definir a força da criptografia
        const saltRounds = 10;
        // gerando a hash da senha
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);

        const comando = `INSERT INTO USUARIOS(nome, email, senha, tipo_acesso) VALUES($1, $2, $3, $4)`
        const valores = [nome, email, senhaCriptografada, tipo_acesso];

        await BD.query(comando, valores)
        console.log(comando,valores);

       return res.status(201).json("Usuário cadastrado.");
    }catch(error){
        console.error('Erro ao cadastrar usuários', error.message);
        return  res.status(500).json({error: 'Erro ao cadastrar usuarios'})
    }
})

// endpoint para atualizar um unico usuário
// recebendo o parametro pelo id e buscando o usuario
router.put('/usuarios/:id_usuario', async(req, res) =>{
    // Id recebido via parametro
    const {id_usuario} = req.params;

    // Dados do usuario recebido via Corpo da página
    const {nome, email, senha, tipo_acesso} = req.body;
    try{
        //Verificar se o usuario existe
        const verificarUsuario = await BD.query(`SELECT * FROM USUARIOS
            WHERE id_usuario = $1 and ativo = true`, [id_usuario])
        if(verificarUsuario.rows.length === 0){
            return res.status(404).json({message: 'Usuario não encontrado'})
        }
        //definir a força da criptografia
        const saltRounds = 10;
        // gerando a hash da senha
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);

        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE USUARIOS SET nome = $1, email = $2, senha =$3, tipo_acesso = $4 WHERE
        id_usuario = $5`;
        const valores = [nome, email, senhaCriptografada,tipo_acesso, id_usuario];
        await BD.query(comando, valores);

        return res.status(200).json('Usuario foi atualizado!');
    }catch(error){
        console.error('Erro ao atualizar usuários', error.message);
        return  res.status(500).json({error: 'Erro ao atualizar usuarios'})
    }
})

//Rota patch atualizando parcialmente as informações
router.patch('/usuarios/:id_usuario', async(req,res) =>{
    const { id_usuario } = req.params;
    const {nome, email, senha} = req.body;

    try{
         //Verificar se o usuario existe
        const verificarUsuario = await BD.query(`SELECT * FROM USUARIOS
            WHERE id_usuario = $1`, [id_usuario])
        if(verificarUsuario.rows.length === 0){
            return res.status(404).json({message: 'Usuario não encontrado'})
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
        if(email !== undefined){
            campos.push(`email = $${contador}`);
            valores.push(email);
            contador++;
        }
        if(senha !== undefined){
            campos.push(`senha = $${contador}`);
            valores.push(senha);
            contador++;
        }

        //se nenhum campo foi enviado
        if(campos.length === 0 ){
            return res.status(400).json({message: "Nenhum campo a atualizar"})
        }

        //Adicionando ID ao final de valores
        valores.push(id_usuario)
        
        //montando a query dinamicamente
        const comando = `UPDATE USUARIOS SET ${campos.join(', ')} WHERE id_usuario = $${contador}`
        await BD.query(comando, valores)

        return res.status(200).json('Usuário atualizado com sucesso');
    }catch(error){
        console.error('Erro ao atualizar usuario', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

router.delete('/usuarios/:id_usuario', async(req, res) =>{
    const {id_usuario} = req.params;
    try{
        //Executa o comando de delete
        // const comando = `DELETE FROM USUARIOS WHERE id_usuario = $1`
        const comando = `UPDATE USUARIOS SET ativo = false WHERE id_usuario = $1 `
        await BD.query(comando, [id_usuario])
        return res.status(200).json({message: "Usuario removido com sucesso"})
    }catch(error){
        console.error('Erro ao atualizar usuario', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

//Endpoint de Login
router.post('/login', async(req, res) =>{
    const {email, senha} = req.body;

    //Validação de entrada
    if(!email || !senha){
        return res.status(400).json({message: 'Email e senha são obrigatórios'})
    }
    try{
        //Buscar usuario pelo email
        const comando = 'SELECT id_usuario, nome, email, senha FROM USUARIOS WHERE email = $1 and ativo = true'
        const resultado = await BD.query(comando, [email]);

        if(resultado.rows.length === 0) {
            return res.status(401).json({message: 'Email nao encontrado.'})
        }

        const usuario = resultado.rows[0]
        const senhaCorreta = await bcrypt.compare(senha,usuario.senha)

        //Verifica senha se são iguais
        if(!senhaCorreta){
            return res.status(401).json({message: 'Senha inválida.'})
        }
        return res.status(200).json({
            message: 'Login realizado com sucesso',
            usuario: {
                id_usuario: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email
            }
        })
    }catch(error){
        console.error('Erro ao atualizar usuario', error.message)
        return res.status(500).json({message: "Erro interno do servidor" + error.message})
    }
})

router.get('/transacoes/periodo', async(req, res) =>{
    const {inicio, fim} = req.query;
    try{
        if(!inicio || !fim){
            return res.status(400).json({message: 'Informe as datas de inicio e fim'})
        }
        //cria uma variavel para enviar o comando sql
        const comando = `
                        SELECT 
                            t.id_transacao,
                             t.valor,
                             t.descricao,
                             TO_CHAR(t.data_transacao, 'DD/MM/YYYY') AS data_registro,
                             TO_CHAR(t.data_transacao, 'DD/MM/YYYY') AS data_vencimento,
                             TO_CHAR(t.data_transacao, 'DD/MM/YYYY') AS data_pagamento,
                             t.tipo,
                             c.nome AS nome_categoria,
                             s.nome AS nome_subcategoria,
                        FROM transacoes t
                        LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
                        LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
                        WHERE t.data_transacao BETWEEN TO_DATE($1, 'DD/MM/YYYY') AND TO_DATE($2, 'DD/MM/YYYY')
                        ORDER BY t.data_registro DESC
         `
        //cria uma variavel para receber o retorno do sql
        const transacoes = await BD.query(comando);

        //retorno para a pagina, o json com os dados 
        //buscados do sql
       return res.status(200).json(transacoes.rows);//200 ok
    }catch(error){
        console.error('Erro ao listar transacoes', error.message);
        return res.status(500).json({error: 'Erro ao listar transacoes'})
    }
})



export default router