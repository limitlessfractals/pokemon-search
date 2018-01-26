import React from 'react';
import {View, Text} from 'react-native';
import {Header, Item, Icon, Input, Button} from 'native-base';

class Search extends React.Component{
   state = {
      pokeSearch: ""
   }
   searchPoke = () =>{

   }
   render(){
      return(
         <View style={{flex:1}}>
            <Header
               searchBar
               rounded
            >
               <Item>
                  <Icon name='ios-search' onPress={this.searchPoke}/>
                  <Input
                  value={this.state.pokeSearch}
                  placeholder="Search Pokémon"
                  onChangeText={(pokeSearch)=>this.setState({pokeSearch})}
               />
               </Item>               
            </Header>
         </View>
      )
   }
}

export default Search;