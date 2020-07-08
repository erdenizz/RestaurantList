import React, { useState, useEffect} from 'react'
import {View, Text, FlatList } from 'react-native'
import axios from 'axios'
import RestaurantsListItem from '../components/RestaurantsListItem'


const Restaurants = (props) =>{
    const[listRes,setResList]=useState([])

    useEffect(()=>{
    fetchData()
},[])

    const fetchData = async ()=>{
        let {data} = await axios.get("https://opentable.herokuapp.com/api/restaurants?city="+props.route.params.cityName)
        console.log(data.restaurants)
        setResList(data.restaurants)
        
    }

    const renderRestaurants =({item})=> {
        return(
            <RestaurantsListItem
             rest={item}
            />
        )
    }


    return ( 
        <View>
            <Text> Lokantalar</Text>
            <FlatList 
                keyExtractor={(_,index)=>index.toString()}
                data={listRes}
                renderItem={renderRestaurants}
            
            />
        </View>
    )
}

export {Restaurants}


