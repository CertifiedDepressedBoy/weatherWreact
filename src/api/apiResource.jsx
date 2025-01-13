import axios from "axios";

export const api = axios.create({
    baseURL : ' https://api.openweathermap.org/data/2.5'
});

export const api_key = 'dfbd7f3564402cfd9796bd7d493e589b'
