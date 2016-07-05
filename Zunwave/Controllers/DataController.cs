using System;
using Zunwave.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Zunwave.Controllers
{
    public class DataController : ApiController
    {
        public IEnumerable<Context.GetActivitiesResult> GetActivities([FromUri] Context.GetActivitiesParameters paraneters)
        {
            return new Context().GetActivities(paraneters);
        }

        public void CreateActivity(Context.CreateActivityParameters parameters)
        {
            new Context().CreateActivity(parameters);
        }

    }
}