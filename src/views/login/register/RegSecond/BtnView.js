import React,{Component} from 'react'
import{
  View,StyleSheet,Switch,
  Text,TouchableOpacity,Image,
   
} from 'react-native'
import { colors, scale, width } from '@/utils/device';
import sty from './styles.js';
export default class BtnView extends Component{
  render(){
    const center = {justifyContent:'center',alignItems:'center',flex:1,paddingVertical:scale(10)}
    const left = {backgroundColor:'white',marginRight:scale(15)}
    const right = {backgroundColor:'#08286A'}
    const lText = {color:'#333',fontSize:scale(16)}
    const rText = {color:'#fff',fontSize:scale(16)}
    return(
      <View style={[sty.btnBox,{borderWidth:0}]}>
        <TouchableOpacity style={[left,center]} onPress={this.props.pre}>
          <Text style={lText}>上一步</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[right,center]} onPress={this.props.next}>
          <Text style={rText}>下一步</Text>
        </TouchableOpacity>
      </View>
    )
  }
}