using Microsoft.AspNetCore.Mvc;
using Reactify.Models;
using Reactify.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("player")]
    public class AlbumController : ControllerBase
    {
        public AlbumService AlbumService { get; private set; }

        public AlbumController(AlbumService albumService)
        {
            AlbumService = albumService;
        }

        [HttpGet]
        public async Task<List<Track>> GetResultTracks([FromQuery] string albumId)
        {
            return await AlbumService.RetrieveTracksAsync(albumId);
        }
    }
}