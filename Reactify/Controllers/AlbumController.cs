using Microsoft.AspNetCore.Mvc;
using Reactify.Models;
using Reactify.Services;
using System;
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


        private int GetAlbumIdByDate()
        {
            DateTime localDate = DateTime.Now;
            int month = localDate.Month;
            int day = localDate.Day;
            int albumId;
            

            if (month >= 1 && month < 4)
            {
                albumId = (int)AlbumIds.Valentinesday;
            }
            else if (month >= 4 && month < 9)
            {
                albumId = (int)AlbumIds.Easter;
            }
            else if (month >= 9 && month < 11)
            {
                albumId = (int)AlbumIds.Halloween;
            }
            else
            {
                albumId = (int)AlbumIds.Christmas;
            }
            return albumId;
        }

        internal enum AlbumIds : int
        {
            Halloween = 257819812,
            Christmas = 7049462,
            Valentinesday = 14663594,
            Easter = 13048098
        }
    }
}