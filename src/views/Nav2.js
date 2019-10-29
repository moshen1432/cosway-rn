import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, 
  Animated,StatusBar,
  Easing,
} from 'react-native';
import {createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import {Provider } from '@ant-design/react-native';
import {isIphoneX} from '@/utils/device'
import Home from '@/views/home/index'
import Login from '@/views/login/login'
import Message from '@/views/message/message'
import Settings from '@/views/settings/index'
import Welcome from '@/views/Welcome'
import MyCoupon from '@/views/settings/my-coupon'
import Shopping from '@/views/home/shopping'
import ShareList from '@/views/settings/share-list'
import FundIncome from '@/views/settings/fund-income'
import eAP from '@/views/home/eAP'
import ForgetPwd from '@/views/login/forget-pwd'
import ForgetPwdSecond from '@/views/login/forget-pwd/Second'
import ForgetPwdThird from '@/views/login/forget-pwd/Third'
import ForgetAcctPwd from '@/views/login/forget-acct-pwd'
import ComActive from '@/views/home/comActive'
import ActiveDetail from '@/views/home/comActive/ActiveDetail'
import Register from '@/views/login/register'
import RegSecond from '@/views/login/register/RegSecond'
import SetPwd from '@/views/login/register/SetPwd'
import RegComplete from '@/views/login/register/Complete'
import PayMethod from '@/views/login/register/PayMethod'
import ProductDetail from '@/views/home/shopping/Detail'
import Scan from '@/views/home/scan'
//let store = createStore(reducers, applyMiddleware(thunk));
const navOptions = {
  header: null,
  headerStyle:{
    //paddingTop: 20,
    backgroundColor:'white',//'#007751',
    //height:60,
    fontWeight:'bold',
  },
  headerTitleStyle:{
    color:'#333',
    fontSize:18,
    textAlign:'center',
    flex:1,
    fontWeight:'normal',
  },
}
//转场动画配置
const transitionConfig = {
  //screenInterpolator: StackViewStyleInterpolator.forHorizontal,
  transitionSpec: {
    duration: 300,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;

    const height = layout.initHeight;
    const width = layout.initWidth;
    const translateY = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [height, 0, 0],
    });
    const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [width, 0, 0],
    });

    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index],
      outputRange: [0, 1, 1],
    });

    return { opacity, transform: [{ translateX }] };
  },
}
const HomeStack = createStackNavigator(
  { 
    Welcome,
    Home,
    Shopping,
    eAP,
    ComActive,
    ProductDetail,
    ActiveDetail,
    Scan
  },
  {
    transitionConfig:()=>(transitionConfig),
    defaultNavigationOptions:navOptions
  }
);
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  let routes = navigation.state.routes;
  if(routes[routes.length-1].routeName == 'Home'){
    tabBarVisible = true;
  }
  // if(navigation.state.index > 0){
  //   tabBarVisible = false;
  // }
  return {
    tabBarVisible,
  };
};
const LoginStack = createStackNavigator(
  { 
    Login,
    ForgetPwd,
    ForgetPwdSecond,
    ForgetPwdThird,
    ForgetAcctPwd,
    Register,
    RegSecond,
    SetPwd,
    RegComplete,
    PayMethod
  },
  {
    transitionConfig:()=>(transitionConfig),
    defaultNavigationOptions:navOptions
  }
);
LoginStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  // if (navigation.state.index > 0) {
  //   tabBarVisible = false;
  // }
  return {
    tabBarVisible,
  };
};
const MessageStack = createStackNavigator(
  { 
    Message
  },
  {
    transitionConfig:()=>(transitionConfig),
    defaultNavigationOptions:navOptions
  }
);
MessageStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  //let routes = navigation.state.routes;
  if(navigation.state.index > 0){
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
const SettingsStack = createStackNavigator(
  { 
    Settings,
    MyCoupon,
    ShareList,
    FundIncome
  },
  {
    transitionConfig:()=>(transitionConfig),
    defaultNavigationOptions:navOptions
  }
);
SettingsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if(navigation.state.index > 0){
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Login: LoginStack,
    Message: MessageStack,
    Settings: SettingsStack
  },
  {
    initialRouteName:'Home',
		lazy:true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        //console.log('routeName',routeName)
        let iconName;
        if (routeName === 'Home') {
          //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = focused ? require('@/images/tab/nav_bottom_cr_ico1.png') : require('@/images/tab/nav_bottom_ico1.png');
        } else if (routeName === 'Login') {
          iconName = focused ? require('@/images/tab/nav_bottom_cr_ico2.png') : require('@/images/tab/nav_bottom_ico2.png');
        }  else if (routeName === 'Message') {
          iconName = focused ? require('@/images/tab/nav_bottom_cr_ico3.png') : require('@/images/tab/nav_bottom_ico3.png');
        } else if (routeName === 'Settings') {
          iconName = focused ? require('@/images/tab/nav_bottom_cr_ico4.png') : require('@/images/tab/nav_bottom_ico4.png');
        }
        return <Image style={styles.tabIcon} source={iconName}/>;
      },
      tabBarLabel:({focused})=>{
        const { routeName } = navigation.state;
        //console.log('routeName',routeName)
        var textColor = focused ? "#00295B" : "#A4A8A8";
        let title = "";
        if (routeName === 'Home') {
          title = "主頁";
        } else if (routeName === 'Login') {
          title = "登入";
        } else if (routeName === 'Message') {
          title = "訊息";
        } else if (routeName === 'Settings') {
          title = "設置";
        }
        return <View style={styles.tabTextView}><Text style={{fontSize:13,color:textColor}}>{title}</Text></View>
      }
    }),
    tabBarOptions: {
      activeTintColor: '#007751',
      inactiveTintColor: '#9A9691',
    },
  }
);
const Navigator = createAppContainer(TabNavigator);
//export default createAppContainer(TabNavigator);
export default class App extends React.Component {
  constructor(props) {
      super(props);
      Text.defaultProps = Object.assign({}, Text.defaultProps, { allowFontScaling: false, color: "#666" })
  }
  render() {
    return (
      // <Provider>
        <View style={{ flex: 1, paddingBottom:isIphoneX()?20:0}}>
          <StatusBar
              animated={false} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
              hidden={false}  //是否隐藏状态栏。
              networkActivityIndicatorVisible={false}//仅作用于ios。是否显示正在使用网络。
              showHideTransition={'fade'}//仅作用于ios。显示或隐藏状态栏时所使用的动画效果（’fade’, ‘slide’）。
              backgroundColor='rgba(255,255,255,0)'// {'transparent'} //状态栏的背景色
              translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
              barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
          />
          {/* <Provider store={store}> */}
              <Navigator />
          {/* </Provider> */}
        </View>
      // </Provider>
    );
  }
}
const styles = StyleSheet.create({
  tabTextView:{
    justifyContent:'center',
    alignItems:'center',
  },
  tabIcon:{
    width:20,
    height:20,
    resizeMode:'contain'
  }
});