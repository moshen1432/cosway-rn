import React,{Component} from 'react'
import{
  View,Animated,Easing,
  Image,TouchableOpacity,
  ScrollView,StyleSheet,
  Text
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import ImagePicker from 'react-native-image-crop-picker'
import LocalBarcodeRecognizer from 'react-native-local-barcode-recognizer'
import { statusBarHeight, scale, width } from '@/utils/device'
export default class Scan extends Component{
  constructor(props) {
    super(props);
    this.state = {
      moveAnim: new Animated.Value(0),
      anim: null,
      data: '',
    };
  }
  componentDidMount() {
      this.startAnimation();
  }
  startAnimation = () => {
    this.state.moveAnim.setValue(0);
    const anim = Animated.timing(
        this.state.moveAnim,
        {
            toValue: -200,
            duration: 1500,
            easing: Easing.linear
        }
    ).start(() => this.startAnimation());
    this.setState({anim})
  };
  //  识别二维码
  onBarCodeRead = (result) => {
    const e = result 
    console.log('e', result);
    if(this.state.data) return
    const { navigate } = this.props.navigation;
    const {data} = result;
    ///this.state.anim.stop()
    alert('扫描结果:'+data)
    if(data) this.setState({data})
    /*
    navigate('Sale', {
        url: data
    })
    */
  };
  _pickerImg(){
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: false,
      includeBase64:true
    }).then(image => {
			this._handleImage(image);
    });
  }
  _handleImage(image){
    console.log('image', image)
    if(image.data){
      this.recoginze(image.data)
    }
  }
  recoginze = async (data)=>{
    let result = await LocalBarcodeRecognizer.decode(data.replace("data:image/jpeg;base64,",""),{codeTypes:['ean13','qr']});
    alert('识别结果：'+result);
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
                this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            onBarCodeRead={this.onBarCodeRead}
            scanAreaLimit={true}
            scanAreaX={115}
            scanAreaY={328}
            scanAreaWidth={522}
            scanAreaHeight={521}
        >
          <View style={styles.top}></View>
          <View style={styles.middle}>
            <View style={styles.mLeft}></View>
            <View style={styles.rectangleContainer}>
              <View style={styles.rectangle}/>
              <Animated.View style={[
                  styles.border,
                  {transform: [{translateY: this.state.moveAnim}]}]}/>
            </View>
            <View style={styles.mLeft}></View>
            
          </View>
          <View style={styles.tView}>
            <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
          </View>
          
          <View style={styles.top}></View>
          <TouchableOpacity style={styles.btnView} onPress={()=>this._pickerImg()}>
            <Text style={styles.btnText}>相册</Text>
          </TouchableOpacity>
        </RNCamera>
      </View>
    );
  }
}

const bgT = 'rgba(0,0,0,0.4)'
const boxW = width* 0.6
const styles = StyleSheet.create({
  tView:{backgroundColor: bgT,width,justifyContent:'center',alignItems:'center'},
  mLeft: {width:(width-boxW)/2,backgroundColor: bgT,borderWidth:0,borderColor:'orange'},
  top: {width,borderWidth:0,borderColor:'blue',flex: 1, backgroundColor: bgT},
  btnText: {color:'white', fontSize:scale(16)},
  btnView: {position:'absolute',right:scale(30),top:statusBarHeight+20},
  container: {flex: 1,},
    preview: {
        flex: 1,justifyContent: 'center',alignItems: 'center',
        backgroundColor: 'gray',borderWidth:0,borderColor: 'red',
    },
    middle:{
      flexDirection:'row',
    },
    rectangleContainer: {
      width,flex: 1,alignItems: 'center', 
      //flexDirection:'row',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      //backgroundColor: 'rgba(0,0,0,0.5)',
      borderWidth:0,
      borderColor: 'yellow',
    },
    rectangle: {
        height: boxW,
        width: boxW,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
        //backgroundColor: 'red'
    },
    rectangleText: {
        flex: 0,color: '#fff',marginTop: 10
    },
    border: {
      flex: 0,
      width: boxW,
      height: 2,
      backgroundColor: '#00FF00',
    }
});