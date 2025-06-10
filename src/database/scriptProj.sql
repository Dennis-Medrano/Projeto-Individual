drop database guitarBeat;

create database guitarBeat;

use guitarBeat;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	sobrenome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    genero varchar(50)
);
select * from usuario;
create table musica (
	id int primary key auto_increment,
    nome varchar (45),
    autor varchar (45),
    genero varchar (45),
    duração varchar (45));
    
INSERT INTO musica (nome, autor, genero, duração) VALUES 
	('Toxicity', 'System of a Down', 'Rock', '3.50'),
	('Nightmare', 'Avenged Sevenfold', 'Rock', '6.25'),
	('Its my life', 'Bon Jovi', 'Rock', '4.35'),
	('The Emptiness Machine', 'Link Park', 'Rock', '3.3'),
	('Smells Like Teen Spirit', 'Nirvana', 'Rock', '4.5'),
	('Shape of You', 'Ed Sheeran', 'Pop', '4.33'),
	('Bad Romance', 'Lady Gaga', 'Pop', '5.18'),
	('GANGNAM STYLE', 'PSY', 'K-pop', '4.23'),
	('FANCY', 'TWICE', 'K-pop', '3.5'),
	('rockstar', 'Post Malone', 'Rap', '4.12'),
	('SICKO MODE', 'Travis Scott', 'Rap', '5.33'),
	('No Woman No Cry', 'Bob Marley', 'Reggae', '7.11'),
	('Three Little Birds', 'Bob Marley', 'Reggae', '3.11'),
	('Os Anjos Cantam', 'Jorge & Mateus', 'Sertanejo', '3.27'),
	('Infiel', 'Marília Mendonça', 'Sertanejo', '3.30'),
	('Bad and Boujee', 'Migos', 'Trap', '3.30'),
	('goosebumps', 'Travis Scott', 'Trap', '3.30');

create table tentativa (
	id int auto_increment,
    fkUsuario int,
    fkMusica int,
    constraint pk primary key (id, fkUsuario, fkMusica),
    constraint fkUsuario foreign key(fkUsuario) references usuario(id),
    constraint fkMusica foreign key(fkMusica) references musica(id),
    score int,
    dataRegistro datetime default current_timestamp);

-- View
create view vw_Game as
	SELECT
		t.id as id_tentativa,
		t.score as Score,
		t.dataRegistro as dataRegistro,
		u.id as id_usuario,
		u.nome as nome,
		u.email as email,
		u.senha as senha,
		u.genero as genero_usuario,
		m.id as id_musica,
		m.nome as nomeMusica,
		m.autor as artista,
		m.genero as genero,
		m.duração as duração FROM tentativa as t
			join usuario as u on t.fkUsuario = u.id
			join musica as m on t.fkMusica = m.id;
     
-- Traz as informações das kpis
SELECT
    Score AS maior_score,
    nomeMusica AS musica_maior_score FROM vw_Game
	WHERE id_usuario = 1 
		ORDER BY Score DESC
		LIMIT 1;
		insert into tentativa (fkUsuario,fkMusica,score,dataRegistro) values
            (1,1,1000,default);
            
-- Traz as informações para grafico
SELECT
    Score,
    DATE_FORMAT(dataRegistro, '%d-%m - %H:%i') AS data_hora_formatada
	FROM vw_Game
	WHERE id_usuario = 1 -- Substitua pelo ID do usuário desejado
		ORDER BY dataRegistro asc;
     
-- View para ranking
alter view vw_ranking as
    select 
		t.fkUsuario as usuario, 
        u.nome as Nome,
		dense_rank() over (order by max(t.score) desc) as Ranking,
		(select count(distinct fkUsuario) from tentativa) as qtd_usuario,
        t.score as score
		from tentativa t join usuario u on fkUsuario = u.id
		group by fkUsuario, score;
        
        select * from vw_ranking; 