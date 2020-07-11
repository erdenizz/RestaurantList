import React, { useState, useEffect} from 'react'
import { SafeAreaView, View, Text, Button, FlatList, ActivityIndicator,  } from 'react-native'
import axios from 'axios'


import {SearchBar,CityItem } from '../components/index'


const Cities = props => {
  const [loading,setLoading] = useState(true)
  const [myList, setList] = useState([])
  const [originalList,setOriginalList] =useState([])

  useEffect(() =>{
    fetchData()
  }, [])


  const fetchData = async () => {

    let { data } = await axios.get("https://opentable.herokuapp.com/api/cities")
  
    setList(data.cities)
    setOriginalList(data.cities)
    setLoading(false)
  }

  function searchCity(text){
    let searchCities = originalList.filter((item)=>{
      const itemData= item.toUpperCase()
      const textData =text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    setList(searchCities)
  }


  
  function selectCity  (item) {
    console.log(item)
    props.navigation.navigate("Restaurants", {cityName: item})
  }

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor:'#ba7967'}}>
      { loading ?
        
        <View style={{ flex: 1 }}>
                <ActivityIndicator  size ="large"/>

            </View>
            
            :
            <View style={{}}>
            <SearchBar placeHolder="Hangi Şehir ?" onChangeText={searchCity}/>
            
            <FlatList
            
            keyExtractor={(_, index) => index.toString()}
            data={myList}
            renderItem={({item})=> <CityItem cities={item} clickCity={selectCity} />}
            
            
            />
            </View>

      
            }
    </SafeAreaView>
  )
}

export  {Cities}