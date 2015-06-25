using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Zengo.ListApps.Models
{
    public class AppModel
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Category { get; set; }
        public string Version { get; set; }
        public DateTime Installed { get; set; }
        public string Colour { get; set; }
        public int Memory { get; set; }
    }
}