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
import InputView from '@/components/InputView'
import Header from '../Header'
import Header2 from '../Header2'
import NormalHead from '@/components/tabbar/NormalHead'
import LargeBtn from '@/components/LargeBtn'
import sty from './style.js'
export default class SetPwd extends Component{
  constructor(props){
    super(props)
    this.state = {
      category: this.props.navigation.getParam('category'),  //0-網絡客戶
      pwd: '',
      pwd2: '',
    }
  }
  _goNext(){
    const {category} = this.state
    let page = 'RegComplete'
    if(category != 0){
      page = 'PayMethod'
    }
    navPage(this.props.navigation, page, {category})
  }
  onChangeText(val, index){
    let {pwd, pwd2} = this.state
    if(index == 1) pwd = val
    else if(index == 2) pwd2 = val
    this.setState({
      pwd,
      pwd2
    })
  }
  render(){
    const {category} = this.state
    const t1 = '為確保您的密碼安全，建議可使用混合字母和數字的密碼，並盡量不要使用重複或可預測的序列。'
    return(
      <View style={{flex:1}}>
        <NormalHead title='設置密碼'/>
        <View style={sty.content}>
          {category == 0 ? <Header status={2}/> : <Header2 status={2}/>}
          <View style={sty.box1}>
            <Text style={sty.t1}><Text style={sty.tt1}>重要信息：</Text>{t1}</Text>
          </View>
          <View style={sty.bView}>
            <InputView lab='設定密碼' remark='8個字符，字母和數字' 
              placeholder='請輸入密碼'  secureTextEntry={true}
              require={true} onChangeText={(val)=>this.onChangeText(val,1)}/>
            <View style={sty.line2}></View>
            <InputView lab='確認密碼'  
              placeholder='請再次輸入密碼'  secureTextEntry={true}
              require={true} onChangeText={(val)=>this.onChangeText(val,2)}/>
          </View>
          
          <LargeBtn btnStyle={sty.btnStyle} title="下一步" 
            press={()=>this._goNext()}/>
        </View>
        
      </View>
    )
  }
}