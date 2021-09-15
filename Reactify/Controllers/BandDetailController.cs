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

        public BandDetailController(BandDetailService bandDetailService)
        {
            BandDetailService = bandDetailService;
        }

        [HttpGet]
        public Band Get()
        {
            return BandDetailService.SearchedBand;
        }

        [HttpPost]
        public void Post([FromBody] Input inputName)
        {
            BandDetailService.FetchBandDetails(inputName.InputName);
            Redirect("search-band");
        }
    }
}
