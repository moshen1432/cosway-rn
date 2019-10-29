import React from 'react';
import { Text, StatusBar, View , Animated,
  Easing,} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
//import StackViewStyleInterpolator from 'react-navigation-stack/lib/module/views/StackView/StackViewStyleInterpolator';
//import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { scale } from '@/utils/device';
import TabBarItem from '@/components/TabBarItem';
import Home from '@/views/home/home'
import Login from '@/views/login/login'
import Message from '@/views/message/message'
import Settings from '@/views/settings/settings'

//转场动画配置
const transitionConfig = {
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
const navOptions = {

}
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            text='主页'
            normalImage={require('@/images/tab/nav_bottom_ico1.png')}
            selectedImage={require('@/images/tab/nav_bottom_cr_ico1.png')}
          />
        )
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            text='登入'
            normalImage={require('@/images/tab/nav_bottom_ico2.png')}
            selectedImage={require('@/images/tab/nav_bottom_cr_ico2.png')}
          />
        )
      }),
    },
    Message: {
      screen: Message,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => (
          <GiftTabBarItem
            tintColor={tintColor}
            focused={focused}
            text='讯息'
            normalImage={require('@/images/tab/nav_bottom_ico3.png')}
            selectedImage={require('@/images/tab/nav_bottom_cr_ico3.png')}
          />
        )
      }),
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
              tintColor={tintColor}
              focused={focused}
              text='设置'
              normalImage={require('@/images/tab/nav_bottom_ico4.png')}
              selectedImage={require('@/images/tab/nav_bottom_cr_ico4.png')}
          />
        )
      }),
    },
  },
    {
      initialRouteName: 'Home',
      navigationOptions: {
        header: null
      },
      tabBarOptions: {
        //当前选中的tab bar的文本颜色和图标颜色
        activeTintColor: '#00295B',
        //当前未选中的tab bar的文本颜色和图标颜色
        inactiveTintColor: '#A4A8A8',
        //是否显示tab bar的图标，默认是false
        showIcon: true,
        //showLabel - 是否显示tab bar的文本，默认是true
        showLabel: false,
        //material design中的波纹颜色(仅支持Android >= 5.0)
        // pressColor: 'red',
        //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
        // pressOpacity: 0.8,
        style: {
          backgroundColor: '#fff',
          paddingBottom: 1,
          borderTopWidth: 0.5,
          paddingTop: 1,
          borderTopColor: '#d6d6d6',
          height: scale(52),
        },
        tabStyle: {
          paddingLeft: 0,
          paddingRight: 0
        },
        //tab 页指示符的样式 (tab页下面的一条线).
        indicatorStyle: { height: 0 },
      },
      //tab bar的位置, 可选值： 'top' or 'bottom'
      tabBarPosition: 'bottom',
      //是否懒加载
      lazy: true,
      //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
      backBehavior: 'initialRoute',
    }
);
//创建路由堆栈
const StackScreens = createStackNavigator({
    TabNavigator,
    Home,
    Login,
    Message,
    Settings
  }, 
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        header: null
    },
    transitionConfig:()=>(transitionConfig),
    // transitionConfig: () => ({
    //     // 只要修改最后的forVertical就可以实现不同的动画了。
    //     //screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    //     //screenInterpolator: CardStackStyleInterpolator.forHorizontal
    // })
  }
)
StackScreens.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  console.log('nav-',navigation);
  // if (navigation.state.index == 0 || navigation.state.index > 1) {
  //   tabBarVisible = false;
  // }
  let routes = navigation.state.routes;
  // if(routes[routes.length-1].routeName == 'register' || routes[routes.length-1].routeName == 'login'){
  //   tabBarVisible = false;
  // }
  if(routes[routes.length-1].routeName == 'Home'){
    tabBarVisible = true;
  }
  return {
    tabBarVisible,
  };
};

//export default createAppContainer(TabNavigator);
let Navigation = createAppContainer(StackScreens);
export default class App extends React.Component {
    constructor(props) {
        super(props);
        Text.defaultProps = Object.assign({}, Text.defaultProps, { allowFontScaling: false, color: "#666" })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    animated={false} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    networkActivityIndicatorVisible={false}//仅作用于ios。是否显示正在使用网络。
                    showHideTransition={'fade'}//仅作用于ios。显示或隐藏状态栏时所使用的动画效果（’fade’, ‘slide’）。
                    backgroundColor='rgba(255,255,255,0)'// {'transparent'} //状态栏的背景色
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
                />
             
                  <Navigation />
                
            </View>
        );
    }
}