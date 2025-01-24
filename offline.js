import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('weatherData', JSON.stringify(data));
} catch (e) {
    console.error("Failed to save data to storage", e)
}
}

const getData = async () => {
    try {
        const data = await AsyncStorage.getItem("weatherData");
        return data != null ? JSON.parse(data) : null
    } catch (e) {
        console.error("Failed to fetch data from storage", e)
    }
}

export { saveData, getData }