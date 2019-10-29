
import React,{Component} from 'react'
import{
  View,Text,TouchableOpacity,
  StyleSheet,ScrollView,Image
} from 'react-native'
import {width, scale, colors} from '@/utils/device'
export default class CardView extends Component{
  render(){
    const {item,last, hideLeft} = this.props
    const rowS = {flexDirection: 'row'}
    const lS = {alignItems: 'center'}
    const padW = scale(15)
    const lineT = {backgroundColor:'#DEDEDE',width:scale(2),height:scale(40)}
    const lineB = {flex:6,backgroundColor:'#DEDEDE',width:last ? 0 : scale(2),height:'100%'}
    const img = {width: scale(24),height:scale(24),marginLeft:scale(8),marginRight:scale(8),marginTop:scale(5),marginBottom:scale(5)}
    const rS = {flex:1,marginTop:padW,marginRight:padW,borderRadius:scale(8),backgroundColor:'white',paddingTop: padW,paddingLeft:padW}
    const row1 = {flexDirection:'row',justifyContent:'space-between',alignItems: 'center'}
    const t1 = {fontWeight:'bold',color:'#00AFDA'}; 
    const t3 = {color:'#333',fontSize:scale(16),fontWeight:'bold',paddingTop:scale(8),paddingBottom:scale(10)}
    const row4 = {paddingTop:padW,paddingBottom:padW,paddingRight:padW,borderBottomWidth:1,borderBottomColor:'#eee',borderTopWidth:1,borderTopColor:'#eee'}
    const durText = {color: '#333',fontSize: scale(14),fontWeight:'bold'}
    const t4 = {color:'#333',fontSize: scale(14),marginRight:scale(10)}
    const row30 = {flexDirection:'row',alignItems:'center',}
    const img2 = {marginLeft:0,width:scale(20),height:scale(20)}
    const row5 = {paddingTop:padW,paddingBottom:padW,paddingRight:padW,borderBottomWidth:1,borderBottomColor:'#eee'}
    const addText = {color:'#333',fontSize:scale(12)}
    const t5 = {color:'#333',fontWeight:'bold',fontSize:scale(14)}
    const row22 = {flexDirection:'row',justifyContent:'flex-end'}
    const btnText = {color:'white',fontSize:scale(15)}
    const btnS = {backgroundColor:item.type==2?'#08286A':'#999',alignItems:'center',
      paddingTop:scale(10),paddingBottom:scale(10),marginTop:scale(10),marginBottom:scale(10),marginRight:padW}
    const typeText = {fontSize: scale(14),fontWeight:'bold',paddingRight:padW,color:item.type == 1?'#EE1443':'#999'}
    return(
      <View style={rowS}>
        { hideLeft?null:
          <View style={lS}>
            <View style={lineT}></View>
            <Image style={img} source={require('@/images/home/company/news_ico1.png')}/>
            <View style={lineB}></View>
          </View>
        }
        <View style={rS}>
          <View style={row1}>
            <Text style={t1}>{item.t1}</Text>
            <Text style={typeText}>{item.type==1 ? '名額已滿' : item.type==0 ? '活動已結束' : ''}</Text>
          </View>
          <Text style={t3}>{item.t2}</Text>
          <View style={[row1,row4]}>
            <Image style={[img,img2]} source={require('@/images/home/company/news_sj.png')}/>
            <View style={row30}>
              <Text style={t4}>{item.date1}</Text>
              <Text style={durText}>{item.date2}</Text>
            </View>
          </View>
          <View style={[row5,{borBottomWidth: item.type>-1 ? 1 : 0}]}>
            <View style={row1}>
              <Image style={[img,img2]} source={require('@/images/home/company/news_fx.png')}/>
              <Text style={t5}>{item.t3}</Text>
            </View>
            <View style={row22}>
              <Text style={addText}>{item.addr}</Text>
            </View>
          </View>
          { item.type==-1?null:hideLeft?null:
            <TouchableOpacity style={btnS} onPress={this.props.press}><Text style={btnText}>按此報名</Text></TouchableOpacity>
          }
        </View>
      </View>
    )
  }
}