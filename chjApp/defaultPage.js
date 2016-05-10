/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'
function toQueryString(obj) {
    return obj ? Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (Array.isArray(val)) {
            return val.sort().map(function (val2) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
            }).join('&');
        }
        return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
}

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  PanResponder
} from 'react-native';

class defaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'testzz',
      password:'123456',
      mobile:'',
      loginErr:'',
      isLogining:false,
    };
  }
  _onLogin(e){
    console.log('login');
    console.log(hex_md5("123456"))
    if(this.state.isLogining){
      console.log('logining');
      return false;
    }
    this.setState({isLogining:true});
    //try username or mobile
    var tel = this.state.username;
    var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
    if (reg.test(tel)) {
        
        console.log("is mobile");
        this.setState({username:'',mobile:tel});
    }else{
        console.log("is username");
    };

    fetch(Gapp.cmdUrl +"Home/Login/login", {
    method: 'post',
    body: toQueryString({ 
        'username': this.state.username,
        'password': this.state.password,
        'mobile': this.state.mobile 
    })})
    .then((response) => response.json())
    .then((json) => {
      //http success
      this.setState({isLogining:false})
      if(json.status == 0){
        //login success
        console.log('login success');
        Gapp.user = json.detail;
        Gapp.user.password = hex_md5(this.state.password);
        console.log(Gapp)
        this.setState({loginErr:''});
        this.props.navigator.push({
          title: '首页',
          component: MainPage,
          navigationBarHidden: true,
          passProps: {Gapp: Gapp}
        });
        
      }else{
        console.log('fail');
        this.setState({loginErr:'登陆失败'});
      }
    })
    .catch((error) => {
      this.setState({isLogining:false})
      this.setState({loginErr:'网络错误'});
      console.warn(error);
    });
  }
  _onRegister(){
    console.log('register');
    this.props.navigator.push({
      title: '注 册',
      component: RegisterPage,
      passProps: {listings: 'data'}
    });
  }
  componentWillMount() {



  }
  render() {

    var loginSpinner = this.state.isLogining ?
    ( <Text style={styles.buttonText}>登录中...</Text> ) :
    ( <Text style={styles.buttonText}>登   陆</Text>);
    return (
      <View 
      style={{flex:1,flexDirection:'row'}}>

        <Image style={styles.cont}
          source={require('image!login_bg')} >

          <View style={[styles.ts,{flex:1,alignItems:'center',justifyContent:'center'}]}>
            <Image
              style={{}}
              source={require('image!myIcon')} />
            </View>

          <View style={[{flex:2,margin:40,flexDirection:'column'}]}>
            <View style={{flexDirection:'row'}}>
              <Image
                style={{height:36,flex:1}}
                source={require('image!back_edittext')}>
                <TextInput
                  style={styles.inputs}
                  autoCorrect={true}
                  value={this.state.username}
                  onChangeText={(text) => this.setState({username: text})}
                  placeholder='请输入手机号/营业执照' />
              </Image>
            </View>
            <View style={{flexDirection:'row'}}>
              <Image
                style={{height:36,flex:1}}
                source={require('image!back_edittext')}>
                <TextInput
                  style={styles.inputs}
                  value={this.state.password}
                  onChangeText={(text) => this.setState({password: text})}
                  secureTextEntry={true}
                  placeholder='' />
              </Image>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.errText,{color:'red'}]}>{this.state.loginErr}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TouchableHighlight style={[styles.button,{marginTop:40}]}
                onPress={this._onLogin.bind(this)}
                underlayColor='#48BBEC'>
                {loginSpinner}
              </TouchableHighlight>
            </View>
            <View style={{flexDirection:'row'}}>
              <TouchableHighlight style={[styles.button,{marginTop:20}]}
                onPress={this._onRegister.bind(this)}
                underlayColor='#48BBEC'>
                <Text style={styles.buttonText}>注册</Text>
              </TouchableHighlight>
            </View>
          </View>
          <Text style={{backgroundColor:'transparent',flex:1,color:'white',fontSize:18}}>Verison:{ReactNativeAutoUpdater.jsCodeVersion()}</Text>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = defaultPage;
