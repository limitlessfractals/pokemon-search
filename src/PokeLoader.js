import React from 'react';
import {View,Image} from 'react-native';

class PokeLoader extends React.Component{
	render(){
		return(
			<View style={styles.container}>
				<Image 
					source={{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
					style={styles.img}
				/>
			</View>
		)
	}
}

const styles = {
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
   },
	img: {
		height: 400,
		width: 400
	}
}

export default PokeLoader;