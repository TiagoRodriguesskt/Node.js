*Acessar MySql com Pront de Comando:
mysql - h 'seu servidor' -u 'seu usuario' -p

*Se precisar criar usuario:
CREATE USER 'novousuario'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha';

*Liberar permissão para acessar a base de dados:
GRANT ALL PRIVILEGES ON * . * TO 'foo'@'localhost';

*Carregando todos os privilegios
FLUSH PRIVILEGES