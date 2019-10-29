/**付款方式 */
import React,{Component} from 'react'
import{
  View,StyleSheet,TouchableOpacity,
  Text,ScrollView,Modal ,
  StatusBar,Image,TextInput,
  TouchableWithoutFeedback 
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Tabbar from '@/components/CustomTab'
import { colors, scale, width } from '@/utils/device'
import {navPage} from '@/utils/common'
import Header2 from '../Header2'
import NormalHead from '@/components/tabbar/NormalHead'
import LargeBtn from '@/components/LargeBtn'
export default class PayMethod extends Component{
  constructor(props){
    super(props)
    this.state = {
      category: this.props.navigation.getParam('category'),  //0-網絡客戶
    }
  }
  _goNext(){
    navPage(this.props.navigation, 'RegComplete', {category: 1})
  }
  render(){
    const {category} = this.state
    const arrowImg = {width: scale(7),height: scale(14),marginLeft: scale(10),marginRight: scale(0)}
    const arrowImage = <Image style={arrowImg} source={require('@/images/set/input_r.png')}/>
    return(
      <View style={{flex:1}}>
        <NormalHead title='付款方式'/>
        <View style={sty.content}>
          <Header2 status={3}/>
          <View style={[sty.row, sty.row1]}>
            <Text style={sty.t1}>付款方式</Text>
            <View style={sty.row2}>
              <Image style={sty.payImg} source={require('@/images/login/zfb_ico.png')}/>
              <Text style={sty.t1}>支付寶</Text>
              {arrowImage}
            </View>
          </View>
          <View style={[sty.row,sty.row3]}>
            <Text style={[sty.t1, sty.t3]}>付款詳情</Text>
          </View>
          <View style={[sty.row]}>
            <Text style={sty.t4}>(尊享會員)行政費</Text>
            <View style={sty.row2}>
              <Text style={[sty.t1,sty.t5]}>HK$ 250.00</Text>
            </View>
          </View>
          <View style={sty.botView}>
            <Text style={sty.t6}>應付支款項總額  <Text style={sty.redText}>HK</Text><Text style={[sty.redText,sty.mText]}>$ </Text><Text style={[sty.redText,sty.mText]}>250.00</Text></Text>
            <TouchableOpacity style={sty.btnView} onPress={()=>this._goNext()}>
              <Text style={sty.btnText}>提 交</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const sty = StyleSheet.create({
  mText: {fontSize:scale(18)},
  redText: {color:'#F00044', fontWeight:'bold'},
  btnView: {backgroundColor:'#08286A',height:scale(60),justifyContent:'center',
    alignItems:'center',paddingHorizontal: scale(40)},
  btnText: {color:'white', fontSize:scale(18)},
  t6: {color:'#333',fontSize:scale(14), padding:scale(20)},
  botView: {height:scale(60),position:'absolute',bottom:0,left:0,flexDirection:'row',justifyContent:'space-between',
    alignItems:'center',borderWidth:0,width,backgroundColor:"white"},
  t5: {color: '#333'},
  t4: {color:'#999', fontSize: scale(16)},
  t3: {fontWeight:'bold'},
  row3: {backgroundColor:'#f0f0f0', paddingTop:scale(20),paddingBottom:scale(10),borderWidth:0},
  row2: {flexDirection:'row', alignItems:'center'},
  payImg: {width: scale(80),height:scale(80)*0.296, resizeMode:'contain',marginRight:scale(15)},
  t1: {color:'#333',fontSize: scale(16)},
  row1: {marginTop:scale(15)},
  row: {flexDirection:'row',padding:scale(15),backgroundColor: 'white',justifyContent: 'space-between',alignItems: 'center'},
  content:{flex:1, backgroundColor:'#f0f0f0'}
})