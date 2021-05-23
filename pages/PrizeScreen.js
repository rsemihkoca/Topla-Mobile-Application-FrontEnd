import React, { Component } from 'react';
import { View, Alert, Image, Text, ImageBackground } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { colors } from '../../config';
import Leaderboard from 'react-native-leaderboard';
import rankList from "./rankLinks";
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class CustomExample extends Component {
    state = {
        globalData: [
            { name: 'Hüseyin Koca', score: 1689,    iconUrl:rankList[19] },
            { name: 'Sinan Küfeoğlu', score: 1578,  iconUrl:rankList[18] },
            { name: 'Selin Ünsar', score: 1364,     iconUrl:rankList[17] },
            { name: 'Kağan Karabayır', score: 1241, iconUrl:rankList[14] },
            { name: 'Naz İrem Baz', score: 947,       iconUrl:rankList[13] },      
            { name: 'Caner Günaşan', score: 912,  iconUrl:rankList[12] },
            { name: 'Rıza Semih Koca', score: 853,     iconUrl:rankList[11] },
            { name: 'Irmak Akkaya', score: 771,      iconUrl:rankList[10] },
            { name: 'Ömer Beyhan', score: 693,       iconUrl:rankList[9] },
            { name: 'Ahmet Sönmez', score: 423,     iconUrl:rankList[8] },
            { name: 'Hülya İnönü', score: 309,      iconUrl:rankList[7] },
            { name: 'Burcu Topbaş', score: 224,     iconUrl:rankList[6] },
            { name: 'Rahmi Önder', score: 217,      iconUrl:rankList[5] },
            { name: 'Gülben İpekçi', score: 182,    iconUrl:rankList[4] },
            { name: 'Ece Torun', score: 126,        iconUrl:rankList[3] },
            { name: 'İzzet Kaya', score: 76,        iconUrl:rankList[2] },
            { name: 'Elvan Karagöz', score: 0,      iconUrl:rankList[1] },
        ],
        friendData: [
            { name: 'Ahmet Sönmez', score: 423, iconUrl:    rankList[18] },
            { name: 'Sinan Küfeoğlu', score: 1578, iconUrl: rankList[19] },
            { name: 'İzzet Kaya', score: 76, iconUrl:       rankList[17] },
        ],
        filter: 0,
        userRank: 1,
        user: {
            name: 'Sinan Küfeoğlu',
            score: 1578,
        }
    }


     sort = (data) => {
        const sorted = data && data.sort((item1, item2) => {
            return item2.score - item1.score;
        })
        let userRank = sorted.findIndex((item) => {
            return item.name === this.state.user.name;
        })
        this.setState({ userRank: ++userRank });
        return sorted;
    }

    renderHeader() {
        return (
            <LinearGradient colors={['#6daf1F', '#185205']}  start={{x: 0, y: 1}} end={{x: 0, y: 0}}
            style={{  padding: wp("4.5"), paddingTop: hp("4.58%"),flexDirection:"column"}}>
                <View style={{flexDirection: 'column', marginBottom: hp("2.25%"), marginTop: hp("1%"),flex:1}}>
                    <ImageBackground style={{ height: hp("16.5%"), width: wp("30%"),}} imageStyle={{  borderRadius: wp("30%") / 2 }}
                            source={require("./Gradient_Header/assets/profile.jpg")}>
                        {this.state.userRank== 1 && <Image style={{flex:0.5,height: hp("2%"), width: wp("10%"),top:0,left:0,marginLeft:wp("22%")}}
                            source={require("./images/medal_1.png")} />}
                        {this.state.userRank== 2 && <Image style={{flex:0.5,height: hp("2%"), width: wp("10%"),top:0,left:0,marginLeft:wp("22%")}}
                            source={require("./images/medal_2.png")} />}
                    </ImageBackground>
                </View>
                <View style={{flexDirection: 'column',justifyContent:"center",alignItems:"center", marginBottom: hp("6.25%"), marginTop: hp("-1.8%"),marginLeft:wp("35%")}}> 
                    <Text style={{ fontSize: 27, color: 'white',fontWeight:"bold"}}>Liderlik Tablosu</Text>                       
                    <Text style={{ color: 'white', fontSize: 25,marginTop: hp("2%")}}>
                        {this.state.user.score} <Text style={{fontWeight:"bold"}}>Puan</Text>
                    </Text>
                </View>
                <ButtonGroup
                    onPress={(x) => { this.setState({ filter: x }) }}
                    selectedIndex={this.state.filter}
                    buttons={['Tümü', 'Arkadaşlar']}
                    containerStyle={{ height: hp("5%") }} />
            </LinearGradient>
        )
    }

    render() {
       const props = {
          labelBy: "name",
          sortBy: "score",
          data: this.state.filter > 0 ? this.state.friendData : this.state.globalData,
          icon: "iconUrl",
          sort: this.sort
    };

        return (
            <View style={{ flex: 1, backgroundColor: 'white', }}>
                {this.renderHeader()}
                <Leaderboard {...props} />
            </View>
        )
    }
}

const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
