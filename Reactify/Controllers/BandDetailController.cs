using Microsoft.AspNetCore.Mvc;
using Reactify.Models;
using Reactify.Services;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("band-detail")]
    public class BandDetailController : ControllerBase
    {
        public BandDetailController(BandDetailService bandDetailService)
        {
            BandDetailService = bandDetailService;
        }

        public BandDetailService BandDetailService { get; set; }

        [HttpGet]
        public Band Get()
        {
            return BandDetailService.SearchedBand;
        }

        [HttpPost]
        public void Post([FromBody] Input inputName)
        {
            if (inputName.InputName != "") BandDetailService.FetchBandDetails(inputName.InputName);
            Redirect("search-band");
        }
    }
}