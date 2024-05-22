-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE f1;

USE f1;

CREATE TABLE equipe (
	idEquipe INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
);

create table piloto (
	NumPiloto INT PRIMARY KEY,
    nome VARCHAR(50),
    dataNasc DATE, 
    titulos INT, 
    fkEquipe INT, 
	FOREIGN KEY (fkEquipe) REFERENCES equipe(idEquipe)
    );

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    imgPerfil VARCHAR(100),
	fkEquipe INT,
    fkPiloto INT,
	FOREIGN KEY (fkEquipe) REFERENCES equipe(idEquipe),
    FOREIGN KEY (fkPiloto) REFERENCES piloto(NumPiloto)
);

CREATE TABLE quiz (
idQuiz int PRIMARY KEY AUTO_INCREMENT, 
AnoQuiz int
);

CREATE TABLE tentativa(
idQuiz int,
idUsuario int, 
acertos int,
erros int,
FOREIGN KEY (idQuiz) REFERENCES quiz(idQuiz),
FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT usuarioQuiz PRIMARY KEY (idQuiz, idUsuario));

insert into equipe values 
(default, "Ferrari"),
(default, "Red Bull Racing"),
(default, "McLaren"),
(default, "Mercedes"),
(default, "Aston Martin"),
(default, "Visa RB"),
(default, "Haas"),
(default, "Williams"),
(default, "Alpine"),
(default, "Kick Sauber");

insert into piloto values 
(16, "Charles Leclerc", "1997-10-16", null, 1),
(55, "Carlos Sainz", "1994-09-01", null, 1),
(1, "Max Verstappen", "1997-09-30", 3, 2),
(11, "Sergio Perez", "1990-01-26", null, 2), 
(4, "Lando Norris", "1999-11-13", null, 3),
(81, "Oscar Piastri", "2001-06-04", null, 3),
(44, "Lewis Hamilton", "1985-01-07", 7, 4),
(63, "George Russel", "1998-02-15", null , 4),
(14, "Fernando Alonso", "1981-07-29", 2, 5),
(18, "Lance Stroll", "1998-10-29", null, 5),
(22, "Yuki Tsunoda", "2000-05-11", null, 6),
(3, "Daniel Ricciardo", "1989-07-01", null, 6),
(27, "Niko Hulkenberg", "1987-08-19", null, 7),
(20, "Kevin Magnussen", "1992-10-05", null, 7),
(23, "Alexander Albon", "1996-03-23", null, 8),
(2, "Logan Sargent", "2000-12-31", null, 8),
(10, "Pierre Gasly", "1996-02-07", null, 9),
(31, "Esteban Ocon", "1996-09-17", null, 9),
(77, "Valteri Bottas", "1989-08-28", null, 10),
(24, "Zhou Guanyu", "1999-05-30", null, 10);

select piloto.NumPiloto as NumeroPiloto,
	piloto.nome as Nome,
    equipe.nome as equipe
    from piloto join equipe on idEquipe = fkEquipe order by NumPiloto;
    
    select piloto.NumPiloto as NumeroPiloto,
	piloto.nome as Nome,
    date_format(from_days(datediff(now(), dataNasc)), "%Y")+0 as idade, 
    equipe.nome as equipe
    from piloto join equipe on idEquipe = fkEquipe order by idade;

