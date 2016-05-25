/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'
var Dimensions = require('Dimensions');
var MainPage = require('./MainPage');
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

class RegisterPage_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verify: '',
      mobile:'',
      username: '',
      password:'',
      rePassword:'',
      screenHeight:Dimensions.get('window').height,
      screenWidth:Dimensions.get('window').width,
    };
  }
  queryStringForQueryAndPage(data) {
      var querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');
        console.log(querystring)
      return querystring;
  };
 
  _onDoRegister(){
    console.log('register');
     try {
      console.log('Home/Login/sendCode');
      console.log(this.state.mobile);
          fetch("http://139.196.105.5/TPtest/index.php?s=Home/Login/register", {
          method: 'post',
          body: this.queryStringForQueryAndPage({ 

              'mobile':this.props.mobile,
              'verify':this.props.verify,
              'password':this.state.password,
              'repassword':this.state.rePassword,
          })})
          .then((response) => response.json())
          .then((json) => {
            //http success
            var ss = this.queryStringForQueryAndPage({ 

              'mobile':this.props.mobile,
              'verify':this.props.verify,
              'password':this.state.password,
              'repassword':this.state.rePassword,
          })
            console.log(ss);
            console.log(json);
            if(json.status == 0){
              //login success
              console.log('faSong success');

              AlertIOS.alert(
                 '注册成功，请登陆',
                  null,
                [
                   {text: '确定',onPress:this.props.navigator.popToTop()},
                ]
                )
            }else{
              AlertIOS.alert(
                 json.info,
                  null,
                [
                   {text: '确定'},
                ]
                )
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
    var loginSpinner;
    if (this.state.waiting == 0) {
      loginSpinner = '获取验证码';
    }else{
      loginSpinner =  this.state.waiting;
    }
    return (
      <ScrollView ref='scrollView' style={{flex:1,flexDirection:'row'}}
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
          <View style={[{flex:2,flexDirection:'column',marginLeft:this.state.screenWidth*0.5*0.1}]}>
            <View>
            <View style={{flex:1,flexDirection:'row',height:this.state.screenHeight*0.5*0.09}}>
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
            <View style={{height:1,backgroundColor:'white',marginRight:this.state.screenWidth*0.1,marginTop:this.state.screenHeight*0.5*0.01,}} />
            <View>
            <View style={{flex:1,flexDirection:'row',height:this.state.screenHeight*0.5*0.09,marginTop:this.state.screenHeight*0.5*0.1*0.5}}>
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
            <View style={{height:1,backgroundColor:'white',marginRight:this.state.screenWidth*0.1,marginTop:this.state.screenHeight*0.5*0.01,}} />
            <View style={{flexDirection:'row',}}>
              <TouchableHighlight style={[styles.button,{marginTop:this.state.screenHeight*0.5*0.1,height:this.state.screenHeight*0.5/12,marginRight:this.state.screenWidth*0.1,}]}
                onPress={this._onDoRegister.bind(this)}
                underlayColor='#3D8CC5'>
                <Text style={styles.buttonText}>注    册</Text>
              </TouchableHighlight>
            </View>
            <View style={{flexDirection:'row',}}>
              <TouchableHighlight style={[styles.button,{marginTop:this.state.screenHeight*0.5*0.1,height:this.state.screenHeight*0.5/12,marginRight:this.state.screenWidth*0.1,}]}
                onPress={this._onPopMy.bind(this)}
                underlayColor='#3D8CC5'>
                <Text style={styles.buttonText}>返    回</Text>
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
    flexDirection:'column',
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
    flex: 1,
    fontSize: 15,
    color:'white',
    marginLeft:10,
  },
  button:{
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#48BBEC',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    marginTop:5,
    marginBottom:5,
  },
    label:{
    color: 'white',
    fontSize:15,
    marginTop:10,
    marginLeft:10,
    width:60,
    textAlign: 'left',
    backgroundColor:'transparent'
  },
});

module.exports = RegisterPage_1;
