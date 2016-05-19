'use strict';
 



var React = require('react-native');
var Dimensions = require('Dimensions');
var RefreshableListView = require('react-native-refreshable-listview');
var {
  AppRegistry,
  StyleSheet,
  Image, 
  View,
  Text,
  TouchableHighlight,
  ListView,
  AlertIOS,
  Component
} = React;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

class MyServicePage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      verifyCode: '',
      mobile:'',
      EventdataSource:ds.cloneWithRows([]),
      screenWidth:Dimensions.get('window').width,

    };
  }
  componentWillMount() {
    
        this._onLoadEvent();
     
    
    }

	_onPopMy(){

		this.props.navigator.pop();
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
          console.log(this.props.Gapp.cmdUrl +"Home/cmd/getRequest")
          fetch(this.props.Gapp.cmdUrl +"Home/cmd/getRequest", {
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
        
          console.log(this.props.Gapp.cmdUrl +"Home/cmd/delRequest");
          console.log(rowData.id);
          fetch(this.props.Gapp.cmdUrl +"Home/cmd/delRequest", {
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
               '删除成功',
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
    var img = require('image!share_codeapk')
    var status
    if (rowData.status == 'unread') {
      status='未确认';
    }
    else{
      status='已确认';
    }

    
    var searchFu="";
    var searchSi = "";
   for (var i=0; i<rowData.content.length;i++){
      if (rowData.content[i].value == "yes") {
        searchSi = rowData.content[i].name + ";";
      }else{
        searchSi = rowData.content[i].name + ":" +rowData.content[i].value +";";
      }
      
      searchFu=searchFu.concat(searchSi);
   }
   if (!rowData) {
     
      return(<View></View>);
    }
    else{
    return (
      <TouchableHighlight style={styles.row} underlayColor='#dddddd' 
          onLongPress={() => AlertIOS.alert(
            '要删除已预约的服务吗',
            null,
            [
              {text: 'Yes', onPress:() => this.onDel_btn(rowData)},
              {text: 'No',},
            ]
          )}>
        <View>
            <View style={{flex:1,flexDirection:'row'}}>
              <Image
                  style={{width:30,height:30,margin:10,marginLeft:15}}
                  source={require('image!myIcon')} />
             <Text style={{width:100,height:20,marginTop:18,fontSize:13,color:'#ADADAD',}}>
                {rowData.slug}
            </Text>
            </View>
            <View style={{flex:1,flexDirection:'row',backgroundColor:'#255B9B',margin:10,}}>
              <View style={{flex:6,flexDirection:'column',marginTop:5,marginLeft:5,marginBottom:5,}}>
                <View style={{flex:1,flexDirection:'row',}}>
                  <Text style={styles.textFont}>
                  服务的主题:
                  </Text>
                  <Text style={[styles.textFont,{width:this.state.screenWidth-120,marginLeft:20}]}>
                  {rowData.subslug}
                  </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',}}>
                  <Text style={styles.textFont}>
                  申请的时间:
                  </Text>
                  <Text style={[styles.textFont,{width:this.state.screenWidth-120,marginLeft:20}]}>
                  {rowData.create_time}
                  </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',}}>
                  <Text style={styles.textFont}>
                  申请的状态:
                  </Text>
                  <Text style={[styles.textFont,{width:this.state.screenWidth-120,marginLeft:20}]}>
                  {status}
                  </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',}}>
                  <Text style={styles.textFont}>
                  选择的服务:
                  </Text>
                  <Text style={[styles.textFont,{width:this.state.screenWidth-125,marginLeft:20}]}>
                  {searchFu}
                  </Text>
                </View>
              </View>
            </View>
        </View>
      </TouchableHighlight>
    );
  }
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
                  style={styles.image}
                  source={require('image!left_arrow')} />
              </TouchableHighlight>
              <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginRight:this.state.screenWidth-140,marginTop:15}}>申请的服务</Text>
        </View> 
      </View>

      <View style={{flex:1,}}>
            <RefreshableListView
            automaticallyAdjustContentInsets={false}
              dataSource={this.state.EventdataSource}
              renderRow={this.renderRow.bind(this)}
              loadData={this._onLoadEvent.bind(this)}
              refreshDescription='正在刷新服务列表...'
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
    marginTop:7,
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

module.exports = MyServicePage;