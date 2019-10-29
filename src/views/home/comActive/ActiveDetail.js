/**佣金訂單 */
import React,{Component} from 'react'
import{
  View,Text,TouchableOpacity,TextInput,
  StyleSheet,ScrollView,Image,
} from 'react-native'
import NormalHead from '@/components/tabbar/NormalHead'
import {width, scale, colors} from '@/utils/device'
import CardView from './CardView'
import SplitView from '@/components/SplitView'
import LargeBtn from '@/components/LargeBtn'
export default class ActiveDetail extends Component{
  constructor(props){
    super(props)
    this.state = {
      result1: false,
      result2: false,
      name: '',
      no: '',
      tel: '',
      email: '',
      person: '',
    }
  }
  onChangeText(val,type){
    let {name,tel,no,email,person} = this.state
    if(type == 'name') name = val
    else if(type == 'tel') tel = val
    else if(type == 'no') no = val
    else if(type == 'email') email = val
    else if(type == 'person') person = val
    this.setState({
      name,
      tel,
      no,
      person,
      email,
    })
  }
  selR1(){
    this.setState({
      result1: !this.state.result1,
    })
  }
  selR2(){
    this.setState({
      result2: !this.state.result2,
    })
  }
  render(){
    const item = {t1:'S190805 健康講座',type:1,t2:'男士中年危機多，及早打好健康基礎',date1:'2019年9月5日(星期一)',date2:'19:00 - 21:00',t3:'COSWAY 體驗館',addr:'尖沙咀柯士甸道83號柯士甸廣場1樓及地下1號鋪'}
    const norImg = require('@/images/login/circular_box.png')
    const selImg = require('@/images/login/circular_box_de.png')
    const {result1, result2,name,tel,no,email,person} = this.state
    return(
      <View style={{flex:1}}>
        <NormalHead title="活動詳情"/>
        <ScrollView style={s.container}>
          <Image style={s.bgImg}source={require('@/images/home/company/active_bg.png')}/>
          <SplitView height={scale(15)}/>
          <View style={s.line}></View>
          <CardView  item={item} hideLeft={true}/>
          <View style={s.line}></View>
          <View style={s.row1}>
            <Text style={s.t1}>備註：</Text>
            <Text style={s.t2}>1.歡迎COSWAY食貝®謓非含貝#加（請於下列确目中列明人數)</Text>
            <Text style={s.t2}>2.名額有限，先到先得</Text>
            <Text style={s.t2}>3.諝以英文全名登記</Text>
          </View>
          <InputView lab="姓名" placeholder="请輸入姓名" value={name}
            onChangeText={(val)=>this.onChangeText(val, 'name')}
            remark='必須與VIP或描立笼主申謓否，或身份證相同' require={true}/>
          <View style={s.line2}></View>
          <InputView lab="會員編號" placeholder="請輸入編號" value={no}
            onChangeText={(val)=>this.onChangeText(val, 'no')}
            remark='如非舍貝，謓格入“0”' require={true}/>
          <View style={s.line2}></View>
          <InputView lab="聯繫電話" placeholder="請輸入聯繫電話" value={tel}
            onChangeText={(val)=>this.onChangeText(val, 'tel')}
            require={true}/>
          <View style={s.line2}></View>
          <InputView lab="電郵地址" placeholder="請輸入電郵地址" value={email}
            onChangeText={(val)=>this.onChangeText(val, 'email')} require={true}/>
          <View style={s.line2}></View>
          <InputView lab="邀請嘉賓人數" placeholder="請輪入人數" value={person}
            onChangeText={(val)=>this.onChangeText(val, 'person')}
            remark='不包话自己'/>
          <View style={{backgroundColor:'#F5F5F5',padding: scale(20),paddingBottom:scale(10)}}>
            <TouchableOpacity onPress={()=>this.selR1()}style={s.tv}>
              <Image style={s.imgS}source={result1==1?selImg:norImg}/>
              <Text style={s.tS}><Text style={{color:'red'}}>* </Text>本人已閲讀並同怠暖私條款及細則 。</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.selR2()}style={s.tv}>
              <Image style={s.imgS}source={result2==1?selImg:norImg}/>
              <Text style={s.tS}>本人不願意繼續收取“COSWAY”推廣寅訊。</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'#F5F5F5'}}>
            <LargeBtn btnStyle={s.btnStyle} title="確定" />
          </View>
        </ScrollView>
      </View>
    )
  }
}
class InputView extends Component{
  render(){
    const {lab, placeholder,remark,require,value} = this.props
    const box3 = {paddingVertical:scale(10), paddingLeft: scale(20),paddingRight: scale(20),paddingBottom: scale(10),backgroundColor: 'white'}
    const hor = {position:'relative',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',height:scale(40)}
    const textL = {color: colors.gray2,fontSize: scale(16)}
    const input = {fontSize: scale(15),textAlign:'right',paddingLeft: scale(10),paddingRight: scale(0),flex: 1}
    const tipsText = {marginLeft: scale(8),color: colors.gray,fontSize: scale(12),paddingBottom:scale(5)}
    const red = {color:'red'}
    
    return(
      <View style={[box3,{borderWidth:0}]}>
        <View style={hor}>
          <Text style={textL}>{!require ? null : <Text style={red}>* </Text>}{lab}</Text>
          <TextInput style={[input]} 
              underlineColorAndroid="transparent"
              value={value}
              placeholder={placeholder}
              onChangeText={this.props.onChangeText}
            />
        </View>
        {!remark ? null :
        <Text style={tipsText}>{remark}</Text>
        }
      </View>
    )
  }
}
const s = StyleSheet.create({
  btnStyle: {backgroundColor: colors.blackBlue,marginLeft: scale(15),marginRight: scale(15),marginTop: scale(0)},
  tS: {fontSize:scale(14),color:'rgb(52,53,53)'},
  imgS: {width: scale(16), height:scale(16),marginRight:scale(8)},
  tv: {flexDirection:'row',alignItems:'center',borderColor:'red',borderWidth:0,paddingBottom:scale(10)},
  line2:{marginLeft:scale(20),height:scale(1),backgroundColor:'#DEDEDE'},
  t2:{color:'#333',fontSize:scale(13)},
  t1:{color:'#333',fontSize:scale(13),fontWeight: 'bold'},
  row1:{ padding: scale(15),backgroundColor:'#F5F5F5'},
  line:{height:1,backgroundColor:'#eee'},
  bgImg:{width, height:width*1.41},
  container:{flex:1, backgroundColor:'white'}
})