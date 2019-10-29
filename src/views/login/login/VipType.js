/**會員類型 view */
import React,{PureComponent} from 'react'
import{
  View,StyleSheet,TouchableOpacity,
  Text,Modal,Image,
  TouchableWithoutFeedback
} from 'react-native'
import { PickerView } from '@ant-design/react-native'
import { colors, scale, width, height } from '@/utils/device';
export default class VipType extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      showModal:false,
    }
  }
  /*
  _onLayout = (e) => {
    let {x,y,width,height} = e.nativeEvent.layout
    console.log('e',e.nativeEvent)
    this.setState({
      boxP:  e.nativeEvent.layout
    })
  }
  */
  _selVipType(type){
    this.setState({
      showModal: false
    },()=>{
      this.props.selVipType(type)
    })
  }
  render(){ 
    const {title,vipType,rightTextStyle,height} = this.props
    //alert(vipType)
    const items = this.props.items || []
    const {showModal} = this.state
    //alert(JSON.stringify(rightTextStyle))
    //const {vipType} = this.state
    const arrowImage = <Image style={styles.arrowImg} source={require('@/images/set/input_r.png')}/>
    return(
      <View>
        <View style={[styles.row1,{height:height}]} >
          <Text style={styles.label}>{title ? title:'會員類型'}</Text>
          <TouchableOpacity style={styles.hor} 
            onPress={()=>this.setState({showModal: true})}>
            <Text style={[styles.netText,rightTextStyle]} >{items[vipType]}</Text>
            {arrowImage}
          </TouchableOpacity>
        </View>
        {/* 會員類型選擇 */}
        <Modal
          onRequestClose={() =>this.setState({showModal: false})}  
          visible={this.state.showModal}  
          transparent={true}  
          style={{flex:1}} 
        > 
          <TouchableWithoutFeedback onPress={()=>this.setState({showModal: false})}>
            <View style={styles.full}>
              <View style={styles.mainView}>
                <Text style={styles.titleText}>{title ? title:'會員類型'}</Text>
                {items.map((item, index) => {
                  return <TouchableOpacity onPress={()=>this._selVipType(index)} key={index}>
                  <Text style={[styles.selText]}>{item}</Text>
                </TouchableOpacity>
                })

                }
                {/* <TouchableOpacity onPress={()=>this._selVipType(0)}>
                  <Text style={[styles.selText]}>{text1}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._selVipType(1)}>
                  <Text style={[styles.selText]}>{text2}</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    )
  }
}
const rowH = scale(44)
const styles = StyleSheet.create({
  titleText:{
    color: '#000',
    fontSize: scale(18),
    width: '100%',
    textAlign: 'center',
    paddingTop: scale(10),
    paddingBottom: scale(10),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#aaa'
  },
  mainView: {
    width: width-scale(40),
    borderRadius: scale(6),
    position: 'relative',
    top: -height/8,
    backgroundColor:'white',
    paddingBottom: scale(10)
  },
  borBottom: { 
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#aaa'
  },
  selText: {
    color: '#444',
    fontSize: scale(16),
    paddingLeft: scale(20),
    paddingRight: scale(10),
    paddingTop:scale(10),
    paddingBottom:scale(10),
  },
  netText: {
    color: colors.blue2,
    fontSize: scale(16),
  },
  full:{
    flex: 1,
    backgroundColor:'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
    // borderColor:'red'
  }, 
  arrowImg: {
    width: scale(7),
    height: scale(14),
    marginLeft: scale(10),
    marginRight: scale(10)
  },
  hor: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    color: colors.gray2,
    fontSize: scale(16)
  },
  row1: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    height: rowH,
    padding: scale(10),
    paddingRight:0,
  },
})