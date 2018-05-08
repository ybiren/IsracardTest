using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ng2Mvc5Demo.Models;
using System.Web.Script.Serialization;

namespace ng2Mvc5Demo.Controllers
{
    public class BookMarkController : Controller
    {
        // GET: Bm
        public ActionResult Index()
        {
            return View();
        }

        //add bookmark
        public void Add(string name,string avatarUrl)
        {
            BookMarkViewModel bookMarkViewModel = new BookMarkViewModel() { name = name ,avatarUrl = avatarUrl };
            List<BookMarkViewModel> bookMarkViewModelList = null;
            if (HttpContext.Session["BM"] == null)
            {
                bookMarkViewModelList = new List<BookMarkViewModel>();
            }
            else {
                bookMarkViewModelList = (List<BookMarkViewModel>)HttpContext.Session["BM"];
            }
            bookMarkViewModelList.Add(bookMarkViewModel);
            HttpContext.Session["BM"] = bookMarkViewModelList;
        }
        
        //get bookmarks
        public string Get()
        {
            List<BookMarkViewModel> bookMarkViewModelList = (List<BookMarkViewModel>)HttpContext.Session["BM"];
            var bookMarksStr = new JavaScriptSerializer().Serialize(bookMarkViewModelList);
            return bookMarksStr;
        }
    }
  }