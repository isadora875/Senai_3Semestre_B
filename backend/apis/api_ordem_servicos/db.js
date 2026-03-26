import { Pool } from 'pg';

const BD = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_ordem_servico_3b',
    port: 5432,
    password: 'admin'
})
// const BD = new Pool({
//     user: 'postgres',
//     host: 'db.pcgxramsktrblbnnaspd.supabase.co',
//     database: 'postgres',
//     port: 5432,
//     password: 'bancodedadossenai'
// })

const testarConexao = async () =>{
    try{
        const cliente = await BD.connect();
        console.log('Conexão realizada com sucesso!');
        cliente.release();  //libera conexao
    }
    catch(error){
        console.error('Erro ao conectar ao banco de dados', error.message)
    }
}

export {BD, testarConexao};