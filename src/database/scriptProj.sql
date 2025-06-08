create database guitarBeat;

use guitarBeat;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    genero varchar(50)
);

create table musica (
	id int primary key auto_increment,
    nome varchar (45),
    autor varchar (45),
    genero varchar (45),
    duração varchar (45));

create table tentativa (
	id int,
    fkUsuario int,
    fkMusica int,
    constraint pk primary key (id, fkUsuario, fkMusica),
    constraint fkUsuario foreign key(fkUsuario) references usuario(id),
    constraint fkMusica foreign key(fkMusica) references musica(id),
    score int,
    dataRegistro datetime default current_timestamp);
    