import React from 'react'
import {TextInput, View} from 'react-native'
import styles from '../styles'


const SearchBar = props =>{
    return(
        <View style={styles.city.searchBar}>
            <TextInput style={{fontWeight:'bold'}} onChangeText={props.onChangeText} placeholder={props.placeHolder}/>
        </View>
    )
}
export {SearchBar}