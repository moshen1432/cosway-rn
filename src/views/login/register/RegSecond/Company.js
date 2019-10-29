/** 公司 第二步  填寫會員資料 */
import React,{Component} from 'react'
import{
  View,StyleSheet,Switch,
  Text,TouchableOpacity,Image,
   
} from 'react-native'
import {createDateData, currentFullData, createAreaData} from '@/utils/common'
import { colors, scale, width } from '@/utils/device';
import Picker from 'react-native-picker';
import InputView from '@/components/InputView'
import Select from '@/components/Select'
import BtnView from './BtnView'
import {navPage} from '@/utils/common'
import sty from './styles.js';
export default class Person extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '李曼迪',
      eName: 'MandyLee',
      email: 'mandylee@hotmail.com',
      regNum:'',
      email2: '',
      bank: '',
      selBank: '',
      shop: '',
      selShop: false,
      bankno: '',
      account: '',
      district:'',//地區
      hasRecomm: false,//是否有推薦人
      hasShop: false, //登記店鋪
      recommCode:'',
      tel: 'MandyLee',
      area: '香港 852',
      selArea: false,
      currentDate: currentFullData()
    }
  }
  _next(){
    navPage(this.props.navigation, 'SetPwd', {category: 2})
  }
  _pre(){
    this.props.navigation.pop();
  }
  onChangeText(val,type){
    let {name,eName,tel,email,regNum,email2,address,bankno,account,recommCode} = this.state
    if(type == 'name') name = val
    else if(type == 'eName') eName = val
    else if(type == 'regNum') regNum = val
    else if(type == 'tel') tel = val
    else if(type == 'email') email = val
    else if(type == 'email2') email2 = val
    else if(type == 'address') address = val
    else if(type == 'bankno') bankno = val
    else if(type == 'account') account = val
    else if(type == 'recommCode') recommCode = val
    this.setState({
      name,
      eName,
      regNum,
      tel,
      email,
      email2,
      address,
      bankno,
      account,
      recommCode
    })
  }
  _recommChange=(value)=>{
    this.setState({
      hasRecomm:value
    })
  }
  _shopChange=(value)=>{
    this.setState({
      hasShop:value
    })
  }
  _selShop=(type)=>{
    this.setState({
      shop: type.value,
      selShop: false
    })
  }
  //點擊選擇國籍
  _selCountry=(type)=>{
    this.setState({
      country: type.value,
      selCountry: false
    })
  }
  _selBank=(type)=>{
    this.setState({
      bank: type.value,
      selBank: false
    })
  }
  _selArea=(type)=>{
    this.setState({
      area: type.value,
      selArea: false
    })
  }
  _showAreaPicker() {
    //this.setState({showPicker:true});
    console.log('_showAreaPicker')
    var province = "";
    var city = "";
    var county = "";
    let area = this.state.district
    if(area){
      province = area.split(' ')[0];
      city = area.split(' ')[1];
      county = area.split(' ')[2];
    }
    Picker.init({
        pickerData: createAreaData(),
        pickerTitleText:'地區選擇',
        pickerCancelBtnText:'取消',
        pickerConfirmBtnText:'確定',
        pickerBg:[255,255,255,1],
        selectedValue: [province, city, county],
        onPickerConfirm: pickedValue => {
          let district = pickedValue[0] + ' ' + pickedValue[1] + ' ' + pickedValue[2];
          this.setState({district})
        },
        onPickerCancel: pickedValue => {
          this.setState({showPicker:false});
        },
        onPickerSelect: pickedValue => {
          this.setState({showPicker:false});
        }
    });
    Picker.show();
  }
  render(){
    const { hasRecomm,bank,selBank,hasShop,shop,selShop,
      area, selArea,tel,email,district} = this.state
    
    const t1 = '請確保填寫正確的電郵地址。您的新科士威會員編號、密碼及戶口的相關資料將發送至此電郵地址。'
    const t3 = '只限香港地址，送貨範圍包括香港島、九龍、新界及\n指定離島地區：東涌'
    const t4 = '如果您希望將盈利存入您的銀行帳戶，請提供正確的銀行資料。否則盈利將會自動存入您的電子戶口。'
    const remark3 = '如果你沒有推薦人，請留空此格，系統會設定你的\n推薦人為科士威(香港)有限公司。'
    const bankList = [
      {key:'a', value: '中國銀行'},
      {key:'b', value: '中國工商銀行'},
      {key:'c', value: '中國建設銀行'},
      {key:'d', value: '中國農業銀行'},
    ]
    const shopList = [
      {key:'a', value: '蘋果專賣店'},
      {key:'b', value: 'HUAWEI 專賣店'},
      {key:'c', value: '阿迪達斯專賣店'},
      {key:'d', value: '李寧服飾專賣店'},
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
          <InputView lab='公司中文名稱' placeholder='請輸入公司中文名稱' require={true} onChangeText={(val)=>this.onChangeText(val,'name')}/>
          <View style={sty.line2}></View>
          <InputView lab='公司英文名稱' placeholder='請輸入公司英文名稱' require={true} onChangeText={(val)=>this.onChangeText(val, 'eName')}/>
          <View style={sty.line2}></View>
          <InputView lab='商業登記證號碼' placeholder='請輸入商業登記證號碼' remark='請輸入商業登記證上首8位數字' 
            require={true} onChangeText={(val)=>this.onChangeText(val,'regNum')}/>
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
          <InputView lab='通訊地址' remark='請以英文填寫' placeholder='請輸入通訊地址' require={true} onChangeText={(val)=>this.onChangeText(val, 'address')}/>
          <View style={sty.line2}></View>
          <View>
            <View style={sty.box3}>
              <Text style={sty.textL}><Text style={sty.red}>* </Text>地區</Text>
              <TouchableOpacity style={sty.row0} onPress={()=>this._showAreaPicker()}>
                <Text style={sty.t2}>{district?district:'請選擇地區'}</Text>
                {arrowImage}
              </TouchableOpacity>
            </View>
            <Text style={sty.tipsText}>{t3}</Text>
          </View>
          
          <View style={sty.box1}>
            <Text style={sty.t1}>{t4}</Text>
          </View>
          <View style={sty.box3}>
            <Text style={sty.textL}>銀行名稱</Text>
            <TouchableOpacity style={sty.row0} onPress={()=>this.setState({selBank:true})}>
              <Text style={sty.t2}>{bank?bank:'請選擇銀行'}</Text>
              {arrowImage}
            </TouchableOpacity>
            <Select 
                title='選擇銀行'
                items={bankList} 
                _selItem={this._selBank}
                showModal={selBank} 
                hideModal={()=>this.setState({selBank:false})}/>
          </View>
          <InputView lab='銀行編號' dVal={''} placeholder='請輸入銀行編號' onChangeText={(val)=>this.onChangeText(val, 'bankno')}/>
          <InputView lab='賬戶號碼' dVal={''} placeholder='請輸入賬戶號碼' onChangeText={(val)=>this.onChangeText(val, 'account')}/>
          <View style={sty.line}></View>
          <View style={sty.box3}>
            <Text style={sty.textL}>是否有推薦人</Text>
            <Switch trackColor={{true:'#72AC41',false:'#DEDEDE'}} 
              //thumbColor='#f0f0f0' 
              value={hasRecomm} onValueChange={this._recommChange}/>
          </View>
          <View style={sty.line2}></View>
          <InputView lab='推薦人編號' dVal={''} placeholder='請輸入推薦人編號'  
            remark={remark3}
            remarkStyle={{marginLeft:0}}
            onChangeText={(val)=>this.onChangeText(val, 'recommCode')}/>
        </View>
        <View style={sty.line}></View>

        <View style={sty.box3}>
          <Text style={sty.textL}><Text style={sty.red}>* </Text>登記店鋪</Text>
          <Switch trackColor={{true:'#72AC41',false:'#DEDEDE'}} 
            //thumbColor='#f0f0f0' 
            value={hasShop} onValueChange={this._shopChange}/>
        </View>
        <View style={sty.line2}></View>
        <View style={sty.box3}>
          <Text style={sty.textL}><Text style={sty.red}>* </Text>店鋪</Text>
          <TouchableOpacity style={sty.row0} onPress={()=>this.setState({selShop:true})}>
            <Text style={sty.t2}>{shop?shop:'請選擇店鋪'}</Text>
            {arrowImage}
          </TouchableOpacity>
          <Select 
              title='選擇店鋪'
              items={shopList} 
              _selItem={this._selShop}
              showModal={selShop} 
              hideModal={()=>this.setState({selShop:false})}/>
        </View>
        <BtnView pre={()=>this._pre()} next={()=>this._next()}/>
      </View>
    )
  }
}