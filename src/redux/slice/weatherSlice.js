import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {}

export const types = {
    GET_WEATHER: 'weather/api'
}

export const fetchWeather = createAsyncThunk(
    types.GET_WEATHER,
    async () => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metric&APPID=ab8a60ea8f6af789f4fcc637e8b1421a')
            return response.data
        } catch (error) {
            return console.log("error");
        }
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state, action) => {
                state.status = 'Loading';
            })
            .addCase(fetchWeather.fulfilled, (state = initialState, action) => {
                state.status = 'fulfilled';
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'rejected';
            })
    },
})

export default weatherSlice;
