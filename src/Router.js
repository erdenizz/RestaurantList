import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import  {Restaurants, Cities, RestaurantsInfo} from './pages/index'



const Stack = createStackNavigator();


function Router(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cities">
           
            <Stack.Screen
                    name="Cities"
                    component={Cities}
                />
               
                <Stack.Screen
                    name="Restaurants" 
                    component={Restaurants}
                    //title={props.cityName}

                />
                 <Stack.Screen
                    name="RestaurantsInfo" 
                    component={RestaurantsInfo}
                    

                />
              




            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router; 