import { IAgePlusTwentyDto } from "./IAgePlusTwentyDto";
import { ITopColoursDto } from "./ITopColoursDto";
import { IUserEntity } from "./IUserEntity";

export interface IResponseDto {
    users: IUserEntity[],
    ages: IAgePlusTwentyDto[],
    topColours: ITopColoursDto[],
}