'use strict';
 
var React = require('react-native');
var Dimensions = require('Dimensions');
var MyActivityPage = require('./MyActivityPage');
var {
  AppRegistry,
  StyleSheet,
  Image, 
  View,
  Text,
  TouchableHighlight,
  Component,
  AlertIOS,
  TextInput,
  DatePickerIOS,
  DeviceEventEmitter,
} = React;


class AttentAcPage extends Component {

	constructor(props) {
      super(props);
      this.state = {
        mobile:'13111111111',
        //EventdataList:React.PropTypes.array.isRequired,
        screenWidth:Dimensions.get('window').width,
        visibleHeight: Dimensions.get('window').height,
        comname:'公司名',
        num:'10',
        date:'2016-01-01 01:02:03',
        date1: new Date(),
      	timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
      };
    }
	componentWillMount () {
	    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
	    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
	  }

  keyboardWillShow (e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({visibleHeight: newSize})
  }

  keyboardWillHide (e) {
    this.setState({visibleHeight: Dimensions.get('window').height})
  }
	_onPopMy(){

		this.props.navigator.pop();
	}
	_onMyEvent(){
		console.log('sssssssssssssss')
		console.log(this.props.Gapp);
    this.props.navigator.push({
      component: MyActivityPage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp}
    });
  }
	queryStringForQueryAndPage(data) {
	    var querystring = Object.keys(data)
	      .map(key => key + '=' + encodeURIComponent(data[key]))
	      .join('&');
	      console.log(querystring)
	    return querystring;
  };
	_onAttMyActivity(){

		try {
			console.log('event_id:');
			console.log(this.props.eventData);

		      console.log(this.props.Gapp.cmdUrl +"Home/cmd/attentEvent");

		      fetch(this.props.Gapp.cmdUrl +"Home/cmd/attentEvent", {
		      method: 'post',
		      body: this.queryStringForQueryAndPage({ 
		          'lusername': this.props.Gapp.user.username,
		          'lpassword': this.props.Gapp.user.password,
		          'num':this.state.num,
		          'date':this.state.date,
		          'comname':this.state.comname,
		          'mobile':this.state.mobile,
		          'event_id':this.props.eventData.id
		      })})
		      .then((response) => response.json())
		      .then((json) => {
		        //http success
		        console.log(json);
		        if(json.status == 0){
		          //login success
		          console.log('yuyue success');

				  AlertIOS.alert(
				       '活动预约成功',
				        null,
				      [
				         {text: '查看我的预约', onPress: this._onMyEvent.bind(this)},
				       ]
				    )
		        }
		        else if(json.status == 5)
		        	AlertIOS.alert(
				       '您已预约过此活动',
				        null,
				      [
				         {text: '查看我的预约', onPress: this._onMyEvent.bind(this)},
				       ]
				    )
		        else{
		        	console.log('fail');
		        }
		      })
		      .catch((error) => {
		        console.warn(error);
		      });
		    }catch(e){
		      console.log('activity failed');
		      return false;
		    }

		    return false;

 
	}
onDateChange(data) {
	
  this.setState({date: date});

}
_ondata(e){
	console.log("11111");
	return(
		<View>
			
		</View>
		);
}
  render() {

   var title=this.props.eventData.title;

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
		              <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginRight:this.state.screenWidth-120,marginTop:15}}>活动预约</Text>
		        </View> 
	        </View>

		     <View style={{flex:1,}}>
		       <View style={{flex:5,}}>
		        <View style={styles.board}>
		        	<View style={styles.board11}>
			        	<Text style={styles.text2}>
			              预约活动
			             </Text>
		             </View>
		             <View style={{backgroundColor:'gray',width:1,height:45,}}>
		             </View>
		             <Text style={styles.text2}>
		              {title}
		             </Text>
		        </View>
		        <View style={styles.board1}>
		        	<View style={styles.board11}>
			        	<Text style={styles.text3}>
			              公司名称
			             </Text>
		             </View>
		             <View style={styles.viewSep }/>
		             <TextInput style={styles.searchInput}
		             	value={this.state.comname}
  								onChangeText={(text) => this.setState({comname: text})}
		             placeholder='必填'/>
		           
		        </View>
		        <View style={styles.board1}>
		        	<View style={styles.board11}>
			        	<Text style={styles.text3}>
			              预约人数
			             </Text>
		             </View>
		             <View style={styles.viewSep} />
		             <TextInput style={styles.searchInput}
		             value = {this.state.num}
		             onChangeText={(text) => this.setState({num: text})}
		             placeholder='必填'/>
		           
		        </View>
		        <View style={styles.board1}>
		        	<View style={styles.board11}>
			        	<Text style={styles.text3}>
			              手机号码
			             </Text>
		             </View>
		             <View style={styles.viewSep} />
		             <TextInput style={styles.searchInput}
		             value = {this.state.mobile}
		             onChangeText={(text) => this.setState({mobile: text})}
		             placeholder='必填'/>
		           
		        </View>
		        <View style={styles.board1}>
		        	<View style={styles.board11}>
			        	<Text style={styles.text3}>
			              预约时间
			             </Text>
		             </View>
		             <View style={styles.viewSep} />
		             <TextInput style={styles.searchInput}
		             value = {this.state.date}
		             onChangeText={(text) => this.setState({date: text})}
		             // onChange={this._ondata.bind(this)}
            		 // value={this.state.timeZoneOffsetInHours.toString()}
		             placeholder='必填'>
		           		
        			</TextInput>
        			
		        </View>
		       </View>
		     </View>
		     	
		      <View style={{}}>
		        <Image
		                style={{height:3,marginTop:10,width:350}}
		                source={require('image!enterprise_integral')} />
		         <TouchableHighlight
		                  style={styles.buttonStyle}
		                  underlayColor='gray'
		                  onPress={this._onAttMyActivity.bind(this)}
		                  >
		                <Text style={styles.text1}>
		                预约
		                </Text>
		          </TouchableHighlight>
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
  board: {
  	marginTop:30,
  	marginLeft:20,
  	marginRight:20,
    borderRadius:6,
    borderColor:'gray',
    borderWidth: 1,
    flexDirection:'row'
  },
board1: {
  	marginLeft:20,
  	marginRight:20,
    borderRadius:6,
    borderColor:'gray',
    borderWidth: 1,
    flexDirection:'row'
  },
  board11: {
    borderRadius:6,
    borderColor:'#f1f1f1',
  },
  backImage: {
    marginTop:7,
    marginLeft:10,

    width: 30,
    height: 30
  },
text2: {
    fontSize: 15,
    marginLeft:10,
    marginRight:10,
    marginTop:15,
    marginBottom:15,
    textAlign: 'center',

    
  },
  searchInput: {
  height: 25,
  marginLeft: 10,
  flex: 3,
  fontSize: 15,
  color: '#48BBEC',
  marginTop:5,
},
  text3: {
    fontSize: 15,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    marginBottom:10,
    textAlign: 'center',
    
  },
  viewSep:{
  	backgroundColor:'gray',
  	width:1,
  	height:35,
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
  text1: {
    fontSize: 15,
    marginBottom:10,
    marginTop:10,
    color:'white',
    textAlign: 'center',
  },
});
module.exports = AttentAcPage;
