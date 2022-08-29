using HighfieldRecuitmentTestModels.Models;

namespace HighfieldRecuitmentTestServices.ApiService
{
    public interface IHighfieldRecuitmentTestApiService
    {
        Task<ResponseDto> GetUsers();
    }
}
