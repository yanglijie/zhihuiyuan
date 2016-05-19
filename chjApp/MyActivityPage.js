'use strict';
 
var React = require('react-native');


var RefreshableListView = require('react-native-refreshable-listview');
var Dimensions = require('Dimensions');

var {
  AppRegistry,
  StyleSheet,
  Image, 
  View,
  Text,
  TouchableHighlight,
  Component,
  ListView,
  AlertIOS,
  Alert,
} = React;

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
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

class MyActivityPage extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      verifyCode: '',
	      mobile:'',
	      //EventdataList:React.PropTypes.array.isRequired,
	      EventdataSource:ds.cloneWithRows([]),
	      screenWidth:Dimensions.get('window').width,
	      screenHeight:Dimensions.get('window').height,

	    };
	  }

	  componentWillMount() {
    
        this._onLoadEvent();
     
    
    }

    

	queryStringForQueryAndPage(data) {
	    var querystring = Object.keys(data)
	      .map(key => key + '=' + encodeURIComponent(data[key]))
	      .join('&');
	      console.log(querystring)
	    return querystring;
  };
	 _onLoadEvent(e){
		    try {
		      console.log(this.props.Gapp.cmdUrl +"Home/cmd/getAttentedEvent")
		      fetch(this.props.Gapp.cmdUrl +"Home/cmd/getAttentedEvent", {
		      method: 'post',
		      body: this.queryStringForQueryAndPage({ 
		          'lusername': this.props.Gapp.user.username,
		          'lpassword': this.props.Gapp.user.password
		      })})
		      .then((response) => response.json())
		      .then((json) => {
		        //http success
		        if(json.status == 0){
		          //login success
		          console.log('load activity success');
		          this.setState({EventdataSource:ds.cloneWithRows(json.detail)})
		          console.log(this.state.EventdataSource)
		          return this.state.EventdataSource;
		        }else{
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

	onDel_btn(rowData){

		try {
				
		      console.log(this.props.Gapp.cmdUrl +"Home/cmd/delEventattend");
		      console.log(rowData.id);
		      fetch(this.props.Gapp.cmdUrl +"Home/cmd/delEventattend", {
		      method: 'post',
		      body: this.queryStringForQueryAndPage({ 
		          'lusername': this.props.Gapp.user.username,
		          'lpassword': this.props.Gapp.user.password,
		          'id':rowData.id
		      })})
		      .then((response) => response.json())
		      .then((json) => {
		        //http success
		        console.log(json);
		        if(json.status == 0){
		          //login success
		          console.log('sanchu success');

				  AlertIOS.alert(

				       '删除成功'
				    )
				  this._onLoadEvent();
		        }
		        else{
		        	console.log('fail');
		        }
		      })
		      .catch((error) => {
		        console.warn(error);
		      });
		    }catch(e){
		      console.log('shanchu failed');
		      return false;
		    }

		    return false;



 
	}
  renderRow(rowData, sectionID, rowID) {
    var img = rowData.qrcode;
    console.log(img)

    if (!rowData.Event) {
     
      return(<View></View>);
    }
    
    else{
    	return (
	    <TouchableHighlight style={styles.row} underlayColor='#dddddd' 
	    		onLongPress={() => AlertIOS.alert(
            '要删除已预约的活动吗',
            null,
            [
              {text: 'Yes',onPress: () => this.onDel_btn(rowData)},
              {text: 'No', onPress: () => console.log('1111111!')},
            ]
          )}>
	    	<View>
		      	<View style={{flex:1,flexDirection:'row'}}>
		      		<Image
			            style={{width:30,height:30,margin:10,marginLeft:15}}
			            source={require('image!myIcon')} />

			       <Text style={{width:100,height:20,marginTop:18,fontSize:13,color:'#ADADAD',}}>
				      	活动通行证
				    </Text>
		      	</View>
		      	<View style={{flex:1,flexDirection:'row',backgroundColor:'#255B9B',marginLeft:10,marginRight:10,marginBottom:5}}>
			      	<View style={{backgroundColor:'white',marginLeft:(this.state.screenWidth-20)/3*0.1,marginTop:(this.state.screenWidth-20)/3*0.25,marginBottom: (this.state.screenWidth-20)/3*0.25,}}>
			      		<Image
			            style={{width:78,height:78,margin:(this.state.screenWidth-20)/3*0.1,}}
			            source={{uri: 'http://famesmart.com/phpqrcode/qrcode.php?size=78&data='+img}}  />
			      	</View>
			      	<View style={{flex:6,flexDirection:'column',marginTop:(this.state.screenWidth-20)/3*0.19,marginLeft:(this.state.screenWidth-20)/3*0.1}}>
				      	<View style={{flex:1,flexDirection:'row',}}>
				      		<Text style={[styles.textFont,{width:(this.state.screenWidth-20)*0.57,marginTop:(this.state.screenWidth-20)*0.1*0.1,}]}
				      		numberOfLines={1}>
				      		公司姓名:{rowData.comname}
				      		</Text>
				      	</View>
				      	<View style={{flex:1,flexDirection:'row',}}>
				      		<Text style={[styles.textFont,{width:(this.state.screenWidth-20)*0.57,marginTop:(this.state.screenWidth-20)*0.1*0.1}]}
				      		numberOfLines={1}>
				      		活动名称:{rowData.Event.title}
				      		</Text>
				      	</View>
				      	<View style={{flex:1,flexDirection:'row',}}>
				      		<Text style={[styles.textFont,{width:(this.state.screenWidth-20)*0.57,marginTop:(this.state.screenWidth-20)*0.1*0.1}]}
				      		numberOfLines={1}>
				      		预约人数:{rowData.num}
				      		</Text>
				      	</View>
				      	<View style={{flex:1,flexDirection:'row',}}>
				      		<Text style={[styles.textFont,{width:(this.state.screenWidth-20)*0.57,marginTop:(this.state.screenWidth-20)*0.1*0.1}]}
				      		numberOfLines={1}>
				      		活动地点:{rowData.Event.address}
				      		</Text>
				      	</View>
				      	<View style={{flex:1,flexDirection:'row',}}>
				      		<Text style={[styles.textFont,{width:(this.state.screenWidth-20)*0.57,marginTop:(this.state.screenWidth-20)*0.1*0.1}]}
				      		numberOfLines={1}>
				      		预约时间:{rowData.create_time}
				      		</Text>
				      	</View>
				      	<View style={{flex:1,flexDirection:'row',}}>
				      		<Text style={[styles.textFont,{width:(this.state.screenWidth-20)*0.57,marginTop:(this.state.screenWidth-20)*0.1*0.1}]}
				      		numberOfLines={1}>
				      		手机号码:{rowData.mobile}
				      		</Text>
				      	</View>
			      	</View>
		      	</View>
	      	</View>
	    </TouchableHighlight>
    );
    }
  }
	_onPopMy(){

		this.props.navigator.pop();
	}

   render() {
    return (
    	<View style={{flex:1,flexDirection:'column'}}>
    	<View>
    		<View style={styles.container}>
    			<TouchableHighlight
	                style={{flex:1}}
	                underlayColor='#0067B1'
	                onPress={this._onPopMy.bind(this)}
	                >
	                  <Image
	                    style={styles.image}
	                    source={require('image!left_arrow')} />
              </TouchableHighlight>
              <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginRight:this.state.screenWidth-150,marginTop:15}}>已预约的活动</Text>
    		</View>
    	</View>
          <View style={{flex:1,}}>
            <RefreshableListView
            automaticallyAdjustContentInsets={false}
              dataSource={this.state.EventdataSource}
              renderRow={this.renderRow.bind(this)}
              loadData={this._onLoadEvent.bind(this)}
              refreshDescription='正在刷新活动列表...'
            />
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
  textFont: {
    color: '#FFFFFF',
    fontSize: 13,
    backgroundColor:'transparent',
  },
  image: {
  	marginTop:7,
  	marginLeft:10,
    width: 30,
    height: 30
  },
  row: {
    flex: 1,
    marginTop:10,
    borderColor: '#999999',
    borderWidth: 3,
    borderRadius: 6,
  },
  separator: {
    height: 3,
    backgroundColor: '#dddddd'
  },
});
module.exports = MyActivityPage;