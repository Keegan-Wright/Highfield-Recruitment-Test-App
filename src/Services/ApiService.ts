import configData from "../config.json";
import { IResponseDto } from "../Models/IResponseDto";

const axios = require('axios');

export class ApiService {

    public static async GetUsers(): Promise<IResponseDto> {
        var response = await axios.get(configData.ExternalApiUrl);
        return response.data;
    }

}