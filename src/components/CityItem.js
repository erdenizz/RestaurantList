import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import styles from '../styles'

const CityItem = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor:'#ba7967'}}>
            <TouchableOpacity onPress={()=>props.clickCity(props.cities)}>
                <View style={styles.city.container}>

                <Text style={{fontWeight:'bold'}}>{props.cities}</Text>
                </View>
            </TouchableOpacity>
         
        </View>
        

    )
}
export  {CityItem}