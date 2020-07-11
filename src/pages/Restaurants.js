import React, { useState, useEffect} from 'react'
import {View, Text, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios'

import {RestaurantsListItem, SearchBar} from '../components/index'


const Restaurants = (props) =>{
    const[listRes,setResList]=useState([])
    const[loading,setLoading]=useState(true)
    const[originalList,setOriginalList]=useState([])

    useEffect(()=>{
    fetchData()
},[])

    const fetchData = async ()=>{
        let {data} = await axios.get("https://opentable.herokuapp.com/api/restaurants?city="+props.route.params.cityName)
        console.log(data.restaurants)
        setResList(data.restaurants)
        setOriginalList(data.restaurants)
        setLoading(false)
        
    }

    function selectRestaurant(item){
        console.log(item)
        props.navigation.navigate("RestaurantsInfo", {restInfo:item} )
    }

    const renderRestaurants =({item})=> {
        return(
            <RestaurantsListItem
             rest={item}
             clickRest={selectRestaurant}
            />
        )
    }
    function restSearch(text){
        let restsSearch = originalList.filter((item)=>{
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setResList(restsSearch)
    }


    return ( 
        <View style={{ flex: 1, backgroundColor:'#ba7967'}}>
            {loading ?
                <View> 
                <ActivityIndicator size="large" />
                </View>
                :
                <View>
                    
                <SearchBar placeHolder="Hangi Restaurant ?" onChangeText={restSearch} />
                <FlatList 
                keyExtractor={(_,index)=>index.toString()}
                data={listRes}
                renderItem={renderRestaurants}
                
                />
                </View>
            }
        </View>
    )
}

export {Restaurants}


