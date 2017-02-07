using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using RealEstateProject.Ef;

using PagedList.Mvc;
using PagedList;

using Newtonsoft.Json;

namespace RealEstateProject.Controllers
{
    

    public class HomeController : Controller
    {

        // GET: Home
        public ActionResult Index(int? page)
        {

            using (var db = new RealEstateDBEntities())
            {
                var result = db.realEstateOutputs.OrderBy(x => x.listingsId);

                foreach (var item in result)
                {
                    item.firstImgName = "~/Images/ListingsImages/" + item.firstImgName;
                }
                return View(result.ToPagedList(page ?? 1, 20));
            }
        }


        [HttpPost]
        //get Regions 
        public ActionResult GetAllRegions()
        {

            using (var db = new RealEstateDBEntities())
            {
                var realEstateList = db.realEstateOutputs.ToList();

                var regionList = realEstateList.Select(x => x.region).Distinct().ToList();
                
                //var jsonRegionList= JsonConvert.SerializeObject(regionList);

                return Json(regionList);

            }
        }
    }
}