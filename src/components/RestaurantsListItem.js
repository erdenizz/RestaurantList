import React from 'react'
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'

const RestaurantsListItem = (props) =>{
    return(
        <View>
            <TouchableOpacity onPress ={()=>props.clickRest(props.rest)}>

            <Image style={{height:Dimensions.get("window").height/2}} source={{uri:props.rest.image_url}} />
            <Text>{props.rest.name} </Text>
            <Text>{props.rest.area}</Text>
            </TouchableOpacity>
        </View>
    )

}

export default RestaurantsListItem

// address: "100 N. Hayford Rd"
// area: "Seattle / Eastern Washington"
// city: "Airway Heights"
// country: "US"
// id: 86101
// image_url: "https://www.opentable.com/img/restimages/86101.jpg"
// lat: 47.658632
// lng: -117.560882
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=86101"
// name: "Masselow's - Northern Quest Resort & Casino"
// phone: "5094816020x"
// postal_code: "99001"
// price: 3
// reserve_url: "http://www.opentable.com/single.aspx?rid=86101"
// state: "WA"