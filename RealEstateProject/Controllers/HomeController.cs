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

                var regionList = realEstateList.Select(x => x.region).Distinct().OrderBy(x=>x).ToList();

                var districtList= realEstateList.Select(x => x.district).Distinct().OrderBy(x => x).ToList();

                var regionDistrictDic= new Dictionary<string,List<string>>();
                var districtSuburbDic= new Dictionary<string,List<string>>();

                foreach (var item in realEstateList)
                {
                    //add key
                    if (!regionDistrictDic.Keys.Contains(item.region))
                    {
                        var list = new List<string>();
                        regionDistrictDic.Add(item.region,list);
                    }

                    //add values
                    foreach (var key in regionDistrictDic.Keys)
                    {
                        if (key.Equals(item.region))
                        {
                            if (!regionDistrictDic[key].Contains(item.district))
                            {
                                regionDistrictDic[key].Add(item.district);
                            }
                        }
                    }                    
                }

                foreach (var item in realEstateList)
                {
                    //add key
                    if (!districtSuburbDic.Keys.Contains(item.district))
                    {
                        var list = new List<string>();
                        districtSuburbDic.Add(item.district, list);
                    }

                    //add values
                    foreach (var key in districtSuburbDic.Keys)
                    {
                        if (key.Equals(item.district))
                        {
                            if (!districtSuburbDic[key].Contains(item.suburb))
                            {
                                districtSuburbDic[key].Add(item.suburb);
                            }
                        }
                    }
                }



//                var json = JsonConvert.SerializeObject(regionList);
//                var jsonDistrict = JsonConvert.SerializeObject(districtList);
                var jsondic = JsonConvert.SerializeObject(regionDistrictDic);
                var jsondic1 = JsonConvert.SerializeObject(districtSuburbDic);
                //var jsonRegionList= JsonConvert.SerializeObject(regionList);

                return Json(regionList);

            }
        }

        [HttpPost]
        //get Regions 
        public ActionResult GetAllSuburbs(string region)
        {

            using (var db = new RealEstateDBEntities())
            {
                var realEstateList = db.realEstateOutputs.ToList();

                var regionList = realEstateList.Select(x => x.suburb).Distinct().OrderBy(x => x).ToList();

                //var jsonRegionList= JsonConvert.SerializeObject(regionList);

                return Json(regionList);

            }
        }


    }
}