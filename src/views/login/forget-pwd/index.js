import React,{Component} from 'react'
import{
  View,StyleSheet,TouchableOpacity,
  Text,ImageBackground,Modal ,
  StatusBar,Image,TextInput,
  TouchableWithoutFeedback 
} from 'react-native'
import NormalHead from '@/components/tabbar/NormalHead'
import Header from './Header'
import { colors, scale, width } from '@/utils/device';
import VipTypeView from '@/views/login/login/VipType'
import LargeBtn from '@/components/LargeBtn';
import {navPage} from '@/utils/common'
import Select from '@/components/Select'
export default class ForgetPwd extends Component{
  constructor(props){
    super(props)
    this.state = {
      loginType: 0 ,// 0電話   1電郵
      boxP:{x:0,y:0},
      vipType:0,  //0-網絡客戶  1-尊享會員
      showModal: false,
      selArea: '香港 852',
      tel: '',
      email: '',
      authCode: '',
      vipNum:''
    }
  }
  _goNext(){ 
    navPage(this.props.navigation, 'ForgetPwdSecond',{vipType:this.state.vipType})
  }
  //會員類型選擇
  _selVipType=(type)=>{
    this.setState({
      vipType: type,
    })
  }
  //選擇地區 區號
  _showSelect(){
    this.setState({
      showModal: true
    })
  }
  _selItem=(item)=>{
    this.setState({
      selArea: item.value,
      showModal: false
    })
  }
  _onChangeText(val,type){
    let {tel, email, authCode, vipNum} = this.state
    if(type == 'tel') tel = val
    else if(type == 'email') email = val
    else if(type == 'authCode') authCode = val
    else if(type == 'vipNum') vipNum = val
    this.setState({
      tel,
      email,
      authCode,
      vipNum
    })
  }
  _renderPhoneEmailView(){
    const { loginType, showModal, tel, email} = this.state
    const arrowImage = <Image style={styles.arrowImg} source={require('@/images/set/input_r.png')}/>
    const items = [
      {key:'香港 852', value: '香港 852'},
      {key:'上海 021', value: '上海 021'},
      {key:'杭州 571', value: '杭州 571'},
    ]
    return(
      <View>
        { loginType == 0 ?
            <View style={styles.row3}>
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
              <View style={styles.right1}>
                <TextInput style={styles.input} 
                  underlineColorAndroid="transparent"
                  value={tel}
                  onChangeText={(val)=>this._onChangeText(val,'tel')}
                  placeholder="請輸入電話號碼"
                />
              </View>
            </View>
            :
            <View style={styles.row3}>
              <View style={styles.left1}>
                <Text style={styles.text1}>電子郵箱</Text>
              </View>
              <View style={[styles.right1,{borderLeftWidth:0}]}>
                <TextInput style={styles.input} 
                  underlineColorAndroid="transparent"
                  value={email}
                  onChangeText={(val)=>this._onChangeText(val,'email')}
                  placeholder="請輸入電子郵箱"
                />
              </View>
            </View>
          }
      </View>
    )
  }
  render(){
    const { boxP, vipType,loginType, authCode, vipNum} = this.state
    
    return(
      <View style={{flex:1, backgroundColor:colors.bgColor}}>
        <NormalHead title="忘記密碼"  />
        <Header status={0}/>
        <View style={styles.row1} >
          <VipTypeView 
            items={['忘記會員賬號及密碼','尊享會員(個人/公司)']}
            title="忘記類型"
            height={scale(50)}
            rightTextStyle={{color:colors.gray2}}
            selVipType={this._selVipType}
            vipType={vipType} 
          />
        </View>
        { vipType == 1 ? null :
          <View style={styles.row2}>
            <TouchableOpacity style={styles.wrap2} onPress={()=>this.setState({loginType: 0})}>
              <Text style={loginType==0?styles.telText:[styles.telText,styles.telTextNor]}>電話</Text>
            </TouchableOpacity>
            <View style={styles.vLine}></View>
            <TouchableOpacity style={styles.wrap2} onPress={()=>this.setState({loginType: 1})}>
              <Text style={loginType==1?styles.telText:[styles.telText,styles.telTextNor]}>電郵</Text>
            </TouchableOpacity>
          </View>
        }
        <View style={{backgroundColor: 'white'}}>
          { vipType == 1 ? null : this._renderPhoneEmailView() }
          { vipType == 0 ? null : 
            <View style={styles.row3}>
              <View style={styles.left1}>
                <Text style={styles.text1}>會員編號</Text>
              </View>
              <View style={[styles.right1,{borderLeftWidth:0}]}>
                <TextInput style={styles.input} 
                  value={vipNum}
                  onChangeText={(val)=>this._onChangeText(val,'vipNum')}
                  underlineColorAndroid="transparent"
                  placeholder="請輸入會員編號"
                />
              </View>
            </View>
          }
          <View style={styles.line1}></View>
          <View style={styles.row4}>
            <View style={styles.left1}>
              <Text style={[styles.text1,{flex:1}]}>驗證碼</Text>
              <TextInput style={[styles.input,{flex:1}]} 
                underlineColorAndroid="transparent"
                value={authCode}
                keyboardType='numeric'
                onChangeText={(val)=>this._onChangeText(val,'authCode')}
                placeholder="請輸入驗證碼"
              />
              <TouchableOpacity style={{borderWidth:0}}>
                <Text style={styles.codeText}>發送驗證碼</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <LargeBtn btnStyle={styles.btnStyle} title="下一步" press={()=>this._goNext()}/>
      </View>
    )
  }
}
const rowH = scale(50)
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.blackBlue,
    marginLeft: scale(15),
    marginRight: scale(15),
    marginTop: scale(20),
  },
  codeText:{
    color: colors.blue2,
    paddingTop: scale(10),
    paddingBottom: scale(10),
    paddingLeft: scale(20),
    paddingRight: scale(20),
    fontSize: scale(16),
    borderLeftColor: colors.bgColor,
    borderLeftWidth: 1,
  },
  row4: {
    paddingLeft: scale(10),
  },
  line1:{
    backgroundColor: colors.bgColor,
    marginLeft: scale(20),
    height:1
  },
  input: {
    textAlign:'right',
    paddingLeft: scale(10),
    paddingRight: scale(10),
    // backgroundColor:'red',
    flex: 1
  },
  arrowImg: {
    width: scale(7),
    height: scale(14),
    marginLeft: scale(10),
    marginRight: scale(10)
  },
  right1: {
    borderLeftWidth: 1,
    borderLeftColor: colors.bgColor,
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
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: rowH,
    paddingLeft: scale(10),
    paddingRight: scale(10),
    //borderWidth:1,
  },
  vLine: {
    backgroundColor: colors.gray1,
    width: 1,
    height: scale(25),
  },
  wrap2: {
    flex: 1,
    alignItems: 'center'
  },
  telTextNor: {
    color: colors.gray2,
    borderBottomColor: 'rgba(0,0,0,0)',
  },
  telText: {
    color: colors.blue2,
    paddingTop: scale(10),
    paddingBottom: scale(10),
    paddingLeft: scale(20),
    paddingRight: scale(20),
    fontSize: scale(16),
    borderBottomWidth: scale(4),
    borderBottomColor:  colors.blue2,
    marginLeft: scale(20),
    marginRight: scale(20)
  },
  row2: {
    backgroundColor: '#f6f5f4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row1: {
    backgroundColor: 'white',
    marginTop: scale(15),
    marginBottom: scale(15),
    paddingLeft: scale(10),
    paddingRight: scale(10),
  }
})