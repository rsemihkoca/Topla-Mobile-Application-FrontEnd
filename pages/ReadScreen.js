import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class MapScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{color:"black",fontWeight:"bold", fontSize:32, marginBottom:hp("12%")}}>
               Topla Barkodunuz:</Text>
        <Image style={{width:wp("75%"), height:hp("40%")}} source={require("./images/qrcode.png")}></Image>
        <Text style={{color:"black", fontWeight:"bold",fontSize:32, marginTop:hp("3%")}}>
                #8579644</Text>
      </View>
    );
  }
}