using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;

namespace ng2Mvc5Demo.Controllers
{
  public class HomeController : Controller
  {

		const string MAND_HEADER_KEY = "DBMotions";
		const string MAND_HEADER_VAL = "1234";

		public ActionResult Index()
        {
	        return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
	}
}