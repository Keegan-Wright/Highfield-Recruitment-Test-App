namespace HighfieldRecuitmentTestModels.Models
{
    public class UserEntity
    {
        public Guid? Id { get; set; }
        public string FirstName { get; set; } = default!;
        public string LastName { get; set; } = default!;
        public string Email { get; set; } = default!;
        public DateTime Dob { get; set; }
        public string FavouriteColour { get; set; } = default!;

    }
}
