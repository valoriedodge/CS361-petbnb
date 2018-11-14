DROP TABLE IF EXISTS `Accounts`;

-- create accounts database
CREATE TABLE Accounts(
  user_id       int           NOT NULL AUTO_INCREMENT,
  user_name     varchar(30)   NOT NULL,
  user_address  varchar(25)   NOT NULL,
  phone_number  varchar(50)   NOT NULL,
  user_email    varchar(50) 	NOT NULL,
  user_pw   		varchar(50)   NOT NULL,
  acc_type			varchar(20)		NOT NULL,
  PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- adding new user
INSERT INTO Accounts(user_name, user_address, phone_number, user_email, user_pw, acc_type) 
	VALUES ("TestUserName", "TestUserAddress", "TestUserPhone", "TestUserEmail", "TestUserPW", "Pet Owner"); 

DROP TABLE IF EXISTS `Pets`;

CREATE TABLE Pets(
  pet_id        int           NOT NULL AUTO_INCREMENT,
  pet_name      varchar(30)   NOT NULL,
  pet_type      varchar(25)   NOT NULL,
  pet_breed     varchar(50)   NOT NULL,
  pet_weight    decimal(3, 2) NOT NULL,
  pet_picture   text          NOT NULL,
  pet_diet      text          NOT NULL,
  medications   text          NOT NULL,
  special_needs text          NOT NULL,
  PRIMARY KEY (pet_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO Pets(pet_type, pet_name, pet_breed, pet_weight, pet_picture, pet_diet, medications, special_needs) VALUES ("cat", "abyssinian", "Flavortown", 15.56, 
 "https://www.tica.org/images/breeds/2017/ab_a.jpg", "Hills Prescription Diet - Kidney Care", "Enalapril - 2.5mg, Tramadol - 50mg, Cerenia-16mg", 
 "Cerenia must be given 2x a day, 0.25ml each. Enalapril must be given once a day, at a half a pill. Tramadol may be given once a day - as needed, at a quarter of a pill");
 
 INSERT INTO Pets(pet_type, pet_name, pet_breed, pet_weight, pet_picture, pet_diet, medications, special_needs) VALUES ("cat", "Maine Coon", "Smaug", 20.56, 
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8HV9U9HC0A0BkbbuUBWZVa0t45meGzW3aP4SXk0NLAK1mNgg", "Hills Science Diet - Perfect Weight", "None", "None");
 
  INSERT INTO Pets(pet_type, pet_name, pet_breed, pet_weight, pet_picture, pet_diet, medications, special_needs) VALUES ("dog", "Maine Coon", "Bella", 40.56, 
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8HV9U9HC0A0BkbbuUBWZVa0t45meGzW3aP4SXk0NLAK1mNgg", "Hills Science Diet - Perfect Weight", "None", "None");
 
  INSERT INTO Pets(pet_type, pet_name, pet_breed, pet_weight, pet_picture, pet_diet, medications, special_needs) VALUES ("dog", "Maine Coon", "Penny", 50.56, 
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8HV9U9HC0A0BkbbuUBWZVa0t45meGzW3aP4SXk0NLAK1mNgg", "Hills Science Diet - Perfect Weight", "None", "None");