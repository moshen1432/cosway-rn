/**我的優惠券 */
import React,{Component} from 'react'
import{
  View,Text,TouchableOpacity,
  StyleSheet,FlatList
} from 'react-native'
import NormalHead from '@/components/tabbar/NormalHead'
import SplitView from '@/components/SplitView'
import {width, scale, colors} from '@/utils/device'
import TopView from './TopView'
const rowW = width-scale(30)
const col1W = rowW * 0.3
const col2W = rowW * 0.25
const col3W = rowW * 0.3
const col4W = rowW * 0.15
export default class MyCoupon extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {time: '2019-08-06 11:12:26', name:'Mandy Lee', type: '產品清單'},
        {time: '2019-08-06 11:12:26', name:'Alice Keys', type: '個人卡片'},
        {time: '2019-08-06 11:12:26', name:'Leona Lewis', type: '個人卡片'},
        {time: '2019-08-06 11:12:26', name:'Mary Cary', type: '產品清單'},
        {time: '2019-08-06 11:12:26', name:'Tony Jack', type: '產品清單'},
      ]
    }
  }
  _renderItem=({ item, index })=>{
    return(
      <View style={styles.listRow}>
        <View style={{width: col1W}}>
          <Text style={styles.timeText}>{item.time.split(' ')[0]}</Text>
          <Text style={styles.timeText}>{item.time.split(' ')[1]}</Text>
        </View>
        <Text style={[styles.nameText,{width: col2W}]}>{item.name}</Text>
        <Text style={[styles.nameText,styles.typeText,{width: col3W}]}>{item.type}</Text>
        <TouchableOpacity style={[styles.rightWrap,styles.textRight,{width: col4W}]}>
          <Text style={styles.blueText}>刪除</Text>
        </TouchableOpacity>
      </View>
    )
  }
  _renderHeader(){
    return(
      <View style={styles.header}>
        <Text style={[styles.hText,{width: col1W}]}>時間</Text>
        <Text style={[styles.hText,{width: col2W}]}>好友</Text>
        <Text style={[styles.hText,styles.typeText,{width: col3W}]}>分享類型</Text>
        <Text style={[styles.hText,styles.textRight,{width: col4W}]}>操作</Text>
      </View>
    )
  }
  render(){
    return(
      <View style={styles.container}>
        <NormalHead title="分享清單" />
        <TopView/>
        <FlatList
          style={styles.content}
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          ListHeaderComponent={this._renderHeader}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
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
  blueText:{
    color: colors.blue2,
    fontSize: scale(14),
    textAlign: 'right',
    paddingRight: scale(5)
  },
  textRight:{
    textAlign: 'right'
  },  
  rightWrap:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft:1,
    // padding: scale(15),
    // paddingTop: scale(16),
    // paddingBottom: scale(16),
  },
  typeText: {
    textAlign: 'center'
  },
  nameText: {
    color: colors.gray2
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
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  }
})