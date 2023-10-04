import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Finish } from "@screens/Finish"

import { Home } from "@screens/Home"
import { NewMeat } from "@screens/NewMeat"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="newmeat"
                component={NewMeat}
            />
            <Screen
                name="finish"
                component={Finish}
            />
        </Navigator>
    )
}