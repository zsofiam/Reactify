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
        public void SaveTrack([FromBody] TrackWithUserId trackWithUserId)
        {
            Account retrievedAccount = _trackListService.RetrieveAccountFromDb(Int32.Parse(trackWithUserId.UserId));
            if (retrievedAccount.Tracks == null)
            {
                retrievedAccount.Tracks = new List<Track>();
            }
            Track track = _trackListService.CreateTrackFromData(trackWithUserId);
            _trackListService.SaveTrackToTracklist(retrievedAccount, track);
            

        }
            

        

    }
}
