import React from 'react';
import {View, Text, Platform, ImageBackground} from 'react-native';
import { Button } from 'native-base';

var myBackground = require('../assets/icons/landing.jpg')

class Landing extends React.Component{
   render(){
      return(
         <View style={{flex: 1}}>
            <ImageBackground source={myBackground} style={styles.background}>
               <View style={styles.viewStyle}>
                  <Text
                  style={styles.titleStyle}
                  >Welcome to Pokémon Search</Text>
                  <Button
                  block={true}
                  style={styles.buttonStyle}
                  onPress={()=>{}}
                  >
                  <Text style={styles.buttonText}>Search Now!</Text>
                  </Button>
               </View>
            </ImageBackground>
         </View>
      )
   }
}

const styles = {
   background: {
     flex: 1,
     width: null,
     height: null
   },
   viewStyle: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center'
   },
   titleStyle: {
     fontSize: 30,
     color: 'blue',
     alignItems: 'center',
     textAlign: 'center',
     fontFamily: Platform.OS === "ios" ? 'Chalkboard SE' : 'normal'
   },
   buttonStyle: {
     margin: 10,
   },
   buttonText: {
     color: 'white'
   }
 }

export default Landing;