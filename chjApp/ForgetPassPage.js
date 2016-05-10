/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'
var Dimensions = require('Dimensions');
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  AlertIOS,
  TouchableHighlight,
  ScrollView
} from 'react-native';

class ForgetPassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile:'',
      verify:'',
      password:'',
      rePassword:'',
      screenWidth:Dimensions.get('window').width,
      screenHeight:Dimensions.get('window').height,
      
    };
  }
  queryStringForQueryAndPage(data) {
    var querystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');
      console.log(querystring)
    return querystring;
  };
  _getVerifyCode(e){
    console.log('获取验证码');
     try {

      console.log('Home/Login/sendCode');
      console.log(this.state.mobile);
          fetch("http://139.196.105.5/TPtest/index.php?s=Home/Login/sendCode", {
          method: 'post',
          body: this.queryStringForQueryAndPage({ 

              'mobile':this.state.mobile,

          })})
          .then((response) => response.json())
          .then((json) => {
            //http success
            console.log(json);
            if(json.status == 0){
              //login success
              console.log('faSong success');
              
            }else if(json.status == 1){
              this.setState({verify:''})
              AlertIOS.alert(
                 '请重新申请验证码',
                  null,
                [
                   {text: '确定'},
                ]
              )
            }else{
              console.log('fail');
            }
          })
          .catch((error) => {
            console.warn(error);
          });
        }catch(e){
          console.log('password failed');
          return false;
        }

        return false;

    
  }

  _onPopTop(){
    this.props.navigator.popToTop();
  }
  _onPassWord(){

        console.log('找回密码');

    try {
          fetch("http://139.196.105.5/TPtest/index.php?s=Home/Login/resetPosswordByCode", {
          method: 'post',
          body: this.queryStringForQueryAndPage({ 

              'mobile':this.state.mobile,
              'verify':this.state.verify,
              'password':this.state.password,
              'repassword':this.state.rePassword
          })})
          .then((response) => response.json())
          .then((json) => {
            //http success
            console.log(json);
            if(json.status == 0){
              //login success
              console.log('resetpassword success');
              AlertIOS.alert(
                 '密码修改成功,请重新登陆',
                  null,
                [
                   {text: '返回',onPress:this._onPopTop.bind(this)},
                 ]
              )
            }else if(json.status == 1){
              this.setState({verify:''})
              this.setState({password:''})
              this.setState({rePassword:''})
              AlertIOS.alert(
                 '验证码不正确',
                  null,
                [
                   {text: '确定'},
                ]
              )
            }
            else if(json.status == 4){
              this.setState({password:''})
              this.setState({rePassword:''})
              AlertIOS.alert(
                 '确认密码失败',
                  null,
                [
                   {text: '确定'},
                ]
              )
            }else{
              console.log('fail');
            }
          })
          .catch((error) => {
            console.warn(error);
          });
        }catch(e){
          console.log('resetpassword failed');
          return false;
        }

        return false;

    

  }
     _onPopMy(){

    this.props.navigator.pop();
  }
  inputFocused (refName) {
    setTimeout(() => {
      let scrollResponder = this.refs.scrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        React.findNodeHandle(this.refs[refName]),
        110, //additionalOffset
        true
      );
    }, 50);
  }
  inputDisFocused(){
    this.refs.scrollView.scrollTo({y:0})
  }
  render() {
    return (
      <ScrollView style={{flex:1,flexDirection:'row'}}
      ref='scrollView'
      scrollEnabled={false}
      >
        <Image style={[styles.cont,{width:this.state.screenWidth}]}
          source={require('image!login_bg')} >
          <View>
            <View style={[styles.ts,{flex:1,alignItems:'center',height:this.state.screenHeight*0.5}]}>
            <Image
              style={{width:this.state.screenHeight*0.5*0.4,height:this.state.screenHeight*0.5*0.4,marginTop:this.state.screenHeight*0.5*0.3,}}
              source={require('image!myIcon')} />
          </View>
          </View>
          <View style={[{flex:5,flexDirection:'column'}]}>
            <View>
            <View style={{flex:1,flexDirection:'row',height:this.state.screenHeight*0.5*0.1}}>
              <Text style={styles.label}>
                手机号
              </Text>
              <TextInput
                  style={styles.inputs}
                  autoCorrect={true}
                  value={this.state.mobile}
                  keyboardType = 'numeric'
                  onChangeText={(text) => this.setState({mobile: text})}
                  placeholder='手机号' 
                  placeholderTextColor={'#003257'}
                  ref='telInput'
                  onFocus={this.inputFocused.bind(this, 'telInput')}
                  onEndEditing={this.inputDisFocused.bind(this)}
                  />
            </View>
            </View>
            <View>
            <View style={{flex:1,flexDirection:'row',height:this.state.screenHeight*0.5*0.1,marginTop:this.state.screenHeight*0.5*0.1*0.5}}>
              <Text style={styles.label}>
                验证码
              </Text>
              <TextInput
                  style={styles.inputs}
                  value={this.state.verify}
                  keyboardType = 'numeric'
                  onChangeText={(text) => this.setState({verify: text})}
                  
                  ref='verInput'
                  onFocus={this.inputFocused.bind(this, 'verInput')}
                  onEndEditing={this.inputDisFocused.bind(this)}
                  placeholder='验证码'
                  placeholderTextColor={'#003257'}/>
              <TouchableHighlight style={{flex:3}}
                onPress={this._getVerifyCode.bind(this)}
                underlayColor='#48BBEC'>
                <Text style={[styles.label,{marginTop:10}]}>获取验证码</Text>
              </TouchableHighlight>
            </View>
            </View>
            <View>
            <View style={{flex:1,flexDirection:'row',height:this.state.screenHeight*0.5*0.1,marginTop:this.state.screenHeight*0.5*0.1*0.5}}>
              <Text style={styles.label}>
                密码
              </Text>
              <TextInput
                  style={styles.inputs}
                  autoCorrect={true}
                  value={this.state.password}
                  onChangeText={(text) => this.setState({password: text})}
                  secureTextEntry={true} 
                  ref='pwdInput'
                  onFocus={this.inputFocused.bind(this, 'pwdInput')}
                  onEndEditing={this.inputDisFocused.bind(this)}
                  />
            </View>
            </View>
            <View>
            <View style={{flex:1,flexDirection:'row',height:this.state.screenHeight*0.5*0.1,marginTop:this.state.screenHeight*0.5*0.1*0.5}}>
              <Text style={styles.label}>
                确认密码
              </Text>
              <TextInput
                  style={styles.inputs}
                  value={this.state.rePassword}
                  onChangeText={(text) => this.setState({rePassword: text})}
                  secureTextEntry={true}
                  ref='repwdInput'
                  onFocus={this.inputFocused.bind(this, 'repwdInput')}
                  onEndEditing={this.inputDisFocused.bind(this)}
                  />
            </View>
            </View>
            
          <View style={{flexDirection:'row',marginTop:this.state.screenHeight*0.5*0.1}}>
              <TouchableHighlight style={[styles.button,{marginRight:this.state.screenWidth*0.2,height:this.state.screenHeight*0.5*0.1,marginLeft:this.state.screenWidth*0.2}]}
                onPress={this._onPassWord.bind(this)}
                underlayColor='#3D8CC5'>
                <Text style={styles.buttonText}>修改密码</Text>
              </TouchableHighlight>
            </View>
            <View style={{flexDirection:'row',marginTop:this.state.screenHeight*0.5*0.05}}>
              <TouchableHighlight style={[styles.button,{marginRight:this.state.screenWidth*0.2,height:this.state.screenHeight*0.5*0.1,marginLeft:this.state.screenWidth*0.2}]}
                onPress={this._onPopMy.bind(this)}
                underlayColor='#3D8CC5'>
                <Text style={styles.buttonText}>返回</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Image>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    flexDirection:'column'
  },
  icon:{
    flex:1,
  },
  ts:{
    backgroundColor:'transparent'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:'red'
  },
  img:{
    flex:1
  },
  inputs: {
    flex: 3,
    fontSize: 15,
    marginRight:10,
    borderWidth: 1,
    borderColor: '#013861',
    borderRadius: 5,
    color: '#003257',
    backgroundColor:'#3D8CC5'
  },
  button:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0067B1',
    borderColor: '#0067B1',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  },
  label:{
    color: 'white',
    fontSize:15,
    marginTop:10,
    marginLeft:10,
    width:80,
    textAlign: 'left',
    backgroundColor:'transparent'
  }
});

module.exports = ForgetPassPage;
