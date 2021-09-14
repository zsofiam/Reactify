using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace Reactify.Services
{
    public class BandDetailService
    {
        public Band SearchedBand { get; private set; }
        public Band GetBandDetails()
        {
            Band band = new Band();
            band.Name = "BandName";
            return band;
        }

        public async Task<Band> FetchBandDetails(string searchedName)
        {
            string url = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + searchedName;
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var fetchedData = JsonSerializer.Deserialize<Object>(apiResponse);
                    //var fetchedObject = fetchedData.artists;
                    //SearchedBand.Name = fetchedObject[]
                }
            }
            //if (fetchedBand.Count() > 0)
            //{
            //    return fetchedBand[0];
            //} else
            //{
            //    return new Band();
            //}
            return SearchedBand;
        }
    }
}
