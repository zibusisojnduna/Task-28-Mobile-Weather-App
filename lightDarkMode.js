import { useColorScheme } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

function App(){
    const colorScheme = useColorScheme();

    return (
        <View style={{ backgroundColor: colorScheme === "dark" ? "#000" : "#fff", flex: 1}}>
        {/* Your app content goes here */}
        </View>
    )
}

export default App;