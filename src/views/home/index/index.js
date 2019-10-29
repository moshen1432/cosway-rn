import React,{Component} from 'react'
import{
  View,
  Image,
  ScrollView,
  Text,
  BackHandler,
  Platform
} from 'react-native'
import {width,scale} from '@/utils/device'
import Toast, {DURATION} from 'react-native-easy-toast'
import styles from './home.style'
import TopView from './TopView'
import GridView from './GridView'
import SplitView from '@/components/SplitView'
import CardView from './CardView'
import LogoHeader from '@/components/tabbar/LogoHeader'
var lastBackTime = "";//记录点击返回键的时间
export default class Home extends Component{
  static navigationOptions = ({ navigation }) =>{
    return{
      header:null,
    }
  };
  componentDidMount() {
    this.props.navigation.addListener(
      'didFocus',
      (obj) => {
        this._addListener();
      }
    )
    this.props.navigation.addListener(
      'willBlur',
      (obj) => {
        this._removeListener();
      }
    );
  }
  componentWillMount() {
    //this._addListener();
  }
  _addListener(){
    if (Platform.OS === 'android') {
      console.log('--add')
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  _removeListener(){
    console.log('--remove')
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }
  onBackAndroid=()=>{
   
    if(lastBackTime && (lastBackTime+2000) >= Date.now()){ //退出应用
      return false;
    } else {
      this.refs.toast.show("再按一次退出应用",1000);
      lastBackTime = Date.now();
      return true
    }
  }
  render(){
    const title2 = 'Hexagon Prestige Aroma C 花灑'
    const subTitle2 = '純天然香薰精油灑芯，沐浴時散發淡淡清香，舒緩緊'
    const title3 = '喜慶中秋 月餅優惠低至53折'
    const subTitle3 = '純天然香薰精油灑芯，沐浴時散發淡淡清香，舒緩緊'
    const title4 = 'Hexagon Prestige Aroma C 花灑'
    const subTitle4 = '純天然香薰精油灑芯，沐浴時散發淡淡清香，舒緩緊'
    return(
      <View style={styles.container}>
        <LogoHeader/>
        <ScrollView > 
          <TopView />
          <GridView {...this.props}/>
          <SplitView height={10}/>
          <View style={{marginTop: scale(20)}}>
            <CardView img={require('@/images/home/img1.jpg')}/>
            <CardView img={require('@/images/home/img2.jpg')} title={title2} subTitle={subTitle2}/>
            <CardView img={require('@/images/home/img3.jpg')} title={title3} subTitle={subTitle3}/>
            <CardView img={require('@/images/home/img4.jpg')} title={title4} subTitle={subTitle4}/>
            <CardView img={require('@/images/home/img5.jpg')}/>
          </View>
        </ScrollView>
        <Toast ref="toast" position='center'  />
      </View>
    )
  }
}