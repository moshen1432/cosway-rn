/**佣金訂單 */
import React,{Component} from 'react'
import{
  View,Text,TouchableOpacity,
  StyleSheet,FlatList,Image
} from 'react-native'
import {width, height,scale, colors} from '@/utils/device'
export default class TopView extends Component{
  constructor(props){
    super(props)
    this.state = {
      year:new Date().getFullYear(),
      month:new Date().getMonth()+1,
    }
  }
  _changeMonth(type){
    const month = this.state.month;
    const year = this.state.year;
    let newMonth = month;
    let newYear = year;
    if(type == 1){
      if(month < 12){
        newMonth = month+1;
      } else {
        newYear = parseInt(year+1);
        //alert(newYear)
        newMonth = 1;
      }
    } else { //月份减1
      if(month > 1){
          newMonth = month-1;
      } else {
          newYear = parseInt(year-1);
          newMonth = 12;
      }
    }
    this.setState({
      year:newYear,
      month:newMonth,
    });
  }
  //本月有多少天
  getMonthDay(year, month) {
    let days = new Date(year, month + 1, 0).getDate()
    return days
  }
  renderDays(){
    const {year, month} = this.state
    var now = new Date();
    const currDay = now.getDate()
    now.setDate(1);
    const d = new Date(year,month-1,1)
    let oneDay = d.getDay() //本月第一天是星期几   0-星期天
    const count = this.getMonthDay(year, month)
    let views = [];
    let currStyle 
    //有活動的 日期
    const active = [
      {day:'09-01', num:2},
      {day:'09-05', num:3},
      {day:'09-06', num:2},
      {day:'09-08', num:2},
      {day:'09-12', num:2},
      {day:'09-13', num:1},
      {day:'09-18', num:2},
      {day:'09-28', num:2},
    ]
    //补全前面的空白
    for(let i = 0; i< oneDay; i++){
      views.push(<View key={'_'+i} style={s.itemV}></View>)
    }
    for(let i=0; i< count; i++){
      if(i+1 == currDay && new Date().getMonth()+1 == month){//當前天
        currStyle = {
          color:'white',backgroundColor:'#00AFDA'
        }
      } else {
        currStyle = {}
      }
      views.push(<View  key={i} style={s.itemV}>
        <View style={[s.tWrap,currStyle]}>
          <Text style={[s.t2, currStyle]}>{i+1}</Text>
        </View>
        {this._renderActive(i,active)}
      </View>)
      
    }
    return views
  }
  _renderActive(index, activeList){
    //console.log(index)
    const point = {width: scale(6),height: scale(6),borderRadius:scale(6),backgroundColor:'#FDB813',marginRight:scale(2)}
    const rowStyle = {flexDirection:'row',justifyContent:'center',alignItems:'center'}
    for(let i=0; i<activeList.length; i++){
      let item = activeList[i]
      let day = parseInt(item.day.substring(3,5))
      //console.log('i='+i,day)
      if(index == day){
        let arr = []
        let num = item.num
        for(let j = 0; j<num; j++){
          arr.push(<View key={i+''+j} style={point}></View>)
        }
        return(<View style={rowStyle}>{arr}</View>)
      } else {
        
      }
    }
  }
  render(){
    const days = ['日','一','二','三','四','五','六']
    const {month, year} = this.state
    return(
      <View style={s.content}>
        <View style={s.row1}>
          <Text style={s.monText}>{month}月  <Text style={s.yearText}>{year}年</Text></Text>
          <View style={s.right1}>
            <TouchableOpacity onPress={()=>this._changeMonth(-1)}><Image style={s.arrowImg} source={require('@/images/home/company/news_l_ico.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>this._changeMonth(1)}><Image style={s.arrowImg} source={require('@/images/home/company/news_r_ico.png')}/></TouchableOpacity>
          </View>
        </View>
        <View style={s.row2}>
          {days.map((item,index)=>{
            return <Text style={s.wText}key={index}>{item}</Text>
          })}
        </View>
        <View style={s.row3}>
          {this.renderDays()}
        </View>
      </View>
    )
  }
}
const s = StyleSheet.create({
  tWrap:{
    width:scale(30),
    height:scale(30),
    borderRadius:scale(30),
    justifyContent:'center',
    alignItems: 'center'
  },
  t2: {
    color:'#333',
    fontSize: scale(14),
    textAlign:'center', textAlignVertical:'center'
  },
  itemV:{
    alignItems:'center',
    justifyContent: 'center',
    width: width/7-1,
    minHeight:width/7,
    borderBottomColor:'#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  row3:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  wText: {
    color: '#333',fontSize: scale(14)
  },
  row2: {
    flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',paddingTop:scale(10),paddingBottom: scale(10),
    borderBottomColor:'#eee',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  right1:{flexDirection: 'row'},
  arrowImg:{
    width: scale(30),
    marginLeft: scale(8),
    height: scale(30),
    resizeMode: 'contain'
  },
  yearText: {
    color: '#333',fontSize: scale(14)
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(15),
    borderBottomColor:'#eee',
    borderBottomWidth: StyleSheet.hairlineWidth,
},
  monText:{color: '#00AFDA',fontSize: scale(20)},
  content:{
    marginTop: scale(20),
    marginBottom: scale(20),
    backgroundColor: 'white'
  }
})