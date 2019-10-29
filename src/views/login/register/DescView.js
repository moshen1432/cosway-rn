import React,{Component} from 'react'
import{
  View,StyleSheet,TextInput,
  Text,TouchableOpacity,Image,
   
} from 'react-native'
import Select from '@/components/Select'
import { colors, scale, width } from '@/utils/device';
export default class DescView extends Component{
  constructor(props){
    super(props)
    this.state = {
      result: -1,
      type1:0,
      accept:false,
      showModal: false,
      selType: '個人',
    }
  }
  selR(type){
    this.setState({
      result: type,
    })
  }
  switch(){
    this.setState({type1: !this.state.type1})
  }
  _selItem=(type)=>{
    this.setState({
      selType: type.value,
      showModal: false
    })
    this.props.typeChange(type.key)
  }
  //選擇
  _showSelect(){
    this.setState({
      showModal: true
    })
  }
  render(){
    const items = [
      {key:'a', value: '個人'},
      {key:'b', value: '公司'},
    ]
    const{result,type1,accept, showModal,selType} = this.state
    const {tab} = this.props
    const arrowImg = {width: scale(7),height: scale(14),marginLeft: scale(10),marginRight: scale(0)}
    const arrowImage = <Image style={arrowImg} source={require('@/images/set/input_r.png')}/>
    const t1 = '科士威（香港）有限公司欲使用申請人所提供之電郵地址、聯絡電話及通訊地址作上述直接促銷。但如未獲取申請人之有關同意，科士威（香港）有限公司將不會使用其個人資料作上述直接促銷，請申請人點選以下選項：';
    const t2 = '科士威（香港）有限公司（“本公司”）保留批准或拒絕申請人之申請而無須給予任何解釋。\n本網上申請之獨立業主協議書及有關在本公司網頁及本公司所有手冊之政策與程序及盈利計劃之一切條款（以下簡稱“eCosway條款”) 均為本網上申請之一部份。\n申請人一旦向本公司提供個人資料及在申請人同意的情況下，即視同其已同意本公司之「個人資料收集及使用聲明」並授權本公司於法例許可之範圍內將所收集之個人資料用於該聲明所述之用途及處理。如欲索取該聲明副本，請與銷售中心店員聯絡，或登入www.ecosway.biz瀏覽。本公司有權更改本申請表格及所有有關條款條款而無須事先通知。'
    const t3 = '致：科士威（香港）有限公司本人擬申請為科士威（香港）有限公司（“本公司”）之eCosway獨立業主（尊尚會員）（“ 業主（尊尚會員）”），如申請被接納，本人明白及同意遵守於此獨立業主協議書之各項條款與規則（“協議書”），並同意 遵守在本公司網頁及本公司所有手冊中之政策與程序及盈利計劃之一切條款與規則。在此，本人鄭重聲明，在本申請表格填報之所有資料，均正確無誤。'
    const norImg = require('@/images/login/circular_box.png');const selImg = require('@/images/login/circular_box_de.png')
    const imgS = {width: scale(16), height:scale(16),marginRight:scale(8)};const tS = {fontSize:scale(14),color:'rgb(52,53,53)'}; const tv = {flexDirection:'row',alignItems:'center',borderColor:'red',borderWidth:0,paddingBottom:scale(10)}
    const btnT = {color:'rgb(52,53,53)'};const tou = {borderWidth:StyleSheet.hairlineWidth,borderColor:'rgb(194,190,183)',height:scale(24),paddingLeft:scale(20),paddingRight:scale(24),borderRadius:scale(24)};
    const v1 = {justifyContent:'center',alignItems:'center'}
    const view1 = {paddingVertical:scale(15),borderBottomWidth:1, borderBottomColor:'#DEDEDE',marginBottom:scale(15)}
    const t4 = {color:'#333',fontSize:scale(15)}
    const t5 = {color:colors.blue3,fontSize:scale(15)}
    const view2 = {borderWidth:1,borderColor:'#BDBDBD',padding:scale(12),marginBottom:scale(10),flexDirection:'row',justifyContent:'space-between'}
    const row0 = {flexDirection:'row',alignItems:'center'}
    //alert(tab)
    return(
      <View>
        <View style={styles.content}>
          {tab == 0 ? null :
            <View style={view1}>
              <View style={view2}>
                <Text style={t4}>登記類別</Text>
                <TouchableOpacity style={row0} onPress={()=>this._showSelect()}>
                  <Text style={t5}>{selType}</Text>
                  {arrowImage}
                </TouchableOpacity>
                <Select 
                    title='選擇登記類別'
                    items={items} 
                    _selItem={this._selItem}
                    showModal={showModal} 
                    hideModal={()=>this.setState({showModal:false})}/>
              </View>
              <Text style={styles.cText}>申請人姓名或公司名稱（須與身份證明文件或商業登記證相符）</Text>
            </View>
          }
          <Text style={styles.bText}>申請人可自行選擇是否願意收取有關新產品、每月促銷資訊及任何形式的直接促銷。</Text>
          <TextInput style={[styles.sText,{padding:0}]} editable={false}multiline={true}value={t1}underlineColorAndroid="transparent"/>
          <Text style={styles.sText}></Text>
          <View style={{borderBottomColor:'rgb(226,224,219)',borderBottomWidth:1,paddingBottom: scale(10),marginBottom:scale(10)}}>
            <TouchableOpacity onPress={()=>this.selR(0)}style={tv}><Image style={imgS}source={result==0?selImg:norImg}/><Text style={tS}>同意，以電郵方式訂閱。</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.selR(1)}style={tv}><Image style={imgS}source={result==1?selImg:norImg}/><Text style={tS}>拒絕，我拒絕使用上述之個人資料作上述直接促銷。</Text></TouchableOpacity>
          </View>
          <Text style={styles.bText}>備註</Text>
          {type1 == 0?
            <View>
              <Text style={[styles.aText,{paddingTop:scale(10)}]}>1.科士威（香港）有限公司（“本公司”）保留批准或拒絕申請人之申請而無須給予任何解釋。</Text>
              <Text numberOfLines={2}style={[styles.aText,{paddingTop:scale(10)}]}>2.本網上申請之獨立業主協議書及有關在本公司網頁及本公司所有手冊之政策與程序及盈利計劃之一切條款（以下簡稱“eCosway條款”) 均為本網上申請之一部份。</Text>
            </View>
            :<TextInput  style={[styles.aText,{padding:0}]} editable={false}multiline={true}value={t2}underlineColorAndroid="transparent"/>
          }
          <View style={v1}><TouchableOpacity style={tou} onPress={()=>{this.switch()}}><Text style={btnT}>{type1==0?'展開內容':'收起內容'}</Text></TouchableOpacity></View>
        </View>
        <View style={styles.row2}>
          <Text style={styles.bText}>同意書，計劃和政策</Text>
          <View style={styles.box1}>
            <Text style={[styles.bText,{marginBottom:scale(10)}]}>《同意書》</Text>
            <TextInput  style={[styles.aText,{padding:0}]} editable={false}multiline={true}value={t3}underlineColorAndroid="transparent"/>
          </View>
          <TouchableOpacity onPress={()=>this.setState({accept:!accept})}style={[tv,{paddingTop:scale(20),paddingBottom:scale(10)}]}><Image style={imgS}source={accept?selImg:norImg}/>
            <Text style={tS}>您已閱讀並接受使用條款及隱私政策</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  box1: {alignItems: 'center',backgroundColor:'white',padding:scale(15),paddingBottom:scale(5),borderRadius:scale(8)},
  row2: {padding: scale(15)},
  sText: {color: '#000',fontSize: scale(13)},
  aText:{color:'rgb(154,150,145)',fontSize:(13),position:'relative',top:scale(-12)},
  cText:{color:'rgb(154,150,145)',fontSize:(13),},
  bText: {fontWeight:'bold',color: '#000',fontSize: scale(15),paddingBottom: scale(10)},
  content: {backgroundColor: 'white',padding: scale(15)},
})