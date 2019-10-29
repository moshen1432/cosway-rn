/**網絡客戶 第二步 填寫會員資料 */
import React,{Component} from 'react'
import{
  View,StyleSheet,Switch,
  Text,TouchableOpacity,Image,
   
} from 'react-native'
import {createDateData, currentFullData} from '@/utils/common'
import { colors, scale, width } from '@/utils/device';
import Picker from 'react-native-picker';
import InputView from '@/components/InputView'
import Select from '@/components/Select'
import BtnView from './BtnView'
import {navPage} from '@/utils/common'
import sty from './styles.js';
export default class PlainMember extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '李曼迪',
      eName: 'MandyLee',
      country:'中國（香港）',
      email: 'mandylee@hotmail.com',
      email2: '',
      birthday: '',
      hasRecomm: false,//是否有推薦人
      recommCode:'',
      tel: 'MandyLee',
      selCountry: false,
      gender: '男',
      selGender: false,
      area: '香港 852',
      selArea: false,
      currentDate: currentFullData()
    }
  }
  _next(){
    navPage(this.props.navigation, 'SetPwd', {category: 0})
  }
  _pre(){
    this.props.navigation.pop();
  }
  onChangeText(val,type){
    let {name,eName,tel,email,email2,recommCode} = this.state
    if(type == 'name') name = val
    else if(type == 'eName') eName = val
    else if(type == 'tel') tel = val
    else if(type == 'email') email = val
    else if(type == 'email2') email2 = val
    else if(type == 'recommCode') recommCode = val
    this.setState({
      name,
      eName,
      tel,
      email,
      email2,
      recommCode,
    })
  }
  _recommChange=(value)=>{
    this.setState({
      hasRecomm:value
    })
  }
  //點擊選擇國籍
  _selCountry=(type)=>{
    this.setState({
      country: type.value,
      selCountry: false
    })
  }
  _selGender=(type)=>{
    this.setState({
      gender: type.value,
      selGender: false
    })
  }
  _selArea=(type)=>{
    this.setState({
      area: type.value,
      selArea: false
    })
  }
  //打开日期选择 视图
  _showDatePicker() {
    var year = ''
    var month = ''
    var day = ''
    var dateStr = this.state.currentDate
    day = dateStr.substring(0,2)
    month = parseInt(dateStr.substring(3,5))
    year = parseInt(dateStr.substring(6,10))
    Picker.init({
      pickerTitleText:'时间选择',
      pickerCancelBtnText:'取消',
      pickerConfirmBtnText:'确定',
      selectedValue:[year+'年',month+'月',day+'日'],
      pickerBg:[255,255,255,1],
      pickerData: createDateData(),
      pickerFontColor: [33, 33 ,33, 1],
      onPickerConfirm: (pickedValue, pickedIndex) => {
          var year = pickedValue[0].substring(0,pickedValue[0].length-1)
          var month = pickedValue[1].substring(0,pickedValue[1].length-1)
          month = month.padStart(2,'0')
          var day = pickedValue[2].substring(0,pickedValue[2].length-1)
          day = day.padStart(2,'0')
          let str = day+'-'+month+'-'+year
          this.setState({
            birthday:str,
          })
      },
      onPickerCancel: (pickedValue, pickedIndex) => {
          //console.log('date', pickedValue, pickedIndex);
      },
      onPickerSelect: (pickedValue, pickedIndex) => {
          //console.log('date', pickedValue, pickedIndex);
      }
    });
    Picker.show();
  }

  render(){
    const {name, eName, country,selCountry, gender, hasRecomm,
      selGender,area, selArea,tel,email,birthday} = this.state
    
    const t1 = '請確保填寫正確的電郵地址。您的新科士威會員編號、密碼及戶口的相關資料將發送至此電郵地址。'
    const remark2 = '如果你沒有推薦人，請留空此格，系統會設定\n你的推薦人為科士威(香港)有限公司。'
    const items = [
      {key:'a', value: '中國（香港）'},
      {key:'b', value: '中國（澳門）'},
      {key:'c', value: '中國'},
    ]
    const items2 = [
      {key:'a', value: '男'},
      {key:'b', value: '女'},
    ]
    const items3 = [
      {key:'香港 852', value: '香港 852'},
      {key:'上海 021', value: '上海 021'},
      {key:'杭州 571', value: '杭州 571'},
    ]
    const arrowImage = <Image style={sty.arrowImg} source={require('@/images/set/input_r.png')}/>
    return(
      <View>
        <View style={sty.card1}>
          <InputView lab='中文全名' dVal={name} require={true} onChangeText={(val)=>this.onChangeText(val, 'name')}/>
          <View style={sty.line2}></View>
          <InputView lab='英文全名' dVal={eName} require={true} onChangeText={(val)=>this.onChangeText(val, 'eName')}/>
          <View style={sty.line2}></View>
          <View style={sty.box3}>
            <Text style={sty.textL}><Text style={sty.red}>* </Text>國籍</Text>
            <TouchableOpacity style={sty.row0} onPress={()=>this.setState({selCountry:true})}>
              <Text style={sty.t5}>{country}</Text>
              {arrowImage}
            </TouchableOpacity>
            <Select 
                title='選擇國籍'
                items={items} 
                _selItem={this._selCountry}
                showModal={selCountry} 
                hideModal={()=>this.setState({selCountry:false})}/>
          </View>
          <View style={sty.line2}></View>
          <View style={sty.box3}>
            <Text style={sty.textL}><Text style={sty.red}>* </Text>出生日期</Text>
            <TouchableOpacity style={sty.row0} onPress={()=>this._showDatePicker()}>
              <Text style={sty.t2}>{birthday?birthday:'DD-MM-YYYY'}</Text>
              {arrowImage}
            </TouchableOpacity>
          </View>
          <View style={sty.line2}></View>
          <View style={sty.box3}>
            <Text style={sty.textL}><Text style={sty.red}>* </Text>性別</Text>
            <TouchableOpacity style={sty.row0} onPress={()=>this.setState({selGender:true})}>
              <Text style={sty.t5}>{gender}</Text>
              {arrowImage}
            </TouchableOpacity>
            <Select 
                title='選擇性別'
                items={items2} 
                _selItem={this._selGender}
                showModal={selGender} 
                hideModal={()=>this.setState({selGender:false})}/>
          </View>
          <View style={sty.line}></View>
          <View style={sty.box3}>
            <Text style={sty.textL}><Text style={sty.red}>* </Text>區碼</Text>
            <TouchableOpacity style={sty.row0} onPress={()=>this.setState({selArea:true})}>
              <Text style={sty.t5}>{area}</Text>
              {arrowImage}
            </TouchableOpacity>
            <Select 
                title='選擇區碼'
                items={items3} 
                _selItem={this._selArea}
                showModal={selArea} 
                hideModal={()=>this.setState({selArea:false})}/>
          </View>
          <View style={sty.line2}></View>
          <InputView lab='網絡電話號碼' dVal={tel} require={true} onChangeText={(val)=>this.onChangeText(val, 'tel')}/>
          <View style={sty.box1}>
            <Text style={sty.t1}>{t1}</Text>
          </View>
          <InputView lab='電郵地址' dVal={email} require={true} onChangeText={(val)=>this.onChangeText(val, 'email')}/>
          <View style={sty.line2}></View>
          <InputView lab='確認電郵地址' dVal={''} placeholder='請再次輸入電郵地址' require={true} onChangeText={(val)=>this.onChangeText(val, 'email2')}/>
          <View style={sty.line}></View>
          <View style={sty.box3}>
            <Text style={sty.textL}>是否有推薦人</Text>
            <Switch trackColor={{true:'#72AC41',false:'#DEDEDE'}} 
              //thumbColor='#f0f0f0' 
              value={hasRecomm} onValueChange={this._recommChange}/>
          </View>
          <View style={sty.line2}></View>
          <InputView lab='推薦人編號' dVal={''} placeholder='請輸入推薦人編號'
            remark={remark2}
            remarkStyle={{marginLeft:0}}
            onChangeText={(val)=>this.onChangeText(val, 'recommCode')}/>
        </View>
        <BtnView pre={()=>this._pre()} next={()=>this._next()}/>
      </View>
    )
  }
}