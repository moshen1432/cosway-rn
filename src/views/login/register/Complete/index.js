import React,{Component} from 'react'
import{
  View,StyleSheet,
  ImageBackground,Text ,
  StatusBar,Image,TextInput,
} from 'react-native'
import NormalHead from '@/components/tabbar/NormalHead'
import { colors, scale, width } from '@/utils/device';
import LargeBtn from '@/components/LargeBtn';
import {navPage} from '@/utils/common'
import Header from '../Header'
import Header2 from '../Header2'
export default class ForgetPwd extends Component{
  constructor(props){
    super(props)
    this.state = {
      category: this.props.navigation.getParam('category'),  //0-網絡客戶
    }
  }
  _goNext(){ 
    this.props.navigation.popToTop()
    //navPage(this.props.navigation, 'Home')
    this.props.navigation.navigate('Home')
  }
  render(){
    const {category} = this.state
    return(
      <View style={{flex:1, backgroundColor: colors.bgColor}}>
        <NormalHead title="完成"  />
        {category == 0 ? <Header status={3}/> : <Header2 status={4}/>}
        <View style={styles.imgWrap}>
          <Image style={styles.regImg} source={require('@/images/login/register_yes.png')} />
        </View>
        <View style={styles.mView}>
          <Text style={styles.text1}>註冊成功！</Text>
          <Text style={styles.text2}>恭喜您已經成為 <Text style={styles.t3}>{category==0?'網絡客戶':'尊享會員'}</Text>，</Text>
          <Text style={styles.text2}>{category==0?'立即前往 Cosway 網店選購':'現在起享受更多優惠！'}</Text>
        </View>
        <LargeBtn btnStyle={styles.btnStyle} title="去逛逛" press={()=>this._goNext()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  t3: {color: '#00AFDA'},
  text1: {
    color: colors.gray2,
    fontSize: scale(20),
    fontWeight: 'bold',
    paddingBottom: scale(10),
  },
  text2: {
    paddingTop:scale(0),
    color: colors.gray2,
    fontSize: scale(14),
  },
  mView: {
    zIndex: 0,
    position: 'relative',
    top: -scale(40),
    marginLeft: scale(15),
    marginRight: scale(15),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:scale(50),
    paddingBottom: scale(40),
    borderRadius: scale(8),
  },
  regImg: {
    zIndex: 999,
    width: scale(80),
    height: scale(80),
    marginTop: scale(40),
  },
  imgWrap: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnStyle: {
    backgroundColor: colors.blackBlue,
    marginLeft: scale(15),
    marginRight: scale(15),
    marginTop: scale(-20),
  },
})