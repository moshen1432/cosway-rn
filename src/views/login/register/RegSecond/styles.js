import { StyleSheet, } from 'react-native';
import { scale, height, width, colors } from '@/utils/device';

export default StyleSheet.create({
  tipsText: {paddingHorizontal:scale(25),color: colors.gray,fontSize: scale(12),paddingBottom:scale(10),position:'relative',top:scale(-10)},
  btnBox: {backgroundColor:'#f0f0f0',padding: scale(20), flexDirection:'row',alignItems:'center'},
  t1: {color:'#333',fontSize:scale(13),paddingTop:scale(10),paddingHorizontal:scale(5)},
  box1:{backgroundColor:'#F0F0F0',padding:scale(15)},
  arrowImg: {width: scale(7),height: scale(14),marginLeft: scale(10),marginRight: scale(0)},
  t2: {color: '#999',fontSize:scale(15)},
  t5: {color: '#333',fontSize:scale(15)},
  row0: {flexDirection:'row',alignItems:'center',},
  box3: {height:scale(56),paddingVertical:scale(8), paddingLeft: scale(20),flexDirection:'row',justifyContent:'space-between' ,alignItems:'center',
    paddingRight: scale(20),backgroundColor: 'white'},
  red:{color:'red'},
  textL: {color: colors.gray2,fontSize: scale(16)},
  card1:{backgroundColor:'white',borderWidth:0,borderColor:'red'},
  line2:{backgroundColor:'#DEDEDE',marginLeft:scale(10),height:StyleSheet.hairlineWidth},
  content:{backgroundColor: colors.bgColor},
  line:{backgroundColor:'#F0F0F0',height: scale(15)}
})