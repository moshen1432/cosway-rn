/**我的優惠券 */
import React,{Component} from 'react'
import{
  View,Text,ImageBackground,ScrollView,
  StyleSheet
} from 'react-native'
import DashLine from '@/components/DashLine'
import {width, scale} from '@/utils/device'
export default class List extends Component{
  constructor(props){
    super(props)
    this.state = {
      list: [
        {name: '現金券', date: '2018-12-20',num: 10,min:120,desc:'限保健食品分類中的產品使用。'},
        {name: '現金券', date: '2018-12-20',num: 20,min:120,desc:'限保健食品分類中的產品使用。'},
        {name: '現金券', date: '2018-12-20',num: 5,min:50,desc:'限保健食品分類中的產品使用。'},
        {name: '現金券', date: '2018-12-20',num: 2,min:50,desc:'限保健食品分類中的產品使用。'},
        {name: '現金券', date: '2018-12-20',num: 1,min:20,desc:'限保健食品分類中的產品使用。'},
        {name: '現金券', date: '2018-12-20',num: 1,min:20,desc:'限保健食品分類中的產品使用。'},
        {name: '現金券', date: '2018-12-20',num: 1,min:20,desc:'限保健食品分類中的產品使用。'},
      ]
    }
  }
  _renderList(){
    const {list } = this.state
    return list.map((item,index) => {
      return (
        <ImageBackground style={styles.bgImg} key={index}
          source={require('@/images/set/bg1.png')}>
          <View style={styles.row1}>
            <Text style={styles.text1}>{item.name}</Text>
            <Text style={styles.text2}>HK<Text style={styles.text3}>$</Text>
              <Text style={styles.text6}>{item.num}</Text><Text>.0</Text></Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.text4}>有效期至{item.date}</Text>
            <Text style={styles.text4}>滿{item.min}可用</Text>
          </View>
          <DashLine backgroundColor='#D0CCC7' len={50} width={width-scale(38)}/>
          <View style={styles.row3}>
            <Text style={styles.text5}>{item.desc}</Text>
          </View>
        </ImageBackground>
      )
    })
  }
  render(){
    return(
      <View style={styles.wrap}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this._renderList()}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text6:{
    fontWeight: 'bold',
    fontSize: scale(18)
  },
  row3: {
    paddingTop: scale(6),
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: scale(4),
    paddingBottom: scale(6),
  },
  text5: {
    color: '#9a9691',
    fontSize: scale(12)
  },
  text4: {
    color: '#343535',
    fontSize: scale(13)
  },
  text3:{
    fontSize: scale(18)
  },
  text2: {
    color:'#FF0024'
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text1: {
    color: '#333',
    fontSize: scale(18)
  },  
  wrap: {
    flex: 1,
    backgroundColor:'#F1F0EE',
    paddingTop: scale(10),
  },
  bgImg: {
    padding: scale(10),
    marginLeft: scale(10),
    marginBottom: scale(10),
    width: width-scale(20),
    height: (width-scale(20))*0.27
  }
})