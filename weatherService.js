import axios from 'axios';

const API_KEY = "bbee9f377aee90fd5323f04fb473db6e"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export const getWeather = async (lat, lon) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units:"metric"
            }
        })
        return response.data
    } catch (error) {
        console.error("Error fetching weather data", error)
    }
}