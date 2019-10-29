
import React, { Component } from 'react';
import {
  Text, View, Image,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

import { scale, colors, width } from '@/utils/device';

export default class MySwiper extends Component {
  static defaultProps = {
    height: 200,
    imgList: [],
  }

  render() {
    // if (this.props.imgList) {
    //   imgList = this.props.imgList
    // }
    const imgList = [
      'http://img.productexam.cn/shop4.png',
      'http://img.productexam.cn/shop5.png',
      'http://img.productexam.cn/shop2.png',
      'http://img.productexam.cn/shop1.png',
    ]
    const dStyle = {width:scale(20),height:scale(4),position:'relative',bottom:scale(-10)}
    return (
      <View style={[styles.swiper, { height: scale(this.props.height)}, this.props.swiperStyle]}>
        <Swiper style={styles.wrapper} 
          activeDotColor='#00AFDA'
          showsButtons={false} 
          autoplay={true}
          dotStyle={dStyle}
          activeDotStyle={dStyle}
          height={scale(this.props.height)}>
          {
            imgList.map((img, i) => {
              return (
                <View style={styles.slide} key={i}>
                  <Image style={styles.swiperImg} source={{ uri: img }} />
                </View>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  swiperImg: {
    flex:1,
    width: width*0.6,
    resizeMode:'contain',
    marginTop: scale(40),
    marginBottom: scale(40)
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'transparent',
  },
  swiper: {
    borderWidth:0,
    // height: scale(230),
    width: '100%',
  }
})