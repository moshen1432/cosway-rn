import React,{Component} from 'react'
import{
  View,StyleSheet,TouchableOpacity,
  Text,ImageBackground,Modal ,
  StatusBar,Image,TextInput,
  TouchableWithoutFeedback 
} from 'react-native'
import NormalHead from '@/components/tabbar/NormalHead'
import { colors, scale, width } from '@/utils/device';
import VipTypeView from '@/views/login/login/VipType'
import LargeBtn from '@/components/LargeBtn';
import {navPage} from '@/utils/common'
import Select from '@/components/Select'
export default class ForgetAcctPwd extends Component{
  constructor(props){
    super(props)
    this.state = {
      loginType: 0 ,// 0電話   1電郵
      boxP: {x:0,y:0},
      boxP2: {x:0, y:0},
      vipType:0,  //0-網絡客戶  1-尊享會員
      forgetType: 0,
      cardType: 0,
      showModal: false,
      selArea: '香港 852',
      tel: '',
      cardId: '',
      name: '',
    }
  }
  _goNext(){ 
    // navPage(this.props.navigation, 'ForgetPwdSecond')
  }
  //會員類型選擇
  _selVipType=(type)=>{
    this.setState({
      vipType: type,
    })
  }
  _selForgetType=(type)=>{
    this.setState({
      forgetType: type,
    })
  }
  _selCardType=(type)=>{
    this.setState({
      cardType: type,
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
    let {tel, cardId, authCode, vipNum} = this.state
    if(type == 'tel') tel = val
    else if(type == 'cardId') cardId = val
    this.setState({
      tel,
      cardId,
    })
  }
  _renderPhoneView(){
    const {tel} = this.state
    const arrowImage = <Image style={styles.arrowImg} source={require('@/images/set/input_r.png')}/>
    const items = [
      {key:'香港 852', value: '香港 852'},
      {key:'上海 021', value: '上海 021'},
      {key:'杭州 571', value: '杭州 571'},
    ]
    return(
      <View style={styles.row3}>
        <View style={styles.left1}>
          <Text style={styles.text1}>{this.state.selArea}</Text>
          <TouchableOpacity onPress={()=>this._showSelect()}>{arrowImage}</TouchableOpacity>
          <Select 
              title='選擇地區'
              items={items} 
              _selItem={this._selItem}
              showModal={this.state.showModal} 
              hideModal={()=>this.setState({showModal:false})}/>
        </View>
        <View style={styles.right1}>
          <TextInput style={styles.input} 
            underlineColorAndroid="transparent"
            onChangeText={(val)=>this._onChangeText(val,'tel')}
            value={tel}
            placeholder="請輸入聯絡電話號碼最後8個數字"
          />
        </View>
      </View>
    )
  }
  render(){
    const { name, cardId, vipType,forgetType, cardType} = this.state
    
    return(
      <View style={{flex:1, backgroundColor:colors.bgColor}}>
        <NormalHead title="忘記會員賬號及密碼"  />
        <View style={styles.row0}>
          <Text style={styles.text0}>此功能僅適用於註冊時提供齊電子郵件地址的會員</Text>
        </View>
        <View style={styles.box0} >
          <View style={styles.row1}  >
            <VipTypeView 
              title="忘記類型"
              items={['忘記會員賬號和密碼','忘記密碼']}
              height={scale(50)}
              rightTextStyle={{color:colors.gray2}}
              selVipType={this._selForgetType}
              vipType={forgetType} 
            />
          </View>
          <View style={styles.line1}></View>
          <View style={styles.row1} >
            <VipTypeView 
              title="用戶類型"
              items={['網絡客戶 / VIP會員','尊享會員(個人/公司)']}
              height={scale(50)}
              rightTextStyle={{color:colors.gray2}}
              selVipType={this._selVipType}
              vipType={vipType} 
            />
          </View>
        </View>
        <View style={{backgroundColor:'white'}}>
          <View style={[styles.box3,{borderWidth:0}]}>
            <View style={styles.hor}>
              <Text style={styles.textL}>會員名稱</Text>
              <TextInput style={[styles.input,{flex:1}]} 
                  underlineColorAndroid="transparent"
                  value={name}
                  onChangeText={(val)=>this._onChangeText(val,'name')}
                  placeholder="請輸入會員名稱"
                />
            </View>
            <Text style={styles.tipsText}>{'申請人姓名或公司名稱\n（徐與身份證明文件或商業登記相符）'}</Text>
          </View>
          <View style={[styles.line1,{marginLeft:scale(20)}]}></View>
          <View style={{backgroundColor: 'white'}}>
            {this._renderPhoneView() }
          </View>
        </View>
        {vipType == 0 ? null :
        <View style={{backgroundColor: 'white'}}>
          <View style={[styles.line1,{marginLeft:scale(20)}]}></View>
          <View style={styles.rowBot}>
            <VipTypeView 
              title="證件類型"
              items={['身份證','軍官證','護照']}
              height={scale(50)}
              rightTextStyle={{color:colors.gray2}}
              selVipType={this._selCardType}
              vipType={cardType} 
            />
          </View>
          <View style={[styles.line1,{marginLeft:scale(20)}]}></View>
          <View>
            <View style={[styles.box3,{borderWidth:0}]}>
              <View style={styles.hor}>
                <Text style={styles.textL}>身份證號碼</Text>
                <TextInput style={[styles.input,{flex:1}]} 
                    underlineColorAndroid="transparent"
                    value={cardId}
                    onChangeText={(val)=>this._onChangeText(val,'cardId')}
                    placeholder="請輸入身份證號碼"
                    keyboardType="numeric"
                  />
              </View>
              <Text style={styles.tipsText}>{'若您的身份證號碼是A123456（7），\n請輸入A1234567'}</Text>
            </View>
          </View>
        </View>
        }
        <LargeBtn btnStyle={styles.btnStyle} title="提交" press={()=>this._goNext()}/>
      </View>
    )
  }
}
const rowH = scale(50)
const styles = StyleSheet.create({
  rowBot: {
    backgroundColor: 'white',
    paddingLeft: scale(10),
    paddingRight: scale(10)
  },
  tipsText: {
    marginLeft: scale(0),
    color: colors.gray,
    fontSize: scale(12),
  },
  textL: {
    color: colors.gray2,
    fontSize: scale(16),
  },
  box3: {
    paddingLeft: scale(20),
    paddingRight: scale(20),
    paddingBottom: scale(10),
    backgroundColor: 'white'
  },
  hor: {
    position:'relative',
    //top: scale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'red',
    height:scale(40)
  },
  box0:{
    backgroundColor: 'white',
    marginBottom: scale(20)
  },  
  row0: {
    paddingTop: scale(25),
    paddingLeft: scale(20),
    paddingRight: scale(20),
    paddingBottom: scale(20),
  },
  text0: {
    color: colors.gray2,
    paddingRight:scale(0),
    fontSize: scale(12),
  },
  btnStyle: {
    backgroundColor: colors.blackBlue,
    marginLeft: scale(15),
    marginRight: scale(15),
    marginTop: scale(20),
  },
  line1:{
    backgroundColor: colors.bgColor,
    marginLeft: scale(20),
    height:1
  },
  input: {
    fontSize: scale(15),
    textAlign:'right',
    paddingLeft: scale(10),
    paddingRight: scale(0),
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
    paddingRight: scale(10),
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
  row1: {
    backgroundColor: 'white',
    paddingLeft: scale(10),
    paddingRight: scale(10),
  }
})