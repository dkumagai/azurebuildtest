using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BuildTest2015.Startup))]
namespace BuildTest2015
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
