using NutriTECSQLAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace NutriTECSQLAPI.Data
{
    public class FoodData
    {
        public static bool RegisterNewFood(Food food)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_registernewfood", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_food", food.id_food);
                cmd.Parameters.AddWithValue("@description_food", food.description_food);
                cmd.Parameters.AddWithValue("@portion_food", food.portion_food);
                cmd.Parameters.AddWithValue("@fat_food", food.fat_food);
                cmd.Parameters.AddWithValue("@vitamins_food", food.vitamins_food);
                cmd.Parameters.AddWithValue("@calcium_food", food.calcium_food);
                cmd.Parameters.AddWithValue("@iron_food", food.iron_food);
                cmd.Parameters.AddWithValue("@sodium_food", food.sodium_food);
                cmd.Parameters.AddWithValue("@carbs_food", food.carbs_food);
                cmd.Parameters.AddWithValue("@energy_food", food.energy_food);
                cmd.Parameters.AddWithValue("@protein_food", food.protein_food);
                cmd.Parameters.AddWithValue("@food_state", food.food_state);
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
        public static bool ModifyFood(Food food)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_modifyfood", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_food", food.id_food);
                cmd.Parameters.AddWithValue("@description_food", food.description_food);
                cmd.Parameters.AddWithValue("@portion_food", food.portion_food);
                cmd.Parameters.AddWithValue("@fat_food", food.fat_food);
                cmd.Parameters.AddWithValue("@vitamins_food", food.vitamins_food);
                cmd.Parameters.AddWithValue("@calcium_food", food.calcium_food);
                cmd.Parameters.AddWithValue("@iron_food", food.iron_food);
                cmd.Parameters.AddWithValue("@sodium_food", food.sodium_food);
                cmd.Parameters.AddWithValue("@carbs_food", food.carbs_food);
                cmd.Parameters.AddWithValue("@energy_food", food.energy_food);
                cmd.Parameters.AddWithValue("@protein_food", food.protein_food);
                cmd.Parameters.AddWithValue("@food_state", food.food_state);
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
        public static List<Food> GetAllFoods()
        {
            List<Food> foodList = new List<Food>();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getallfoods", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    connection.Open();

                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while (dataReader.Read())
                        {
                            foodList.Add(new Food()
                            {
                                id_food = Convert.ToInt32(dataReader["id_food"]),
                                description_food = dataReader["description_food"].ToString(),
                                portion_food = dataReader["portion_food"].ToString(),
                                fat_food = Convert.ToInt32(dataReader["fat_food"]),
                                vitamins_food = dataReader["vitamins_food"].ToString(),
                                calcium_food = Convert.ToSingle(dataReader["calcium_food"]),
                                iron_food = Convert.ToSingle(dataReader["iron_food"]),
                                sodium_food = Convert.ToSingle(dataReader["sodium_food"]),
                                carbs_food = Convert.ToSingle(dataReader["carbs_food"]),
                                energy_food = Convert.ToSingle(dataReader["energy_food"]),
                                protein_food = Convert.ToSingle(dataReader["protein_food"]),
                                food_state = Convert.ToInt32(dataReader["food_state"]),
                            });
                        }
                    }
                    return foodList;
                }
                catch
                {
                    return foodList;
                }
            }
        }

        public static List<Food> GetFoodsByName(string description_food)
        {
            List<Food> foodList = new List<Food>();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getfoodsbyname", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@description_food", description_food);
                try
                {
                    connection.Open();

                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while (dataReader.Read())
                        {
                            foodList.Add(new Food()
                            {
                                id_food = Convert.ToInt32(dataReader["id_food"]),
                                description_food = dataReader["description_food"].ToString(),
                                portion_food = dataReader["portion_food"].ToString(),
                                fat_food = Convert.ToInt32(dataReader["fat_food"]),
                                vitamins_food = dataReader["vitamins_food"].ToString(),
                                calcium_food = Convert.ToSingle(dataReader["calcium_food"]),
                                iron_food = Convert.ToSingle(dataReader["iron_food"]),
                                sodium_food = Convert.ToSingle(dataReader["sodium_food"]),
                                carbs_food = Convert.ToSingle(dataReader["carbs_food"]),
                                energy_food = Convert.ToSingle(dataReader["energy_food"]),
                                protein_food = Convert.ToSingle(dataReader["protein_food"]),
                                food_state = Convert.ToInt32(dataReader["food_state"]),
                            });
                        }
                    }
                    return foodList;
                }
                catch
                {
                    return foodList;
                }
            }
        }

        public static Food GetFoodById(int id_food)
        {
            Food food = new Food();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getfoodbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_food", id_food);
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while (dataReader.Read())
                        {
                            food = new Food()
                            {
                                id_food = Convert.ToInt32(dataReader["id_food"]),
                                description_food = dataReader["description_food"].ToString(),
                                portion_food = dataReader["portion_food"].ToString(),
                                fat_food = Convert.ToInt32(dataReader["fat_food"]),
                                vitamins_food = dataReader["vitamins_food"].ToString(),
                                calcium_food = Convert.ToSingle(dataReader["calcium_food"]),
                                iron_food = Convert.ToSingle(dataReader["iron_food"]),
                                sodium_food = Convert.ToSingle(dataReader["sodium_food"]),
                                carbs_food = Convert.ToSingle(dataReader["carbs_food"]),
                                energy_food = Convert.ToSingle(dataReader["energy_food"]),
                                protein_food = Convert.ToSingle(dataReader["protein_food"]),
                                food_state = Convert.ToInt32(dataReader["food_state"]),
                            };
                        }
                    }
                    return food;
                }
                catch
                {
                    return null;
                }
            }
        }

        public static bool DeleteFoodById(int food_id)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_deletefoodbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("id_food", food_id);
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
    }
}