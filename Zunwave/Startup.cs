using Dataflip;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Zunwave.Startup))]
namespace Zunwave
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

            DataflipContext.Configure += 
                (df) => df.Settings.ConnectionString = "Server=198.71.226.6;Database=zunwave_db1;User Id=swoepc12233;Password=uEwg5*78$$";
        }
    }
}
