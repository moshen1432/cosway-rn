/**网上购物 */
import React,{Component} from 'react'
import{
  View,Text,TouchableOpacity,
  StyleSheet,Image,ScrollView,
  ImageBackground,TextInput
} from 'react-native'
import NormalHead from '@/components/tabbar/NormalHead'
import SplitView from '@/components/SplitView'
import {width, scale,colors} from '@/utils/device'
import ProdSwiper from './Swiper'
export default class ProductDetail extends Component{
  constructor(props){
    super(props)
    this.state = {
      item: this.props.navigation.getParam('item'),
      desc: '採用天然高質材料醸造，配方更濃縮、吸收率更高，功效及營養同時升級，更加入維他命C，增強免疫力，為你帶來好精神。\n\n'+
      ' • 天然醸製的醋有助改善新陳代謝，舒緩肌肉酸痛及身體疲勞，解決都市人的長期勞累。\n'+
      ' • 醋酸是身體產生能量的重要元素，補充醋酸能促進體內克氐循環，幫助燃燒脂肪。\n'+
      ' • 改善血液循環，舒緩手腳冰冷。\n'+
      ' • 促進腸胃蠕動，幫助消化，清除宿便。\n'+
      ' • 醋能結合其他營養素，加強吸收能力，尤其是礦物質。配合其他食物，有助鐵質及鈣質吸收。\n'+
      ' • 固體口嚼錠，不直接接觸牙齒，用溫水吞服，不傷琺瑯質。',
    }
  }
  render(){
    return(
      <View style={{flex:1}}>
        <NormalHead title="產品詳情" />
        <ScrollView style={{flex:1}}>
          <ProdSwiper height={300}/>
          <SplitView height={scale(20)}/>
          <View style={s.midView}>
            <Text style={s.t1}>奥米茄-3深海魚油1000</Text>
            <View style={s.row1}>
              <Text style={s.t2}>會貢價<Text style={s.t3}>  HK$ </Text><Text style={s.t4}>99.</Text><Text style={s.t5}>8</Text></Text>
              <ImageBackground style={s.evImg2}source={require('@/images/home/shop/ev_ico.png')}>
                <Text style={s.evText}>10.00</Text>
              </ImageBackground>
            </View>
            <View style={{paddingTop:scale(5)}}>
            <Text style={s.t2}>零售價<Text style={s.t6}>  HK$ 109.8</Text></Text>
            </View>
          </View>
          <SplitView height={scale(20)}/>
          <View style={s.descView}>
            <Text style={s.title2}>商品詳情</Text>
            <TextInput numberOfLines={1} style={[s.sText,{padding:0}]} editable={false} multiline={true} value={this.state.desc}underlineColorAndroid="transparent"/>
          </View>
          <View style={{height: scale(50)}}></View>
        </ScrollView>
        <View style={s.bottomView}>
          <View style={s.br1}>
            <Image style={s.evImg} source={require('@/images/home/shop/link_ico.png')}/>
            <Text style={s.tb1}>分享好友</Text>
          </View>
          <View style={s.br1}>
            <Image style={s.evImg} source={require('@/images/home/shop/coll_ico.png')}/>
            <Text style={s.tb1}>願望清單</Text>
          </View>
          <TouchableOpacity style={s.btn}>
            <Text style={s.bt2}>去eshop購買</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const s = StyleSheet.create({
  sText: {color: '#000',fontSize: scale(13)},
  title2:{color:'#333', fontSize:scale(16), fontWeight:'bold',paddingBottom:scale(6)},
  descView:{padding: scale(20)},
  t6: {color:'#999', fontSize:scale(14),textDecorationLine:'line-through',paddingTop:scale(10)},
  evText:{
    color: colors.green,fontSize: scale(13),marginRight: scale(4),
  },
  evImg2: {
    width: scale(82),height: scale(20),flexDirection: 'row',resizeMode:'contain',
    justifyContent: 'flex-end',alignItems: 'center'
  },
  t2: {color: '#999',fontSize:scale(12),},
  t4: {color:'#ff0000',fontSize:scale(18)},
  t5: {color: '#ff0000', fontSize:scale(14)},
  t3: {fontSize: scale(14),color:'#ff0000',},
  row1:{flexDirection:'row', justifyContent:'space-between',alignItems:'center'},
  t1: {color:"#333",fontSize:scale(18),fontWeight:'bold',paddingBottom:scale(10)},
  midView:{padding: scale(20)},
  btn: {width: width*0.55 ,backgroundColor: '#00AFDA',justifyContent:'center',alignItems:'center',paddingTop:scale(15),paddingBottom:scale(15)},
  bt2: {color: 'white',fontSize:scale(15)},
  br1:{width:width*0.225, alignItems:'center',justifyContent:'center'},
  tb1:{
    color: '#666',fontSize: scale(13),
  },
  evImg: {
    width: scale(20),height: scale(20),
    resizeMode:'contain'
  },
  bottomView:{
    backgroundColor:'white',position:'absolute',bottom: 0,flexDirection:'row',justifyContent:'space-around',marginTop:scale(50),height:scale(50)
  },
})