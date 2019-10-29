import { StyleSheet, } from 'react-native';
import { scale, height, width, colors } from '@/utils/device';

export default StyleSheet.create({
  bView: {backgroundColor: 'white'},
  content: {backgroundColor:'#f0f0f0',flex:1},
  btnStyle: {backgroundColor: colors.blackBlue,marginHorizontal:scale(15),marginTop: scale(15)},
  line2:{backgroundColor:'#DEDEDE',marginLeft:scale(10),height:StyleSheet.hairlineWidth},
  tt1: {fontWeight:'bold'},
  t1: {color:'#333',fontSize:scale(13),paddingTop:scale(10),paddingHorizontal:scale(5)},
  box1:{backgroundColor:'#F0F0F0',padding:scale(15)},
})