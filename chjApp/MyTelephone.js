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


    };

    }
	_onPopMy(){

		this.props.navigator.pop();
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
      
       <View style={{flex:1,}}>
          <View style={{flex:1,height:this.state.screenHeight*0.9/2,}}>
              <View style={{marginTop:this.state.screenHeight*0.9/2/4*0.25}}> 
                <Text style={styles.text1}>
                  员工一
                </Text>
              </View>
              <View style={{flex:1,flexDirection:'row',height:this.state.screenHeight*0.9/2/4}}>
                <Text style={styles.text1}>
                   员工手机号：
                </Text>
                <View style={styles.board}>
                   <TextInput
                    style={styles.searchInput}
                    value={this.state.m1}
                    onChangeText={(text) => this.setState({m1: text})}
                    selectionColor={'blue'}
                    />
                </View>
              </View>
              <View style={{height:1,
                marginTop:this.state.screenHeight*0.9/2/4,backgroundColor:'#BEBEBE'}}/>
          </View>
         <View style={{flex:2,}}>
              <View style={{marginTop:this.state.screenHeight*0.9/2/4*0.8}}> 
                <Text style={styles.text1}>
                  员工二
                </Text>
              </View>
              <View style={{flex:1,flexDirection:'row',height:this.state.screenHeight*0.9/2/4}}>
                <Text style={styles.text1}>
                   员工手机号：
                </Text>
                <View style={styles.board}>
                   <TextInput
                    style={styles.searchInput}
                    value={this.state.m2}
                    onChangeText={(text) => this.setState({m2: text})}
                    selectionColor={'blue'}
                    />
                </View>
              </View>
        </View>
         <View>
          <TouchableHighlight
                  style={[styles.buttonStyle,{backgroundColor:buttonColor}]}
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
  cont: {
    flex: 4,
    flexDirection:'column',
    resizeMode:'stretch'
  },
  searchInput: {
  marginLeft: 10,
  flex: 3,
  fontSize: 15,
  color: '#48BBEC'
},
board: {
  flex: 3,
  height: 35,
  marginLeft: 10,
  marginRight:10,
  borderWidth: 1,
  borderColor: 'gray',
  borderRadius: 6,
},

  text1: {
    color: 'gray',
    height: 35,
    marginTop:10,
    fontSize:15,
    marginLeft:10,
    width:90,
    textAlign: 'left',
  },
  text2: {
    fontSize: 15,
    color:'white',
    marginBottom:10,
    marginTop:10,
    textAlign: 'center',
  },
   buttonStyle: {
    flex:1,
    marginLeft:60,
    marginRight:60,
    marginBottom:15,
    marginTop:15,
    borderRadius: 6,
  },
  
  backImage: {
    marginTop:7,
    marginLeft:10,

    width: 30,
    height: 30
  },

});

module.exports = MyTelephone;