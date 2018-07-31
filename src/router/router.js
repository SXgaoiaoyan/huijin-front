const routers = [
    {
        path: '/',
        name:'home',
        meta: {
            title: ''
        },
        component: (resolve) => require(['../views/index.vue'], resolve),
        children: [
            { path: '/', title: '商品列表', name: 'home_content', component: (resolve) => require(['../views/index_content.vue'], resolve) },
            { path: '/detail/:id', title: '商品详情', name: 'detail', component: (resolve) => require(['../views/detail.vue'], resolve) },
            { path: '/wineclass', title: '酒品分类', name: 'wineclass', component: (resolve) => require(['../views/wineclass.vue'], resolve) },
            { path: '/resaleDetail', title: '转售详情', name: 'resaleDetail', component: (resolve) => require(['../views/resaleDetail.vue'], resolve) },
            
            { path: '/news', title: '最新资讯', name: 'news', component: (resolve) => require(['../views/news.vue'], resolve) },
            {
                path: '/personal',
                name: 'personal',
                meta: {
                    title: '个人主页'
                },
                component: (resolve) => require(['../views/personal.vue'], resolve),
                children: [
                    { path: '/', title: '商品列表', name: 'personal_index', component: (resolve) => require(['../views/personal_index.vue'], resolve) },
                    { path: '/shopcart', title: '购物车', name: 'shopcart', component: (resolve) => require(['../views/shopcart.vue'], resolve) },    
                    { path: '/personaldata', title: '个人资料', name: 'personaldata', component: (resolve) => require(['../views/personaldata.vue'], resolve) },    
                    { path: '/allorders', title: '全部订单', name: 'allorders', component: (resolve) => require(['../views/allorders.vue'], resolve) },    
                    { path: '/submitorder', title: '提交订单', name: 'submitorder', component: (resolve) => require(['../views/submitorder.vue'], resolve) },    
                    { path: '/changePhone', title: '更改绑定', name: 'changePhone', component: (resolve) => require(['../views/changePhone.vue'], resolve) },    
                    { path: '/myAccount', title: '我的账户', name: 'myAccount', component: (resolve) => require(['../views/myAccount.vue'], resolve) },    
                    { path: '/myCellar', title: '我的酒窖', name: 'myCellar', component: (resolve) => require(['../views/myCellar.vue'], resolve) },    
                    { path: '/immediatepay', title: '立即付款', name: 'immediatepay', component: (resolve) => require(['../views/immediatepay.vue'], resolve) },    
                    {path: '/resalePublish/:order_sn/:order_good_id/:unique_good_id',name: 'resalePublish',component: (resolve) => require(['../views/resalePublish.vue'], resolve)},
                ]
            },
        ]
    },
    
    {
		path: '/companyReg',
		name: 'companyReg',
	    meta: {
	        title: '企业注册'
	    },
        component: (resolve) => require(['../views/companyReg.vue'], resolve),
    },
    {
		path: '/personReg',
		name: 'personReg',
	    meta: {
	        title: '个人注册'
	    },
        component: (resolve) => require(['../views/personReg.vue'], resolve),
    },
    {
		path: '/paycallback',
		name: 'paycallback',
	    meta: {
	        title: '付款成功跳转'
	    },
	    component: (resolve) => require(['../views/paycallback.vue'], resolve)
    },
   
   
    {
		path: '/resaleList/:order_sn/:order_good_id',
		name: 'resaleList',
	    meta: {
	        title: '转售跳转页'
	    },
	    component: (resolve) => require(['../views/resaleList.vue'], resolve)
    },
    // {
	// 	path: '/resaleDetail',
	// 	name: 'resaleDetail',
	//     meta: {
	//         title: '转售详情'
	//     },
	//     component: (resolve) => require(['../views/resaleDetail.vue'], resolve)
    // },
    {
		path: '/buyBack',
		name: 'buyBack',
	    meta: {
	        title: '商品回购'
	    },
	    component: (resolve) => require(['../views/buyBack.vue'], resolve)
    },         

 
    
	{
        path: '/secondHand',
        name:'secondHand',
        meta: {
            title: '二手交易'
        },
        component: (resolve) => require(['../views/secondHand.vue'], resolve)
    },
    {
        path: '/test',
        name:'test',
        meta: {
            title: '订单'
        },
        component: (resolve) => require(['../views/test.vue'], resolve)
    },
    {
        path: '/test5',
        name:'test5',
        meta: {
            title: '订单'
        },
        component: (resolve) => require(['../views/test5.vue'], resolve)
    },
    {
		path: '/login',
		name:"login",
        meta: {
            title: 'Login - 登录'
        },
        component: (resolve) => require(['../views/login.vue'], resolve)
	},
   
    {
        path: '/bind',
        name:'bind',
        meta: {
            title: '绑定手机号'
        },
        component: (resolve) => require(['../views/bind.vue'], resolve)
    },
    {
        path: '/find_user',
        name:'find_user',
        meta: {
            title: '绑定手机号'
        },
        component: (resolve) => require(['../views/find_user.vue'], resolve)
    },
    {
        path: '/test2',
        name:'test2',
        meta: {
            title: '绑定手机号'
        },
        component: (resolve) => require(['../views/test2.vue'], resolve)
    },
   
];
export default routers;