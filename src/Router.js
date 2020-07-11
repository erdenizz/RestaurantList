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
                    options={{headerShown:false}}
                />
               
                <Stack.Screen
                    name="Restaurants" 
                    component={Restaurants}
                    options={({ route }) => ({ 
                        title: route.params.cityName +" Restaurantları",
                        headerStyle:{
                            backgroundColor:'#ba7967'
                            
                        },
                        headerTintColor: '#ffdecf'
                 })}

                />
                 <Stack.Screen
                    name="RestaurantsInfo" 
                    component={RestaurantsInfo}
                    options={({ route }) => ({ 
                        title: route.params.restInfo.name,
                        headerStyle:{
                            backgroundColor:'#ba7967'
                            
                        },
                        headerTintColor: '#ffdecf'

                     })}
                    

                />
              




            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router; 