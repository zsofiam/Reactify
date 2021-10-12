using Microsoft.AspNetCore.Mvc;
using Reactify.Models;
using Reactify.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("track")]
    public class MusicPlayerController : ControllerBase
    {
        public MusicPlayerService MusicPlayerService { get; private set; }
        public MusicPlayerController(MusicPlayerService musicPlayerService)
        {
            MusicPlayerService = musicPlayerService;
        }

        [HttpGet]
        public async Task<List<Track>>
            GetResultTracks([FromQuery] string track)
        {
            return await MusicPlayerService.RetrieveResultTracks(track);
        }
    }
}