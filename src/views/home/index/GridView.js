
import React, {Component} from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
} from 'react-native';
import {width, scale} from '@/utils/device'
import {navPage} from '@/utils/common'
export default class GridView extends Component{
  _goPage(page){
    if(!page) return
    navPage(this.props.navigation,page)
  }
  render(){
    const gridList = [
      {
        title : "網上購物",
        image : require('@/images/home/nav_ico1.png'),
        page: 'Shopping'
      },
      {
        title : "掃描",
        image : require('@/images/home/nav_ico2.png'),
        page: 'Scan'
      },
      {
        "title" : "願望清單",
        "image" : require('@/images/home/nav_ico3.png')
      },
      {
        title : "eAP",
        image : require('@/images/home/nav_ico4.png'),
        page: 'eAP'
      },
      {
        "title" : "公司活動",
        "image" : require('@/images/home/nav_ico5.png'),
        page: 'ComActive'
      },
      {
        "title" : "COSWAY字典",
        "image" : require('@/images/home/nav_ico6.png')
      },
      {
        "title" : "網上辦公室",
        "image" : require('@/images/home/nav_ico7.png')
      },
      {
        "title" : "優惠券",
        "image" : require('@/images/home/nav_ico8.png')
      }
    ]
    return(
      <View style={styles.gridWrap}>
        {
          gridList.map((item,index) => {
            return(
              <TouchableOpacity style={styles.gridView} 
                onPress={()=>this._goPage(item.page)}
                activeOpacity={0.5} key={index}>
                <Image style={styles.gridIcon} source={item.image}/> 
                <Text style={styles.gridText}>{item.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  gridIcon: {
    width: width*0.15,
    height: width*0.15,
  },
  gridWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 10,
  },
  gridView: {
    width: width/4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: 'red'
  },
  gridText: {
    marginTop: scale(5),
    fontSize: scale(13),
    color: '#666'
  }
})