import React, {Component,useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';
import MapView,{PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import customMapStyle from './customMapStyle.json';
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
 container: {
   ...StyleSheet.absoluteFillObject,
   height: height,
   width: width,
   justifyContent: 'center',
   alignItems: 'center',
  
 },
 noncallout: {
   flex:1,
   paddingVertical: hp("0.4%"),
   paddingHorizontal: hp("1%"),
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,justifyContent:"center",alignItems:"center"
  },
 callout: {
   flex:1,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,justifyContent:"center",alignItems:"center"
  },
  calloutButton: {
    width:"100%",
    height:"100%",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    paddingVertical:hp("0.5%"),
    backgroundColor:"#0EBE2C",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    color:"white",
    justifyContent:"center",
    alignItems:"center",
  },
  cancelButton: {
    width:"100%",
    height:"100%",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    paddingVertical:hp("0.6%"),
    backgroundColor:"#ED2939",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    color:"white",
    justifyContent:"center",
    alignItems:"center",
  },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
 
});
const coordHome = {
    latitude: 40.97652263683345,
    longitude: 29.061138210180346,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };
const coordCarrier1 = {
    latitude: 40.97710264683345,
    longitude: 29.060814210180346,
    
  };
const coordCarrier2 = {
    latitude: 40.97680264683345,
    longitude: 29.059294210180346,
  };
const coordCarrier3 = {
    latitude: 40.97652263683345,
    longitude: 29.063328210180346,
  };

export default class MapScreen extends React.Component {
  constructor() {
    super();
    this.state = {
        cagir:false,
        modal:false,
        margin:0,

    }
      this.mapView=null;
    }

onLayout = () => { setTimeout( () => {this.carrierMarker.showCallout() 
                                      this.mapView.fitToCoordinates([{latitude:coordHome.latitude-0.00028 ,longitude:coordHome.longitude-0.00028},{latitude:coordCarrier1.latitude+0.00028 ,longitude:coordCarrier1.longitude+0.00028}]); }, 1000 ); }

  render() {
    return (
      <View style={styles.container}>
        
        <Modal animationType="slide" visible={this.state.modal} onRequestClose={() => { 
          this.setState({modal:false});
          }}
          onDismiss={() => {this.mapView.animateToRegion(coordHome,1000)}}
          onShow={() => { if(this.state.cagir){setTimeout(() => {this.setState({modal:false})},2750)}
            else{setTimeout(() => {this.setState({modal:false})},1980)}}}>
           {this.state.cagir &&  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.setState({modal:false})} style={{top:0, right:0, marginRight:wp("1.5%"), marginTop:hp("1.5%"),position: 'absolute',}}>
                  <Ionicons name={"close-outline"} size={hp("7%")} color={"#EEEEEE"}/>
              </TouchableOpacity>
              <LottieView
                 style={{width: wp("100%")}}
                 source={require('./images/truck.json')}
                 autoPlay
              />
              <Text style={{color:"#0EBE2C", fontSize:32, marginTop:hp("-10%"),marginBottom:hp("18%")}}>
                Araç Çağırıldı!</Text>
              </View>}

            {!this.state.cagir &&  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.setState({modal:false})} style={{top:0, right:0, marginRight:wp("1.5%"), marginTop:hp("1.5%"),position: 'absolute',}}>
                  <Ionicons name={"close-outline"} size={hp("7%")} color={"#EEEEEE"}/>
              </TouchableOpacity>
              <LottieView
                 style={{width: wp("40%")}}
                 source={require('./images/cancel.json')}
                 autoPlay
              />
              <Text style={{color:"#ED2939", fontSize:32,marginTop:hp("4%"),marginBottom:hp("4%")}}>
                İptal Edildi!</Text>
              </View>}

         </Modal>
     <MapView
       ref={(ref) => {this.mapView = ref}}
       provider={PROVIDER_GOOGLE}
       style={{...StyleSheet.absoluteFillObject,marginBottom:this.state.margin}}
       customMapStyle={customMapStyle}
       onMapReady={() => {this.onLayout()}}
       onTouchEnd ={() => {setTimeout( () =>{this.onLayout()},3000)}}
       region={coordHome}
       >
         
         <Marker coordinate={coordHome} >
           <Callout tooltip>
              <View style={styles.noncallout}>
                <Text style={{fontWeight:"bold"}}>Evim</Text>
              </View>
            </Callout>
          </Marker>
          <Marker coordinate={coordCarrier1}
          ref={ref => this.carrierMarker = ref}
           onCalloutPress={() => {
             this.carrierMarker.hideCallout();
             if (!this.state.cagir){
                this.setState({cagir:true,modal:true})
             }
             else{
               this.setState({cagir:false,modal:true})
             }
             
           }}>
             {!this.state.cagir && 
            <LottieView
              style={{transform: [{ scale: 0.6}]}}
              source={require('./images/1303-truck-running.json')}
              autoPlay={true}
              loop={true}
            />}
             {this.state.cagir && 
            <LottieView
              style={{transform: [{ scale: 0.6}]}}
              source={require('./images/cancelTruck.json')}
              autoPlay={true}
              loop={true}
            />}
            <Callout tooltip>
              <View style={styles.callout}>
                <View style={{flex:2,paddingVertical: hp("0.5%"),paddingHorizontal: wp("2%"),justifyContent:"center",alignItems:"center"}}>
                   {!this.state.cagir && <Text style={{fontWeight:"bold", color:"#0EBE2C"}}>En Yakın Topla Aracı</Text>}
                   {this.state.cagir && <Text style={{fontWeight:"bold", color:"#ED2939"}}>Çağırılan Topla Aracı</Text>}
                    <Text>Mehmet Adıgüzel</Text>
                    <Text><Text style={{fontWeight:"bold"}}>Uzaklık:</Text> 127 metre</Text>
                </View>
               {!this.state.cagir && <View style={{flex:1,flexDirection:"row"}}>
                    <TouchableOpacity style={styles.calloutButton}><Text style={{fontWeight:"bold",color:"white",fontSize:14}}>Çağır
                    <Text> </Text>
                    <Ionicons size={hp("2%")} name="caret-forward-outline" color={"white"}/></Text></TouchableOpacity>
                </View>}

                {this.state.cagir && <View style={{flex:1,flexDirection:"row"}}>
                    <TouchableOpacity style={styles.cancelButton}><Text style={{fontWeight:"bold",color:"white",fontSize:14}}>İptal Et
                    <Text> </Text>
                    <Ionicons size={hp("2%")} name="caret-forward-outline" color={"white"}/></Text></TouchableOpacity>
                </View>}
            </View>
            </Callout>
          </Marker>
          <Marker coordinate={coordCarrier2}>
            <LottieView
                style={{transform: [{ scale: 0.6}]}}
                source={require('./images/1303-truck-running.json')}
                autoPlay={true}
                loop={true}
            />
            <Callout tooltip>
              <View style={styles.noncallout}>
              <Text style={{fontWeight:"bold"}}>Topla Aracı</Text>
              <Text>İbrahim Kısrak</Text>
              <Text><Text style={{fontWeight:"bold"}}>Uzaklık:</Text> 396 metre</Text>
            </View>
            </Callout>
          </Marker>
          <Marker coordinate={coordCarrier3}>
             <LottieView
                style={{transform: [{ scale: 0.6}]}}
                source={require('./images/1303-truck-running.json')}
                autoPlay={true}
                loop={true}
             />
            <Callout tooltip>
              <View style={styles.noncallout}>
              <Text style={{fontWeight:"bold"}}>Topla Aracı</Text>
              <Text>Serap Yılmaz</Text>
              <Text><Text style={{fontWeight:"bold"}}>Uzaklık:</Text> 492 metre</Text>
            </View>
            </Callout>
          </Marker></MapView>
   </View>
    );
  }
}