﻿using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Reactify.Models;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("track")]
    public class MusicPlayerController : ControllerBase
    {
        [HttpGet]
        public async Task<List<Track>>
            GetResultTracks([FromQuery] string track)
        {

            if (track is null || track == "") track = "halloween";

            var url = "https://api.deezer.com/search?q=track:" + track.Trim().Replace(" ", "_");
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("User-Agent", "Anything");
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var response = httpClient.GetAsync(url).Result;
                response.EnsureSuccessStatusCode();
                var apiResponse = await response.Content.ReadAsStringAsync();
                var x = JObject.Parse(apiResponse)["data"];
                var result = new List<Track>();

                foreach (var item in x)
                {
                    var _track = new Track();
                    var artist = new Artist();
                    var album = new Album();

                    _track.Id = (string)item["id"];
                    _track.Preview = (string)item["preview"];
                    _track.Title = (string)item["title"];
                    _track.Duration = (string)item["duration"];

                    artist.Name = (string)item["artist"]["name"];
                    artist.Id = (string)item["artist"]["id"];
                    artist.Picture = (string)item["artist"]["picture"];

                    _track.Artist = artist;

                    album.Id = (string)item["album"]["id"];
                    album.Title = (string)item["album"]["title"];
                    album.Cover = (string)item["album"]["cover"];

                    _track.Album = album;

                    result.Add(_track);
                }

                return result;
            }
        }
    }
}