import React,{Component} from 'react'
import{
  View,StyleSheet,TouchableOpacity,
  Text,ImageBackground,Image,ScrollView
   
} from 'react-native'
import LargeBtn from '@/components/LargeBtn';
import { colors, scale, width } from '@/utils/device';
import DescView from './DescView'
import {navPage} from '@/utils/common'
export default class Explain extends Component{
  constructor(props){
    super(props)
    this.state = {
      tab:this.props.tab,  // 0-網絡客戶  1- 尊享會員
      type: 'a', //a-個人  b-公司
    }
  }
  _goNext(){ 
    const {tab, type} = this.state
    let category = 0;
    if(tab == 0){ //網絡客戶

    } else {
      category = 1;
      if(type == 'b')  category = 2
    }
    navPage(this.props.navigation,'RegSecond',{category})
  }
  _typeChange=(value)=>{
    this.setState({
      type: value
    })
  }
  render(){
    return(
      <ScrollView style={{flex:1}}>
        <DescView {...this.props} typeChange={this._typeChange}/>
        <LargeBtn btnStyle={styles.btnStyle} title="下一步" 
          press={()=>this._goNext()}/>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.blackBlue,
    marginLeft: scale(15),
    marginRight: scale(15),
    marginTop: scale(0),
  },
})