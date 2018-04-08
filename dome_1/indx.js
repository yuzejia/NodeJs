var index = 0;

// fs 文件管理
const fs = require('fs');
const url = require('url');
// js DOM 操作
const JSDOM = require('jsdom').JSDOM;
// gbk utf-8 编码解析
const gbk = require('gbk');
//cheerio  jquery DOM 操作
const cheerio = require('cheerio');




function GetUrl(sUrl,success){
	index++;
	var urlObj = url.parse(sUrl);
	var http ='';
	if(urlObj.protocol == 'http:'){
		http = require('http');
	}
	else{
		http = require('https');
	}


		

	let req = http.request({

		'hostname':urlObj.hostname,
		'path':urlObj.path

	},res=>{	

		console.log(res.statusCode)

		if(res.statusCode == 200){
			var arr = [];
			var str = '';
			res.on('data',buffer=>{
				// arr.push(buffer);
				str += buffer;
			});
			res.on('end',()=>{
				// let b = Buffer.concat(arr);
				success && success(str);
			});
		}else if(res.statusCode == 302 || res.statusCode == 301){
			console.log(`我是第${index}次重定向`,res.headers.location);
			GetUrl(res.headers.location,success)
		}
	
	});

	req.end();
	req.on('error',()=>{
		console.log('404了，哥们');
	})



}



GetUrl('hgttp://neihanshequ.com/',data=>{
	var http = require('http')

	// var html = gbk.toString('utf-8',data);
	let $ = cheerio.load(data,{decodeEntities: false})

	// let DOM = new JSDOM(data);
	// let document = DOM.window.document;

		var JsonArry =  [
			{
				header :{
					url: '',
					imgUrl:'',
					name:'',
					dateTime:'',
				},
				content:{

				},
			}
	]

	var listData = []
	let content = $('.content-wrapper>div>ul>li');
	content.each( function(element, index) {
		let url,      // 用戶链接
			imgUrl,   // 图片链接
			name,	  // 用户名
			dateTime, // 发布时间

			conterUrl, //内容链接
			conterText//内容数据

		var list   = $(this);
		var header = list.find('.header');
		var content = list.find('.content-wrapper');

		// header
		 url    = header.children('a').attr('href');
		 imgUrl = header.children('a').children('img').attr('data-src');
		 name   = header.children('a').children('.name-time-wrapper').children('.name').html();
		 dateTime   = header.children('a').children('.name-time-wrapper').children('.timeago').html().replace(/\n|\t/g,"");
		 // content
		 conterUrl = content.children('a').attr('href');
		 conterText = content.children('a').children('.upload-txt').children('h1').children('p').html();

		 // header 頭部數據
		let headerObj = {
				url: url,
				imgUrl:imgUrl,
				name:name,
				dateTime:dateTime,
		}

		// 內容區域
		let conter = {
			conterUrl:conterUrl,
			conterText:conterText
		}

		let listObj = {
			header:headerObj,
			content:conter
		}

		listData.push(listObj)
	});
		var list_obj = {
			data:listData
		}
		
		fs.writeFileSync('E:/项目/node/抓包/test1.js',JSON.stringify(listData,null, '\t'));

})

