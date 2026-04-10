import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os categorias
router.get('/subcategorias', async (req, res) => {
    try {

        //cria uma variavel para enviar o comando sql
        const comando = `SELECT * FROM subcategorias WHERE ativo = true`

        //cria uma variavel para receber o retorno do sql
        const subcategorias = await BD.query(comando);

        //retorno para a pagina, o json com os dados
        //buscados do sql
        return res.status(200).json(subcategorias.rows);//200 ok
    } catch (error) {
        console.error('Erro ao listar subcategorias', error.message);
        return res.status(500).json({ error: 'Erro ao listar subcategorias' })
    }
}),
router.post('/subcategorias', async (req, res) => {
    const {nome,id_categoria  } = req.body;
    try {

        const comando = `INSERT INTO subcategorias(nome, id_categoria) VALUES($1, $2)`
        const valores = [nome, id_categoria ];

        await BD.query(comando, valores)
        console.log(comando, valores);

        return res.status(201).json("SubCategoria cadastrada.");
    } catch (error) {
        console.error('Erro ao cadastrar subcategorias', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar subcategorias' })
    }
}),
router.put('/subcategorias/:id_subcategoria', async (req, res) => {
    // Id recebido via parametro
    const { id_subcategoria } = req.params;

    // Dados do categoria recebido via Corpo da página
    const { nome, id_categoria} = req.body;
    try {
        //Verificar se o categoria existe
        const verificarsubcategoria = await BD.query(`SELECT * FROM subcategorias
            WHERE id_subcategoria = $1 and ativo = true`, [id_subcategoria])
        if (verificarsubcategoria.rows.length === 0) {
            return res.status(404).json({ message: 'Subcategoria não encontrado' })
        }
       
       
        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE subcategorias SET ativo = false WHERE id_subcategoria = $1`;
        const valores = [nome, id_categoria];
        await BD.query(comando, valores);

        return res.status(200).json('Subcategoria foi atualizado!');
    } catch (error) {
        console.error('Erro ao atualizar SubCategorias', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar Subcategorias' })
    }
}),
router.delete('/subcategorias/:id_subcategoria', async (req, res) => {
    const { id_subcategoria } = req.params;
    try {
        //Executa o comando de update
        const comando = `UPDATE subcategorias SET ativo = false WHERE id_subcategoria = $1 `
        await BD.query(comando, [id_subcategoria])
        return res.status(200).json({ message: "Subcategoria removido com sucesso" })
    } catch (error) {
        console.error('Erro ao atualizar Subcategoria', error.message)
        return res.status(500).json({ message: "Erro interno so servidor" + error.message })
    }
})




export default router
