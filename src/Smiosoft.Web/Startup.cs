using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Smiosoft.Web
{
	public class Startup
	{
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddSpaStaticFiles(options =>
			{
				options.RootPath = "wwwroot";
			});
		}

		public void Configure(IApplicationBuilder application)
		{
			application.UseStaticFiles();
			application.UseSpaStaticFiles();
			application.UseSpa(spa =>
			{
				spa.Options.SourcePath = ".";
			});
		}
	}
}
