import React,{Component} from 'react'
import{
  View,StyleSheet,TouchableOpacity,
  Text,ImageBackground,Modal ,
  StatusBar,Image,TextInput,
  TouchableWithoutFeedback 
} from 'react-native'
import { colors, scale, width } from '@/utils/device';
import {navPage} from '@/utils/common'
import VipTypeView from './VipType'
import LargeBtn from '@/components/LargeBtn';
import Select from '@/components/Select'
const dismissKeyboard = require('dismissKeyboard');
export default class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      showModal:false,
      type1: 0 ,// 0電話   1-電郵
      boxP:{x:0,y:0},
      vipType:0,
      secureTextEntry: false,
      showModal: false,
      selArea: '香港 852',
      tel:'33621421',
      pwd: '88888888',
      vipNum:'666688889999',
    }
  }
  componentDidMount() {
    this.props.navigation.addListener(
      'didFocus',
      (obj) => {
        StatusBar.setBarStyle('light-content')
      }
    )
    this.props.navigation.addListener(
      'willBlur',
      (obj) => {
        StatusBar.setBarStyle('dark-content')
      }
    );
  }
  _goPage(page){
    navPage(this.props.navigation,page)
  }
  //會員類型選擇
  _selVipType=(type)=>{
    this.setState({
      vipType: type,
    })
  }
  selType=(type)=>{
    this.setState({
      vipType: type,
      showModal: false
    })
  }
  
  _changePwdState(){
    dismissKeyboard();
    this.setState({
      secureTextEntry:!this.state.secureTextEntry
    })
  }
  //選擇地區 區號
  _showSelect(){
    this.setState({
      showModal: true
    })
  }
  _selItem=(type)=>{
    this.setState({
      selArea: type.value,
      showModal: false
    })
  }
  _onChangeText(val,type){
    let {tel, pwd, vipNum} = this.state
    if(type == 'tel') tel = val
    else if(type == 'pwd') pwd = val
    else if(type == 'vipNum') vipNum = val
    this.setState({
      tel,
      pwd,
      vipNum,
    })
  }
  render(){
    const {type1, boxP, vipType, secureTextEntry, showModal,tel,pwd, vipNum} = this.state
    const arrowImage = <Image style={styles.arrowImg} source={require('@/images/set/input_r.png')}/>
    const items = [
      {key:'香港 852', value: '香港 852'},
      {key:'上海 021', value: '上海 021'},
      {key:'杭州 571', value: '杭州 571'},
    ]
    let vipText = '網絡客戶 / VIP會員'
    if(vipType == 1) vipText = '尊享會員(個人/公司)'
    return(
      <ImageBackground  style={styles.bg} source={require('@/images/login/sign_bg.png')}>
        <Image style={styles.logo} source={require('@/images/login/logo_w.png')}/>
        <View  style={{marginBottom: scale(20)}}>
          <VipTypeView 
            items={['網絡客戶 / VIP會員','尊享會員(個人/公司)']}
            title="會員類型"
            selVipType={this._selVipType}
            vipType={vipType} 
            />
        </View>
        <View style={styles.line}></View>
        {
          vipType==0?
          // 網絡客戶
          <View>
            <View style={styles.row2}>
              <TouchableOpacity onPress={()=>this.setState({type1: 0})}>
                <Text style={type1==0?styles.telText:[styles.telText,styles.telTextNor]}>電話</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({type1: 1})}>
                <Text style={type1==1?styles.telText:[styles.telText,styles.telTextNor]}>電郵</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <Text style={styles.accountText}>賬號</Text>
            <View style={styles.row3}>
              {type1 != 0 ? null :
                <View style={styles.left1}>
                  <Text style={styles.text1}>{this.state.selArea}</Text>
                  <TouchableOpacity onPress={()=>this._showSelect()}>{arrowImage}</TouchableOpacity>
                  <Select 
                    title='選擇地區'
                    items={items} 
                    _selItem={this._selItem}
                    showModal={showModal} 
                    hideModal={()=>this.setState({showModal:false})}/>
                </View>
              }
              <View style={[styles.right1,{marginLeft: type1 == 0 ? scale(15) : 0}]}>
                <TextInput style={styles.input} 
                  underlineColorAndroid="transparent"
                  onChangeText={(val)=>this._onChangeText(val,'tel')}
                  value={tel}
                />
              </View>
            </View>
          </View>
          : // 個人，公司
          <View>
             <Text style={styles.accountText}>會員編號</Text>
             <View style={styles.codeView}>
              <TextInput style={styles.input} 
                underlineColorAndroid="transparent"
                onChangeText={(val)=>this._onChangeText(val,'vipNum')}
                value={vipNum}
              />
            </View>
          </View>
        }
        <Text style={styles.accountText}>密碼</Text>
        <View style={styles.row4}>
          <TextInput style={styles.input} 
              underlineColorAndroid="transparent"
              onChangeText={(val)=>this._onChangeText(val,'pwd')}
              value={pwd}
              secureTextEntry={secureTextEntry}
            />
          <TouchableOpacity onPress={()=>this._changePwdState()}>
            <Image style={styles.eyeImg}source={require('@/images/login/sign_y.png')}/>
          </TouchableOpacity>
        </View>
        <LargeBtn title="登錄"/>
        <View style={styles.row5}>
          <TouchableOpacity onPress={()=>this._goPage('ForgetPwd')}>
            <Text style={styles.forgetText}>忘記密碼？</Text>
          </TouchableOpacity>
          <View style={styles.split}></View>
          <TouchableOpacity onPress={()=>this._goPage('ForgetAcctPwd')}>
            <Text style={styles.forgetText}>忘記會員賬號和密碼？</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row6}>
          <TouchableOpacity onPress={()=>this._goPage('Register')}>
            <Text style={styles.regText}>註冊</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}
const rowH = scale(44)
const styles = StyleSheet.create({
  codeView: {
    height: rowH,
    backgroundColor: 'white'
  },
  row6: {
    marginTop: scale(60),
    justifyContent: 'center',
    alignItems: 'center'
  },
  regText: {
    color: 'white',
    fontSize: scale(18)
  },  
  split:{
    width: 1,
    backgroundColor: '#4186AA',
    height: scale(16),
    marginLeft: scale(16),
    marginRight: scale(16)
  },
  forgetText: {
    color: 'white'
  },
  row5:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  eyeImg: {
    width: scale(24),
    height: scale(18)
  },
  input: {
    paddingLeft: scale(10),
    backgroundColor:'white',
    flex: 1
  },
  row4:{
    flexDirection: 'row',
    alignItems: 'center',
    height: rowH,
    backgroundColor: 'white',
    paddingRight: scale(15)
  },
  right1: {
    marginLeft: scale(15),
    flex:1,
    height: rowH,
   // width: '100%',
    backgroundColor: 'white',
  },
  text1:{
    color: colors.gray2,
    paddingRight:scale(0),
    fontSize: scale(16),
  },
  left1: {
    height: rowH,
    paddingLeft: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rowH,
    //borderWidth:1,
  },
  accountText: {
    color: 'white',
    fontSize: scale(14),
    marginTop: scale(10),
    marginBottom: scale(10)
  },
  telTextNor: {
    color: 'white',
    borderBottomColor: 'rgba(0,0,0,0)',
  },
  telText: {
    color: colors.blue2,
    paddingTop: scale(10),
    paddingBottom: scale(10),
    fontSize: scale(16),
    borderBottomWidth: scale(4),
    borderBottomColor:  colors.blue2,
    marginLeft: scale(20),
    marginRight: scale(20)
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  hor: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  arrowImg: {
    width: scale(7),
    height: scale(14),
    marginLeft: scale(10),
    marginRight: scale(10)
  },
  label: {
    color: colors.gray2,
    fontSize: scale(16)
  },
  netText: {
    color: colors.blue2,
    fontSize: scale(16),
  },
  row1: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    height: rowH,
    padding: scale(10),
    paddingRight:0,
    marginBottom: scale(20),
  },
  line: {
    backgroundColor: '#305173',
    height:1,
  },
  logo:{
    marginTop: scale(100),
    marginBottom: scale(50),
    marginLeft: width/4,
    width: width/2,
    height: width/2*0.153,
    // borderWidth: 1,
    // borderColor: 'white'
  },
  bg:{
    paddingLeft: scale(15),
    paddingRight: scale(15),
    width: width,
    height: '100%',
    resizeMode:'stretch'
  }

})