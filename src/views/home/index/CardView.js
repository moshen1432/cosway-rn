
import React, {Component} from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
} from 'react-native';
import {width, scale} from '@/utils/device'
export default class GridView extends Component{
  render(){
    const {img, title, subTitle} = this.props
    let imgStyle = styles.cardImg
    if(title) imgStyle = styles.cardImg2
    return(
      <View style={styles.wrap}>
        <Image style={imgStyle} source={img}/>
        {!title ? null : 
          <View style={styles.textWrap}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle} numberOfLines={1}>{subTitle}</Text>
          </View>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  textWrap: {
    padding : scale(10),
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
    marginTop:-4,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    // shadowOffset: {
    //   width: 2,
    //   height: 2
    // },
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    color: '#333',
    fontSize: scale(18),
    paddingTop:  scale(5),
    paddingBottom:  scale(5),
  },
  subTitle: {
    color: '#333',
    fontSize: scale(14),
    paddingBottom:  scale(5),
  },
  cardImg2:{
    width: '100%',
    height: (width-scale(40))*0.512,
    resizeMode: 'contain',
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
  },
  cardImg:{
    width: '100%',
    height: (width-scale(40))*0.512,
    resizeMode: 'contain',
    borderRadius: scale(10)
  },
  wrap: {
    marginBottom: scale(20),
    marginLeft: scale(20),
    marginRight: scale(20),
    borderRadius: scale(10),
    // borderWidth: 1,
    // borderColor: 'red'
  }
})