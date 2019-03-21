let config = {
	//首页请求
	commentxiu:{
		url1: /127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/repair/index.html':
		/uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/repair/index.html':
		'https://www.e-shequ.com/shijiazhuang/weixin/repair/index.html',
	},
	homeorderdetail:{
		url1: /127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/person/index.html':
		/uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/person/index.html':
		'https://www.e-shequ.com/shijiazhuang/weixin/person/index.html',
	}
		
};


export default config