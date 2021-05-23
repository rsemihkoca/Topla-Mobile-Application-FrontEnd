import React, {Component} from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AnimatedSplash from "react-native-animated-splash-screen";
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HomeScreen from './pages/HomeScreen';
import PrizeScreen from './pages/PrizeScreen';
import ReadScreen from './pages/ReadScreen';
import MapScreen from './pages/MapScreen';

const bottomNav = createBottomTabNavigator(
  {
    Katkım: { screen: HomeScreen },
    Harita: { screen: MapScreen },
    Okut: { screen: ReadScreen },
    Ödüller: { screen: PrizeScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Katkım') {
          iconName = `ios-leaf${focused ?
            '' : '-outline'
          }`;
        } else if (routeName === 'Ödüller') {
          iconName = `ios-medal${focused ?
            '' : '-outline'
          }`;
        }else if (routeName === 'Harita') {
          iconName = `ios-map${focused ?
            '' : '-outline'
          }`;
        }
        else if (routeName === 'Okut') {
          iconName = `ios-qr-code${focused ?
            '' : '-outline'
          }`;
        }
        return <IconComponent
                 name={iconName}
                 size={hp("4%")}
                 color={tintColor}
               />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor:"#6daf1F",
      inactiveBackgroundColor:"#185205",
      //activeBackgroundColor:"#34DA4F",
      //inactiveBackgroundColor:"#0EBE2C",
      labelStyle: {
          fontSize: hp("1.8%"),
      },
    },
  }
);
const AppContainer= createAppContainer(bottomNav);

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    }
  }
  async componentDidMount(){
    setTimeout(() => { this.setState({isLoaded:true})},2500)
  }
 render() {
      return (
      <AnimatedSplash
        translucent={false}
        isLoaded={this.state.isLoaded}
        preload={true}
        backgroundColor={"#006d25"}
        logoImage={require("./pages/images/logo.png")}
        logoHeight={hp("90%")}
        logoWidth={wp("90%")}
      >
      <View style={{flex:1}}><StatusBar hidden={true}/><AppContainer /></View>
     </AnimatedSplash>
     
     );
}}

export default App;

