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
      <ImageBackground style={styles.orderBg} source={require('@/images/set/order_bg.png')}>
        <View style={styles.wrapView}>
          <Text style={styles.moneyText}>88660.55</Text>
          <Text style={styles.labText}>累計佣金（HK$）</Text>
        </View>
        <View style={styles.wrapView}>
          <Text style={styles.moneyText}>56000.55</Text>
          <Text style={styles.labText}>當前持有佣金（HK$）</Text>
        </View>
        <View style={styles.wrapView}>
          <Text style={styles.moneyText}>1200.55</Text>
          <Text style={styles.labText}>昨日收益（HK$）</Text>
        </View>
      </ImageBackground>
    )
    return(
      <View style={styles.container}>
        <BgHeader title="佣金訂單" {...this.props} subView={topSubView}/>
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
    fontSize: scale(16),
    paddingBottom: scale(6)
  },
  labText: {
    color: 'white',
    fontSize: scale(12),
  },
  orderBg:{
    resizeMode:'contain',
    marginLeft: scale(10),
    width: width-scale(20),
    height: (width-scale(20))*0.206,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },  
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  }
})