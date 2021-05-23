import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image
} from 'react-native';
import GradientHeader from "./Gradient_Header/lib/src/components/GradientHeader";
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardSilder from 'react-native-cards-slider';
import EditableTable from './editable_table/editabletable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import all the basic component we have used
export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={{flex:1,backgroundColor:"#EEEE",}}>
      <GradientHeader
        title="Hoşgeldin!"
        subtitle="Sinan Küfeoğlu"
        gradientColors={["#185205", "#185205","#6daf19", "#6daf19"]}
        imageSource={require("./Gradient_Header/assets/profile.jpg")}
      />
      <View style={styles.cardUst}>
        <View style={{flex:1,flexDirection:"row",marginTop: hp("26%")}}>
          <View style={{flex:1.8,justifyContent:'center', flexDirection:"column",marginLeft:wp("3.5%")}}>
              <Text style={{flex:0.5, color: 'black', fontSize: 15,fontWeight:"bold",fontFamily:"Helvetica"}}>
                  Son Toplanma Tarihi
              </Text>
              <Text style={{flex:0.5, color: 'black', fontSize: 12,fontFamily:"Helvetica",marginTop:hp("-1%")}}>
                <Ionicons size={hp("2%")} name="calendar-outline" color={"blue"}/>
                <Text> </Text>
                  04.05.2021 16:38
              </Text>
              <Text style={{flex:0.5, color: 'black', fontSize: 15,fontWeight:"bold"}}>
                  Konum
              </Text>
              <Text style={{flex:0.5, color: 'black', fontSize: 12,fontFamily:"Helvetica",marginTop:hp("-1.2%")}}>
                <Ionicons size={hp("2%")} name="location-outline" color={"red"}/>
                <Text> </Text>
                  İSTANBUL/Kadıköy
              </Text>
          </View>
          <View style={{flex:2,flexDirection:"column",alignItems:"center"}}>
            <View style={{flex:1,flexDirection:"row",alignItems:"center",}}>
                <Text style={{color: 'black', fontSize: 15,fontWeight:"bold"}}>
                    ID:<Text> </Text>
                </Text>
                <Text style={{color: 'black', fontSize: 13}}>
                        #8579644
                </Text>
            </View>
            <View style={{flex:4,flexDirection:"column",alignItems:"center",marginTop: hp("2.5%")}}>
                <Text style={{flex:1, color: 'black', fontSize: 20,fontWeight:"bold"}}>
                    Toplam Puan:
                </Text>
                <Text style={{flex:2.2, color: 'black', fontSize: 25}}>
                    1578
                    <Text> </Text>
                    <Image style={{height:hp("5%"),width:wp("10%")}} source={require("./images/ranks/15.png")}></Image>
                </Text>
            </View>
          </View>
        </View>
      </View>
    <View style={{flex:1.2,backgroundColor:"#EEEE",marginTop: hp("3%"),}}>
      <CardSilder>
        <View style={styles.cardTable}>
             <EditableTable
              columns={[
                {value: 'Tür', input: 'c1', width: 30, sortable: false, defaultSort: 'ASC', reorder: 				true},
                {value: 'Tarih', input: 'c2', width: 30, sortable: false,  reorder: 					true},
                {value: 'Yer', input: 'c3', width: 30, sortable: false, },
                {value: 'Gram', input: 'c4', width: 30, sortable: false,},
                {value: 'Puan', input: 'c5', width: 20, sortable: false,},
              ]}
              values={[
                ['Kağıt', '04.05.21', 'Bostancı','58 gr','6'],
                ['Plastik', '04.05.21', 'Bostancı','126 gr','32'],
                ['Metal', '27.04.21', 'Göztepe','178 gr','59'],
                ['Cam', '27.04.21', 'Göztepe','102 gr','51'],
                ['Kağıt', '27.04.21', 'Göztepe','64 gr','7'],
                ['Plastik', '20.04.21', 'Erenköy','208 gr','41'],
                ['Metal', '20.04.21', 'Erenköy','367 gr','122'],
                ['Cam', '20.04.21', 'Erenköy','189 gr','95'],
                ['Kağıt', '20.04.21', 'Erenköy','134 gr','14'],

              ]}
              
              style={{borderRadius: 10,marginLeft:wp("-0.1%"),marginRight:wp("-0.1%")}}
            />
        </View>
        <View style={styles.card}>
          <View style={{height: hp("31.5%"), justifyContent:'center', alignItems:'center'}}>
            <View style={{flexDirection:"column", justifyContent:'center', alignItems:'center'}}>
                <View style={{flex:1,flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                    <View style={{flex:1,flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                           <Image style={{height:hp("14%"),width:wp("8%"),marginLeft:wp("5%")}} source={require("./images/glass.png")}></Image>
                       </View>
                       <View style={{flex:3,flexDirection:"column", justifyContent:'center', alignItems:'center',marginRight:wp("3%")}}>
                          <Text style={{color: 'black', fontSize: 25}}>
                            Cam
                          </Text>
                          <Text style={{color: 'black', fontSize: 23}}>
                            146 gr
                          </Text>
                        </View>
                    </View>
                    <View style={styles.verticleLineUst}></View>
                    <View style={{flex:1,flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                           <Image style={{height:hp("10%"),width:wp("9%")}} source={require("./images/metal.png")}></Image>
                       </View>
                       <View style={{flex:1,flexDirection:"column", justifyContent:'center', alignItems:'center',marginRight:wp("3%")}}>
                          <Text style={{color: 'black', fontSize: 25}}>
                            Metal
                          </Text>
                          <Text style={{color: 'black', fontSize: 23}}>
                            181 gr
                          </Text>
                        </View>
                    </View>
                </View>
                    <Text style={{color:"#909090"}}>────────────────────────</Text>
                <View style={{flex:1,flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                    <View style={{flex:1,flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                           <Image style={{height:hp("11%"),width:wp("10%"),marginLeft:wp("5%")}} source={require("./images/plastic.png")}></Image>
                       </View>
                       <View style={{flex:3,flexDirection:"column", justifyContent:'center', alignItems:'center',}}>
                          <Text style={{color: 'black', fontSize: 25}}>
                            Plastik
                          </Text>
                          <Text style={{color: 'black', fontSize: 23}}>
                            73 gr
                          </Text>
                        </View>
                    </View>
                    <View style={styles.verticleLineAlt}></View>
                    <View style={{flex:1,flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                           <Image style={{height:hp("8%"),width:wp("12.5%")}} source={require("./images/paper.png")}></Image>
                       </View>
                       <View style={{flex:1,flexDirection:"column", justifyContent:'center', alignItems:'center',marginRight:wp("3%")}}>
                          <Text style={{color: 'black', fontSize: 25}}>
                            Kağıt
                          </Text>
                          <Text style={{color: 'black', fontSize: 23}}>
                            27 gr
                          </Text>
                        </View>
                    </View>
                </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{height: hp("31.5%"), justifyContent:'center', alignItems:'center'}}>
            <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
              <View style={{flex:2,marginLeft:wp("1%")}}>
                  <Image style={{height:hp("23%"),width:wp("38%")}} source={require("./images/trees.png")}></Image>
              </View>
              <View style={{flex:2.5,flexDirection:"column",justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color: 'black', fontSize: 30}}>
                    26 adet
                  </Text>
                  <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
                    Ağaç
                  </Text>
                  <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
                    Kurtarıldı
                  </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{height: hp("31.5%"), justifyContent:'center', alignItems:'center'}}>
            <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
              <View style={{flex:2,marginLeft:wp("4%")}}>
                <Image style={{height:hp("24%"),width:wp("36%")}} source={require("./images/water.png")}></Image>
              </View>
              <View style={{flex:3,flexDirection:"column",justifyContent:'center', alignItems:'center'}}>
                <Text style={{color: 'black', fontSize: 30}}>
                  11.5L
                </Text>
                <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
                  Su
                </Text>
                <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
                  Tasarrufu
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{height: hp("31.5%"), justifyContent:'center', alignItems:'center'}}>
            <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
              <View style={{flex:3,marginLeft:wp("2.4%")}}>
                <Image style={{height:hp("28%"),width:wp("32%")}} source={require("./images/air.png")}></Image>
              </View>
              <View style={{flex:4.4,flexDirection:"column",justifyContent:'center', alignItems:'center'}}>
                <Text style={{color: 'black', fontSize: 30}}>
                  23 gr
                </Text>
                <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
                  CO2 Salınımı
                </Text>
                <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
                  Önlendi
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{height: hp("31.5%"), justifyContent:'center', alignItems:'center'}}>
            <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
              <View style={{flex:3,marginLeft:wp("3%")}}>
                <Image style={{height:hp("20%"),width:wp("36%")}} source={require("./images/money.png")}></Image>
              </View>
              <View style={{flex:4,flexDirection:"column",justifyContent:'center', alignItems:'center'}}>
                <Text style={{color: 'black', fontSize: 30}}>
                  23.86₺
                </Text>
                <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
                  GSYİH
                </Text>
                <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
                  Kazancı
                </Text>
              </View>
            </View>
          </View>
        </View>
        </CardSilder>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardUst: {
    flex:1.3,
    backgroundColor: "#FFF",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("3%"),
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
cardTable: {
    backgroundColor: "#FFF",
    //#A47551
    //D0B49F
    height: hp("34.8%"), 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  card: {
    backgroundColor: "#FFF",
    //#A47551
    //D0B49F
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("4%"),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
   verticleLineUst:{
    height: '100%',
    width: 1,
    marginTop:"6.3%",
    backgroundColor: '#909090',
  },
  verticleLineAlt:{
    height: '100%',
    width: 1,
    marginBottom:"6%",
    backgroundColor: '#909090',
  },
});