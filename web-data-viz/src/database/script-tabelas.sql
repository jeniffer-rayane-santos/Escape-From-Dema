USE dema;

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    codigo CHAR(7),
    nome VARCHAR(50),
    email VARCHAR(50),
    senha CHAR(8)
);

CREATE TABLE questionario (
	numero_pergunta VARCHAR(10),
    letra_pergunta CHAR(1),
    personalidade VARCHAR(15),
    fk_usuario INT,
    FOREIGN KEY (fk_usuario)
        REFERENCES usuario (id_usuario)
);

SELECT u.nome, q.numero_pergunta, q.letra_pergunta, q.personalidade FROM usuario u
JOIN questionario q ON u.id_usuario = q.fk_usuario;




