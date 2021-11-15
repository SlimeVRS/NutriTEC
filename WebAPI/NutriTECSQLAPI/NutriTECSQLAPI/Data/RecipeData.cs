using NutriTECSQLAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
namespace NutriTECSQLAPI.Data
{
    public class RecipeData
    {
        public static bool RegisterNewRecipe(Recipe recipe)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_registernewrecipe", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@name_recipe", recipe.name_recipe);
                cmd.Parameters.AddWithValue("@ingredients", recipe.ingredients);
                cmd.Parameters.AddWithValue("@id_patient_recipe", recipe.id_patient_recipe);
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

        public static bool ModifyRecipe(Recipe recipe)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_modifyrecipe", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@name_recipe", recipe.name_recipe);
                cmd.Parameters.AddWithValue("@ingredients", recipe.ingredients);
                cmd.Parameters.AddWithValue("@id_patient_recipe", recipe.id_patient_recipe);
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

        public static List<Recipe> GetAllRecipes()
        {
            List<Recipe> recipeList = new List<Recipe>();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getallrecipes", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            recipeList.Add(new Recipe()
                            {
                                id_recipe = Convert.ToInt32(dataReader["id_recipe"]),
                                name_recipe = (dataReader["name_recipe"].ToString()),
                                ingredients = (dataReader["ingredients"].ToString()),
                                id_patient_recipe = Convert.ToInt32(dataReader["id_patient_recipe"]),
                            });
                        }
                    }
                    return recipeList;
                }
                catch
                {
                    return recipeList;
                }
            }
        }

        public static Recipe GetRecipeById(int id_recipe)
        {
            Recipe recipe = new Recipe();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getrecipebyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_recipe", id_recipe);
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            recipe = new Recipe()
                            {
                                //id_recipe = Convert.ToInt32(dataReader["id_recipe"]),
                                name_recipe = dataReader["name_recipe"].ToString(),
                                ingredients = dataReader["ingredients"].ToString(),
                                //id_patient_recipe = Convert.ToInt32(dataReader["id_patient_recipe"]),
                            };
                        }
                    }
                    return recipe;
                }
                catch
                {
                    return recipe;
                }
            }
        }

        public static List<Recipe> GetRecipesByPatientId(int id_patient)
        {
            List<Recipe> recipeList = new List<Recipe>();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getrecipebypatientid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_patient", id_patient);
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            recipeList.Add(new Recipe()
                            {
                                //id_recipe = Convert.ToInt32(dataReader["id_recipe"]),
                                name_recipe = dataReader["name_recipe"].ToString(),
                                ingredients = dataReader["ingredients"].ToString(),
                                //id_patient_recipe = Convert.ToInt32(dataReader["id_patient_recipe"])
                            });
                        }
                    }
                    return recipeList;
                }
                catch
                {
                    return recipeList;
                }
            }
        }

        public static bool DeleteRecipeById(int id_recipe)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_deleterecipebyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("id_recipe", id_recipe);
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