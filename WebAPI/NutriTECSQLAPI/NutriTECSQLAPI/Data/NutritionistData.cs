using NutriTECSQLAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
namespace NutriTECSQLAPI.Data
{
    public class NutritionistData
    {
        public static bool RegisterNewNutritionist(Nutritionist nutritionist)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_registernewnutritionist", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_nutritionist", nutritionist.id_nutritionist);
                cmd.Parameters.AddWithValue("@first_name_nutritionist", nutritionist.first_name_nutritionist);
                cmd.Parameters.AddWithValue("@second_name_nutritionist", nutritionist.second_name_nutritionist);
                cmd.Parameters.AddWithValue("@first_last_name_nutritionist", nutritionist.first_last_name_nutritionist);
                cmd.Parameters.AddWithValue("@second_last_name_nutritionist", nutritionist.second_last_name_nutritionist);
                cmd.Parameters.AddWithValue("@birth_date_nutritionist", nutritionist.birth_date_nutritionist);
                cmd.Parameters.AddWithValue("@weight_nutritionist", nutritionist.weight_nutritionist);
                cmd.Parameters.AddWithValue("@imc_nutritionist", nutritionist.imc_nutritionist);
                cmd.Parameters.AddWithValue("@code_nutritionist", nutritionist.code_nutritionist);
                cmd.Parameters.AddWithValue("@pfp_nutritionist", nutritionist.pfp_nutritionist);
                cmd.Parameters.AddWithValue("@card_nutritionist", nutritionist.card_nutritionist);
                cmd.Parameters.AddWithValue("@payment_nutritionist", nutritionist.payment_nutritionist);
                cmd.Parameters.AddWithValue("@direction_nutritionist", nutritionist.direction_nutritionist);
                try
                {
                    connection.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }

        public static bool ModifyNutritionist(Nutritionist nutritionist)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_modifynutritionist", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_nutritionist", nutritionist.id_nutritionist);
                cmd.Parameters.AddWithValue("@first_name_nutritionist", nutritionist.first_name_nutritionist);
                cmd.Parameters.AddWithValue("@second_name_nutritionist", nutritionist.second_name_nutritionist);
                cmd.Parameters.AddWithValue("@first_last_name_nutritionist", nutritionist.first_last_name_nutritionist);
                cmd.Parameters.AddWithValue("@second_last_name_nutritionist", nutritionist.second_last_name_nutritionist);
                cmd.Parameters.AddWithValue("@birth_date_nutritionist", nutritionist.birth_date_nutritionist);
                cmd.Parameters.AddWithValue("@weight_nutritionist", nutritionist.weight_nutritionist);
                cmd.Parameters.AddWithValue("@imc_nutritionist", nutritionist.imc_nutritionist);
                cmd.Parameters.AddWithValue("@code_nutritionist", nutritionist.code_nutritionist);
                cmd.Parameters.AddWithValue("@pfp_nutritionist", nutritionist.pfp_nutritionist);
                cmd.Parameters.AddWithValue("@card_nutritionist", nutritionist.card_nutritionist);
                cmd.Parameters.AddWithValue("@payment_nutritionist", nutritionist.payment_nutritionist);
                cmd.Parameters.AddWithValue("@direction_nutritionist", nutritionist.direction_nutritionist);
                try
                {
                    connection.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }

        public static List<Nutritionist> GetAllNutritionists()
        {
            List<Nutritionist> nutritionistList = new List<Nutritionist>();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getallnutritionists", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            nutritionistList.Add(new Nutritionist()
                            {
                                id_nutritionist = Convert.ToInt32(dataReader["id_nutritionist"]),
                                first_name_nutritionist = dataReader["first_name_nutritionist"].ToString(),
                                second_name_nutritionist = dataReader["second_name_nutritionist"].ToString(),
                                first_last_name_nutritionist = dataReader["first_last_name_nutritionist"].ToString(),
                                second_last_name_nutritionist = dataReader["second_last_name_nutritionist"].ToString(),
                                birth_date_nutritionist = Convert.ToDateTime(dataReader["birth_date_nutritionist"].ToString()),
                                weight_nutritionist = Convert.ToSingle(dataReader["weight_nutritionist"]),
                                imc_nutritionist = Convert.ToSingle(dataReader["imc_nutritionist"]),
                                code_nutritionist = Convert.ToInt32(dataReader["code_nutritionist"]),
                                pfp_nutritionist = dataReader["pfp_nutritionist"].ToString(),
                                card_nutritionist = Convert.ToInt32(dataReader["card_nutritionist"]),
                                payment_nutritionist = Convert.ToInt32(dataReader["payment_nutritionist"]),
                                direction_nutritionist = dataReader["direction_nutritionist"].ToString(),
                            });
                        }
                    }
                    return nutritionistList;
                }
                catch
                {
                    return nutritionistList;
                }
            }
        }

        public static Nutritionist GetNutritionistById(int id_nutritionist)
        {
            Nutritionist nutritionist = new Nutritionist();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getnutritionistbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_nutritionist", id_nutritionist);
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            nutritionist = new Nutritionist()
                            {
                                id_nutritionist = Convert.ToInt32(dataReader["id_nutritionist"]),
                                first_name_nutritionist = dataReader["first_name_nutritionist"].ToString(),
                                second_name_nutritionist = dataReader["second_name_nutritionist"].ToString(),
                                first_last_name_nutritionist = dataReader["first_last_name_nutritionist"].ToString(),
                                second_last_name_nutritionist = dataReader["second_last_name_nutritionist"].ToString(),
                                birth_date_nutritionist = Convert.ToDateTime(dataReader["birth_date_nutritionist"].ToString()),
                                weight_nutritionist = Convert.ToSingle(dataReader["weight_nutritionist"]),
                                imc_nutritionist = Convert.ToSingle(dataReader["imc_nutritionist"]),
                                code_nutritionist = Convert.ToInt32(dataReader["code_nutritionist"]),
                                pfp_nutritionist = dataReader["pfp_nutritionist"].ToString(),
                                card_nutritionist = Convert.ToInt32(dataReader["card_nutritionist"]),
                                payment_nutritionist = Convert.ToInt32(dataReader["payment_nutritionist"]),
                                direction_nutritionist = dataReader["direction_nutritionist"].ToString(),
                            };
                        }
                    }
                    return nutritionist;
                }
                catch
                {
                    return nutritionist;
                }
            }
        }

        public static bool DeleteNutritionistById(int id_nutritionist)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_deletenutritionistbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("id_nutritionist", id_nutritionist);
                try
                {
                    connection.Open();
                    cmd.ExecuteReader();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }
    }
}