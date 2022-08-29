using System.Net.Http.Headers;


using HighfieldRecuitmentTestServices.ApiService;

namespace HighfieldRecruitmentTestAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            string corsAllowedPolicyName = "reactAppHost";

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(corsAllowedPolicyName, policy =>
                {
                    policy.WithOrigins("http://localhost:3000")
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });

            builder.Services.AddTransient<IHighfieldRecuitmentTestApiService, HighfieldRecuitmentTestApiService>();


            builder.Services.AddHttpClient("HighfieldApiClient", client =>
            {
                client.BaseAddress = new Uri(builder.Configuration["HighfieldAPI:Url"]);
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            });



            WebApplication app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors(corsAllowedPolicyName);

            app.MapControllers();

            app.Run();
        }
    }
}