using System.Net.Http.Json;

using HighfieldRecuitmentTestModels.Models;

using Microsoft.Extensions.Logging;

namespace HighfieldRecuitmentTestServices.ApiService
{
    public class HighfieldRecuitmentTestApiService : IHighfieldRecuitmentTestApiService
    {
        private readonly ILogger<HighfieldRecuitmentTestApiService> _logger;
        private readonly HttpClient _client;
        public HighfieldRecuitmentTestApiService(ILogger<HighfieldRecuitmentTestApiService> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            _client = httpClientFactory.CreateClient("HighfieldApiClient");
        }

        public async Task<ResponseDto> GetUsers()
        {
            try
            {
                IEnumerable<UserEntity> users = await GetUserInformationFromHighfieldApi();

                ResponseDto response = new()
                {
                    TopColours = users.GroupBy(user => user.FavouriteColour)
                    .Select(grouping => new TopColoursDto()
                    {
                        Colour = grouping.Key,
                        Count = grouping.Count()
                    }).OrderByDescending(x => x.Count).ThenBy(x => x.Colour),

                    Ages = users.Select(user => new AgePlusTwentyDto()
                    {
                        UserId = user.Id!.Value,
                        AgePlusTwenty = GetUsersAge(user,20),
                        OriginalAge = GetUsersAge(user),
                    }),

                    Users = users

                };

                return response;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error fetching data from Highfield API. EX: {ex}", ex);
                return new ResponseDto();
            }
        }

        private int GetUsersAge(UserEntity user, int yearsToAdd = 0) => (int)(DateTime.Today.AddYears(yearsToAdd).Subtract(user.Dob).Days / 365.25);

        private async Task<IEnumerable<UserEntity>> GetUserInformationFromHighfieldApi()
        {
            HttpResponseMessage request = await _client.GetAsync("test");
            IEnumerable<UserEntity> users = await request.Content.ReadFromJsonAsync<IEnumerable<UserEntity>>() ?? default!;
            return users;
        }
    }
}
