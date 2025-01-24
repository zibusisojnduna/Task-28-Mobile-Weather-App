import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet, FlatList } from 'react-native';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SettingsScreen({ navigation }) {
    const [isCelsius, setIsCelsius] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState(useColorScheme() === "dark")
    const [savedLocations, setSavedLocations] = useState([])


    const toggleTempretureUnit = async () => {
        const newTempUint = !isCelsius
        setIsCelsius(newTempUint)
        await AsyncStorage.setItem("isCelsius", JSON.stringify(newTempUint))
        }

        const toggleTheme = () => {
            setIsDarkMode(!isDarkMode)
        }

        const addLocation = (location) => {
            setSavedLocations((prevLocations) => [...prevLocations, location])
        }

        const removeLocation = (location) => {
            setSavedLocations((prevLocations) =>
                prevLocations.filter((loc) => loc!== location)
            )
        }

    const loadSavedLocations = async () => {
        const locations = await AsyncStorage.getItem("savedLocations")
        if (locations) {
            setSavedLocations(JSON.parse(locations))
        }

        React.useEffect(() => {
            loadSavedLocations()
        }, [])

        return(
            <View style={[styles.container, {backgroundColor: isDarkMode ? "#333" : "#fff"}]}>
                <Text style={[styles.title,{ color: isDarkMode ? "#fff" : "#000"}]}>Settings</Text>

                <View style={styles.settingRow}>
                    <Text style={[styles.text, {color: isDarkMode ? "#fff": "#000"}]}>Tempreture Unit</Text>
                    <Switch value={isCelsius} onValueChange={toggleTempretureUnit}/>
                </View>

                <View style={styles.settingRow}>
                    <Text style={[styles.text, {color: isDarkMode ? "#fff" : "#000"}]}>Dark Mode</Text>
                </View>

                <View style={styles.settingRow}>
                    <Text style={[styles.text, {color: isDarkMode ? "#fff" : "#000"}]}>Saved Locations</Text>
                    <Button
                    title="Add Location"
                    onPress={() => addLocation("New York")}
                    />
                </View>

                <FlatList
                    data={savedLocations}
                    renderItem={({item}) => {
                        <View style={styles.savedLocations}>
                            <Text style={[styles.text, {color: isDarkMode ? "#fff" : "#000"}]}>{item}</Text>
                            <Button
                            title='Remove'
                            onPress={() => removeLocation(item)}
                            />
                            </View>
                    }}
                    keyExtractor={(item, index)}
                    />

                    <Button title='Back to Weather' onPress={() => navigation.goBack()}/>
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
        },
        text: {
            fontSize: 18,
        },
        settingRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
        },
        savedLocations: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
        }
    })
    
}

export default SettingsScreen;