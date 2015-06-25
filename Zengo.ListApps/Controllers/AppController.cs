using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Zengo.ListApps.Models;

namespace Zengo.ListApps.Controllers
{
    public class AppController : ApiController
    {
        AppModel[] products = new AppModel[] 
        { 
            new AppModel { Id = 1, Name = "Plex", Version = "1.1", Installed=DateTime.Now, Colour="red", Memory=12345 }, 
            new AppModel { Id = 2, Name = "BBC", Version = "1.2", Installed=DateTime.Now, Colour="green", Memory=123235 }, 
            new AppModel { Id = 3, Name = "Angry Birds", Version = "1.3", Installed=DateTime.Now, Colour="blue", Memory=345 }, 
            new AppModel { Id = 4, Name = "GMail", Version = "1.4", Installed=DateTime.Now, Colour="blue", Memory=345 },
            new AppModel { Id = 5, Name = "Amazon", Version = "1.5", Installed=DateTime.Now, Colour="blue", Memory=345 },
            new AppModel { Id = 6, Name = "Ebay", Version = "1.6", Installed=DateTime.Now, Colour="blue", Memory=345 },
            new AppModel { Id = 7, Name = "App Manager", Version = "1.7", Installed=DateTime.Now, Colour="blue", Memory=345 },
            new AppModel { Id = 8, Name = "Github", Version = "1.8", Installed=DateTime.Now, Colour="blue", Memory=345 },
            new AppModel { Id = 9, Name = "Rightmove", Version = "1.9", Installed=DateTime.Now, Colour="blue", Memory=345 },
            new AppModel { Id = 10, Name = "YouTube", Version = "2.0", Installed=DateTime.Now, Colour="blue", Memory=345 } 
        };

        public IEnumerable<AppModel> GetAllProducts()
        {
            return products;
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}
