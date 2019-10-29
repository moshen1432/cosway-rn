import React,{Component} from 'react'
import{
  View,StyleSheet,TouchableOpacity,
  Text,ScrollView,Modal ,
  StatusBar,Image,TextInput,
  TouchableWithoutFeedback 
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Tabbar from '@/components/CustomTab'
import { colors, scale, width } from '@/utils/device'
import {navPage} from '@/utils/common'
import Header from './Header'
import Header2 from './Header2'
import NormalHead from '@/components/tabbar/NormalHead'
import Explain from './Explain'
export default class Reg extends Component{
  constructor(props){
    super(props)
    this.state = {
      tab: 0,
      currTab: 0,
    }
  }
  _change(val){
    //_this.tabView.goToPage(val.i)
    this.setState({currTab: val.i})
  }
  _goToPage=(tab)=>{
    // alert(tab)
    // this.tabView.goToPage(tab)
  }
  render(){
    const {tab} = this.state
    //console.log('render tab',this.currTab)
    const {navigation} = this.props
    return(
      <View style={[styles.container]}>
        <NormalHead title="注册"  />
        {this.state.currTab == 0 ? <Header status={0}/> : <Header2 status={0}/>}
        <ScrollableTabView
          initialPage={0}
          style={{ width: width, backgroundColor: "#f6f5f4",flex:1}}
          ref={(tabView) => {
            this.tabView = tabView;
          }}
          locked={true}
          onChangeTab={(val)=>this._change(val)}
          initialPage={this.state.tab}
          //tabBarUnderlineStyle={styles.underLine}
          tabBarInactiveTextColor="#999"
          tabBarActiveTextColor="#00B1D9"
          tabStyle={{borderBottomWidth: 0}}
          renderTabBar={() => 
            <Tabbar labs={['網絡客戶','尊享會員']} 
              bgColor='#f6f5f4'
              border={true}
              activeTab={this.state.currTab}
              //goToPage={this._goToPage}
            />
          }
        >
          <Explain tab={0}  navigation={navigation}/>
          <Explain tab={1} navigation={navigation}/>
        </ScrollableTabView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'red'
  }
})