using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Services
{
    public class BandDetailService
    {
        public Band GetBandDetails()
        {
            Band band = new Band();
            band.Name = "BandName";
            return band;
        }
    }
}
