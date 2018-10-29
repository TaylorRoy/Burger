 CREATE database burger_db;

 use burger_db;

 CREATE TABLE burger (
     id INT NOT NULL AUTO_INCREMENT,
     burger_name VARCHAR(50) NOT NULL,
     devoured BOOLEAN,
     PRIMARY KEY(id)
 );

INSERT INTO burger (burger_name, devoured)
VALUES ("chicken sandwich", false);

INSERT INTO burger (burger_name, devoured)
VALUES ("bacon burger", false);

INSERT INTO burger (burger_name, devoured)
VALUES ("veggie burger", false);