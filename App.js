/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import { GoogleSignin,GoogleSigninButton} from '@react-native-community/google-signin';

import React, { Component } from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import saveProfile from './src/components/saveProfile';
GoogleSignin.configure({ 
  webClientId: '528982098514-qv7uglp87ki9muhe6mv0lvql0kj4vh23.apps.googleusercontent.com',   
  });
  
export default class App extends Component{
  state = {
    number : 0
  }
  userInfo = {
    name : null,
    id:null,
    login:false
  };


    _signIn = async () => {     
        await GoogleSignin.hasPlayServices();
        const user = await GoogleSignin.signIn();
        this.userInfo.name = user.user.name;
        this.userInfo.id = user.user.id;
        this.userInfo.login = true;        
    };
  

  pressAlert = () =>{
    alert("Button Click Alert");
    console.log(this.userInfo.name);
    console.log(this.userInfo.id);
    
  };
  render(){
    return(
      <NavigationContainer>
     <View  style={styles.container}>
          <View  style={[styles.slideOne]}>
            <Button title="Tıkla" onPress={this.pressAlert}></Button>
          <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
          disabled={!this.userInfo.login}
          />
            <Text>Merhaba !</Text>
          </View>
          
          <View style={[styles.slideTwo]}>
            <View style={[styles.box,styles.box1]}>

            </View>
            <View style={[styles.box,styles.box2]}>
              <Text>User accept cookie</Text>
            </View>
          </View>
      </View>
      </NavigationContainer>
 
  );

  }
}

const StackNavigator = createStackNavigator();

function Stack(){
  return(
    <StackNavigator.Navigator>
      <StackNavigator.Screen 
      name="profile" component={saveProfile} headerMode="screen"
      />        
    </StackNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'aquamarine',
    flexDirection:"column"
  },
  slideOne:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"

  },
  slideTwo:{
    flex:2,
    backgroundColor:'yellow',
    flexDirection:'column'
  },
  box:{
    flex:1,
    marginTop:10,
    fontSize:20,
    height:140,
    alignItems:"flex-start",
    justifyContent:"flex-start"
  },

  box1:{
    flex:2,
    backgroundColor:'#F55785',
  },
  box2:{
    flex:1,
    backgroundColor:'#F56748',
  },
  box3:{
    backgroundColor:'#F56049',
  }

});
