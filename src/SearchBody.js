import React from 'react';
import {View, ScrollView, Text, Image, ImageBackground} from 'react-native';
import {ListItem, List} from 'native-base';

class SearchBody extends React.Component{
   render(){
      var pokemon = this.props.data;
      if(!pokemon){
         return(<View/>)
      }
      return(
         <ImageBackground 
            style={styles.background}
            source={{uri: "http://pokemongolive.com/img/posts/raids_loading.png"}}
         >
            <ScrollView style={{flex:1}}>
               <View style={styles.info}>
                  <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
               </View>
               <View style={styles.viewStyle}>
                  <Image
                     source={{uri: pokemon.sprites.front_default}}
                     style={styles.img}
                  />
               </View>
               <View style={styles.info}>
                  <ListItem itemDivider>
                     <Text style={{fontWeight: 'bold'}}>Size</Text>
                  </ListItem>
                  <ListItem>
                     <Text>Weight: {pokemon.weight/10}kg</Text>
                  </ListItem>
                  <ListItem>
                     <Text>Height: {pokemon.height/10}m</Text>
                  </ListItem>
                  <ListItem itemDivider>
                     <Text style={{fontWeight: 'bold'}}>Abilities</Text>
                  </ListItem>
                  <List 
                     dataArray={pokemon.abilities}
                     renderRow={(item)=>
                        <ListItem>
                           <Text>{item.ability.name}</Text>
                        </ListItem>
                     }
                  >
                  </List>
               </View>
            </ScrollView>
         </ImageBackground>
      )
   }
}

const styles = {
   header: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'red',
      textAlign: 'center'
   },
   viewStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
   },
   img: {
      height: 200,
      width: 200,
      justifyContent: 'center',
      alignItems: 'center'
   },
   info: {
      flex: 1,
      backgroundColor: 'white',
      opacity: 0.8
   },
   background: {
      flex: 1,
      width: null,
      height: null
   }
}

export default SearchBody;