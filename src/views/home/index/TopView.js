import React,{Component} from 'react'
import{
  View,StyleSheet,
  Image,
  ImageBackground,Text
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {width, scale} from '@/utils/device'
export default class TopView extends Component{
  render(){
    return(
      <ImageBackground style={styles.topBg} source={require('@/images/home/top-bg.png')}>
        <View style={styles.topOneRow}>
          <View style={styles.topOneRowLeft}>
            <View style={styles.hor}>
              <Text style={styles.welcome}>歡迎</Text>
              <Text style={styles.name}>南小禮</Text>
            </View>
            <View style={styles.hor}>
              <Text style={styles.coswayId}>COSWAY ID：</Text>
              <Text style={styles.coswayNum}>VPH566072</Text>
            </View>
            <View style={styles.hor}>
              <ImageBackground style={styles.vipImg} source={require('@/images/home/Member_ico_bg.png')}>
                <Text style={styles.vipText}>VIP購物者（VIP會員）</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.topOneRowRight}>
            <Image style={styles.rightImg} source={require('@/images/home/qr-code.png')} />
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.middleView}>
          <View style={styles.mRow1}>
            <Text style={styles.text1}>Lv2</Text>
            <View style={styles.box1}>
              <Text style={styles.text2}>等級特權</Text>
              <Image style={styles.imgArrow} source={require('@/images/home/arrow-right.png')}/>
            </View>
          </View>
          <View style={styles.lineBg}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFDB85', '#FECB51','#FDB915']} style={styles.linearGradient}>
            </LinearGradient>
          </View>
          
          <View style={styles.mRow2}>
            <Text style={styles.textm2}>累計消費額：HKD $2112</Text>
            <Text style={styles.textm3}>eV到期：2019-6-10</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.bottomView}>
          <View style={[styles.column,styles.column1]}>
            <Text style={styles.number}>300.50</Text>
            <Text style={styles.bText}>RP</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>800.50</Text>
            <Text style={styles.bText}>QU</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>1200.55</Text>
            <Text style={styles.bText}>eV</Text>
          </View>
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  lineBg: {
    marginTop: scale(10),
    marginBottom: scale(10),
    //backgroundColor:'#85A2C2',
    marginRight: scale(20),
    borderRadius: scale(12),
    backgroundColor:'rgba(255,255,255,0.4)'
  },
  linearGradient:{
    height: scale(12),
    marginRight: width/2-scale(20),
    borderRadius: scale(12),
  },  
  mRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight:scale(20)
  },
  textm2: {
    color: '#FFB400',
    fontSize: scale(14)
  },
  textm3: {
    color: 'white',
    fontSize: scale(14)
  },
  box1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imgArrow:{
    marginLeft: scale(3),
    width: scale(14),
    height: scale(14)
  },
  mRow1: {
    paddingTop: scale(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight:scale(20)
  },
  text1: {
    color: '#FFB400',
    fontSize: scale(18)
  },  
  text2: {
    color: 'white',
    fontSize: scale(14)
  },
  middleView:{
    paddingBottom: scale(18),
  },
  bText: {
    color: '#6D96B3',
    fontSize: scale(13)
  },
  number: {
    color: 'white',
    fontSize: scale(20)
  },
  column1: {
    width: width/3-scale(15),
    paddingRight:scale(10)
  },
  column: {
    width: width/3,
    alignItems: 'center',
    // borderWidth: 1
  },
  bottomView: {
    flexDirection: 'row',
    paddingTop: scale(15),
    paddingBottom: scale(4)
  },
  line: {
    backgroundColor: 'rgb(13,68,109)',
    height: 1
  },
  vipText: {
    fontSize: scale(12),
    color: 'rgb(163,130,75)',
  },
  coswayId: {
    color: 'rgb(128,125,120)',
  },
  coswayNum:{
    color: 'rgb(0,177,220)',
  },
  hor: {
    flexDirection: 'row',
    padding: scale(6)
  },
  name: {
    marginLeft: scale(10),
    color: 'rgb(0,177,220)',
    fontSize: scale(18),
  },
  welcome: {
    color: 'white',
    fontSize: scale(18),
  },
  vipImg:{
    width: width*0.35,
    height: width*0.35*0.195,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightImg: {
    width: scale(60),
    height: scale(60*1.25),
    resizeMode: 'contain',
    marginRight: scale(10),
  },
  topOneRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: scale(16),
    // borderColor: 'red',
    // borderWidth: 1,
    marginRight: 15,
  },
  topOneRowLeft:{

  },
  topOneRowRight: {
    alignItems: 'center',
  },
  qrCode: {
    color:'rgb(114,127,155)'
  },
  topBg: {
    width,
    //height: width*0.844,
    padding: 15,
    paddingRight: 0,
   
  },

})