/**网上购物 */
import React,{Component} from 'react'
import{
  View,Text,FlatList,TouchableOpacity,
  StyleSheet,Image,ImageBackground
} from 'react-native'
import {width, scale, colors} from '@/utils/device'
import SplitView from '@/components/SplitView'
import {navPage} from '@/utils/common'
export default class GoodsList extends Component{
  constructor(props){
    super(props)
    this.state = {
      list: [
        {
          txt1:'30%', txt2:'有贈品',txt3: '$599/3件',
          img:'http://img.productexam.cn/shop6.png',
          title:'奧米茄-3深海魚油1000',star: 4,
          txt4: '99.8', txt5: '10.00',
          txt6: '109.8', share: '627',like: '8666',
          coll:true,
        },
        {
          txt1:'', txt2:'',txt3: '',
          img:'http://img.productexam.cn/shop5.png',
          title:'奧米茄-3深海魚油1000',star: 4,
          txt4: '99.8', txt5: '10.00',
          txt6: '109.8', share: '627',like: '8666',
          coll:false
        },
        {
          txt1:'', txt2:'',txt3: '',
          img:'http://img.productexam.cn/shop4.png',
          title:'奧米茄-3深海魚油1000',star: 4,
          txt4: '99.8', txt5: '10.00',
          txt6: '109.8', share: '627',like: '8666',
          coll:false
        },
        {
          txt1:'', txt2:'',txt3: '',
          img:'http://img.productexam.cn/shop3.png',
          title:'奧米茄-3深海魚油1000',star: 4,
          txt4: '99.8', txt5: '10.00',
          txt6: '109.8', share: '627',like: '8666',
          coll:false
        },
        {
          txt1:'', txt2:'',txt3: '',
          img:'http://img.productexam.cn/shop2.png',
          title:'奧米茄-3深海魚油1000',star: 4,
          txt4: '99.8', txt5: '10.00',
          txt6: '109.8', share: '627',like: '8666',
          coll:false
        },
        {
          txt1:'', txt2:'',txt3: '',
          img:'http://img.productexam.cn/shop1.png',
          title:'奧米茄-3深海魚油1000',star: 4,
          txt4: '99.8', txt5: '10.00',
          txt6: '109.8', share: '627',like: '8666',
          coll:false
        }
      ]
    }
  }
  _goDetail(item){
    navPage(this.props.navigation, 'ProductDetail',{item})
  }
  _renderStar(star){
    const starImg = {
      width: scale(10),
      height: scale(10),
      margin: scale(2),
    }
    let views = []
    for(let i=0; i<5; i++){
      let img = require('@/images/home/shop/star_av_ico.png')
      if(i >= star) img = require('@/images/home/shop/star_ico.png')
      views.push(
        <Image key={i} style={starImg} source={img}/>
      )
    }
    return views
  }
  _renderItem=({ item, index })=>{
    let collImg = require('@/images/home/shop/coll_av_ico.png')
    if(!item.coll) collImg = require('@/images/home/shop/coll_ico.png')
    return(
      <View style={styles.goodsItem}>
        {!item.txt1?null:
          <ImageBackground style={styles.topImg}source={require('@/images/home/shop/product_top_ico.png')}> 
            <Text style={styles.text2}>{item.txt1}</Text>
            <Text style={styles.text3}>OFF</Text>
          </ImageBackground>
        }
        {/* 商品图片 */}
        <View style={styles.row1}>
          <TouchableOpacity activeOpacity={0.6} onPress={()=>this._goDetail(item)}>
            <Image style={styles.goodsImg}source={{uri: item.img}}/>
          </TouchableOpacity>
        </View>
        {/* 赠品 */}
        {!item.txt2?<View style={styles.row2}><Text style={styles.text41}></Text></View>:
          <View style={styles.row2}>
            <Text style={styles.text4}>{item.txt2}</Text>
            <Text style={[styles.text4,styles.text5]}>{item.txt3}</Text>
          </View>
        }
        <Text style={styles.titleText}>{item.title}</Text>
        {/* 星级 评价 */}
        <View style={styles.starView}>
          {this._renderStar(item.star)}
        </View>
        {/* 价格 */}
        <View style={styles.row4}>
          <Text style={styles.text6}>HK$ {item.txt4}</Text>
          <ImageBackground style={styles.evImg}source={require('@/images/home/shop/ev_ico.png')}>
            <Text style={styles.evText}>{item.txt5}</Text>
          </ImageBackground>
        </View>
        <Text style={styles.text7}>HK$ {item.txt6}</Text>
        <SplitView height={1}/>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.botRow}>
            <Image style={styles.shareImg}source={require('@/images/home/shop/link_ico.png')}/>
            <Text style={styles.shareText}>{item.share}</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.botRow}>
            <Image style={styles.likeImg} source={collImg}/>
            <Text style={styles.shareText}>{item.like}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render(){
    return(
      <FlatList
        style={styles.content}
        data={this.state.list}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    )
  }
}

const marginW = scale(16)
const itemW = (width-marginW*3)/2
const styles = StyleSheet.create({
  line: {
    backgroundColor: colors.gray1,
    width: 1,
    height: scale(20),
  },
  likeImg: {
    width: scale(17),
    height: scale(15),
    resizeMode:'contain'
  },
  botRow: {
    paddingTop: scale(10),
    paddingBottom: scale(10),
    flexDirection: 'row',
    alignItems: 'center'
  },
  shareText: {
    color: colors.gray,
    marginLeft: scale(8)
  },
  shareImg: {
    width: scale(16),
    height: scale(16),
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text7: {
    color: colors.gray,
    paddingLeft: scale(10),
    fontSize: scale(14),
    textDecorationLine:"line-through"
  },
  evText:{
    color: colors.green,
    fontSize: scale(12),
    marginRight: scale(4),
  },
  evImg: {
    width: scale(60),
    height: scale(15),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text6: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: scale(16),
  },
  row4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: scale(10),
    paddingRight: scale(10),
  },
  starView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    paddingBottom: scale(5)
  },
  titleText: {
    color:'#343535',
    fontWeight: 'bold',
    fontSize: scale(13),
    paddingLeft: scale(10),
    paddingTop: scale(10),
    paddingBottom: scale(8)
  },
  text5:{
    backgroundColor: colors.green,
  },
  row1: {
    alignItems: 'center',
  },
  text41: {
    fontSize: scale(12),
  },
  text4: {
    backgroundColor: colors.blue,
    color:'white',
    fontSize: scale(12),
    textAlignVertical:'center',
    paddingLeft: scale(4),
    paddingRight: scale(4),
    marginLeft:scale(4),
  },
  row2: {
    flexDirection: 'row',
  },
  text2:{
    color: 'white',
    fontSize: scale(10)
  },
  text3: {
    color: 'white',
    fontSize: scale(11)
  } ,
  topImg: {
    position: 'absolute',
    top: 0,
    left: scale(6),
    width: scale(30),
    height: scale(30),
    alignItems: 'center'
  },
  goodsItem:{
    backgroundColor: 'white',
    marginLeft: marginW,
    marginTop: marginW,
    width: itemW,
   
  },
  goodsImg:{
    width: itemW*0.65,
    height: itemW*0.65,
    resizeMode: 'contain',
    marginTop: scale(30),
    marginBottom: scale(10),
    // borderWidth:1,
    // borderColor:'red'
  },
  content:{
    flex:1,
    backgroundColor:'#F1F0EE'
  }
})