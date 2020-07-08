import React from 'react'
import {TextInput, View} from 'react-native'


const SearchBar = props =>{
    return(
        <View >
            <TextInput onChangeText={props.onChangeText} placeholder={props.placeHolder}/>
        </View>
    )
}
export default SearchBar