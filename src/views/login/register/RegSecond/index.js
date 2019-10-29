import React,{Component} from 'react'
import{
  View,StyleSheet,ScrollView,
  Text,TouchableOpacity,Image,
   
} from 'react-native'
import NormalHead from '@/components/tabbar/NormalHead'
import Select from '@/components/Select'

import { colors, scale, width } from '@/utils/device';
import Header from '../Header'
import Header2 from '../Header2'
import PlainMember from './PlainMemer'
import Person from './Person'
import Company from './Company'
import sty from './styles.js';
export default class RegSecond extends Component{
  constructor(props){
    super(props)
    this.state = {
      category: this.props.navigation.getParam('category')  //0-網絡客戶  1-個人  2-公司
    }
  }
  render(){
    const {category} = this.state
    return(
      <View style={{flex:1}}>
        <NormalHead title='填寫資料'/>
        <ScrollView>
          <View style={sty.content}>
            {category == 0 ? <Header status={1}/> : <Header2 status={1}/>}
            <View style={sty.line}></View>
            {category == 0 ? <PlainMember {...this.props}/> : category == 1 ? <Person {...this.props}/> : <Company {...this.props}/>}
          </View>
        </ScrollView>
      </View>
    )
  }
}