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
	fat_patient FLOAT NOT NULL,
	id_nutritionist_patient INT NOT NULL DEFAULT(0) --DEFAULT O,
	PRIMARY KEY(id_patient)
); 

CREATE TABLE food_plan(
	id_plan INT NOT NULL IDENTITY(1,1),
	name_plan VARCHAR(255) NOT NULL,
	breakfast VARCHAR(255) NOT NULL,
	morning_snack VARCHAR(255) NOT NULL,
	lunch VARCHAR(255) NOT NULL,
	afternoon_snack VARCHAR(255) NOT NULL,
	dinner VARCHAR(255) NOT NULL,
	id_patient_nutritionist INT NOT NULL,
	PRIMARY KEY(id_plan)
);

CREATE TABLE users(
	id_user INT PRIMARY KEY NOT NULL IDENTITY(1,1),
	username VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL UNIQUE,
	email VARCHAR(255) UNIQUE,
	usertype INT NOT NULL,
	user_owner INT NOT NULL
);

CREATE TABLE recipes(
	id_recipe INT NOT NULL IDENTITY(1,1),
	name_recipe VARCHAR(255) NOT NULL,
	ingredients VARCHAR(max) NOT NULL,
	id_patient_recipe INT NOT NULL,
	PRIMARY KEY (id_recipe)
);

CREATE TABLE patientmeasures(
	id_patientM INT NOT NULL IDENTITY(1,1),
	date_patient DATE NOT NULL,
	waist_patient FLOAT NOT NULL,
	neck_patient FLOAT NOT NULL,
	hip_patient FLOAT NOT NULL,
	fat_patient FLOAT NOT NULL,
	muscle_patient FLOAT NOT NULL,
	weight_patient FLOAT NOT NULL,
	id_patient_owner INT NOT NULL,
	PRIMARY KEY (id_patientM)
);

CREATE TABLE nutritionist_patients(
	id_nutritionist INT NOT NULL,
	id_patient INT NOT NULL
);

CREATE TABLE patients_recipes(
	id_recipe INT NOT NULL,
	id_patient INT NOT NULL
);

ALTER TABLE users
DROP CONSTRAINT FK_users_patients

ALTER TABLE users
DROP CONSTRAINT FK_users_admins

ALTER TABLE users
DROP CONSTRAINT FK_users_nutritionists

ALTER TABLE patientmeasures
ADD CONSTRAINT patientmeasures_patient
FOREIGN KEY(id_patient_owner) REFERENCES patients(id_patient)

ALTER TABLE patients
ADD CONSTRAINT FK_patients_nutritionists
FOREIGN KEY(id_nutritionist_patient) REFERENCES nutritionists(id_nutritionist);

ALTER TABLE food_plan
ADD CONSTRAINT FK_patients_foodplan
FOREIGN KEY(id_patient_nutritionist) REFERENCES patients(id_patient);

ALTER TABLE recipes
ADD CONSTRAINT FK_recipes_patients
FOREIGN KEY(id_patient_recipe) REFERENCES patients(id_patient);

ALTER TABLE nutritionist_patients
ADD CONSTRAINT FK_1N_nutritionist_patients
FOREIGN KEY(id_nutritionist) REFERENCES nutritionists(id_nutritionist);

ALTER TABLE nutritionist_patients
ADD CONSTRAINT FK_N1_nutritionist_patients
FOREIGN KEY(id_patient) REFERENCES patients(id_patient);

ALTER TABLE patients_recipes
ADD CONSTRAINT FK_N1_patients_recipes
FOREIGN KEY(id_recipe) REFERENCES recipes(id_recipe);

ALTER TABLE patients_recipes
ADD CONSTRAINT FK_1N_patients_recipes
FOREIGN KEY(id_patient) REFERENCES patients(id_patient);

-- ALTER TABLE [CHILD TABLE]
-- ADD FOREIGN KEY ([POINTER]) REFERENCES [PARENT TABLE]([REFERENCE]);