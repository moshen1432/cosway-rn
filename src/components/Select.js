/**會員類型 view */
import React,{PureComponent} from 'react'
import{
  View,StyleSheet,TouchableOpacity,
  Text,Modal,Image,
  TouchableWithoutFeedback
} from 'react-native'
import { colors, scale, width, height } from '@/utils/device';
export default class Select extends PureComponent{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  _selItem(item){
    this.props._selItem(item)
  }
  render(){ 
    const {title,vipType,rightTextStyle,height,showModal} = this.props
    //alert(vipType)
    const items = this.props.items || []
    return(
      <Modal
        onRequestClose={() =>this.setState({showModal: false})}  
        visible={showModal}  
        transparent={true}  
        style={{flex:1}} 
      > 
        <TouchableWithoutFeedback onPress={this.props.hideModal}>
          <View style={styles.full}>
            <View style={styles.mainView}>
              <Text style={styles.titleText}>{title ? title:'選項'}</Text>
              {items.map((item, index) => {
                return <TouchableOpacity onPress={()=>this._selItem(item)} key={index}>
                <Text style={[styles.selText]}>{item.value}</Text>
              </TouchableOpacity>
              })
              }
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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