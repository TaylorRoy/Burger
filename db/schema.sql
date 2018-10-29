 CREATE database burger_db;

 use burger_db;

 CREATE TABLE burger (
     id INT NOT NULL,
     burger_name VARCHAR(50) NOT NULL,
     devoured BOOLEAN,
     PRIMARY KEY(id)
 );
 
 Create the `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.