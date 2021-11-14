-- USING DB

GO
USE NutriTEC
GO

-- CHECK IF ANY SP DOESN'T EXISTS

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_registernewuser')
DROP PROCEDURE usp_registernewuser

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_modifyuser')
DROP PROCEDURE usp_modifyuser

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getallusers')
DROP PROCEDURE usp_getallusers

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getuserbyid')
DROP PROCEDURE usp_getuserbyid

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_deleteuserbyid')
DROP PROCEDURE usp_deleteuserbyid

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_registernewfood')
DROP PROCEDURE usp_registernewfood

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_modifyfood')
DROP PROCEDURE usp_modifyfood

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getallfoods')
DROP PROCEDURE usp_getallfoods

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getfoodbyid')
DROP PROCEDURE usp_getfoodbyid

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_deletefoodbyid')
DROP PROCEDURE usp_deletefoodbyid

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getfoodsbyname')
DROP PROCEDURE usp_getfoodsbyname

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getuserbynamepasswordemail')
DROP PROCEDURE usp_getuserbynamepasswordemail

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_registernewpatient')
DROP PROCEDURE usp_registernewpatient

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_modifypatient')
DROP PROCEDURE usp_modifypatient

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getallpatients')
DROP PROCEDURE usp_getallpatients

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getpatientbyid')
DROP PROCEDURE usp_getpatientbyid

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_deletepatientbyid')
DROP PROCEDURE usp_deletepatientbyid

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_registernewadmin')
DROP PROCEDURE usp_registernewadmin

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_modifyadmin')
DROP PROCEDURE usp_modifyadmin

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getalladmins')
DROP PROCEDURE usp_getalladmins

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getadminbyid')
DROP PROCEDURE usp_getadminbyid

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_deleteadminbyid')
DROP PROCEDURE usp_deleteadminbyid

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_registernewnutritionist')
DROP PROCEDURE usp_registernewnutritionist

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_modifynutritionist')
DROP PROCEDURE usp_modifynutritionist

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getallnutritionists')
DROP PROCEDURE usp_getallnutritionists

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_getnutritionistbyid')
DROP PROCEDURE usp_getnutritionistbyid

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'p' AND name = 'usp_deletenutritionistbyid')
DROP PROCEDURE usp_deletenutritionistbyid

GO

-- PROCEDURE FOR REGISTER A NEW USER
CREATE PROCEDURE usp_registernewuser(@username VARCHAR(255), @password VARCHAR(255), @email VARCHAR(255), @usertype INT)
	AS
	BEGIN
		INSERT INTO users(username,password,email, usertype)
		VALUES(@username,@password,@email,@usertype)
	END
GO

-- PROCEDURE FOR UPDATE AN USER
CREATE PROCEDURE usp_modifyuser(@id_user INT, @username VARCHAR(255), @password VARCHAR(255), @email VARCHAR(255), @usertype INT)
	AS
	BEGIN
		UPDATE users SET 
			username = @username,
			password = @password,
			email = @email,
			usertype = @usertype
		WHERE id_user = @id_user
	END
GO

-- PROCEDURE TO GET ALL USERS
CREATE PROCEDURE usp_getallusers
	AS
	BEGIN
		SELECT id_user, username, email, usertype FROM users
	END
GO

-- PROCEDURE TO GET AN ESPECIFIC USER
CREATE PROCEDURE usp_getuserbyid(@id_user int)
	AS
	BEGIN
		SELECT id_user, username, email, usertype FROM users WHERE id_user = @id_user
	END

GO

-- PROCEDURE TO GET AN ESPECIFIC USER BY USERNAME, PASSWORD, EMAIL
CREATE PROCEDURE usp_getuserbynamepasswordemail(@username VARCHAR(100),@password VARCHAR(100))
	AS
	BEGIN
		SELECT id_user, username, email, usertype FROM users
		WHERE username = @username AND password = @password
	END

GO

-- PROCEDURE TO DELETE AN ESPECIFIC USER
CREATE PROCEDURE usp_deleteuserbyid(@id_user int)
	AS
	BEGIN
		DELETE FROM users WHERE id_user = @id_user
	END
GO

-- PROCEDURE FOR REGISTER A NEW PRODUCT
CREATE PROCEDURE usp_registernewfood(
	@id_food INT,
	@description_food VARCHAR(100),
	@portion_food VARCHAR(10),
	@fat_food FLOAT,
	@vitamins_food VARCHAR(255),
	@calcium_food FLOAT,
	@iron_food FLOAT,
	@sodium_food FLOAT,
	@carbs_food FLOAT,
	@energy_food FLOAT,
	@protein_food FLOAT,
	@food_state INT
	)
	AS
	BEGIN
		INSERT INTO foods(id_food,description_food,portion_food,fat_food,vitamins_food,calcium_food,iron_food,
							sodium_food,carbs_food,energy_food,protein_food,food_state)
		VALUES(
			@id_food,
			@description_food,
			@portion_food,
			@fat_food,
			@vitamins_food,
			@calcium_food,
			@iron_food,
			@sodium_food,
			@carbs_food,
			@energy_food,
			@protein_food,
			@food_state
			)
	END
GO

-- PROCEDURE FOR UPDATE A FOOD
CREATE PROCEDURE usp_modifyfood(
	@id_food INT,
	@description_food VARCHAR(100),
	@portion_food VARCHAR(10),
	@fat_food FLOAT,
	@vitamins_food VARCHAR(255),
	@calcium_food FLOAT,
	@iron_food FLOAT,
	@sodium_food FLOAT,
	@carbs_food FLOAT,
	@energy_food FLOAT,
	@protein_food FLOAT,
	@food_state INT)
	AS
	BEGIN
		UPDATE foods SET
			id_food = @id_food,
			description_food = @description_food,
			portion_food = @portion_food,
			fat_food = @fat_food,
			vitamins_food = @vitamins_food,
			calcium_food = @calcium_food,
			iron_food = @iron_food,
			sodium_food = @sodium_food,
			carbs_food = @carbs_food,
			energy_food = @energy_food,
			protein_food = @protein_food,
			food_state = @food_state
		WHERE id_food = @id_food
	END
GO

-- PROCEDURE TO GET ALL FOODS
CREATE PROCEDURE usp_getallfoods
	AS
	BEGIN
		SELECT * FROM foods
	END
GO

-- PROCEDURE TO GET AN ESPECIFIC FOOD BY ITS ID
CREATE PROCEDURE usp_getfoodbyid(@id_food int)
	AS
	BEGIN
		SELECT * FROM foods WHERE id_food = @id_food
	END

GO

-- PROCEDURE TO GET AN ESPECIFIC FOOD BY ITS NAME
CREATE PROCEDURE usp_getfoodsbyname(@description_food VARCHAR(100))
	AS
	BEGIN
		SELECT * FROM foods WHERE description_food = @description_food
	END

GO

-- PROCEDURE TO DELETE AN ESPECIFIC USER
CREATE PROCEDURE usp_deletefoodbyid(@id_food int)
	AS
	BEGIN
		DELETE FROM foods WHERE id_food = @id_food
	END
GO

-- PROCEDURE FOR REGISTER A NEW PATIENT
CREATE PROCEDURE usp_registernewpatient(
	@id_patient INT,
	@first_name_patient VARCHAR(255),
	@second_name_patient VARCHAR(255),
	@first_last_name_patient VARCHAR(255),
	@second_last_name_patient VARCHAR(255),
	@birth_date_patient DATE,
	@initial_weight_patient FLOAT,
	@actual_weight_patient FLOAT,
	@imc_patient FLOAT,
	@calories_patient FLOAT,
	@country_patient VARCHAR(255),
	@waist_patient FLOAT,
	@neck_patient FLOAT,
	@hip_patient FLOAT,
	@thigh_patient FLOAT,
	@fat_patient FLOAT
	)
	AS
	BEGIN
		INSERT INTO patients(
			id_patient,
			first_name_patient,
			second_name_patient,
			first_last_name_patient,
			second_last_name_patient,
			birth_date_patient,
			initial_weight_patient,
			actual_weight_patient,
			imc_patient,
			calories_patient,
			country_patient,
			waist_patient,
			neck_patient,
			hip_patient,
			thigh_patient,
			fat_patient
		)
		VALUES(
			@id_patient,
			@first_name_patient,
			@second_name_patient,
			@first_last_name_patient,
			@second_last_name_patient,
			@birth_date_patient,
			@initial_weight_patient,
			@actual_weight_patient,
			@imc_patient,
			@calories_patient,
			@country_patient,
			@waist_patient,
			@neck_patient,
			@hip_patient,
			@thigh_patient,
			@fat_patient
			)
	END
GO

-- PROCEDURE FOR UPDATE A PATIENT
CREATE PROCEDURE usp_modifypatient(
	@id_patient INT,
	@first_name_patient VARCHAR(255),
	@second_name_patient VARCHAR(255),
	@first_last_name_patient VARCHAR(255),
	@second_last_name_patient VARCHAR(255),
	@birth_date_patient DATE,
	@initial_weight_patient FLOAT,
	@actual_weight_patient FLOAT,
	@imc_patient FLOAT,
	@calories_patient FLOAT,
	@country_patient VARCHAR(255),
	@waist_patient FLOAT,
	@neck_patient FLOAT,
	@hip_patient FLOAT,
	@thigh_patient FLOAT,
	@fat_patient FLOAT)
	AS
	BEGIN
		UPDATE patients SET
			id_patient = @id_patient,
			first_name_patient = @first_name_patient,
			second_name_patient = @second_name_patient,
			first_last_name_patient = @first_last_name_patient,
			second_last_name_patient = @second_last_name_patient,
			birth_date_patient = @birth_date_patient,
			initial_weight_patient = @initial_weight_patient,
			actual_weight_patient = @actual_weight_patient,
			imc_patient = @imc_patient,
			calories_patient = @calories_patient,
			country_patient = @country_patient,
			waist_patient = @waist_patient,
			neck_patient = @neck_patient,
			hip_patient = @hip_patient,
			thigh_patient = @thigh_patient,
			fat_patient = @fat_patient
		WHERE id_patient = @id_patient
	END
GO

-- PROCEDURE TO GET ALL PATIENTS
CREATE PROCEDURE usp_getallpatients
	AS
	BEGIN
		SELECT * FROM patients
	END
GO

-- PROCEDURE TO GET AN ESPECIFIC FOOD BY ITS ID
CREATE PROCEDURE usp_getpatientbyid(@id_patient int)
	AS
	BEGIN
		SELECT * FROM patients WHERE id_patient = @id_patient
	END

GO

-- PROCEDURE TO DELETE AN ESPECIFIC PATIENT
CREATE PROCEDURE usp_deletepatientbyid(@id_patient int)
	AS
	BEGIN
		DELETE FROM patients WHERE id_patient = @id_patient
	END
GO

-- PROCEDURE FOR REGISTER A NEW ADMIN
CREATE PROCEDURE usp_registernewadmin(
	@id_admin INT,
	@first_name_admin VARCHAR(255),
	@second_name_admin VARCHAR(255),
	@first_last_name_admin VARCHAR(255),
	@second_last_name_admin VARCHAR(255),
	@phone_admin VARCHAR(8)
	)
	AS
	BEGIN
	INSERT INTO admins(
		id_admin,
		first_name_admin,
		second_name_admin,
		first_last_name_admin,
		second_last_name_admin,
		phone_admin)
	VALUES(
		@id_admin,
		@first_name_admin,
		@second_name_admin,
		@first_last_name_admin,
		@second_last_name_admin,
		@phone_admin)
	END
GO

-- PROCEDURE FOR UPDATE AN ADMIN
CREATE PROCEDURE usp_modifyadmin(
	@id_admin INT,
	@first_name_admin VARCHAR(255),
	@second_name_admin VARCHAR(255),
	@first_last_name_admin VARCHAR(255),
	@second_last_name_admin VARCHAR(255),
	@phone_admin VARCHAR(8))
	AS
	BEGIN
		UPDATE admins SET
			id_admin = @id_admin,
			first_name_admin = @first_name_admin,
			second_name_admin = @second_name_admin,
			first_last_name_admin = @first_last_name_admin,
			second_last_name_admin = @second_last_name_admin,
			phone_admin = @phone_admin
		WHERE id_admin = @id_admin
	END
GO

-- PROCEDURE TO GET ALL ADMINS
CREATE PROCEDURE usp_getalladmins
	AS
	BEGIN
		SELECT * FROM admins
	END
GO

-- PROCEDURE TO GET AN ESPECIFIC ADMIN BY ITS ID
CREATE PROCEDURE usp_getadminbyid(@id_admin int)
	AS
	BEGIN
		SELECT * FROM admins WHERE id_admin = @id_admin
	END

GO

-- PROCEDURE TO DELETE AN ESPECIFIC ADMIN
CREATE PROCEDURE usp_deleteadminbyid(@id_admin int)
	AS
	BEGIN
		DELETE FROM admins WHERE id_admin = @id_admin
	END
GO

-- PROCEDURE TO REGISTER A NEW NUTRITIONIST
CREATE PROCEDURE usp_registernewnutritionist(
	@id_nutritionist INT,
	@first_name_nutritionist VARCHAR(255),
	@second_name_nutritionist VARCHAR(255),
	@first_last_name_nutritionist VARCHAR(255),
	@second_last_name_nutritionist VARCHAR(255),
	@birth_date_nutritionist DATE,
	@weight_nutritionist FLOAT,
	@imc_nutritionist FLOAT,
	@code_nutritionist INT,
	@pfp_nutritionist TEXT,
	@card_nutritionist INT,
	@payment_nutritionist INT,
	@direction_nutritionist TEXT
	)
	AS
	BEGIN
	INSERT INTO nutritionists(
		id_nutritionist,
		first_name_nutritionist,
		second_name_nutritionist,
		first_last_name_nutritionist,
		second_last_name_nutritionist,
		birth_date_nutritionist,
		weight_nutritionist,
		imc_nutritionist,
		code_nutritionist,
		pfp_nutritionist,
		card_nutritionist,
		payment_nutritionist,
		direction_nutritionist)
	VALUES(
		@id_nutritionist,
		@first_name_nutritionist,
		@second_name_nutritionist,
		@first_last_name_nutritionist,
		@second_last_name_nutritionist,
		@birth_date_nutritionist,
		@weight_nutritionist,
		@imc_nutritionist,
		@code_nutritionist,
		@pfp_nutritionist,
		@card_nutritionist,
		@payment_nutritionist,
		@direction_nutritionist)
	END
GO

-- PROCEDURE FOR UPDATE A NUTRITIONIST
CREATE PROCEDURE usp_modifynutritionist(
	@id_nutritionist INT,
	@first_name_nutritionist VARCHAR(255),
	@second_name_nutritionist VARCHAR(255),
	@first_last_name_nutritionist VARCHAR(255),
	@second_last_name_nutritionist VARCHAR(255),
	@birth_date_nutritionist DATE,
	@weight_nutritionist FLOAT,
	@imc_nutritionist FLOAT,
	@code_nutritionist INT,
	@pfp_nutritionist TEXT,
	@card_nutritionist INT,
	@payment_nutritionist INT,
	@direction_nutritionist TEXT)
	AS
	BEGIN
		UPDATE nutritionists SET
			id_nutritionist = @id_nutritionist,
			first_name_nutritionist = @first_name_nutritionist,
			second_name_nutritionist = @second_name_nutritionist,
			first_last_name_nutritionist = @first_last_name_nutritionist,
			second_last_name_nutritionist = @second_last_name_nutritionist,
			birth_date_nutritionist = @birth_date_nutritionist,
			weight_nutritionist = @weight_nutritionist,
			imc_nutritionist = @imc_nutritionist,
			code_nutritionist = @code_nutritionist,
			pfp_nutritionist = @pfp_nutritionist,
			card_nutritionist = @card_nutritionist,
			payment_nutritionist = @payment_nutritionist,
			direction_nutritionist = @direction_nutritionist 
		WHERE id_nutritionist = @id_nutritionist
	END
GO

-- PROCEDURE TO GET ALL NUTRITIONISTS
CREATE PROCEDURE usp_getallnutritionists
	AS
	BEGIN
		SELECT * FROM nutritionists
	END
GO

-- PROCEDURE TO GET AN ESPECIFIC NUTRITIONISTS BY ITS ID
CREATE PROCEDURE usp_getnutritionistbyid(@id_nutritionist int)
	AS
	BEGIN
		SELECT * FROM nutritionists WHERE id_nutritionist = @id_nutritionist
	END

GO

-- PROCEDURE TO DELETE AN ESPECIFIC NUTRITIONIST
CREATE PROCEDURE usp_deletenutritionistbyid(@id_nutritionist int)
	AS
	BEGIN
		DELETE FROM nutritionists WHERE id_nutritionist = @id_nutritionist
	END
GO