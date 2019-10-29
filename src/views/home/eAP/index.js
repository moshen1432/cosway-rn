/**佣金訂單 */
import React,{Component} from 'react'
import{
  View,Text,TouchableOpacity,
  StyleSheet,FlatList,ImageBackground
} from 'react-native'
import BgHeader from '@/components/tabbar/BgHeader'
import {width, scale, colors} from '@/utils/device'
import List from './List'
export default class FundIncome extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    const topSubView = (
      <ImageBackground style={styles.orderBg} source={require('@/images/set/ev_bg.png')}>
        <Text style={styles.moneyText}>1200.55</Text>
        <Text style={styles.labText}>我的eV</Text>
      </ImageBackground>
    )
    return(
      <View style={styles.container}>
        <BgHeader title="eV" {...this.props} subView={topSubView}/>
        <List />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapView: {
    alignItems: 'center'
  },
  moneyText: {
    color: 'white',
    fontSize: scale(24),
    fontWeight: 'bold',
  },
  labText: {
    color: 'white',
    fontSize: scale(14),
  },
  orderBg:{
    resizeMode:'contain',
    marginLeft: scale(10),
    width: width-scale(20),
    height: (width-scale(20))*0.206,
    paddingLeft: scale(20),
    justifyContent: 'center'
  },  
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  }
})