create bdpersona_node;
use bdpersona_node;

create table persona(
   id int AUTO_INCREMENT PRIMARY key,
   name varchar(50) not null,
   address varchar(100) not null,
   phone varchar(15)
    );