const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API Fiananceira - Financontrol',
        description: 'Documentação da API de gerenciamento financeiro - Financontrol',
        version: '1.0.0'
    },
    servers: [
        { url: 'http://localhost:3000', description: 'localhost' }
    ],
    tags: [
        { name: 'Usuários', description: 'Operações relacionadas aos usuários' },
        { name: 'Categorias', description: 'Operações relacionadas as categorias' },
        { name: 'Transações', description: 'Operações relacionadas as transações' }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar todos os usuários",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Usuarios' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Cadastrar novo usuário',
                description: "Recebe nome, email, senha para cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário cadastrado com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ['Usuários'],
                summary: 'Atualizar todos os dados do usuário',
                description: 'Atualiza todos os dados de um usuário existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Usuario" },
                            example: {
                                nome: "Ricardo Santos",
                                email: "ricardo5@sesisp.com",
                                senha: "senhaAtualizada"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário atualizado com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }

            },
            delete: {
                tags: ['Usuários'],
                summary: 'Remover Usuário',
                description: 'Remove usuário existente pelo ID',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Usuário removido com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }
            },
        },
        //Swagger Login
        "/login": {
            post: {
                tags: ['Usuários'],
                summary: 'Realizar Login',
                description: "Autentica um usuário e retorna seus dados",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Login_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Login realizado com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Resposta_Login"
                                }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/Categorias": {
            get: {
                tags: ["Categorias"],
                summary: "Listar todos os categorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Categorias' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Categorias'],
                summary: 'Cadastrar nova categoria',
                description: "Recebe nome, email, senha para cadastrar novo categoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Categoria"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Categoria cadastrado com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
        },
        "/Categorias/{id_categoria}": {
            put: {
                tags: ['Categorias'],
                summary: 'Atualizar todos os dados de categoria',
                description: 'Atualiza todos os dados de uma categoria existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "ID da categoria a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Categoria" },
                            example: {
                                nome: "name",
                                descricao: "name",
                                cor: "#fff",
                                icone: "gdsshg",
                                tipo: "E"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Categoria atualizado com sucesso!"
                    },
                    404: {
                        description: "Categoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "Categoria não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }

            },
            delete: {
                tags: ['Categorias'],
                summary: 'Remover categoria',
                description: 'Remove categoria existente pelo ID',
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "ID da categoria a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Categoria removido com sucesso!"
                    },
                },
            },
        },
          "/subcategorias": {
            get: {
                tags: ["Subcategorias"],
                summary: "Listar todas as subcategorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_SubCategorias' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Subcategorias"],
                summary: "Cadastrar Subcategorias",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_SubCategorias"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Subcategoria cadastrada com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/subcategorias/{id_subcategoria}": {
            put: {
                tags: ['Subcategorias'],
                summary: 'Atualizar todos os dados da Subcategoria',
                description: 'Atualiza todos os dados de uma Subcategoria existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da Subcategoria a ser atualizada",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_SubCategorias" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Subcategoria atualizada com sucesso!"
                    },
                    404: {
                        description: "Subcategoria não encontrada"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ['Subcategorias'],
                summary: 'Remover Subcategoria',
                description: 'Remove subcategoria existente pelo ID',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria a ser removida",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Subcategoria removida com sucesso!"
                    },
                    404: {
                        description: "Subcategoria não encontrada"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/transacoes": {
            get: {
                tags: ["Transações"],
                summary: "Listar todos os transações",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Transações'],
                summary: 'Cadastrar nova transação',
                description: "Recebe nome, email, senha para cadastrar nova transação",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Transacao"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Transação cadastrada com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
        },
        "/transacoes/tipo/{tipo}": {
                get: {
                    tags: ["Transações"],
                    summary: "Listar todos os transações",
                    parameters: [
                        {
                            name: "tipo",
                            in: "path",
                            required: true,
                            description: "Tipo da transação (E - Entrada, S - Saída)",
                            schema: {
                                type: "string", enum: ["E", "S"], example: "S"
                            }
                        }
                    ],
                    responses: {
                        200: {
                            description: "Dados obtidos com sucesso!",
                            content: {
                                "apllication/json": {
                                    schema: {
                                        type: "array",
                                        items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    tags: ['Transações'],
                    summary: 'Atualizar todos os dados de transação',
                    description: 'Atualiza todos os dados de uma transação existente, é necessário enviar todos os campos',
                    parameters: [
                        {
                            name: "id_transacao",
                            in: "path",
                            required: true,
                            description: "ID da transação a ser atualizado",
                            schema: {
                                type: 'integer',
                                example: 1
                            }
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Atualizar_Transacao" },
                                example: {
                                    nome: "name",
                                    descricao: "name",
                                    cor: "#fff",
                                    icone: "gdsshg",
                                    tipo: "E"
                                }
                            }
                        }
                    },
                    responses: {
                        201: {
                            description: "Transação atualizado com sucesso!"
                        },
                        404: {
                            description: "Transação não encontrada",
                            content: {
                                "application/json": {
                                    example: { message: "Transação não encontrada" }
                                }
                            }
                        },
                        500: {
                            description: "Erro interno no servidor"
                        }
                    }
                },
                delete: {
                    tags: ['Transações'],
                    summary: 'Remover transação',
                    description: 'Remove transação existente pelo ID',
                    parameters: [
                        {
                            name: "id_transacao",
                            in: "path",
                            required: true,
                            description: "ID da transação a ser removido",
                            schema: {
                                type: 'integer',
                                example: 1
                            }
                        }
                    ],
                    responses: {
                        200: {
                            description: "Transação removido com sucesso!"
                        },
                        404: {
                            description: "Transação não encontrada",
                            content: {
                                "application/json": {
                                    example: { message: "Transação não encontrada" }
                                }
                            }
                        },
                        500: {
                            description: "Erro interno no servidor"
                        }
                    }
                }
        },
        "/transacoes/categorias/{categoria}": {
            get: {
                tags: ["Transações"],
                summary: "Listar transações por categoria",
                parameters: [
                    {
                        name: "categoria",
                        in: "path",
                        required: true,
                        description: "Nome da categoria",
                        schema: { type: "string", example: "Alimento" }
                    }
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/transacoes/subcategoria/{subcategoria}": {
            get: {
                tags: ["Transações"],
                summary: "Listar transações por subcategoria",
                parameters: [
                    {
                        name: "subcategoria",
                        in: "path",
                        required: true,
                        description: "Nome da subcategoria",
                        schema: { type: "string", example: "Lacteos" }
                    }
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/transacoes/periodo": {
                 get: {
                    tags: ["Transações"],
                    summary: "Listar trasações por período",
                    parameters: [
                        {
                            name: "inicio",
                            in: "query",
                            required: true,
                            description: "Data de inicio por periodo",
                            schema: {type: "string", example: "10/04/2026"}
                        },
                        {
                            name: "fim",
                            in: "query",
                            required: true,
                            description: "Data de fim do periodo",
                            schema: {type: "string", example: "13/04/2026"}
                        }
                    ],

                    responses: {
                        200: {
                            description: "Dados obtidos com sucesso!",
                            content: {
                                "apllication/json": {
                                    schema: {
                                        type: "array",
                                        items: { $ref: '#/components/schemas/Listar_Transacoes' }
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
            Listar_Usuarios: {
                type: 'object',
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo@email.com" }
                }
            },
            Cadastrar_Usuario: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo2@email.com" },
                    senha: { type: "string", example: "Senha123" }
                }
            },
            Atualizar_Usuario: {
                type: 'object',
                required: ["nome", "email", "senha"],
                properties: {
                    nome: { type: "string", example: "Nina" },
                    email: { type: "string", example: "nina@email.com" },
                    senha: { type: "string", example: "Senha123" }
                }
            },
            Login_Usuario: {
                type: 'object',
                required: ['email', 'senha'],
                properties: {
                    email: { type: "string", example: "ricardo2@email.com" },
                    senha: { type: "string", example: "Senha123" }
                }
            },
            Resposta_Login: {
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Login realizado com sucesso' },
                    usuario: {
                        type: 'object',
                        properties: {
                            id_usuario: { type: "integer", example: 1 },
                            email: { type: "string", example: "ricardo2@email.com" },
                            senha: { type: "string", example: "Senha123" }
                        }
                    }
                }
            },
            Listar_Categorias: {
                type: 'object',
                properties: {
                    id_categoria: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Saúde" },
                    descricao: { type: "string", example: "Produtos de saúde" },
                    cor: { type: "string", example: "#fff" },
                    icone: { type: "string", example: "nomedoIcone" },
                    tipo: { type: "string", example: "E" }
                }
            },
            Cadastrar_Categorias: {
                type: 'object',
                properties: {
                    id_categoria: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Saúde" },
                    descricao: { type: "string", example: "Produtos de saúde" },
                    cor: { type: "string", example: "#fff" },
                    icone: { type: "string", example: "nomedoIcone" },
                    tipo: { type: "string", example: "E" }
                }
            },
            Atualizar_Categorias: {
                type: 'object',
                required: ["id_categoria", "nome", "descricao", "cor", "icone", "tipo"],
                properties: {
                    id_categoria: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Saúde" },
                    descricao: { type: "string", example: "Produtos de saúde" },
                    cor: { type: "string", example: "#fff" },
                    icone: { type: "string", example: "nomedoIcone" },
                    tipo: { type: "string", example: "E" }
                }
            },
            Listar_Transacoes: {
                type: 'object',
                properties: {
                    id_transacao: { type: "integer", example: 1 },
                    valor: { type: "number", example: 10.00 },
                    descricao: { type: "string", example: "Consulta médica" },
                    data_registro: { type: "string", example: "09/04/2026" },
                    data_vencimento: { type: "string", example: "10/04/2026" },
                    data_pagamento: { type: "string", example: "11/04/2026" },
                    tipo: { type: "string", enum: ["E", "S"], example: "E" },
                    nome_categoria: { type: "string", example: "Saúde" },
                    nome_subcategoria: { type: "string", example: "Consulta médica" }
                }
            },
        }
    }
}

export default documentacao