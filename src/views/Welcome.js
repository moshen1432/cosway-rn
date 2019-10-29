import React,{Component} from 'react'
import{
  View,
  Image,
  StyleSheet,
  StatusBar
} from 'react-native'
import {width} from '@/utils/device'
export default class Message extends Component{
  static navigationOptions = ({ navigation }) =>{
    return{
      header:null,
    }
  };
  componentDidMount(){
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
    setTimeout(()=>{
      const {navigation} = this.props;
    if(navigation){
      navigation.replace("Home");
    }
    },1000)
  }
  render(){
    return(
      <View style={{flex:1}}>
        <Image style={styles.bg} source={require('@/images/welcome.png')}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  bg:{
    width: width,
    height: '100%',
    resizeMode:'stretch'
  }
})