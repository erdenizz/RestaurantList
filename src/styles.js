import { StyleSheet } from 'react-native'

const styles = {
    city:StyleSheet.create({
        container:{
            padding:20,
            margin:10,
            borderRadius:10,
            backgroundColor:'#ffdecf',
            
        },
        searchBar:{
            padding:5,
            paddingLeft:10,
            margin:10,
            borderRadius:10,
            backgroundColor:'#ffdecf'
        }
    }),
    rest:StyleSheet.create({
        container:{
            padding:20,
            margin:10,
            borderRadius:10,
            backgroundColor:'#ffdecf'
        },
        textRest:{
            fontWeight:'bold',
            paddingTop:5,
            fontSize:25,
        },
        textCity:{
            
            paddingTop:5,
        },
        
        

    }),
    restInfo:StyleSheet.create({
        container:{
            padding:5,
            
            paddingLeft:10,
            margin:5,
            borderRadius:10,
            backgroundColor:'#ffdecf',
            
        },
        text:{
            
            paddingTop:5,
            fontSize:20,
        },
        text2:{
            
            paddingTop:5,
            fontSize:15,
        },
    })
}

export default styles