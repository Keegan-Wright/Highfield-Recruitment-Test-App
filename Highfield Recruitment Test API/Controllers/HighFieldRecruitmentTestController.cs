using HighfieldRecuitmentTestModels.Models;

using HighfieldRecuitmentTestServices.ApiService;

using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace HighfieldRecruitmentTestAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HighFieldRecruitmentTestController : ControllerBase
    {

        private readonly ILogger<HighFieldRecruitmentTestController> _logger;
        private readonly IHighfieldRecuitmentTestApiService _highfieldApiService;

        public HighFieldRecruitmentTestController(ILogger<HighFieldRecruitmentTestController> logger,
            IHighfieldRecuitmentTestApiService highfieldRecuitmentTestApiService)
        {
            _logger = logger;
            _highfieldApiService = highfieldRecuitmentTestApiService;
        }

        [HttpGet(Name = "GetUserData")]
        public async Task<ResponseDto> Get()
        {
            _logger.LogInformation("Fetching Highfield User Information");
            ResponseDto response = await _highfieldApiService.GetUsers();
            _logger.LogInformation("Highfield User Information {information}", response);
            return response;
        }
    }
}