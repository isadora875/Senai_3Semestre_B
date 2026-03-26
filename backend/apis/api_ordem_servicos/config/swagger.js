import { response } from "express"


const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API Ordem de serviços',
        descripition: 'Documentação da API de Ordens de Serviços',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            descripition: 'localhost'
        }
    ],
    tags: [
        { name: "Usuários", descripition: "Operações relacionadas aos usuários" }

    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar usuários",
                responses: {
                    200: {
                        descripition: "Dados Obtidos com sucesso",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Usuarios" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Usuários"],
                summary: "Cadastrar novo usuario",
                descripition: "Recebe nome, email,sena=ha, para cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Usuario"
                            }
                        }
                    }
                }
            },
            responses: {
                201: {
                    descripition: "Usuario cadastrado com sucesso"
                },
                400: {
                    descripition: "Erro na requisição(Preencha todos os campos )"
                },
                500: {
                    descripition: "Erro interno no servidor"
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ["Usuários"],
                summary: "Atualizar usuário completo",
                descripition: "Atualizar todos os campos de um usuario existente",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        descripition: "ID do usuario a ser verificado",
                        schema: { type: "integer" },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Usuario" }
                        }
                    }
                },
                responses: {
                    200: {
                        descripition: "Usuario atualizado com sucesso",
                        content: { 'application/json': { example: "Usuario atualizado" } },
                    },
                    404: {
                        descripition: "Usuario nao encontrado",
                        content: { 'application/json': { example: "Usuario não encontrado" } },
                    },
                    500: { descripition: "Erro no servidor" }
                }
            }
        },
        "/departamentos/{id_departamento}":{
            put: {
                tags: ["Depatarmentos"],
                summary: "Atualizar departamento completo",
                descripition: "Atualizar todos os campos de um departamento existente",
                parameters: [
                    {
                        name: "id_departamento",
                        in: "path",
                        required: true,
                        descripition: "ID do departamento a ser verificado",
                        schema: { type: "integer" },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Departamento" }
                        }
                    }
                },
                responses: {
                    200: {
                        descripition: "Departamento atualizado com sucesso",
                        content: { 'application/json': { example: "Departamento atualizado" } },
                    },
                    404: {
                        descripition: "Departamento nao encontrado",
                        content: { 'application/json': { example: "Departamento nao encontrado" } },
                    },
                    500: { descripition: "Erro no servidor" }
                }
            }
           
        },
        "/ordem_servico/{id_ordem_servico}":{
            put: {
                tags: ["Ordem_Serviço"],
                summary: "Atualizar ordem de serviço completo",
                descripition: "Atualizar todos os campos de uma ordem de serviço existente",
                parameters: [
                    {
                        name: "id_ordem_servico",
                        in: "path",
                        required: true,
                        descripition: "ID da ordem de serviço a ser verificado",
                        schema: { type: "integer" },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Ordem_Servico" }
                        }
                    }
                },
                responses: {
                    200: {
                        descripition: "Ordem de serviço atualizado com sucesso",
                        content: { 'application/json': { example: "Ordem de serviço atualizado" } },
                    },
                    404: {
                        descripition: "Ordem de serviço nao encontrado",
                        content: { 'application/json': { example: "Ordem de serviço nao encontrado" } },
                    },
                    500: { descripition: "Erro no servidor" }
                }
           
            },
        },
        "/departamentos": {
            get: {
                tags: ["Depatarmentos"],
                summary: "Listar Depatarmentos",
                responses: {
                    200: {
                        descripition: "Dados Obtidos com sucesso",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Depatamentos" }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/ordem_servico": {
            get: {
                tags: ["Ordem_Serviço"],
                summary: "Ordem Serviço",
                responses: {
                    200: {
                        descripition: "Dados Obtidos com sucesso",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schema/Lista_Ordem_Servico" }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    components: {
        schemas: {
            Lista_Usuarios: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Isadora" },
                    email: { type: "string", example: "isadora@email.com" }
                }
            },
            Cadastro_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Isadora" },
                    email: { type: "string", example: "Isadora@email.com" },
                    senha: { type: "string", example: "123" }
                },

                Atualizacao_Usuario: {
                    type: "object",
                    required:["nome","email", "senha"],
                    properties: {
                        nome: { type: "string", example: "Isadora" },
                        email: { type: "string", example: "isadora@email.com" },
                        senha: { type: "string", example: "123" }
                    },
                    Lista_Departamentos: {
                        type: "object",
                        properties: {
                            id: { type: "integer", example: 1 },
                            nome: { type: "string", example: "freezer" },
                            descricao: { type: "string", example: "Não esta gelando" }
                        }
                    }, Lista_Ordem_Servico: {
                        type: "object",
                        properties: {
                            id: { type: "integer", exemple: 1 },
                            nr_ordem: { type: "integer", example: 1001 },
                            titulo: { type: "string", example: "Trocar gas" },
                            descricao: { type: "string", example: "Brastemp freezer" },
                            prioridade: { type: "string", example: "alta" },
                            status: { type: "string", example: "não funciona" },
                            data: { type: "date", example: "2026-02-26" }

                        }
                    }
                }
            }
        }
    }
}
export default documentacao