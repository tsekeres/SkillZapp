using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using SkillZapp.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace SkillZapp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IConfiguration>(Configuration); /* -> any time someone asks for this thing,
                                                                   * give them the same copy */
            services.AddTransient<AssessmentRepository>(); // create a new thing anytime someone asks
            services.AddTransient<ClassNameRepository>();
            services.AddTransient<UserRepository>();
            services.AddTransient<ComponentRepository>();
            services.AddTransient<GradeLevelRepository>();
            services.AddTransient<RubricRepository>();
            services.AddTransient<StandardRepository>();
            services.AddTransient<StudentAssessmentRepository>();
            services.AddTransient<StudentRepository>();
            services.AddTransient<SubcomponentRepository>();
            services.AddTransient<ClassNameWithGLRepository>();
            services.AddTransient<ClassNameWithStudentsRepository>();
            services.AddTransient<SingleStudentsWithAssessmentsRepository>();
            services.AddTransient<StudentWithDetailsRepository>();
            services.AddTransient<AssessmentsWithDetailsRepository>();



            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)

                .AddJwtBearer(options =>
                {
                    options.IncludeErrorDetails = true;
                    options.Authority = "https://securetoken.google.com/skillzapp-88ac5";
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateLifetime = true,
                        ValidateAudience = true,
                        ValidateIssuer = true,
                        ValidAudience = "skillzapp-88ac5",
                        ValidIssuer = "https://securetoken.google.com/skillzapp-88ac5"
                    };
                });
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SkillZapp", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SkillZapp v1"));
            }

            app.UseCors(cfg => cfg.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
