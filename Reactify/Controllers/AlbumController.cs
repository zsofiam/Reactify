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
    [Route("player")]
    public class AlbumController : ControllerBase
    {

        [HttpGet]
        public async Task<List<Track>> GetResultTracks([FromQuery] string albumId)
        {
            if (albumId == "" || albumId is null) albumId = "302127";

            string url = "https://api.deezer.com/album/" + albumId.Trim().Replace(" ", "_");

            List<Track> tracks = new List<Track>();

            return await getTracks(url, tracks);
        }

        private static async Task<List<Track>> getTracks(string url, List<Track> tracks)
        {
            using (var httpClient = new HttpClient())
            {
                JObject albumData = await getAlbumData(url, httpClient);

                var album = new Album
                {
                    Title = (string)albumData["title"],
                    Cover = (string)albumData["cover_xl"],
                    Artist = (string)albumData["artist"]?["name"]
                };

                getSong(tracks, albumData);

                album.Tracks = tracks;
                return tracks;
            }
        }

        private static async Task<JObject> getAlbumData(string url, HttpClient httpClient)
        {
            httpClient.DefaultRequestHeaders.Add("User-Agent", "Anything");
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            var response = httpClient.GetAsync(url).Result;

            response.EnsureSuccessStatusCode();
            var apiResponse = await response.Content.ReadAsStringAsync();
            var albumData = JObject.Parse(apiResponse);
            return albumData;
        }

        private static void getSong(List<Track> tracks, JObject albumData)
        {
            foreach (var track in albumData["tracks"]["data"])
            {
                var song = new Track
                {
                    Preview = (string)track["preview"],
                    Title = (string)track["title"],
                    Image = (string)albumData["cover_xl"],
                    ArtistName = (string)albumData["artist"]?["name"],
                    Id = (string)track["id"]
                };

                tracks.Add(song);
            }
        }
    }
}
