import React,{Component} from 'react'
import{
  View,StyleSheet,TouchableOpacity,
  Text,ImageBackground,Image,
   
} from 'react-native'
import { Icon, Steps, WingBlank } from '@ant-design/react-native';
const Step = Steps.Step;
import { colors, scale, width } from '@/utils/device';
export default class ForgetPwd extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render(){
    const {status} = this.props
    const currImg = require('@/images/login/reg_no.png')
    const norImg = require('@/images/login/reg_top_no.png')
    const completeNorImg = require('@/images/login/reg_top_yes.png');
    const completeImg = require('@/images/login/reg_yes.png');
    return(
      <View style={styles.header}>
        <View style={styles.row1}>
          <ImageBackground style={styles.comImg} source={status>=0?currImg:norImg}>
            <Text style={[styles.numText,status>=0?styles.numAText:null]}>1</Text>
          </ImageBackground>
          <View style={[styles.horLine,status >=1 ?styles.horLineActive:null]}></View>
          <ImageBackground style={styles.comImg} source={status>=1?currImg:norImg}>
          <Text style={[styles.numText,status>=1?styles.numAText:null]}>2</Text>
          </ImageBackground>
          <View style={[styles.horLine,status >=2 ?styles.horLineActive:null]}></View>
          <Image style={styles.comImg} source={status >=2 ? completeImg: completeNorImg}/>
        </View>
        <View style={styles.row2}>
           <Text style={[styles.text,styles.text1,status>=0?styles.activeT:null]}>身份認證</Text>
           <Text style={[styles.text,styles.text2,status>=1?styles.activeT:null]}>重置密碼</Text>
           <Text style={[styles.text,styles.text3,status==2?styles.activeT:null]}>完成</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  numAText:{
    color: 'white'
  },
  numText:{
    color: '#458CED',
    fontSize: scale(12),
    fontWeight: 'bold'
  },
  text: {
    marginTop:scale(3),
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: 'white',
    position: 'relative',
    color: '#458CED',
    fontSize: scale(12)
  },
  activeT:{
    color: '#FFB400'
  },
  text1: {
    left: -scale(62)
  },
  text2: {
    left: -scale(13)
  },
  text3: {
    left: scale(48)
  },
  row2:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  horLine: {
    width: width*0.18,
    height:1,
    // flex:1,
    backgroundColor: '#004E9A'//'#004E9A'
  },
  horLineActive:{
    backgroundColor: '#FFB400'
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor:'white',
    // borderWidth: StyleSheet.hairlineWidth
  },
  comImg: {
    width: scale(30),
    height: scale(30),
    justifyContent:'center',
    alignItems: 'center'
  },
  header:{
    backgroundColor: '#002758',
    paddingTop: scale(20),
    paddingBottom: scale(20)
  },
})