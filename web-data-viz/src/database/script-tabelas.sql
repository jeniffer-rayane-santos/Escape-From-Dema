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

INSERT INTO usuario VALUES
(DEFAULT,'FPE-123','Giovanna','GiovannaTracinkas@gmail.com', '12345678'),
(DEFAULT,'FPE-321','Vitor','VitorAlmeida@gmail.com', '87654321');

INSERT INTO questionario VALUES
(1,'A','Cauteloso',1),
(1,'B','Estrategista',2);

INSERT INTO questionario VALUES
(2,'C','Determinado',1),
(2,'A','Cauteloso',2);

INSERT INTO questionario VALUES
(3,'B','Estrategista',1),
(3,'A','Cauteloso',2);

INSERT INTO questionario VALUES
(4,'A','Cauteloso',1),
(4,'C','Determinado',2);

INSERT INTO questionario VALUES
(5,'A','Cauteloso',1),
(5,'C','Determinado',2);

SELECT u.nome, q.numero_pergunta, q.letra_pergunta, q.personalidade FROM usuario u
JOIN questionario q ON u.id_usuario = q.fk_usuario;



