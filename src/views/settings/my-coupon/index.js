/**我的優惠券 */
import React,{Component} from 'react'
import{
  View,Text,
  StyleSheet,ImageBackground
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import NormalHead from '@/components/tabbar/NormalHead'
//import CustomTabBar from '@/components/CustomTabbar'
import Tabbar from '@/components/CustomTab'
import SplitView from '@/components/SplitView'
import List from './List'
import {width, scale} from '@/utils/device'
export default class MyCoupon extends Component{
  constructor(props){
    super(props)
    this.state = {
      tab: 0
    }
  }
  _tabChange=(tab)=>{
    this.tabView.goToPage(tab)
  }
  render(){
    return(
      <View style={{flex:1}}>
        <NormalHead title="我的優惠券" />
        <ScrollableTabView
          initialPage={0}
          style={{ width: width, backgroundColor: "#fff"}}
          ref={(tabView) => {
            this.tabView = tabView;
          }}
          initialPage={this.state.tab}
          //tabBarUnderlineStyle={styles.underLine}
          tabBarInactiveTextColor="#999"
          tabBarActiveTextColor="#00B1D9"
          tabStyle={{borderBottomWidth: 0}}
          renderTabBar={() => 
            <Tabbar labs={['未使用','已使用','已过期']} 
              activeTab={this.state.tab}
              goToPage={this._tabChange}
            />
          }
        >
          <List ></List>
          <List ></List>
          <List ></List>
        </ScrollableTabView>
      </View>
    )
  }
}