CREATE TABLE USUARIOS(
  id_usuario SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE DEPARTAMENTOS(
  id_departamento SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao VARCHAR(255)
);

CREATE TABLE ORDEM_SERVICOS(
  id_ordem SERIAL PRIMARY KEY,
  numero_ordem INT UNIQUE,
  titulo VARCHAR(100) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  prioridade VARCHAR(100) NOT NULL,
  status VARCHAR(100) NOT NULL,
  data DATE NOT NULL,
  id_usuario INT NOT NULL REFERENCES USUARIOS(id_usuario),
  id_departamento INT NOT NULL REFERENCES DEPARTAMENTOS(id_departamento)
);

INSERT INTO USUARIOS(nome, email, senha) VALUES('Ana Silva', 'ana.silva@email.com', 'senha123');

INSERT INTO USUARIOS(nome, email, senha) VALUES('Maria Clara', 'maria.clara@email.com', 'senha123');


INSERT INTO departamentos (nome, descricao)
VALUES
('TI', 'Tecnologia da Informação'),
('Manutenção', 'Setor de manutenção geral');

INSERT INTO ordem_servicos(numero_ordem, titulo, descricao, prioridade, status,data, id_usuario, id_departamento)
VALUES
(1001, 'Trocar cabo de rede', 'Ponto de rede da sala 203 está sem conexão', 'media', 'aberta','2026-02-26', 1, 1),
(1002, 'Consertar ar‑condicionado', 'Unidade do laboratório parou de gelar', 'alta', 'em_andamento','2026-02-26', 2, 2);
