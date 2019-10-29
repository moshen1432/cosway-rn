import React,{Component} from 'react'
import{
  View,StyleSheet,
  ImageBackground,Text ,
  StatusBar,Image,TextInput,
} from 'react-native'
import NormalHead from '@/components/tabbar/NormalHead'
import Header from './Header'
import { colors, scale, width } from '@/utils/device';
import LargeBtn from '@/components/LargeBtn';
import {navPage} from '@/utils/common'
export default class ForgetPwd extends Component{
  constructor(props){
    super(props)
    this.state = {
      vipType: this.props.navigation.getParam('vipType'),
      pwd: '',
      pwd2: ''
    }
  }
  _goNext(){ 
    navPage(this.props.navigation, 'ForgetPwdThird')
  }
  _onChangeText(val,type){
    let {pwd, pwd2, authCode, vipNum} = this.state
    if(type == 'pwd') pwd = val
    else if(type == 'pwd2') pwd2 = val
    this.setState({
      pwd,
      pwd2,
    })
  }
  render(){
    let vipText = '網絡客戶/VIP會員'
    if(this.state.vipType == 1) vipText = '尊享會員(個人/公司)'
    const {pwd, pwd2} = this.state
    return(
      <View style={{flex:1, backgroundColor: colors.bgColor}}>
        <NormalHead title="忘記密碼"  />
        <Header status={1}/>
        <View style={styles.row1}>
          <Text style={styles.textL}>会员类型</Text>
          <Text style={styles.textR}>{vipText}</Text>
        </View>
        <View style={styles.row2}>
          <Text style={styles.sText}><Text style={styles.blackText}>重要信息：</Text>為確保您的密碼安全，建議可使用混合字母和數字的密碼，並盡量不要使用重複或可預測的序列</Text>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <View style={styles.row3}>
            <View style={styles.hor}>
              <Text style={styles.textL}><Text style={styles.redText}>* </Text>設定密碼</Text>
              <TextInput style={[styles.input,{flex:1}]} 
                  underlineColorAndroid="transparent"
                  value={pwd}
                  onChangeText={(val)=>this._onChangeText(val,'pwd')}
                  placeholder="請輸入驗證碼"
                />
            </View>
            <Text style={styles.tipsText}>8個字符，字母和數字</Text>
          </View>
          <View style={styles.line}></View>
          <View>
          <View style={[styles.row4,]}>
            <Text style={styles.textL}><Text style={styles.redText}>* </Text>確認密碼</Text>
              <TextInput style={[styles.input,{flex:1,}]} 
                  underlineColorAndroid="transparent"
                  value={pwd2}
                  onChangeText={(val)=>this._onChangeText(val,'pwd2')}
                  placeholder="請再次輸入密碼"
                />
            </View>
          </View>
        </View>
        <LargeBtn btnStyle={styles.btnStyle} title="下一步" press={()=>this._goNext()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row4: {
    height: scale(50),
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingRight:scale(20),
    paddingLeft: scale(20),
    paddingTop: scale(20),
    paddingBottom: scale(20),
  },
  btnStyle: {
    backgroundColor: colors.blackBlue,
    marginLeft: scale(15),
    marginRight: scale(15),
    marginTop: scale(20),
  },
  line: {
    marginLeft: scale(15),
    height: 1,
    backgroundColor: colors.bgColor,
  },
  redText: {
    color: '#FF002F',
  },
  tipsText: {
    marginLeft: scale(10),
    color: colors.gray,
    fontSize: scale(12),
  },
  input: {
    textAlign:'right',
    paddingLeft: scale(10),
    paddingRight: scale(10),
    // backgroundColor:'red',
    flex: 1,
    height: scale(40)
  },
  hor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'red',
    height:scale(40)
  },
  blackText: {
    color: '#343535',
    fontWeight: 'bold'
  },
  sText: {
    fontSize: scale(12),
    color: '#343535',
    fontWeight: 'normal'
  },
  row3: {
    backgroundColor: 'white',
    paddingRight:scale(20),
    paddingLeft: scale(20),
    paddingTop: scale(10),
    paddingBottom: scale(20),
  },
  row2: {
    paddingTop: scale(25),
    paddingBottom: scale(20),
    paddingRight:scale(20),
    paddingLeft: scale(20),
  },
  textR: {
    color: colors.gray,
    fontSize: scale(16)
  },
  textL: {
    color: colors.gray2,
    fontSize: scale(16),
  },
  row1: {
    paddingRight:scale(20),
    paddingLeft: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: scale(50),
    alignItems: 'center'
  },
})