import React from 'react'
import {View, Text, Image,Dimensions, Button} from 'react-native'
import styles from '../styles'




const RestaurantsInfo = props =>{
    const info = props.route.params.restInfo
    // console.log(info)
    console.log(info.image_url)
    return(
        <View style={{flex:1,backgroundColor:'#ba7967'}}>
            <Image style={{height:Dimensions.get("window").height/2}} source={{uri:info.image_url}} />
           <View style={styles.restInfo.container}>

               <Text style={styles.restInfo.text}>{info.area}</Text>
           </View>
           <View style={styles.restInfo.container}>

               <Text style={styles.restInfo.text2}>{info.city}</Text>
           </View>
           <View style={styles.restInfo.container}>

               <Text style={styles.restInfo.text2}>+{info.phone}</Text>
           </View>
           <Button  title="Rezervasyon yap" onPress={info.mobile_reserve_url} />
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