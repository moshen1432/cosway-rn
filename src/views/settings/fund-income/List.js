import React,{Component} from 'react'
import{
  View,Text,TouchableOpacity,
  StyleSheet,FlatList,Image
} from 'react-native'
import {width, scale, colors} from '@/utils/device'
const rowW = width-scale(30)
const col1W = rowW * 0.35
const col2W = rowW * 0.3
const col3W = rowW * 0.3
const col4W = rowW * 0.05
export default class FundIncome extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {time: '2019-08-06 11:12:26', id:'888666999', num: '10.00'},
        {time: '2019-08-06 11:12:26', id:'888666999', num: '30.00'},
        {time: '2019-08-06 11:12:26', id:'888666999', num: '85.50'},
        {time: '2019-08-06 11:12:26', id:'888666999', num: '16.00'},
        {time: '2019-08-06 11:12:26', id:'888666999', num: '50.55'},
        {time: '2019-08-06 11:12:26', id:'888666999', num: '26.00'},
        {time: '2019-08-06 11:12:26', id:'888666999', num: '10.00'},
        {time: '2019-08-06 11:12:26', id:'888666999', num: '30.00'},
        {time: '2019-08-06 11:12:26', id:'888666999', num: '26.00'},
      ]
    }
  }
  _separator = () => {
    return <View style={{height:1,backgroundColor:colors.gray1,marginLeft:scale(15)}}/>;
  }
  _renderItem=({ item, index })=>{
    return(
      <View style={styles.listRow}> 
        <Text style={[styles.nameText,{width: col1W}]}>{item.id}</Text>
        <View style={{width: col2W}}>
          <Text style={styles.timeText}>{item.time.split(' ')[0]}</Text>
          <Text style={styles.timeText}>{item.time.split(' ')[1]}</Text>
        </View>
        <Text style={[styles.nameText,styles.moneyText,{width: col3W}]}>+{item.num}</Text>
        <TouchableOpacity style={[styles.rightWrap,{width: col4W}]}>
          <Image style={styles.rightImg} source={require('@/images/set/input_r.png')}/>
        </TouchableOpacity>
      </View>
    )
  }
  _renderHeader(){
    return(
      <View style={styles.header}>
        <Text style={[styles.hText,{width: col1W}]}>訂單號</Text>
        <Text style={[styles.hText,{width: col2W}]}>獲得時間</Text>
        <Text style={[styles.hText,styles.typeText,{width: col3W}]}>佣金（HK$）</Text>
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
    paddingLeft: scale(15)
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