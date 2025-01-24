import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';
import { getWeather } from './weatherService';
import { getLocation } from './userLocation';

function WeatherScreen() {
    const [weatherData, setWeatherData] = useState(null)
    const [location, setLocation] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            const userLocation = await getLocation()
            setLocation(userLocation)

            const data = await getWeather(userLocation.latitude, userLocation.longitude)
            setWeatherData(data)
        }

        fetchWeather()
    }, [])

    if (!weatherData) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.city}>{weatherData.name}</Text>
            <Text style={styles.tempreture}>{`${weatherData.main.temp}`}°C</Text>
            <Image
                source={{ uri:`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png` }}
                style={styles.weatherIcon}
                />
            <Text style={styles.description}>{weatherData.weather[0].description}</Text>
            <Button title="Switch Location" onPress={() => {/*Handle location switch*/}} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    tempreture: {
        fontSize: 50,
    },
    city:{
        fontSize: 30,
        fontWeight: "bold",
    },
    weatherIcon:{
        width: 100,
        height: 100,
    },
    description:{
        fontSize: 20,
        textTransform: "capitalize",
    },
    })

    export default WeatherScreen;