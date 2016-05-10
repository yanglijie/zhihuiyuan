'use strict';
 



var React = require('react-native');
var Dimensions = require('Dimensions');
var {
  AppRegistry,
  StyleSheet,
  Image, 
  View,
  Text,
  TouchableHighlight,
  TextInput,
  AlertIOS,
  Component
} = React;

class MyPasswordPage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword:'',
      rePassword:'',
      screenWidth:Dimensions.get('window').width,
      errMsg:''

    };
  }
  queryStringForQueryAndPage(data) {
      var querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');
        console.log(querystring)
      return querystring;
  };
  _onResetFaild(){
    this.setState({password:''});
    this.setState({repassword:''})
  }
    _onPopMy(){

    this.props.navigator.pop();
  }
	_onResetPassword(){
    try {
      console.log('Gapp:');
      console.log(this.props.Gapp);

          fetch(this.props.Gapp.cmdUrl +"Home/cmd/resetpassword", {
          method: 'post',
          body: this.queryStringForQueryAndPage({ 
              'lusername': this.props.Gapp.user.username,
              'lpassword': this.props.Gapp.user.password,
              'oldpassword':this.state.oldPassword,
              'password':this.state.newPassword,
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
            }else if(json.status == 5){
              this.setState({newPassword:''});
              this.setState({rePassword:''})
              AlertIOS.alert(
                 '密码格式错误',
                  null,
                [
                   {text: '确认'}
                ]
              )
            }else if(json.status == 1){
              this.setState({oldPassword:''})
              this.setState({newPassword:''});
              this.setState({rePassword:''});
              AlertIOS.alert(
                 '与原密码相同',
                  null,
                [
                   {text: '确定'},
                ]
              )
            }else if(json.status == 2){
              this.setState({oldPassword:''})
              this.setState({newPassword:''});
              this.setState({rePassword:''});
              AlertIOS.alert(
                 '原密码不正确',
                  null,
                [
                   {text: '确定'},
                ]
              )
            }else if(json.status == 3){
              this.setState({oldPassword:''})
              this.setState({newPassword:''});
              this.setState({rePassword:''});
              AlertIOS.alert(
                 '网络错误',
                  null,
                [
                   {text: '确定'},
                ]
              )
            }else if(json.status == 4){
              this.setState({rePassword:''})
              AlertIOS.alert(
                 '确认密码不正确',
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
  _onPopTop(){
    this.props.navigator.popToTop();
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
                  source={require('image!left_arrow')} />
              </TouchableHighlight>
              <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginRight:this.state.screenWidth-120,marginTop:15}}>修改密码</Text>
        </View> 
      </View>

      <View style={{flex:4,}}>
        <View>
        	<View style={{flex:1,flexDirection:'row',marginTop:20}}>
            <Text style={styles.text1}>
              原始密码
            </Text>
            <TextInput
                style={styles.searchInput}
                value={this.state.oldPassword}
                onChangeText={(text) => this.setState({oldPassword: text})}
                selectionColor={'blue'}
                secureTextEntry={true}
                />
          </View>
        </View>
        <View>
          <View style={{flex:1,flexDirection:'row',marginTop:10}}>
            <Text style={styles.text1}>
              新密码
            </Text>
            <TextInput
                style={styles.searchInput}
                value={this.state.newPassword}
                onChangeText={(text) => this.setState({newPassword: text})}
                secureTextEntry={true}
                />
          </View>
        </View>
        <View style={{flex:1,flexDirection:'row',marginTop:10}}>
          <Text style={styles.text1}>
            确认密码
          </Text>
          <TextInput
              style={styles.searchInput}
              value={this.state.rePassword}
              onChangeText={(text) => this.setState({rePassword: text})}
              secureTextEntry={true}
              />
        </View>
        <View>
          <TouchableHighlight
                  style={styles.buttonStyle}
                  underlayColor='gray'
                  onPress={this._onResetPassword.bind(this)}
                  >
                <Text style={styles.text2}>
                提交
                </Text>
              </TouchableHighlight>
        </View>
      </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 20,
    backgroundColor:'#0067B1',
    height:44,
    flexDirection:'row'
  },
  text1: {
    color: 'gray',
    height: 36,
    marginTop:5,
    fontSize:18,
    marginLeft:10,
    width:80,
    textAlign: 'left',
  },
  text2: {
    fontSize: 15,
    color:'white',
    marginBottom:10,
    marginTop:10,
    textAlign: 'center',
  },
  backImage: {
    marginTop:7,
    marginLeft:10,

    width: 30,
    height: 30
  },
  buttonStyle: {
    flex:1,
    backgroundColor:'#0067B1',
    marginLeft:60,
    marginRight:60,
    marginBottom:15,
    marginTop:15,
    borderRadius: 6,
  },
searchInput: {
  height: 36,
  marginLeft: 40,
  marginRight:10,
  flex: 3,
  fontSize: 15,
  borderWidth: 1,
  borderColor: 'gray',
  borderRadius: 6,
  color: '#48BBEC'
}
});

module.exports = MyPasswordPage;