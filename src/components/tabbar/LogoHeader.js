import React,{Component} from 'react'
import{
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native'
import {width,scale,statusBarHeight} from '@/utils/device'
export default class LogoHeader extends Component{

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.headerImg}source={require('@/images/home/logo.png')}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    paddingTop: statusBarHeight,
  },  
  headerImg: {
    width: width/2,
    height: width/2*0.15,
  },
  header:{
    height: scale(56),
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
