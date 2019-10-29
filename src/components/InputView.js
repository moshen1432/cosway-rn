import React, { PureComponent } from 'react'
import { Text, View ,TextInput} from 'react-native'
import { scale, width,colors } from '@/utils/device';
export default class InputView extends PureComponent{
  render(){
    const {lab, placeholder,remark,require,dVal,secureTextEntry} = this.props
    const box3 = {paddingVertical:scale(8), paddingLeft: scale(20),paddingRight: scale(20),paddingBottom: scale(10),backgroundColor: 'white'}
    const hor = {position:'relative',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',height:scale(40)}
    const textL = {color: colors.gray2,fontSize: scale(16)}
    const input = {color:'#999',fontSize: scale(15),textAlign:'right',paddingLeft: scale(10),paddingRight: scale(0),flex: 1}
    const tipsText = {marginLeft: scale(8),color: colors.gray,fontSize: scale(12),paddingBottom:scale(5)}
    const red = {color:'red'}
    
    return(
      <View style={[box3,{borderWidth:0},this.props.style]}>
        <View style={hor}>
          <Text style={textL}>{!require ? null : <Text style={red}>* </Text>}{lab}</Text>
          <TextInput style={[input]} 
              underlineColorAndroid="transparent"
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              value={dVal}
              onChangeText={this.props.onChangeText}
            />
        </View>
        {!remark ? null :
        <Text style={[tipsText,this.props.remarkStyle]}>{remark}</Text>
        }
      </View>
    )
  }
}