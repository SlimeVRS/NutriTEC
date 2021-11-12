using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NutriTECSQLAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "FoodNameParameter",
                routeTemplate: "api/food/{name}",
                defaults: new { name = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "UserByUserPasswordEmail",
                routeTemplate: "api/user/{username}/{password}/{email}",
                defaults: new {
                    username = RouteParameter.Optional,
                    password = RouteParameter.Optional,
                    email = RouteParameter.Optional
                }
            );
        }
    }
}
