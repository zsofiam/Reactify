using Microsoft.AspNetCore.Mvc;
using Reactify.Models;
using Reactify.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("band-detail")]
    public class BandDetailController : ControllerBase
    {
        public BandDetailService BandDetailService { get; set; }
        public Band FetchedBand { get; private set; }

        public BandDetailController(BandDetailService bandDetailService)
        {
            BandDetailService = bandDetailService;
        }

        [HttpGet]
        public Band Get()
        {
            return BandDetailService.GetBandDetails();
        }

        [HttpPost]
        public IActionResult Post()
        {
            string searchedBandName = HttpContext.Request.Form["searched-band-name"];
            FetchedBand = BandDetailService.FetchBandDetails(searchedBandName).Result;
            return Redirect("band-detail");
        }
    }
}
