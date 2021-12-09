
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login_v2","pages/index/index","pages/people/index","pages/register/register","pages/forget/forget","pages/agree/agree","pages/hideAgree/hideAgree","pages/me/salary","pages/me/aboutMe","pages/me/mentalTest/list","pages/me/mentalTest/index","pages/me/mentalTest/explain","pages/me/course","pages/signOut/signOut","pages/signOut/success","pages/setting/userdetail","pages/setting/useredit","pages/getCode/index","pages/getCode/edit","pages/history/index","pages/history/edit","pages/history/company","pages/select/index","pages/onlyCode/index","pages/getCode/getScan","pages/getCode/getNum","components/getCodeItem/index","pages/identity/index","pages/attest/index","pages/attest/formal","pages/attest/personal","pages/attest/over","pages/demo/index","pages/search/search"],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"lijinghai","navigationStyle":"custom","navigationBarTextStyle":"white"},"tabBar":{"selectedColor":"#87CEFF","color":"#C0C0C0","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/img/home.png","selectedIconPath":"static/img/active_home.png"},{"text":"问题反馈","pagePath":"pages/search/search","iconPath":"static/img/problem.png","selectedIconPath":"static/img/active_problem.png"},{"text":"问题反馈","pagePath":"pages/identity/index","iconPath":"static/img/problem.png","selectedIconPath":"static/img/active_problem.png"},{"text":"个人中心","pagePath":"pages/people/index","iconPath":"static/img/people.png","selectedIconPath":"static/img/active_people.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"TeacherHelper_uniapp","compilerVersion":"3.2.16","entryPagePath":"pages/login/login_v2","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login_v2","meta":{"isQuit":true},"window":{}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/people/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心"}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"用户注册"}},{"path":"/pages/forget/forget","meta":{},"window":{"navigationBarTitleText":"忘记密码"}},{"path":"/pages/agree/agree","meta":{},"window":{"navigationBarTitleText":"用户协议"}},{"path":"/pages/hideAgree/hideAgree","meta":{},"window":{"navigationBarTitleText":"用户隐私协议"}},{"path":"/pages/me/salary","meta":{},"window":{"navigationBarTitleText":"薪资排行","navigationStyle":"custom"}},{"path":"/pages/me/aboutMe","meta":{},"window":{"navigationBarTitleText":"关于作者","navigationStyle":"custom"}},{"path":"/pages/me/mentalTest/list","meta":{},"window":{"navigationBarTitleText":"答题测试","navigationStyle":"custom"}},{"path":"/pages/me/mentalTest/index","meta":{},"window":{"navigationBarTitleText":"答题测试","navigationStyle":"custom"}},{"path":"/pages/me/mentalTest/explain","meta":{},"window":{"navigationBarTitleText":"答题规则说明"}},{"path":"/pages/me/course","meta":{},"window":{"navigationBarTitleText":"班级课程","navigationStyle":"custom"}},{"path":"/pages/signOut/signOut","meta":{},"window":{"navigationBarTitleText":"退出登录"}},{"path":"/pages/signOut/success","meta":{},"window":{"navigationBarTitleText":"退出成功页面"}},{"path":"/pages/setting/userdetail","meta":{},"window":{"navigationBarTitleText":"用户详情"}},{"path":"/pages/setting/useredit","meta":{},"window":{"navigationBarTitleText":"用户编辑"}},{"path":"/pages/getCode/index","meta":{},"window":{}},{"path":"/pages/getCode/edit","meta":{},"window":{}},{"path":"/pages/history/index","meta":{},"window":{}},{"path":"/pages/history/edit","meta":{},"window":{}},{"path":"/pages/history/company","meta":{},"window":{"navigationBarTitleText":"拍照"}},{"path":"/pages/select/index","meta":{},"window":{}},{"path":"/pages/onlyCode/index","meta":{},"window":{}},{"path":"/pages/getCode/getScan","meta":{},"window":{}},{"path":"/pages/getCode/getNum","meta":{},"window":{}},{"path":"/components/getCodeItem/index","meta":{},"window":{}},{"path":"/pages/identity/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/attest/index","meta":{},"window":{}},{"path":"/pages/attest/formal","meta":{},"window":{}},{"path":"/pages/attest/personal","meta":{},"window":{}},{"path":"/pages/attest/over","meta":{},"window":{}},{"path":"/pages/demo/index","meta":{},"window":{}},{"path":"/pages/search/search","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
