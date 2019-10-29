/**react-native-scrollable-tab-view  自定义 头部 */
import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Text,
  TouchableOpacity,Button
} from 'react-native';
import {width, scale} from '@/utils/device'
export default class Tabbar extends Component{
  render(){
    //alert(JSON.stringify(this.props.labs))
    //alert(this.props.activeTab)
    console.log('rops',this.props)
    let {labs, activeTab,border, bgColor} = this.props
    return(
      <View style={styles.tabWrap}>
        { labs.map((item,index) =>{
            return(
              <TouchableOpacity style={styles.item} key={index} onPress={()=>{
                  this.props.goToPage(index)
                  }
                }>
                <Text style={[styles.text,{borderBottomColor:bgColor||'white'}, activeTab==index? styles.active: null]}>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
        {!border ? null:
          <View style={styles.line}></View>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  active: {
    color: '#00B1D9',
    borderBottomColor: '#00B1D9'
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  line: {
    height: scale(30),
    width: 1,
    backgroundColor: '#e2e0db',
    position: 'absolute',
    top: scale(8),
    left: width/2
  },
  tabWrap: {
    flexDirection: 'row'
  },
  text: {
    fontSize: scale(16),
    color: '#666666',
    borderBottomWidth: scale(4),
    borderBottomColor: 'white',
    paddingTop: scale(10),
    paddingBottom: scale(10),
    paddingLeft:scale(4),
    paddingRight: scale(4)
  }
})
