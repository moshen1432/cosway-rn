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
export default class ForgetPwd extends Component{
  _goNext(){ 
    this.props.navigation.popToTop()
  }
  render(){
    let vipText = '網絡客戶/VIP會員'
    return(
      <View style={{flex:1, backgroundColor: colors.bgColor}}>
        <NormalHead title="忘記密碼"  />
        <Header status={2}/>
        <View style={styles.row1}>
          <Text style={styles.textL}>会员类型</Text>
          <Text style={styles.textR}>{vipText}</Text>
        </View>
        <View style={styles.imgWrap}>
          <Image style={styles.regImg} source={require('@/images/login/register_yes.png')} />
        </View>
        <View style={styles.mView}>
          <Text style={styles.text1}>密碼重置成功！</Text>
          <Text style={styles.text2}>您以後可以使用新的密碼登錄啦！</Text>
        </View>
        <LargeBtn btnStyle={styles.btnStyle} title="去登錄" press={()=>this._goNext()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text1: {
    color: colors.gray2,
    fontSize: scale(20),
    fontWeight: 'bold'
  },
  text2: {
    paddingTop:scale(10),
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
    borderRadius: scale(10),
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