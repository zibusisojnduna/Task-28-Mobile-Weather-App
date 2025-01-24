import Location from "react-native-location"

Location.configure({
    distanceFilter: 10.0,
})

export const getLocation = async () => {
    try {
        const location = await Location.getLatestLocation()
        return location
    } catch (error) {
        console.error("Error fethcing location", error)
    }
}