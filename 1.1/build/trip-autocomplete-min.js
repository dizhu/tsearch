/*! tsearch - v1.1 - 2013-08-07 3:23:20 PM
* Copyright (c) 2013 舒克; Licensed  */
KISSY.add(function(a,b,c){var d={node:null,points:["bl","tl"],overflow:{adjustX:!1,adjustY:!0}};return{flight:function(c){var e={source:"http://s.jipiao.trip.taobao.com/city_search.do?lines={maxResults}&q={query}",resultListLocator:function(b){b=b.result;var c=[];return a.each(b,function(b){if(b.hasAirport)c.push(b);else{var d=b.nearCity;a.each(d,function(d){var e=a.mix(d,{nearCity:b.cityName});c.push(e)})}}),c},resultTextLocator:"cityName",activeFirstItem:!0,align:d,hotSource:"http://www.taobao.com/go/rgn/trip/chinahotcity_jsonp.php",resultFormatter:function(b,c){var d=[],e='<div class="ks-ac-item-inner"><span class="ks-ac-name">{cityname}</span><span class="ks-ac-intro">{py}</span></div>',f="";for(var g in c){var h=c[g];if(h.raw.nearCity){var i='<div class="ks-ac-item"><div class="ks-ac-near-tip">"'+h.raw.nearCity+'"&nbsp;\u6ca1\u6709\u673a\u573a</div>',j='<div class="ks-ac-item-inner ks-ac-item-inner-sub"><span class="ks-ac-name">\u90bb\u8fd1\u673a\u573a\uff1a{cityName}&nbsp;--&nbsp;\u8ddd\u79bb{distance}\u516c\u91cc</span></div>',k=a.substitute(j,{cityName:h.text,distance:h.raw.distance});h.raw.nearCity!=f?(i+=k+"</div>",f=h.raw.nearCity):i=k,d.push(i)}else d.push(a.substitute(e,{cityname:h.text,py:h.raw.py}))}return d}};c=a.merge(e,c);var f=new b(c),g=f.get("codeInputNode");return g=g instanceof a.NodeList?g:a.one(g),g&&f.on("select",function(a){g.val(a.result.raw.cityCode)}),f},iflight:function(c){var e={source:"http://ijipiao.trip.taobao.com/ie/remote/auto_complete.do?flag=4&count=10&callback={callback}&q={query}",resultListLocator:"result",resultTextLocator:"cityName",activeFirstItem:!0,align:d,hotSource:"http://www.taobao.com/go/rgn/trip/international_jsonp.php"};c=a.merge(e,c);var f=new b(c),g=f.get("codeInputNode");return g=g instanceof a.NodeList?g:a.one(g),g&&f.on("select",function(a){g.val(a.result.raw.cityCode)}),f},hotel:function(e){function f(b){var c=b.result,d=[];return a.isArray(c)&&c.length&&a.map(c,function(a){var b=a.t.split("_");d.push({cityName:b[0],cityCode:a.c,py:b[1]})}),d}function g(b,d){return a.map(d,function(b){var d=b.raw;return a.substitute('<div class="ks-ac-item-inner"><span class="ks-ac-name">{cityName}</span><span class="ks-ac-intro">{py}</span></div>',{cityName:c.cutStr(d.cityName,20),py:c.cutStr(d.py,10)})})}var h={activeFirstItem:!0,align:d,resultListLocator:f,resultFormatter:g,resultTextLocator:"cityName",source:"http://kezhan.trip.taobao.com/citysuggest.do?t=0&q={query}",hotSource:"http://www.taobao.com/go/rgn/trip/hotelhotcityv2_jsonp.php"};e=a.merge(h,e);var i=new b(e),j=i.get("codeInputNode");return j=j instanceof a.NodeList?j:a.one(j),j&&i.on("select",function(a){j.val(a.result.raw.cityCode)}),i},travel:function(c){function e(a){return a}function f(b,c){return a.map(c,function(c){var c=c.raw,d=c.cityName.split("-");return a.substitute(h,{first:e(d[0],b),second:e(d[1],b)?"&nbsp;-&nbsp;"+e(d[1],b):""})})}var g=document.domain.indexOf("daily.taobao.net")>1,h='<div class="ks-ac-item-inner"><span class="ks-ac-name">{first}</span><span class="ks-ac-intro" style="color:#999;float:left;">{second}</span></div>';_dep_citycodeUrl=(g?"http://dujia.trip.daily.taobao.net/":"http://dujia.trip.taobao.com/")+"sell/ajax/get_sug_city.htm?max=10";var i={activeFirstItem:!0,align:d,resultListLocator:"result",resultTextLocator:"cityName",resultFormatter:f,source:_dep_citycodeUrl+"&q={query}",hotSource:"http://www.taobao.com/go/rgn/trip/dujiadephotcity_jsonp.php"};c=a.merge(i,c);var j=new b(c),k=j.get("codeInputNode");return k=k instanceof a.NodeList?k:a.one(k),k&&j.on("select",function(a){k.val(a.result.raw.cityCode)}),j},city:function(c){var e={source:"http://s.jipiao.trip.taobao.com/city_search.do?lines={maxResults}&q={query}",resultListLocator:"result",resultTextLocator:"cityName",activeFirstItem:!0,align:d,hotSource:"http://www.taobao.com/go/rgn/trip/chinahotcity_jsonp.php"};c=a.merge(e,c);var f=new b(c),g=f.get("codeInputNode");return g=g instanceof a.NodeList?g:a.one(g),g&&f.on("select",function(a){g.val(a.result.raw.cityCode)}),f}}},{requires:["gallery/autocomplete/1.1/index","./common","node","event","base"]});