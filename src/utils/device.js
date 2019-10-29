import { Dimensions, Platform, StatusBar , InteractionManager } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const delay = InteractionManager.runAfterInteractions;
// 安排一个函数在所有的交互和动画完成之后运行

// iPhoneX    XS
const X_WIDTH = 375;
const X_HEIGHT = 812;
// iPhoneXR XS Max
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');


function isIphoneX() {
  if(Platform.OS === 'ios' ){
    if(D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH){
      return true
    } else if(D_HEIGHT == XR_WIDTH && D_WIDTH == XR_HEIGHT){
      return true
    } else {
      return false
    }
  }
}
var iosHeight = isIphoneX() ? 44 : 20;

const statusBarHeight = (Platform.OS === 'ios' ? iosHeight : StatusBar.currentHeight)


const basePx = 375

//px转dp自适应
function scale(px) {
    return (px * width / basePx)
}


function isIos() {
    if (Platform.OS === 'ios') {
        return true
    }
    return false;
}

const colors = {
  blue2: '#00B1D9',
  green: "#62AD51",
  blue: '#00A2D0',
  blue3: '#00AFDA',
  blackBlue:'#002C63',
  gray: '#9a9691',
  gray1: '#e2e0db',
  gray2: '#343535',
  seagreen: "#007854",
  yellow: "#F39C15",
  borderColor: '#E8E8E8',
  bgColor: '#F1F0EE'
}

export {
    scale,
    height,
    width,
    statusBarHeight,
    isIos,
    isIphoneX,
    colors
}