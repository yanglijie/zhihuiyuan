      var token ;
      var lastPost;
      var Guname;
      var Gpwd;
      var Gphone;
      var pageInfo;
      var searchType;
      function pt(obj){
        var debug = true;
        if(debug){
          console.log(obj);
        }
      }

      function trim(str){ //删除左右两端的空格
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
　　 }
　　 function ltrim(str){ //删除左边的空格
　　     return str.replace(/(^\s*)/g,"");
　　 }
　　 function rtrim(str){ //删除右边的空格
　　     return str.replace(/(\s*$)/g,"");
　　 }
    function setGuname(str){
      Guname = str;
      alert('Set')
    }
    function setGpwd(str){
      Gpwd = str;
      alert('Set')
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
      var gposts;

      var detail1;
      var Gurl = 'http://139.196.105.5/TPtest/index.php?s='

      function setPost(){
        i = $('#detail1').val()
        if(gposts[i]){
          $('#detail_page').html(gposts[i].content);
        }
      }

//跳转到我申请的服务原生态版	  
function showHtmlcallJavaService(){

	var str = myObj.HtmlcallJavaService();
	
}	  
function showHtmlcallService(){
    if (window.WebViewBridge) {
      window.WebViewBridge.send("navService");
      return;
    }    
  }

function sendRePost(e){
          var form = e.target;
          var reCheck = true;
          //check input data-type="require"
          $(form).find('input[data-type=require]').each(function(index, el) {
            if(!trim($(el).val())) reCheck = false;
          });
          if(!reCheck){
            App.dialog({
              title        : '错误',
              text         : '请输入数据',
              cancelButton : '确定'
            });
             return false;
          }
          //create data
          postData = {};
          postData.slug =  $(form).find('input[name=slug]').val();
          postData.subslug =  $(form).find('input[name=subslug]').val();
          postData.type =  $(form).find('input[name=type]').val();
          postContent = []
          //check
          $(form).find('input[type=checkbox]').each(function(index, el) {
            if ($(el).get(0).checked) {
              sname = $.trim($(el).parent().text());
              svalue = 'yes';
              if(sname) postContent.push({name : sname,value: 'yes',type:'checkbox'});
            };
          });
          //input
          $(form).find('input[data-name]').each(function(index, el) {
            if ($(el).val()) {
              sname = $(el).attr('data-name');
              svalue = $(el).val();
              postContent.push({name : sname,value:svalue,type:'input'});
            };
          });
          //select
          $(form).find('select[data-name]').each(function(index, el) {
            if ($(el).val()) {
              sname = $(el).attr('data-name');
              svalue = $(el).val();
              postContent.push({name : sname,value:svalue,type:'select'});
            };
          });
          postData.content = postContent;
          postData.token = token;
          
          if(Guname) postData.lusername = Guname;
          if(Gphone) postData.lmobile = Gphone;
          if(Gpwd) postData.lpassword = Gpwd;

          if(postContent.length == 0){
              App.dialog({
                title        : '错误',
                text         : '请选择服务',
                cancelButton : '确定'
              });
              return false;
            }
          $.post(Gurl+"/Home/Cmd/postRequest",
                    postData,
                    function(result){
                          if (result.status == 0) {
                            App.dialog({
                              title        : '提交成功',
                              text         : '我们将尽快与您联系',
                              okButton : '查看我的服务'
                            },function (choice) {
							 if(choice){
                showHtmlcallService();
							} 
						   });
                          }else{
                            App.dialog({
                              title        : '提交失败',
                              text         : '请检查您的网络是否连接正常。',
                              okButton : '确定'
                            });
                          };
                    },'json');
            return false;
}



    App.controller('home', function (page) {
        // put stuff here

        //set the form post url

      //submit
      $(page).find('form').submit(function() {
          pt('send post');
          
          
            return false;
      });
       //get the menu detail
       $(page).find('span[data-slug]').each(function(index, el) {
          var slug = $(el).attr('data-slug');
          var year = '2015';
          if (slug) {
            //get the post
            $.post(Gurl+"/Home/Login/getPost",
                  {slug:slug,year:year},
                  function(result){
                    if (result.detail.content) {$(el).html(result.detail.content);};
            },'json');
          }
       });

      $(page).find('.show_details').on(clickEvent,function() {
          /* Act on the event */
          App.load('detail')

        });


      //search
      if($(page).find('#showSearch')){
        pt('blind showSearch');
        pt($(page).find('#showSearch'))
          $(page).find('#showSearch').on('click',function(){
            pt('click showSearch');
            var tmpObj = $(page).find("#tech-search");
            var isShow = tmpObj.attr('data-show');
            if(isShow == 0){
              tmpObj.fadeIn().attr('data-show',1);
            }else{
              searchValue = $.trim(tmpObj.val());
              if(searchValue){
                App.load('equpListSearch',{etype:'',search:searchValue});
                //equpLishRefresh(page,da,searchValue);
              }else{
                tmpObj.fadeOut().attr('data-show',0);
                //equpLishRefresh(page,da,"");
              }
            }
          })
      }
      });



      App.controller('detail', function (page,da) {
        // put stuff here
          //初始化详情页面
          //select页
         //清空
                   //titile
          $(page).find('#detail2').html(da.d2);

          if(da.d3==undefined){
            //get the post
            var slug = da.d3Slug;;

            $.post(Gurl+"/Home/Login/getPost",
                  {slug:slug},
                  function(result){
                    $(page).find('#detail3').html(result.detail.content);
            },'json');
          }else{
            $(page).find('#detail3').html(da.d3);
          }

          

          $(page).find('#detail4').html(da.d4);
         pt(da)
         $('#detail1').empty();
         //添加
            $.post(Gurl+"/Home/Login/getPosts",
                  {slug:da.slug},
                  function(result){
                    if (gposts= result.detail) {
                        for(i in gposts){
                          var year = gposts[i].year;
                          $(page).find('#detail1').append('<option value="'+i+'">'+year+'年'+da.d1+'</option>')
                        }
                        setPost();
                    };
            },'json');


      });


      App.controller('bwx1', function (page,da) {
        // put stuff here
          //初始化详情页面
          //select页
         //清空


      });



function equpLishRefresh(page,da,search){
  //添加

  var tmpData = (search == "")?{type:da.etype}:{type:searchType,search:search};
  if(JSON.stringify(lastPost) == JSON.stringify(tmpData)) {
    return true;
    pt("SAME@@")
  }
  pt("tmpData")
  pt(tmpData)
  pt('lastPost')
  pt(lastPost);
  
  $.post(Gurl+"/Home/Login/getEqupList",
        tmpData,
        function(result){
          $(page).find('.row_li_c').remove();
          if (equps= result.detail) {
              lastPost = tmpData;
              //is search?
              if(search==""){
                var cDemo = $(page).find('.row_li_demo');
                i = -1;
                for(i in equps){
                  var newC = $(cDemo).clone();
                  newC.removeClass('row_li_demo');
                  newC.addClass('row_li_c')
                  newC.attr('data-id', equps[i].id);
                  newC.find('.eList_con').html(equps[i].title);
                  newC.find('.eList_info').html(equps[i].info);

                  newC.find('.eList_img img').attr('src', './images/'+equps[i].info_img);
                  pt(equps[i])
                  $(page).find('.row_list').append(newC)
                  newC.show(0);
                  $(page).find('.row_list').append('<div class="clearfix s-line row_li_c"></div>')
                  $(page).find('#techSubmit').hide();
                }
                $(page).find('#equpListCon').text(pageInfo);
              }else{
                var cDemo = $(page).find('.row_li_search_demo');
                i = -1;
                for(i in equps){
                  var newC = $(cDemo).clone();
                  newC.removeClass('row_li_search_demo');
                  newC.addClass('row_li_c')
                  newC.attr('data-id', equps[i].id);
                  newC.find('.eList_title').html(equps[i].title);
                  pt(equps[i])
                  $(page).find('.row_list').append(newC)
                  newC.show(0);
                  $(page).find('.row_list').append('<div class="clearfix s-line row_li_c"></div>')
                  
                }
                i++;
                if(i == 0){
                  $(page).find('#equpListCon').text('未找到与'+'"'+ search+'"相关的设备记录');
                }else{
                  $(page).find('#equpListCon').text('找到'+i+'条与'+'"'+ search+'"相关的设备记录');
                  $(page).find('#techSearchCon').attr('value',search);
                  $(page).find('#techSubmit').show();
                } 
              }
              
          };
  },'json');
}

      App.controller('equpList', function (page,da) {
        //清空
        lastPost={};
        searchType=da.searchType;
        pt('search:'+searchType)
        if(searchType==undefined){
          pt('noSearch')
          $(page).find('#showSearch').hide();
        }
         pt(da)
          $(page).find('#equpListTitle').html(da.d1);
          $(page).find('#techName').val(da.slug);
          if (da.slug) {
            //get the post
            $.post(Gurl+"/Home/Login/getPost",
                  {slug:da.slug},
                  function(result){
                    if (result.detail.content) {
                      pageInfo = result.detail.content;
                      $(page).find('#equpListCon').html(result.detail.content);
                    };
            },'json');
          }
          equpLishRefresh(page,da,"");
          //titile

          $(page).find('#showSearch').on('click',function(){
            pt('click showSearch');
            var tmpObj = $(page).find("#tech-search");
            var isShow = tmpObj.attr('data-show');
            if(isShow == 0){
              tmpObj.fadeIn().attr('data-show',1);
            }else{
              searchValue = $.trim(tmpObj.val());
              if(searchValue){
                equpLishRefresh(page,da,searchValue);
              }else{
                tmpObj.fadeOut().attr('data-show',0);
                equpLishRefresh(page,da,"");
              }
            }
          })

          //submit
          $(page).find('#techForm').submit(function(e) {
            sendRePost(e);
            return false;
          });
      });

      App.controller('equpListSearch', function (page,da) {
        //清空
        //  pt(da)
        // $(page).find('#equpListTitle').html(da.d1);
        // if (da.slug) {
        //   //get the post
        //   $.post(Gurl+"/Home/Login/getPost",
        //         {slug:da.slug},
        //         function(result){
        //           if (result.detail.content) {$(page).find('#equpListCon').html(result.detail.content);};
        //   },'json');
        // }
          pt('pageda:');
          pt(da)
        equpLishRefresh(page,da,da.search);
        //titile

          // $(page).find('#showSearch').on('click',function(){
          //   pt('click showSearch');
          //   var tmpObj = $(page).find("#tech-search");
          //   var isShow = tmpObj.attr('data-show');
          //   if(isShow == 0){
          //     tmpObj.fadeIn().attr('data-show',1);
          //   }else{
          //     searchValue = $.trim(tmpObj.val());
          //     if(searchValue){
          //       equpLishRefresh(page,da,searchValue);
          //     }else{
          //       tmpObj.fadeOut().attr('data-show',0);
          //       equpLishRefresh(page,da,"");
          //     }
          //   }
          // })

      });


      App.controller('equpDetail', function (page,el) {
        // put stuff here
          //初始化页面
          pt(el)
          var eid = $(el).attr('data-id');
          if (eid) {
            //get the post
            $.post(Gurl+"/Home/Login/getEqupById",
                  {id:eid},
                  function(result){
                    if (result.detail.id) {
                      pt(result.detail)
                      
                      $(page).find('.header_img img').attr('src','images/'+ result.detail.img); 
                      $(page).find('#equpDetailTitle').html(result.detail.title);
                      $(page).find('#equpDetailInfo').html(result.detail.info);
                      $(page).find('#equpDetailCon').html(result.detail.content);
                    };
            },'json');
          }

      });


      App.controller('bwx1', function (page,el) {
        // put stuff here
          //初始化页面
          $(page).find('form').submit(function(e) {
              sendRePost(e);
              return false;
          });
      });

      App.controller('bwx2', function (page,el) {
        // put stuff here
          //初始化页面
          $(page).find('form').submit(function(e) {
            sendRePost(e);
            return false;
        });

      });

      App.controller('bwx3', function (page,el) {
        // put stuff here
          //初始化页面
          $(page).find('form').submit(function(e) {
            sendRePost(e);
            return false;
        });

      });


      try {
        var tmpGuid = GetQueryString('uid');
        var tmpGeid = GetQueryString('eid');
        var tmpToken = GetQueryString('token');
        var tmpGname = GetQueryString('uname');
        var tmpGphone = GetQueryString('uphone');
        var tmpGpwd = GetQueryString('upwd');
        if(tmpGuid) gUid = tmpGuid;
        if(tmpGeid) gEid = tmpGeid;
        if(tmpToken) token = tmpToken;
        if(tmpGname) Guname = tmpGname;
        if(tmpGpwd) Gpwd = tmpGpwd;
        if(tmpGphone) Gphone = tmpGphone;
        App.load('home');
        //App.restore();
      } catch (err) {
        App.load('home');
      }

      $(document).ready(function() {
        $('form').submit(function(e) {
          sendRePost(e);
          return false;
      });


    });
