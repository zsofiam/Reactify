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
            Console.WriteLine(track.Id);
            Console.WriteLine(track.Title);
            Console.WriteLine(track.Album);

            Account account = _trackListService.RetrieveAccountFromDb(1);
            Console.WriteLine(account.Id);
        }
            

        

    }
}
