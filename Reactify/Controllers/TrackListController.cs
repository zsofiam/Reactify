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
    [Route("tracklist")]
    public class TrackListController : ControllerBase
    {
        public ITrackListService _trackListService { get;}

        public TrackListController(ITrackListService trackListService)
        {
            _trackListService = trackListService;
        }
        [HttpPost]
        public void SaveTrack([FromBody] Track track)
        {
            Account retrievedAccount = _trackListService.RetrieveAccountFromDb(1);
            if (retrievedAccount.Tracks == null)
            {
                retrievedAccount.Tracks = new List<Track>();
            }
            _trackListService.SaveTrackToTracklist(retrievedAccount, track);
            

        }
            

        

    }
}
