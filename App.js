/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Image, Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    let icono ={uri:'http://reactnativetests.000webhostapp.com/logo'};
    return (
      <SimpleApp />
    );
  }
}

class HomeScreen extends React.Component{
  render() {
    const { navigate } = this.props.navigation;
    let icono ={uri:'https://parallelstets.000webhostapp.com/logo'};
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
          </Text>
          <Image source={icono} style={styles.imageStyle}/>
          <Button onPress={()=>navigate('Second')} title ="Entrar" color="#000000"/>
      </View>
    );
  }
}
class SecondScreen extends React.Component{
  render(){
    const { navigate } = this.props.navigation;
    return (<View>
      <Text>Hola Mundo</Text>
      <Button onPress={()=>navigate('Home')} title ="Entrar" color="#000000"/>
      </View>);
  }
}
const SimpleApp = StackNavigator({
  Home:{screen: HomeScreen,},
  Second: {screen: SecondScreen,},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageStyle:{
    width: 311,
    height: 300,
  },
});
