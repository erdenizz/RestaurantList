import React from 'react'
import {View, Text, Image,Dimensions} from 'react-native'



const RestaurantsInfo = props =>{
    const info = props.route.params.restInfo
    // console.log(info)
    console.log(info.image_url)
    return(
        <View>
            <Image style={{height:Dimensions.get("window").height/2}} source={{uri:info.image_url}} />
           <Text>{info.name} </Text>
           <Text>{info.area}</Text>
           <Text>{info.address}</Text>
           <Text>{info.phone}</Text>
        </View>
    )
}
export  {RestaurantsInfo}

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