import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'



const CityItem = (props) => {
    return (
        <View style={{flex:1}}>
            <TouchableOpacity onPress={()=>props.clickCity(props.cities)}>

                <Text>{props.cities}</Text>
            </TouchableOpacity>
            {/* <Text >{props.title} </Text>
            <Text >{props.body} </Text> */}
        </View>
        

    )
}
export default CityItem