import React,{Component} from 'react'
import{
  View,Text,TouchableOpacity,
  StyleSheet,Image
} from 'react-native'
import LogoHeader from '@/components/tabbar/LogoHeader'
import {width, scale} from '@/utils/device'
import CardView from './CardView'
import {navPage} from '@/utils/common'
const iconList = [
  {title:'待付款', icon: require('@/images/set/icon1.png')},
  {title:'待發貨', icon: require('@/images/set/icon2.png')},
  {title:'待收貨', icon: require('@/images/set/icon3.png')},
  {title:'待評價', icon: require('@/images/set/icon4.png')}
]
const iconList2 = [
  {title:'我的優惠券', icon: require('@/images/set/icon5.png'),page:'MyCoupon', icon4:true},
  {title:'分享清單', icon: require('@/images/set/icon6.png'), page:'ShareList', eqWh: true},
  {title:'佣金收入', icon: require('@/images/set/icon7.png'), page: 'FundIncome', eqWh: true}
]
export default class Settings extends Component{
  _press(page){
    if(page){
      navPage(this.props.navigation, page)
    }
  }
  render(){
    return(
      <View style={{flex:1}}>
        <LogoHeader />
        <View style={styles.container}>
          <CardView/>
          <View style={styles.orderRView}>
            <View style={styles.row1}>
              <Text style={styles.text1}>訂單記錄</Text>
              <View style={styles.row}>
                <Text style={styles.text2}>全部訂單</Text>
                <Image style={styles.arrowR}source={require('@/images/set/input_r.png')}/>
              </View>
            </View>
            <GridComp list={iconList} press = {this._press.bind(this)}/>
          </View>
          <View style={[styles.orderRView,styles.row2]}>
            <GridComp list={iconList2} press = {this._press.bind(this)}/>
          </View>
        </View>
      </View>
    )
  }
}
class GridComp extends Component{
  render(){
    const list = this.props.list
    return(
      <View style={styles.gridStyle}>
        {list.map((item,index)=>{
          const {eq,icon4 }= item
          return(
            <TouchableOpacity style={styles.gridItem} key={index} onPress={()=>this.props.press(item.page)}>
              <Image style={[styles.icon2,eq?styles.icon3:(icon4?styles.icon4:null)]} source={item.icon} />
              <Text style={styles.text3}>{item.title}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  row2: {
    marginTop:scale(0),
  },
  gridItem:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    
  },
  text3:{
    color: '#333',
    fontSize: scale(14),
    paddingTop: scale(5),
    paddingBottom: scale(5)
  },
  icon4:{
    width: scale(33),
    height: scale(27)
  },
  icon3:{
    width: scale(30),
    height: scale(30)
  },
  icon2: {
    paddingTop: scale(10),
    width: scale(30),
    height: scale(24)
  },
  gridStyle:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: scale(20),
    paddingBottom: scale(10),
    paddingLeft: scale(5),
    paddingRight: scale(5)
  },
  arrowR:{
    marginLeft:scale(2),
    width: scale(7),
    height: scale(14),
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  text2:{
    color: '#9A9691',
    fontSize: scale(14)
  },
  text1:{
    color: '#333',
    fontSize: scale(15)
  },
  row1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(10),
    paddingBottom: scale(10),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E2E0DB'
  },
  orderRView:{
    backgroundColor: 'white',
    marginTop:scale(20),
    marginLeft: scale(15),
    marginRight: scale(15),
    marginBottom:scale(15),
    borderRadius: scale(10)
  },
  container:{
    flex:1,
    backgroundColor: '#F6F5F4'
  }
})