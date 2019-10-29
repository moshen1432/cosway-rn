/**我的優惠券 */
import React,{Component} from 'react'
import{
  View,Text,Image,Modal,
  StyleSheet,TouchableOpacity,
  Clipboard,PermissionsAndroid 
} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import Toast, {DURATION} from 'react-native-easy-toast'
import {width, scale, colors} from '@/utils/device'
import {downloadImage} from '@/utils/common'
export default class TopView extends Component{
  constructor(props){
    super(props)
    this.state = {
      code: '6he69p',
      codeImg: 'http://img.productexam.cn/code_ico.png',
      modal: false
    }
  }
  async _saveImage(){
    const grant = await this.requestExternalStoragePermission();
    if(grant != 'granted') return;
    //console.log('grant',grant)
    const uri = this.state.codeImg
    downloadImage(uri).then((res)=>{
      //alert(JSON.stringify(res))
      if(res.statusCode==200){
        this.refs.toast.show('保存成功')
      }else{
        this.refs.toast.show('保存失败')
      }
    }).catch((error)=>{
      //alert(JSON.stringify(error))
      this.refs.toast.show('保存失败')
      console.log(error)
    })

  }
  requestExternalStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: '权限申请',
          message: '要允许App访问您设备的媒体文件和相册吗？'
        },
      );
      return granted;
    } catch (err) {
      console.error('Failed to request permission ', err);
      return null;
    }
  };
  _copyCode(){
    Clipboard.setString(this.state.code);
    this.refs.toast.show('复制成功')
  }
  _scanImage(){
    this.setState({
      modal: true
    })
  }
  render(){
    const {code, codeImg, modal} = this.state
    return(
      <View>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.label}>我的推薦碼</Text>
            <Text style={styles.code}>{code}</Text>
          </View>
          <TouchableOpacity style={styles.rightWrap} onPress={()=>this._copyCode()}>
            <Text style={styles.blueText}>複製推薦碼</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.label}>我的QR Code</Text>
            {/* <Text style={styles.code}>6he69p</Text> */}
            <TouchableOpacity onPress={()=>this._scanImage()}>
              <Image style={styles.codeImg} source={{uri: codeImg}}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.rightWrap} onPress={()=>this._saveImage()}>
            <Text style={styles.blueText}>儲存至相冊</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnWrap}>
          <Text style={styles.btnText}>分享給好友</Text>
        </TouchableOpacity>
        <Modal visible={modal} transparent={true}
          onRequestClose={() => this.setState({modal: false})} >
            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}} 
              onPress={()=>this.setState({modal: false})}>
              <Image style={styles.bigImg} source={{uri: codeImg}}/>
            </TouchableOpacity>
        </Modal>
        <Toast ref="toast" position='center'  />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  bigImg:{
    width: width*0.4,
    height: width*0.4
  },  
  btnText: {
    color: 'white',
    fontSize: scale(16)
  },
  btnWrap:{
    marginTop: scale(20),
    marginBottom: scale(20),
    marginLeft: scale(20),
    marginRight: scale(20),
    backgroundColor:'#002C63',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: scale(10),
    paddingBottom: scale(10)
  },
  codeImg:{
    width: scale(28),
    height: scale(28)
  },
  code:{
    fontSize: scale(16),
    color: colors.gray2
  },
  label: {
    fontSize: scale(16),
    color: colors.gray2,
  },
  rightWrap:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:1,
    padding: scale(20),
    paddingTop: scale(16),
    paddingBottom: scale(16),
    borderLeftWidth: 1,
    borderLeftColor: colors.bgColor
  },
  left:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(16)
  },
  blueText:{
    color: colors.blue2,
    fontSize: scale(16)
  },
  row: {
    marginTop: scale(15),
    flexDirection:'row',
    backgroundColor: 'white'
  }
})