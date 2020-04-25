import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {  createStackNavigator } from 'react-navigation-stack';
import Chat from './components/Chatonents/Chat';
import Home from './components/Homeonents/Home';


const MainNavigator = createStackNavigator({
  Home: Home,
  Chat: Chat
})

class Navigator extends React.Component{
  render(){
    return (
      <MainNavigator/>
    );
  }
}

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;