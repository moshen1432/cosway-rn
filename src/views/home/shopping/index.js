/**网上购物 */
import React,{Component} from 'react'
import{
  View,Text,
  StyleSheet,ImageBackground
} from 'react-native'
import NormalHead from '@/components/tabbar/NormalHead'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Tabbar from '@/components/CustomTab'
import {width, scale} from '@/utils/device'
import List from './List'
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
  _onScroll(e){    
    if(e%1 == 0){
      // let index = e
      // const tab = this.state
      // if(tab == 0 && index == 1) index = 2
      // else if(tab == 2 && index == 1) index = 0
      // this.setState({tab: index})
    }
  }
  render(){
    return(
      <View style={{flex:1}}>
        <NormalHead title="推薦產品" />
        <ScrollableTabView
          initialPage={0}
          onScroll={(e)=>this._onScroll(e)}
          style={{ width: width, backgroundColor: "#fff"}}
          ref={(tabView) => {
            this.tabView = tabView;
          }}
          initialPage={this.state.tab}
          tabBarInactiveTextColor="#999"
          tabBarActiveTextColor="#00B1D9"
          renderTabBar={() => 
            <Tabbar labs={['最新推薦','熱賣推薦']} 
              activeTab={this.state.tab}
              goToPage={this._tabChange}
              border={true}
            />
          }
        >
          <List {...this.props}></List>
          <List {...this.props}></List>
        </ScrollableTabView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
})