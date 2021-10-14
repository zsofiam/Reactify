using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Services
{
    interface IBandDetailService
    {
        void FetchBandDetails(string searchedName);

    }
}
