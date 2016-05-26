      var TK = '';
      var token = '';
      var Guname;
      var Gpwd;
      var Gphone;
      function pt(obj){
        var debug = true;
        if(debug){
          console.log(obj);
        }
      }

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

      var isMobile = {
        Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
        },
        BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        },
        iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
        },
        any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
      };
      var clickEvent = isMobile.any()?'touchend':'click';
      var isMobileB = isMobile.any()?true:false;

      var trTime = 280;
      var gUid = undefined;
      var gEid = undefined;
      gEid = 3;
      gUid = 105;
      var gposts;

      var detail1;
      var Gurl = 'http://139.196.105.5/TPtest/index.php?s='
function _getDate(strTime){
    var arr = strTime.split(" ");
    return arr[0];
  }

function showEvent(eeid,euname,epwd){
  gEid = eeid;
  Guname = euname;
  Gpwd =epwd;
  page = $('#order');
    postData = {};
    postData.token = token;
    postData.id = gEid;
    if(Guname) postData.lusername = Guname;
    if(Gphone) postData.lmobile = Gphone;
    if(Gpwd) postData.lpassword = Gpwd;

        $.post(Gurl+"/Home/Cmd/getEventById",
        postData,
        function(result){
              if (result.detail[0]) {
                var eObj = result.detail[0]
                sTime = _getDate(eObj.stime);
                eTime =_getDate(eObj.etime);
                $(page).find('#event_name').html(eObj.title);

                $(page).find('#input-time').val('').scroller({
                    preset : 'date', 
                    theme: 'android-ics light', 
                    mode:'scroller', 
                    display: 'bottom',
                    setText:'确定',
                    cancelText:'取消',
                    //minDate:new Date(eObj.stime),
                    //maxDate:new Date(eObj.etime),
                    minDate:new Date(sTime),
                    maxDate:new Date(eTime),
                    dateFormat:'yy-mm-dd'

                });
              }else{
              };
        },'json');
}

App.controller('order', function (page) {

// $(page).on('appShow', function () {
//   alert('onShow')
//     console.log(gEid);
//     console.log('the user can see it!');
    
//     postData = {};
//     postData.token = token;
//     postData.id = gEid;
//     if(Guname) postData.lusername = Guname;
//     if(Gphone) postData.lmobile = Gphone;
//     if(Gpwd) postData.lpassword = Gpwd;

//         $.post(Gurl+"/Home/Cmd/getEventById",
//         postData,
//         function(result){
//               if (result.detail[0]) {
//                 var eObj = result.detail[0]
//                 $(page).find('#event_name').html(eObj.title);

//                 console.log(eObj.stime);
//                 console.log(new Date(eObj.stime))
//                 console.log(new Date(eObj.etime))
//                 $(page).find('#input-time').val('').scroller({
//                     preset : 'date', 
//                     theme: 'android-ics light', 
//                     mode:'scroller', 
//                     display: 'bottom',
//                     setText:'确定',
//                     cancelText:'取消',
//                     minDate:new Date(eObj.stime),
//                     maxDate:new Date(eObj.etime),
//                     dateFormat:'yy-mm-dd'

//                 });
//               }else{
//               };
//         },'json');
//       })
		
})

App.controller('check', function (page) {
	$(page).on('appShow', function () {
    postData = {};
    postData.token = token;
    if(Guname) postData.lusername = Guname;
    if(Gphone) postData.lmobile = Gphone;
    if(Gpwd) postData.lpassword = Gpwd;

		$.post(Gurl+"/Home/Cmd/getAttentedEvent",
        postData,
        function(result){
				if (result.detail) {

					var eObjs = result.detail;
					for(i in eObjs){
						console.log(eObjs[i])
						var newC = $($(page).find('.check_demo')).clone();
						newC.removeClass('check_demo');
                        newC.addClass('check_show')
                        newC.attr('data-id', eObjs[i].qrcode);
                        newC.find('.c_comname').val(eObjs[i].comname);
                        newC.find('.c_name').val(eObjs[i].Event.title);
                        newC.find('.c_num').val(eObjs[i].num);
                        newC.find('.c_addr').val(eObjs[i].Event.address);
                        newC.find('.c_time').val(eObjs[i].date);
                        newC.find('.c_tel').val(eObjs[i].mobile);
                        newC.find(".qr_img").attr("src", "http://famesmart.com/phpqrcode/qrcode.php?size=9&data=" + eObjs[i].qrcode); 
                        $(page).find('.row_all').append(newC);

					}
					//$(page).find('#event_name').html(eObj.title);
				}else{
				};
			},'json');
		})

	})


try {
	var tmpGuid = GetQueryString('uid');
	var tmpGeid = GetQueryString('eid');
	var tmpToken = GetQueryString('token');
	if(tmpGuid) gUid = tmpGuid;
	if(tmpGeid) gEid = tmpGeid;
	if(tmpToken) token = tmpToken;

  var tmpGname = GetQueryString('uname');
  var tmpGphone = GetQueryString('uphone');
  var tmpGpwd = GetQueryString('upwd');
  if(tmpGname) Guname = tmpGname;
  if(tmpGpwd) Gpwd = tmpGpwd;
  if(tmpGphone) Gphone = tmpGphone;


	if(GetQueryString('action') == 'check'){
		App.load('check');
	}else{
		App.load('order');
	}

//App.restore();
} catch (err) {
	App.load('order');
}


function showHtmlcallJavaPlan(){

	
var str = myObj.HtmlcallJavaPlan();
	
}




function fun_post(){
	console.log('post');
	//check
	var bcheck=true;
	$('.inputs').each(function(index,element){
		if($(element).val() == ""){
			bcheck = false;
		}
	});
	if (!bcheck) {
		 App.dialog({
                      title        : '活动预约',
                      text         : '请完成填写',
                      cancelButton : '确定'
                    });
	}else{
    postData = {};
    postData.token = token;
    postData.comname = $('#input-name').val();
	postData.pername = $('#input-pername').val();
	postData.pertitle = $('#input-pertitle').val();
    postData.mobile =  $('#input-tel').val();
    postData.date = $('#input-time').val();
    postData.num = $('#input-num').val();
    postData.event_id = gEid;
    if(Guname) postData.lusername = Guname;
    if(Gphone) postData.lmobile = Gphone;
    if(Gpwd) postData.lpassword = Gpwd;

		$.post(Gurl+"/Home/Cmd/attentEvent",
            postData,
            function(result){
              if (result.status == 0) {
                App.dialog({
                  title        : '活动预约',
                  text         : '活动预约成功',
                  okButton     : '查看我的预约'
                },function (choice) {
                  if(choice){
                   showHtmlcallEvent();
                  } 
                });
              }else if(result.status == 5){
                App.dialog({
                  title        : '活动预约',
                  text         : '您已预约过此活动',
                  okButton : '查看我的预约'
                },function (choice) {
                  if(choice){
                   showHtmlcallEvent();
                  } 
                });
              }
              else{
                App.dialog({
                  title        : '活动预约',
                  text         : '活动预约失败，请检查您的网络是否连接正常。',
                  cancelButton : '确定'
                });
              };
            },'json');	
	}

}



