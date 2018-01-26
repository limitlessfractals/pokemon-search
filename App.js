import React from 'react';
import {  Text, View, Platform } from 'react-native';
import {Button} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button>Hello World</Button>
      </View>
    );
  }
}

const styles = {
  container:{
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  }
}
