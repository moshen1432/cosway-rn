/**佣金訂單 */
import React,{Component} from 'react'
import{
  View,Text,TouchableOpacity,
  StyleSheet,ScrollView,Image
} from 'react-native'
import NormalHead from '@/components/tabbar/NormalHead'
import {width, scale, colors} from '@/utils/device'
import TopView from './TopView'
import {navPage} from '@/utils/common'
import CardView from './CardView'
export default class ComActive extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  _joinIn(){
    navPage(this.props.navigation, 'ActiveDetail')
  }
  render(){
    const list = [
      {t1:'S190805 健康講座',type:2,t2:'男士中年危機多，及早打好健康基礎',date1:'2019年9月5日(星期一)',date2:'19:00 - 21:00',t3:'COSWAY 體驗館',addr:'尖沙咀柯士甸道83號柯士甸廣場1樓及地下1號鋪'},
      {t1:'S190805 健康講座',type:-1,t2:'男士中年危機多，及早打好健康基礎',date1:'2019年9月5日(星期一)',date2:'19:00 - 21:00',t3:'COSWAY 體驗館',addr:'尖沙咀柯士甸道83號柯士甸廣場1樓及地下1號鋪'},
      {t1:'S190805 健康講座',type:1,t2:'男士中年危機多，及早打好健康基礎',date1:'2019年9月5日(星期一)',date2:'19:00 - 21:00',t3:'COSWAY 體驗館',addr:'尖沙咀柯士甸道83號柯士甸廣場1樓及地下1號鋪'},
      {t1:'S190805 健康講座',type:0,t2:'男士中年危機多，及早打好健康基礎',date1:'2019年9月5日(星期一)',date2:'19:00 - 21:00',t3:'COSWAY 體驗館',addr:'尖沙咀柯士甸道83號柯士甸廣場1樓及地下1號鋪'}
    ]
    return(
      <View style={s.container}>
        <NormalHead title="公司活動"/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopView/>
          <View>
            <View style={s.row1}>
              <View style={s.row11}>
                <Image style={s.dateImg} source={require('@/images/home/company/news_date.png')}/>
                <Text style={s.dText}>日期</Text>
              </View>
              <Text style={s.dayText}>2019年9月5日(星期一)</Text>
            </View>
          </View>
          <View style={{marginBottom:scale(15)}}>
          {
            list.map((item,i)=>{
              return <CardView key={i} item={item} last={i==list.length-1} press={()=>this._joinIn()}/>
            })
          }
          </View>
          
        </ScrollView>
      </View>
    )
  }
}
const s = StyleSheet.create({
  dayText:{ color:'#00AFDA',fontSize: scale(16),fontWeight:'bold'},
  dText:{ color: '#333',fontSize:scale(16)},
  row11:{flexDirection: 'row',alignItems: 'center'},
  dateImg:{
    width: scale(24),
    height: scale(24), marginRight:scale(8),
    resizeMode: 'contain'
  },
  row1: {
    backgroundColor:'white',padding:scale(15),flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'
  },
  container:{
    flex: 1,
    backgroundColor: colors.bgColor
  }
})