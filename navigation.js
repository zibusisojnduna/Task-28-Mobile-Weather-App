import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherScreen from "./display";
import SettingsScreen from "./settings";

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Weather">
                <Stack.Screen name="Weather" component={WeatherScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;