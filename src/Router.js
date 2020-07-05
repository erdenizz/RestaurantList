import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import  {Restaurants, Cities} from './pages/index'



const Stack = createStackNavigator();


function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage">

                <Stack.Screen
                    name="Restaurants"
                    component={Restaurants}

                />

                <Stack.Screen
                    name="City"
                    component={Cities}
                />




            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router; 