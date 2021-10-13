using Microsoft.AspNetCore.Mvc;
using Reactify.Models;
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
        [HttpPost]
        public void SaveTrack([FromBody] Track track)
        {

            Console.WriteLine(track.Id);
            Console.WriteLine(track.Title);
            Console.WriteLine(track.Album);

        }
            

        

    }
}
