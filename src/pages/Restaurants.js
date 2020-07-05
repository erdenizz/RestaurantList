import React, { useState, useEffect} from 'react'
import { SafeAreaView, View, Text, Button, FlatList,  } from 'react-native'
import axios from 'axios'

const Restaurants = props => {
    
  const [myList, setList] = useState([])

  useEffect(() =>{
    fetchData()
  }, [])


  const fetchData = async () => {

    let response = await axios.get(`https://opentable.herokuapp.com/api/cities`)
    setList(response)
    
  }

  return (
    <SafeAreaView >
      <View style={{ flex: 1 }}>


    
          
        
     
            

            <FlatList
              keyExtractor={(_, index) => index.toString()}
              data={myList}
              renderItem={renderCities}
              
            />
        
        
      
        </View>
    </SafeAreaView>
  )
}

export  {Restaurants}