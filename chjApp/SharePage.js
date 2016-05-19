'use strict'

var Swiper = require('react-native-swiper');
var Dimensions = require('Dimensions');
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TabBarIOS,
  PanResponder,
  Animated,
  Easing
} from 'react-native';
import * as WeChat from 'react-native-wechat';
var resolveAssetSource = require('resolveAssetSource');
class SharePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      verifyCode: '',
      mobile:'',


      screenWidth:Dimensions.get('window').width,
      screenHeight:Dimensions.get('window').height
    };
  }
  async _onShare1(e){
  	    try {
      await WeChat.registerApp('wxf73e1fab51526b73');
      var imageResource = require('./images/share_codeapk1.png');
 
      var result = await WeChat.shareToSession({
          type: 'imageResource',
          title: 'web image',
          description: 'share web image to time line',
          mediaTagName: 'email signature',
          messageAction: undefined,
          messageExt: undefined,
          imageUrl: resolveAssetSource(imageResource).uri
      });
      console.log('share image url to time line successful', result);
    }
    catch (e) {
        console.log('share image url to time line failed', e);
    }
  }
 async _onShare2(e){
        try {
      await WeChat.registerApp('wxf73e1fab51526b73');
      var imageResource = require('./images/share_codeapk.png');
 
      var result = await WeChat.shareToSession({
          type: 'imageResource',
          title: 'web image',
          description: 'share web image to time line',
          mediaTagName: 'email signature',
          messageAction: undefined,
          messageExt: undefined,
          imageUrl: resolveAssetSource(imageResource).uri
      });
      console.log('share image url to time line successful', result);
    }
    catch (e) {
        console.log('share image url to time line failed', e);
    }
  }
  async _onShare3(e){
        try {
      await WeChat.registerApp('wxf73e1fab51526b73');
      var imageResource = require('./images/share_code.png');
 
      var result = await WeChat.shareToSession({
          type: 'imageResource',
          title: 'web image',
          description: 'share web image to time line',
          mediaTagName: 'email signature',
          messageAction: undefined,
          messageExt: undefined,
          imageUrl: resolveAssetSource(imageResource).uri
      });
      console.log('share image url to time line successful', result);
    }
    catch (e) {
        console.log('share image url to time line failed', e);
    }
  }
  async _onShare4(e){
        try {
      await WeChat.registerApp('wxf73e1fab51526b73');
      var imageResource = require('./images/pujiang2code.jpg');
 
      var result = await WeChat.shareToSession({
          type: 'imageResource',
          title: 'web image',
          description: 'share web image to time line',
          mediaTagName: 'email signature',
          messageAction: undefined,
          messageExt: undefined,
          imageUrl: resolveAssetSource(imageResource).uri
      });
      console.log('share image url to time line successful', result);
    }
    catch (e) {
        console.log('share image url to time line failed', e);
    }
  }
  _onPopMy(){

    this.props.navigator.pop();
  }

	render() {
	  return (
	  	<View style={{flex:1,}}>
        <View>
            <View style={styles.container}>
              <TouchableHighlight
                      style={{flex:1}}
                      underlayColor='transparent'
                      onPress={this._onPopMy.bind(this)}
                      >
                    <Image
                      style={styles.backImage}
                      source={require('./images/left_arrow.png')} />
                  </TouchableHighlight>
            </View> 
        </View>
        <View>
        <Swiper style={styles.wrapper}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height}
           loop={false}>
          <View style={styles.slide} >
            <Image style={[styles.image,{width:this.state.screenWidth,}]} source={require('image!share_back')} >
              <View>
                <Text style={[styles.text,{marginTop:(this.state.screenHeight-64)*0.2*0.25,height:(this.state.screenHeight-64)*0.2}]} >双创云服APP（Android）</Text>
              </View>
              <View>
              <Text style={[styles.text1,{height:(this.state.screenHeight-64)*0.28,}]}>
                漕河泾开发区创新创业园服务APP旨在通过打造“互联网+”的双创云服务平台，
                为园区科技型企业提供融资上市、申报项目、技术服务、人才服务和信息发布等一站式创新创业服务，
                推动科技企业技术创新，加快区域科技和经济发展，为上海加快建成具有全球影响力的科技创新中心助力。
                </Text>
              </View>
              <View >
                <View style={{flex:1,flexDirection:'row',marginLeft:this.state.screenWidth*0.1}}>

                  <Image style={{flex: 1, height: this.state.screenHeight*0.25, resizeMode: Image.resizeMode.contain}} source={require('./images/share_codeapk1.png')} />
                  <Image style={[styles.rightImage,{marginTop:this.state.screenHeight*0.25*0.25}]} source={require('./images/share_right.png')} />
                </View>
              </View>
              <View style={{flexDirection:'row',marginTop:this.state.screenHeight*0.4*0.1}}>
              <TouchableHighlight style={[styles.buttonStyle,{marginRight:this.state.screenWidth*0.3,marginLeft:this.state.screenWidth*0.3}]}
                onPress={this._onShare1.bind(this)}
                underlayColor='#3D8CC5'>
                <Text style={styles.text2}>立即分享</Text>
              </TouchableHighlight>
              </View>
            </Image>
          </View>
          <View style={styles.slide} >
            <Image style={[styles.image,{width:this.state.screenWidth,}]} source={require('image!share_back')} >
              <Text style={[styles.text,{marginTop:(this.state.screenHeight-64)*0.2*0.25,height:(this.state.screenHeight-64)*0.2}]}>双创云服APP（IOS）</Text>
              <Text style={[styles.text1,{height:(this.state.screenHeight-64)*0.28,}]} > 漕河泾开发区创新创业园服务APP旨在通过打造“互联网+”的双创云服务平台，
                为园区科技型企业提供融资上市、申报项目、技术服务、人才服务和信息发布等一站式创新创业服务，
                推动科技企业技术创新，加快区域科技和经济发展，为上海加快建成具有全球影响力的科技创新中心助力。
                </Text>
              <View>
                <View style={{flex:3,flexDirection:'row',marginLeft:10}}>
                  <Image style={[styles.rightImage,{marginTop:this.state.screenHeight*0.25*0.25}]}source={require('./images/share_left.png')} />
                  <Image style={{flex: 1, height: this.state.screenHeight*0.25, resizeMode: Image.resizeMode.contain}} source={require('./images/share_codeapk.png')} />
                  <Image style={[styles.rightImage,{marginTop:this.state.screenHeight*0.25*0.25}]} source={require('./images/share_right.png')} />
                </View>
              </View>
              <View style={{flexDirection:'row',marginTop:this.state.screenHeight*0.4*0.1}}>
              <TouchableHighlight style={[styles.buttonStyle,{marginRight:this.state.screenWidth*0.3,marginLeft:this.state.screenWidth*0.31}]}
                onPress={this._onShare2.bind(this)}
                underlayColor='#3D8CC5'>
                <Text style={styles.text2}>立即分享</Text>
              </TouchableHighlight>
              </View>
            </Image>
          </View>
         <View style={styles.slide} >
            <Image style={[styles.image,{width:this.state.screenWidth,}]} source={require('image!share_back')} >
              <Text style={[styles.text,{marginTop:(this.state.screenHeight-64)*0.2*0.25,height:(this.state.screenHeight-64)*0.2}]}>双创园公众号</Text>
              <Text style={[styles.text1,{height:(this.state.screenHeight-64)*0.28,}]} >漕河泾开发区创新创业园位于规划面积10.7平方公里的漕河泾开发区浦江高科技园的中心位置，
              孵化楼宇面积5.2万平方米。双创园以促进科技成果转化，培育中小型科技企业成长，加速助推高成长科技企业发展，推动科技企业技术创新，
              加快区域科技和经济发展为己任。按照功能全覆盖，服务全覆盖的建设要求，服务于漕河泾开发区浦江高科技园。
                </Text>
              <View>
                <View style={{flex:3,flexDirection:'row',marginLeft:10}}>
                  <Image style={[styles.rightImage,{marginTop:this.state.screenHeight*0.25*0.25}]}source={require('./images/share_left.png')} />
                  <Image style={{flex: 1, height: this.state.screenHeight*0.25, resizeMode: Image.resizeMode.contain}} source={require('./images/share_code.png')} />
                  <Image style={[styles.rightImage,{marginTop:this.state.screenHeight*0.25*0.25}]} source={require('./images/share_right.png')} />
                </View>
              </View>
              <View style={{flexDirection:'row',marginTop:this.state.screenHeight*0.4*0.1}}>
              <TouchableHighlight style={[styles.buttonStyle,{marginRight:this.state.screenWidth*0.3,marginLeft:this.state.screenWidth*0.31}]}
                onPress={this._onShare3.bind(this)}
                underlayColor='#3D8CC5'>
                <Text style={styles.text2}>立即分享</Text>
              </TouchableHighlight>
              </View>
            </Image>
          </View>
          <View style={styles.slide} >
            <Image style={[styles.image,{width:this.state.screenWidth,}]} source={require('image!share_back')} >
              <Text style={[styles.text,{marginTop:(this.state.screenHeight-64)*0.2*0.25,height:(this.state.screenHeight-64)*0.2}]}>浦江高科技园公众号</Text>
              <Text style={[styles.text1,{height:(this.state.screenHeight-64)*0.28,}]} >漕河泾浦江高科技园作为漕河泾开发区新一轮发展的基地，占地约10.7平方公里，
              其中9.4平方公里为高科技产业区，1.3平方公里为综合配套区。园区内已逐步形成以电子信息产业为依托，
              集生物医学、环保、新能源、汽车配套研发为主题，辅以现代生产性服务业聚集功能的产业导向。
                </Text>
              <View>
                <View style={{flex:3,flexDirection:'row',marginLeft:10,marginRight:30}}>
                  <Image style={[styles.rightImage,{marginTop:this.state.screenHeight*0.25*0.25}]}source={require('./images/share_left.png')} />
                  <Image style={{flex: 1, height: this.state.screenHeight*0.25, resizeMode: Image.resizeMode.contain}} source={require('./images/pujiang2code.jpg')} />
                  
                </View>
              </View>
              <View style={{flexDirection:'row',marginTop:this.state.screenHeight*0.4*0.1}}>
              <TouchableHighlight style={[styles.buttonStyle,{marginRight:this.state.screenWidth*0.3,marginLeft:this.state.screenWidth*0.31}]}
                onPress={this._onShare4.bind(this)}
                underlayColor='#3D8CC5'>
                <Text style={styles.text2}>立即分享</Text>
              </TouchableHighlight>
              </View>
            </Image>
          </View>
        </Swiper>
      </View>
      </View>
	  )
	}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 20,
    backgroundColor:'#0067B1',
    height:44,
    flexDirection:'row'
  },
  backImage: {
    marginTop:7,
    marginLeft:10,

    width: 30,
    height: 30
  },
  wrapper: {
    flex:1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  text1: {
    color: '#fff',
    fontSize: 13,
    marginLeft:10,
    marginRight:10,
  },
  text2: {
    fontSize: 13,
    marginBottom:5,
    marginTop:5,
    color:'#FFFFFF',
    textAlign: 'center',
  },
  buttonStyle: {

    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0067B1',
    borderColor: '#0067B1',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
  },
  rightImage: {
    marginRight:10,
  },
  leftImage: {
    marginLeft:10,
    marginTop:70,
  },
  centerImage: {
    height:200,
    width:200,
    alignItems: 'center',
  },
})
module.exports = SharePage;