import React,{Component} from 'react'
import{
  View,Text,
  StyleSheet,ImageBackground
} from 'react-native'
import {width, scale} from '@/utils/device'
export default class CardView extends Component{
  render(){
    return(
      <ImageBackground style={styles.topBg} source={require('@/images/home/top-bg.png')}>
        <ImageBackground  style={styles.cardImg} source={require('@/images/set/bg.png')}>
          <View style={styles.hor}>
            {/* <ImageBackground style={styles.vipImg} source={require('@/images/home/Member_ico_bg.png')}> */}
            <View style={styles.vipWrap}>
              <Text style={styles.vipText}>VIP購物者（VIP會員）</Text>
            </View>
            {/* </ImageBackground> */}
          </View>
          <View style={styles.botView}>
            <Text style={styles.idText}>COSWAY ID: <Text style={styles.vText}>VPH566072</Text></Text>
          </View>
        </ImageBackground>
      </ImageBackground>
    ) 
  }
}
const styles = StyleSheet.create({
  botView:{
    paddingBottom: scale(15)
  },
  vText:{
    color:'#A3824B'
  },
  idText:{
    color: '#807D78',
  },
  vipWrap:{
    marginTop: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    height:24,
    paddingLeft: scale(12),
    paddingRight: scale(12),
    paddingTop: scale(4),
    paddingBottom: scale(4),
    borderRadius: 24,
    borderColor: '#988561',
    borderWidth: StyleSheet.hairlineWidth
  },
  vipImg:{
    marginTop: scale(10),
    width: width*0.35,
    height: width*0.35*0.195,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hor: {
    flexDirection: 'row',
    padding: scale(6)
  },
  vipText: {
    fontSize: scale(12),
    color: 'rgb(163,130,75)',
  },
  cardImg:{
    width: width-scale(30),
    height: (width-scale(30))*0.516,
    alignItems:'center',
    justifyContent: 'flex-end'
  },  
  topBg: {
    width,
    //height: width*0.844,
    paddingTop:scale(20),
    paddingLeft: scale(15),
    paddingRight: scale(15),
    paddingBottom:scale(15),
  },
})