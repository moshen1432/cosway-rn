import React,{Component} from 'react'
import{
  View,Text,TouchableOpacity,
  StyleSheet,FlatList,Image
} from 'react-native'
import {width, scale, colors} from '@/utils/device'
const rowW = width-scale(30)
const col1W = rowW * 0.3
const col2W = rowW * 0.55
const col3W = rowW * 0.15
export default class FundIncome extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {time: '2019-08-06 11:12:26', origin:'消費', num: 1},
        {time: '2019-08-06 11:12:26', origin:'消費', num: 20},
        {time: '2019-08-06 11:12:26', origin:'消費', num: 12},
        {time: '2019-08-06 11:12:26', origin:'積分抵扣', num: 300},
        {time: '2019-08-06 11:12:26', origin:'消費', num: 12},
        {time: '2019-08-06 11:12:26', origin:'消費', num: 10},
        {time: '2019-08-06 11:12:26', origin:'積分抵扣', num: 800},
        {time: '2019-08-06 11:12:26', origin:'積分抵扣', num: 20},
        {time: '2019-08-06 11:12:26', origin:'簽到', num: 1},
      ]
    }
  }
  _separator = () => {
    return <View style={{height:StyleSheet.hairlineWidth,
        backgroundColor:colors.gray1,marginLeft:scale(15)}}/>;
  }
  _renderItem=({ item, index })=>{
    let {origin, num} = item
    let textColor = ''
    if('消費' == origin){
      num = '+'+num
      textColor = '#FFB400'
    } else if('積分抵扣' == origin){
      textColor = '#FF0030'
      num = '-'+num
    } else if('簽到' == origin){
      num = '+'+num
      textColor = '#00CC70'
    }
    return(
      <View style={styles.listRow}> 
        <Text style={[styles.nameText,{width: col1W,paddingLeft:scale(5)}]}>{item.origin}</Text>
        <Text style={[styles.timeText,styles.typeText,{width: col2W}]}>{item.time}</Text>
        <Text style={[styles.nameText,styles.moneyText,{width: col3W,color:textColor}]}>{num}</Text>
      </View>
    )
  }
  _renderHeader(){
    return(
      <View style={styles.header}>
        <Text style={[styles.hText,{width: col1W}]}>來源</Text>
        <Text style={[styles.hText,styles.typeText,{width: col2W}]}>時間</Text>
        <Text style={[styles.hText,styles.typeText,{width: col3W,textAlign: 'right'}]}>數量</Text>
      </View>
    )
  }
  render(){
    return(
      <FlatList
        style={styles.content}
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        ListHeaderComponent={this._renderHeader}
        ItemSeparatorComponent={this._separator}
        showsVerticalScrollIndicator={false}
      />
    )
  }
}
const styles = StyleSheet.create({
  rightWrap:{
    //borderWidth: StyleSheet.hairlineWidth
  },
  rightImg: {
    width:scale(7),
    height: scale(14),
  },
  moneyText: {
    color: '#FF0024',
    paddingRight: scale(5),
    textAlign: 'right'
    //borderWidth: StyleSheet.hairlineWidth
  },
  typeText: {
    textAlign: 'center'
  },
  nameText: {
    color: colors.gray2,
    //borderWidth: StyleSheet.hairlineWidth
  },
  timeText:{
    color:'#807D78'
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(15),
    paddingRight: scale(15),
    paddingTop: scale(15),
    paddingBottom: scale(15),
    // borderBottomColor: colors.gray1,
    // borderBottomWidth: 1,
  },
  hText: {
    color: colors.gray2,
    fontSize: scale(16),
    //borderWidth: StyleSheet.hairlineWidth
  },
  header:{
    flexDirection:'row',
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
    padding: scale(15),
    paddingRight: scale(15),
    //backgroundColor:'red'
  },
  content:{
    flex: 1,
    backgroundColor: 'white'
  }
})