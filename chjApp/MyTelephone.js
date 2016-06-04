'use strict';
 

var Dimensions = require('Dimensions');

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image, 
  View,
  Text,
  TouchableHighlight,
  AlertIOS,
  TextInput,
  Component
} = React;

class MyTelephone extends Component {

	constructor(props) {
    super(props);
    this.state = {
      m1:'',
      m2:'',
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
   _onResetPassword(){

     if(this.props.Gapp.user.type == 'username'){
       try {
      console.log('Gapp:');
      console.log(this.props.Gapp);

          fetch(this.props.Gapp.cmdUrl +"Home/cmd/linkM2U", {
          method: 'post',
          body: this.queryStringForQueryAndPage({ 
              'lusername': this.props.Gapp.user.username,
              'lpassword': this.props.Gapp.user.password,
              'm1':this.state.m1,
              'm2':this.state.m2,
          })})
          .then((response) => response.json())
          .then((json) => {
            //http success
            console.log(json);
            var message=json.detail.res1 +','+ json.detail.res2
            console.log(message);
            if(json.status == 0){
              //login success
              console.log('resetpassword success');
              AlertIOS.alert(
                 message,
                  null,
                [
                   {text: '返回',onPress:this._onPopMy.bind(this)},
                 ]
              )
            }else if(json.status == 1){
              AlertIOS.alert(
                 message,
                  null,
                [
                   {text: '确认'}
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


    }else{

      AlertIOS.alert(
                 '你没有权限',
                  '请用营业执照号登录,再绑定员工手机号',
                [
                   {text: '确认',onPress:this._onPopTop.bind(this)},
                   {text: '取消'},
                ]
              )

    }

    }
	_onPopMy(){

		this.props.navigator.pop();
	}
_onPopTop(){
    this.props.navigator.popToTop();
  }
  render() {

    var buttonColor
    if(this.props.Gapp.user.type == 'mobile'){
      buttonColor='gray';
    }
    else{
      
      buttonColor='#0067B1';
    }



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
                <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginRight:this.state.screenWidth-120,marginTop:15}}>绑定员工</Text>
          </View> 
        </View>
      
       <Image style={[styles.cont],{width:this.state.screenWidth}}
          source={require('image!login_bg')} >
          <View style={{}}>
              <View style={{flexDirection:'row',marginTop:this.state.screenHeight*0.9/2/4*0.25}}> 
                <Image style={{width:(this.state.screenHeight-113)/10*0.7,height:(this.state.screenHeight-113)/10*0.7,marginLeft:20}}
                  source={require('image!my_logo')} />
                <Text style={styles.text2}>
                  员工一
                </Text>
              </View>
              <View style={{height:1,backgroundColor:'white',}} />
              <View style={{flexDirection:'row',height:this.state.screenHeight*0.5*0.09,marginTop:this.state.screenHeight*0.5*0.09,marginRight:this.state.screenWidth*0.1}}>
                <Text style={styles.text1}>
                  员工手机：
                </Text>
                <TextInput
                    style={[styles.inputs,{}]}
                    value={this.state.m1}
                    onChangeText={(text) => this.setState({m1: text})}
                    selectionColor={'blue'}
                    />
            
              </View>
              <View style={{height:1,backgroundColor:'white',marginRight:this.state.screenWidth*0.1,marginLeft:50}} />
        </View>
        <View style={{marginTop:this.state.screenHeight*0.5*0.15}}>
              <View style={{flexDirection:'row',marginTop:this.state.screenHeight*0.9/2/4*0.25}}> 
                <Image style={{width:(this.state.screenHeight-113)/10*0.7,height:(this.state.screenHeight-113)/10*0.7,marginLeft:20}}
                  source={require('image!my_logo')} />
                <Text style={styles.text2}>
                  员工二
                </Text>
              </View>
              <View style={{height:1,backgroundColor:'white',}} />
              <View style={{flexDirection:'row',height:this.state.screenHeight*0.5*0.09,marginTop:this.state.screenHeight*0.5*0.09,marginRight:this.state.screenWidth*0.1}}>
                <Text style={styles.text1}>
                  员工手机：
                </Text>
                <TextInput
                    style={[styles.inputs,{}]}
                    value={this.state.m2}
                    onChangeText={(text) => this.setState({m2: text})}
                    selectionColor={'blue'}
                    />
            
              </View>
              <View style={{height:1,backgroundColor:'white',marginRight:this.state.screenWidth*0.1,marginLeft:50}} />
          </View>
        <View style={{flexDirection:'row',marginTop:this.state.screenHeight*0.35,marginRight:this.state.screenWidth*0.1,marginLeft:this.state.screenWidth*0.1}}>
              <TouchableHighlight style={[styles.button,{}]}
                onPress={this._onResetPassword.bind(this)}
                underlayColor='#3D8CC5'>
                <Text style={styles.buttonText}>提  交</Text>
              </TouchableHighlight>
        </View>
      </Image>
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
  cont: {
    flex: 3,
    flexDirection:'column',
    resizeMode:'stretch'
  },
  inputs: {
    flex: 1,
    fontSize: 15,
    color:'white',

  },
board: {
  height: 35,
  marginLeft: 10,
  marginRight:10,
  borderWidth: 1,
  borderColor: 'gray',
  borderRadius: 6,
},

  text1: {
    color: 'white',
    fontSize:15,
    marginTop:10,
    marginLeft:50,
    width:90,
    textAlign: 'left',
    backgroundColor:'transparent'
  },
  text2: {
    color: 'white',
    fontSize:18,
    marginTop:10,
    marginLeft:10,
    width:100,
    textAlign: 'left',
    backgroundColor:'transparent'
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
  
  backImage: {
    marginTop:7,
    marginLeft:10,

    width: 30,
    height: 30
  },

});

module.exports = MyTelephone;