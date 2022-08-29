namespace HighfieldRecuitmentTestModels.Models
{
    public class ResponseDto
{
    public IEnumerable<UserEntity> Users { get; set; } = default!;
        public IEnumerable<AgePlusTwentyDto> Ages { get; set; } = default!;
        public IEnumerable<TopColoursDto> TopColours { get; set; } = default!;
    }
}
