import {request} from "../lib/fetch";

const API = {
    getWeather: (location, payload) => request('get', `/data/2.5/weather?q=${location}&APPID=`, payload),
}

export default API;