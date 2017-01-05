using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using RealEstateProject.Ef;

namespace RealEstateProject.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            using (var db = new RealEstateDBEntities())
            {
                var listings = db.realEstateInfoes.ToList();

                
            }

            return View();
        }
    }
}