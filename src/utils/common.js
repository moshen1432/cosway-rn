import {Dimensions, StatusBar, Platform, CameraRoll} from 'react-native';
import RNFS from 'react-native-fs';
import area from './area2.json';
var lastNavTime = "";
/**
 * 下载网页图片
 * @param uri  图片地址
 * @returns {*}
 */
export const downloadImage=(uri)=> {
  if (!uri) return null;
  return new Promise((resolve, reject) => {
      let timestamp = (new Date()).getTime();//获取当前时间错
      let random = String(((Math.random() * 1000000) | 0))//六位随机数
      //let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath; //外部文件，共享目录的绝对路径（仅限android）
      let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath ; //外部文件，共享目录的绝对路径（仅限android）
      //alert(RNFS.ExternalDirectoryPath)
      const downloadDest = `${dirs}/${timestamp+random}.jpg`;
      const formUrl = uri;
      const options = {
          fromUrl: formUrl,
          toFile: downloadDest,
          background: true,
          begin: (res) => {
              // console.log('begin', res);
              // console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
          },
      };
      try {
          const ret = RNFS.downloadFile(options);
          ret.promise.then(res => {
              // console.log('success', res);
              // console.log('file://' + downloadDest)
              var promise = CameraRoll.saveToCameraRoll(downloadDest)
              // .then(res => {
              //   console.log('res3',res)
              // })
              
              promise.then(result => {
                 //alert('保存成功！地址如下：\n' + result);
                 console.log(result);
               
              }).catch(function(error) {
                   console.error('error2', error);
                  // alert('保存失败！\n' + error);
              });
              
              resolve(res);
          }).catch(err => {
              reject(new Error(err))
          });
      } catch (e) {
          reject(new Error(e))
      }

  })

}
/**
 * 保存图片到相册
 * @param ImageUrl  图片地址
 * @returns {*}
 */
export const downloadLocalImage=(ImageUrl)=> {
  if (!ImageUrl) return null;
  return new Promise((resolve, reject) => {
    try {
      var promise = CameraRoll.saveToCameraRoll(ImageUrl);
      promise.then(function(result) {
          resolve({statusCode:200});
          //alert('保存成功！地址如下：\n' + result);
      }).catch(function(error) {
            console.log('error', error);
          // alert('保存失败！\n' + error);
      });
    } catch (e) {
        reject(new Error(e))
    }

  })

}
export const navPage=(navigation,page,params)=>{
  if(lastNavTime+500 >= Date.now()){
    return;
  }
  lastNavTime = Date.now();
  if(navigation){
    navigation.push(page,params);
  }
}
export const createAreaData=()=>{
  let data = [];
  let len = area.length;
  for(let i=0;i<len;i++){
      let city = [];
      for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
          let _city = {};
          _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
          city.push(_city);
      }

      let _data = {};
      _data[area[i]['name']] = city;
      data.push(_data);
  }
  return data;
}
export const createDateData=()=>{
  const now = new Date()
  let date = [];
  for(let i=1970;i<=now.getFullYear();i++){
      let month = [];
      for(let j = 1;j<13;j++){
          let day = [];
          if(j === 2){
              for(let k=1;k<29;k++){
                  day.push(k+'日');
              }
              //Leap day for years that are divisible by 4, such as 2000, 2004
              if(i%4 === 0){
                  day.push(29+'日');
              }
          }
          else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
              for(let k=1;k<32;k++){
                  day.push(k+'日');
              }
          }
          else{
              for(let k=1;k<31;k++){
                  day.push(k+'日');
              }
          }
          let _month = {};
          _month[j+'月'] = day;
          month.push(_month);
      }
      let _date = {};
      _date[i+'年'] = month;
      date.push(_date);
  }
  return date;
}
export const currentData = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return year+'-'+month+'-'+day
}
export const currentFullData = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return (day+'').padStart(2,'0')+'-'+(month+'').padStart(2,'0')+'-'+year
}