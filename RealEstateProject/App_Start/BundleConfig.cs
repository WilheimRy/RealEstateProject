using System.Web;
using System.Web.Optimization;

namespace RealEstateProject
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            BundleTable.EnableOptimizations = true;

            bundles.UseCdn = true;

//            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
//                        "~/Scripts/jquery-{version}.js"));
//
//            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
//                        "~/Scripts/jquery.validate*"));
//
//            // Use the development version of Modernizr to develop with and learn from. Then, when you're
//            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
//            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
//                        "~/Scripts/modernizr-*"));
//
//            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
//                      "~/Scripts/bootstrap.js",
//                      "~/Scripts/respond.js",
//                      "~/Scripts/bootstrap-dialog.js"));

            //all js files
            bundles.Add(new ScriptBundle("~/bundles/jsAll").Include(
                        "~/Content/js/regionDictionary.js"));

//            bundles.Add(new StyleBundle("~/Content/css").Include(
//                "~/Content/styles/site.css"));
//
//            bundles.Add(new StyleBundle("~/Content/fonts", "https://fonts.googleapis.com/css?family=Satisfy"));
//
//            bundles.Add(new StyleBundle("~/Content/font-awesome", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"));

        }
    }
}