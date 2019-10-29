import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { colors, scale, width, statusBarHeight } from '@/utils/device';
import { withNavigation } from 'react-navigation';

class NormalHead extends PureComponent {
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
          <View style={[styles.normalHead, this.props.style]}>
              <TouchableOpacity
                  style={styles.backContainer}
                  onPress={() => this.goBack()}>
                  <Image source={require("@/images/back.png")} style={[styles.backImg, { tintColor: white ? "#fff" : "#666" }]} />
              </TouchableOpacity>
              <Text style={[styles.normalHeadTitle, this.props.titleStyle]}>{this.props.title || "标题"}</Text>
              <View style={styles.backContainer}></View>
          </View>
        )
    }
}

export default withNavigation(NormalHead);

const styles = StyleSheet.create({
    backContainer: {
        width: scale(48),
        height: scale(48),
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalHeadTitle: {
        fontSize: 18,
        color: '#333',
        fontWeight: '400'
    },
    backImg: {
      width: scale(10),
      height: scale(20),
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

})