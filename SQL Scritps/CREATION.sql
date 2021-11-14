IF EXISTS (SELECT * FROM sys.objects WHERE type = 'u' AND name = 'users')
DROP TABLE users

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'u' AND name = 'foods')
DROP TABLE foods

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'u' AND name = 'patients')
DROP TABLE patients

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'u' AND name = 'admins')
DROP TABLE admins

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'u' AND name = 'nutritionists')
DROP TABLE nutritionists

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'u' AND name = 'food_plan')
DROP TABLE food_plan



CREATE TABLE users(
	id_user INT PRIMARY KEY NOT NULL IDENTITY(1,1),
	username VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL UNIQUE,
	email VARCHAR(255) UNIQUE,
	usertype INT NOT NULL
);

CREATE TABLE foods(
	id_food INT NOT NULL,
	description_food VARCHAR(100) NOT NULL,
	portion_food VARCHAR(10) NOT NULL,
	fat_food FLOAT NOT NULL,
	vitamins_food VARCHAR(255) NOT NULL,
	calcium_food FLOAT NOT NULL,
	iron_food FLOAT NOT NULL,
	sodium_food FLOAT NOT NULL,
	carbs_food FLOAT NOT NULL,
	energy_food FLOAT NOT NULL,
	protein_food FLOAT NOT NULL,
	food_state INT NOT NULL,
	PRIMARY KEY (id_food)
);

CREATE TABLE patients(
	id_patient INT NOT NULL,
	first_name_patient VARCHAR(255) NOT NULL,
	second_name_patient VARCHAR(255) NOT NULL,
	first_last_name_patient VARCHAR(255) NOT NULL,
	second_last_name_patient VARCHAR(255) NOT NULL,
	birth_date_patient DATE NOT NULL,
	initial_weight_patient FLOAT NOT NULL,
	actual_weight_patient FLOAT NOT NULL,
	imc_patient FLOAT NOT NULL,
	calories_patient FLOAT NOT NULL,
	country_patient VARCHAR(255) NOT NULL,
	waist_patient FLOAT NOT NULL,
	neck_patient FLOAT NOT NULL,
	hip_patient FLOAT NOT NULL,
	thigh_patient FLOAT NOT NULL,
	fat_patient FLOAT NOT NULL
); 

CREATE TABLE admins(
	id_admin INT NOT NULL,
	first_name_admin VARCHAR(255) NOT NULL,
	second_name_admin VARCHAR(255) NOT NULL,
	first_last_name_admin VARCHAR(255) NOT NULL,
	second_last_name_admin VARCHAR(255) NOT NULL,
	phone_admin VARCHAR(8) NOT NULL,
	PRIMARY KEY (id_admin)
);

CREATE TABLE nutritionists (
	id_nutritionist INT NOT NULL,
	first_name_nutritionist VARCHAR(255) NOT NULL,
	second_name_nutritionist VARCHAR(255) NOT NULL,
	first_last_name_nutritionist VARCHAR(255) NOT NULL,
	second_last_name_nutritionist VARCHAR(255) NOT NULL,
	birth_date_nutritionist DATE NOT NULL,
	weight_nutritionist FLOAT NOT NULL,
	imc_nutritionist FLOAT NOT NULL,
	code_nutritionist INT NOT NULL UNIQUE,
	pfp_nutritionist TEXT NOT NULL,
	card_nutritionist INT NOT NULL,
	payment_nutritionist INT NOT NULL,
	direction_nutritionist TEXT NOT NULL,
	PRIMARY KEY (id_nutritionist)
);

CREATE TABLE food_plan(
	id_plan INT NOT NULL,
	name_plan VARCHAR(255) NOT NULL,
	PRIMARY KEY(id_plan)
);