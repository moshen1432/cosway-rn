import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet,
  ImageBackground,StatusBar
} from 'react-native'
import { colors, scale, width, statusBarHeight } from '@/utils/device';
import { withNavigation } from 'react-navigation';

class BgHeader extends PureComponent {
  componentWillMount() {
    this.viewDidApp = this.props.navigation.addListener(
      'didFocus',
      (obj) => {
        StatusBar.setBarStyle('light-content')
      }
    )
    this.viewDidApp2 = this.props.navigation.addListener(
      'willBlur',
      (obj) => {
        StatusBar.setBarStyle('dark-content')
      }
    );
  }
    constructor(porps) {
        super(porps);
    }

    static dafaultProps = {
        white: false,
    }

    goBack() {
        this.props.navigation.goBack()
    }

    render() {
      let { white } = this.props;
      return (
        <ImageBackground 
          source={require('@/images/set/order_top_bg.jpg')}
          style={[styles.bgHead, this.props.style]}>
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.backContainer}
                onPress={() => this.goBack()}>
                <Image source={require("@/images/back_white.png")} style={[styles.backImg, { tintColor: white ? "#fff" : "#fff" }]} />
            </TouchableOpacity>
            <Text style={[styles.normalHeadTitle, this.props.titleStyle]}>{this.props.title || "标题"}</Text>
            <View style={styles.backContainer}></View>
          </View>
          {this.props.subView}
        </ImageBackground>
      )
    }
}
//export default BgHeader;
export default withNavigation(BgHeader);

const styles = StyleSheet.create({
  headerRow:{
    flexDirection: 'row',
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderColor: 'white',
    // borderWidth: StyleSheet.hairlineWidth,
  },
  
  normalHeadTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400'
  },
  backImg: {
    width: scale(10),
    height: scale(20),
  },
  bgHead: {
    width,
    paddingTop: statusBarHeight,
    //height: statusBarHeight + scale(100),
    zIndex: 0,
  },
  normalHead: {
    width: width,
    height: statusBarHeight + scale(50),
    paddingTop: statusBarHeight,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 999,
    borderBottomColor:'#EDEBE9',
    borderBottomWidth: 1
  },
  backContainer: {
    width: scale(48),
    height: scale(48),
    justifyContent: 'center',
    alignItems: 'center'
  },
})