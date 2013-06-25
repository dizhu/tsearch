/*! tsearch - v1.0 - 2013-06-25 6:14:17 PM
* Copyright (c) 2013 舒克; Licensed  */
KISSY.add("gallery/tsearch/1.0/common",function(){var a={subString:function(a,b){var c=/[^\x00-\xff]/g;if(!a)return"";if(a.replace(c,"mm").length<=b)return a;for(var d=Math.floor(b/2),e=d;e<a.length;e++)if(a.substr(0,e).replace(c,"mm").length>=b)return a.substr(0,e);return a},stringLen:function(a){return a?a.replace(/[^\x00-\xff]/g,"rr").length:""},cutStr:function(b,c,d){return d=d||"...",a.stringLen(b)>c?a.subString(b,c-4)+d:b},buildObjCutAttr:function(b,c,d){b[c+"_sub"]=a.cutStr(b[c],d)},singleDateToDouble:function(a){return a.toString().length>1?a.toString():"0"+a.toString()},strToDate:function(a){var b=a.split("-");return new Date(b[0],b[1]-1,b[2])},getDateInterval:function(b,c){return parseInt(Math.abs(a.strToDate(c)-a.strToDate(b))/1e3/60/60/24)},formatDate:function(b){var c=new Date(b),d=a.singleDateToDouble,e=c.getFullYear(),f=d(c.getMonth()+1),g=d(c.getDate()),h=d(c.getHours()),i=d(c.getMinutes());return{mmdd:f+"-"+g,yymmdd:e+"-"+f+"-"+g,hhMM:h+":"+i,yy:e,mm:f,dd:g,hh:h,MM:i}},setDate:function(a,b){return new Date(a.getTime()+864e5*b)},timeToDuration:function(a){a/=1e3;var b=Math.floor(a/3600),c=Math.floor((a-3600*b)/60),d=a%60;return{h:b,s:c,m:d}},html2text:function(a){var b=document.createElement("div");b.innerHTML=a;try{return"string"==typeof b.innerText?b.innerText:b.textContent}catch(c){return a}}};return a}),KISSY.add("gallery/tsearch/1.0/trip-autocomplete",function(a,b,c){var d={node:null,points:["bl","tl"],overflow:{adjustX:!1,adjustY:!0}};return{flight:function(c){var e={source:"http://s.jipiao.trip.taobao.com/city_search.do?lines={maxResults}&q={query}",resultListLocator:function(b){b=b.result;var c=[];return a.each(b,function(b){if(b.hasAirport)c.push(b);else{var d=b.nearCity;a.each(d,function(d){var e=a.mix(d,{nearCity:b.cityName});c.push(e)})}}),c},resultTextLocator:"cityName",activeFirstItem:!0,align:d,hotSource:"http://www.taobao.com/go/rgn/trip/chinahotcity_jsonp.php",resultFormatter:function(b,c){var d=[],e='<div class="ks-ac-item-inner"><span class="ks-ac-name">{cityname}</span><span class="ks-ac-intro">{py}</span></div>',f="";for(var g in c){var h=c[g];if(h.raw.nearCity){var i='<div class="ks-ac-item"><div class="ks-ac-near-tip">"'+h.raw.nearCity+'"&nbsp;\xfb\ufffd\u043b\ufffd\ufffd\ufffd</div>',j='<div class="ks-ac-item-inner ks-ac-item-inner-sub"><span class="ks-ac-name">\ufffd\u06bd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd{cityName}&nbsp;--&nbsp;\ufffd\ufffd\ufffd\ufffd{distance}\ufffd\ufffd\ufffd\ufffd</span></div>',k=a.substitute(j,{cityName:h.text,distance:h.raw.distance});h.raw.nearCity!=f?(i+=k+"</div>",f=h.raw.nearCity):i=k,d.push(i)}else d.push(a.substitute(e,{cityname:h.text,py:h.raw.py}))}return d}};c=a.merge(e,c);var f=new b(c),g=f.get("codeInputNode");return g=g instanceof a.NodeList?g:a.one(g),g&&f.on("select",function(a){g.val(a.result.raw.cityCode)}),f},iflight:function(c){var e={source:"http://ijipiao.trip.taobao.com/ie/remote/auto_complete.do?flag=4&count=10&callback={callback}&q={query}",resultListLocator:"result",resultTextLocator:"cityName",activeFirstItem:!0,align:d,hotSource:"http://www.taobao.com/go/rgn/trip/international_jsonp.php"};c=a.merge(e,c);var f=new b(c),g=f.get("codeInputNode");return g=g instanceof a.NodeList?g:a.one(g),g&&f.on("select",function(a){g.val(a.result.raw.cityCode)}),f},hotel:function(e){function f(b){var c=b.result,d=[];return a.isArray(c)&&c.length&&a.map(c,function(a){var b=a.t.split("_");d.push({cityName:b[0],cityCode:a.c,py:b[1]})}),d}function g(b,d){return a.map(d,function(b){var d=b.raw;return a.substitute('<div class="ks-ac-item-inner"><span class="ks-ac-name">{cityName}</span><span class="ks-ac-intro">{py}</span></div>',{cityName:c.cutStr(d.cityName,20),py:c.cutStr(d.py,10)})})}var h={activeFirstItem:!0,align:d,resultListLocator:f,resultFormatter:g,source:"http://kezhan.trip.taobao.com/citysuggest.do?t=0&q={query}",hotSource:"http://www.taobao.com/go/rgn/trip/hotelhotcityv2_jsonp.php"};e=a.merge(h,e);var i=new b(e),j=i.get("codeInputNode");return j=j instanceof a.NodeList?j:a.one(j),j&&i.on("select",function(a){j.val(a.result.raw.cityCode)}),i},travel:function(c){function e(a){return a}function f(b,c){return a.map(c,function(c){var c=c.raw,d=c.cityName.split("-");return a.substitute(h,{first:e(d[0],b),second:e(d[1],b)?"&nbsp;-&nbsp;"+e(d[1],b):""})})}var g=document.domain.indexOf("daily.taobao.net")>1,h='<div class="ks-ac-item-inner"><span class="ks-ac-name">{first}</span><span class="ks-ac-intro" style="color:#999;float:left;">{second}</span></div>';_dep_citycodeUrl=(g?"http://dujia.trip.daily.taobao.net/":"http://dujia.trip.taobao.com/")+"sell/ajax/get_sug_city.htm?max=10";var i={activeFirstItem:!0,align:d,resultListLocator:"result",resultTextLocator:"cityName",resultFormatter:f,source:_dep_citycodeUrl+"&q={query}",hotSource:"http://www.taobao.com/go/rgn/trip/dujiadephotcity_jsonp.php"};c=a.merge(i,c);var j=new b(c),k=j.get("codeInputNode");return k=k instanceof a.NodeList?k:a.one(k),k&&j.on("select",function(a){k.val(a.result.raw.cityCode)}),j},city:function(c){var e={source:"http://s.jipiao.trip.taobao.com/city_search.do?lines={maxResults}&q={query}",resultListLocator:"result",resultTextLocator:"cityName",activeFirstItem:!0,align:d,hotSource:"http://www.taobao.com/go/rgn/trip/chinahotcity_jsonp.php"};c=a.merge(e,c);var f=new b(c),g=f.get("codeInputNode");return g=g instanceof a.NodeList?g:a.one(g),g&&f.on("select",function(a){g.val(a.result.raw.cityCode)}),f}}},{requires:["gallery/autocomplete/1.0/index","./common","node","event","base"]}),KISSY.add("gallery/tsearch/1.0/radio-button",function(a){function b(){b.superclass.constructor.apply(this,arguments),this.initializer()}return a.extend(b,a.Base,{initializer:function(){var a=this.node=this.get("node"),b=this;this.items={},this.radios=a.all('input[type="radio"]'),this.radios.each(function(c){var d={input:c},e=c.attr("id");e&&a.one("label[for="+e+"]")&&(d.label=a.one("label[for="+e+"]")),b.items[c.val()]=d}),this.bindUI(),this.set("value",this.val())},bindUI:function(){this.node.delegate("click","label",function(b){var c=a.one(b.currentTarget);a.one("#"+c.attr("for")).attr("checked",!0),this.set("value",this.node.one("#"+c.attr("for")).val())},this),this.on("afterValueChange",this._syncUI,this)},_syncUI:function(a){var b=this.items,c=b[a.newVal],d=b[a.prevVal],e=this.get("selectedClass");d&&d.label.removeClass(e),c&&c.label.addClass(e)},val:function(){return arguments.length<1?this._getValue():this._setValue.apply(this,arguments)},_getValue:function(){var b=a.one("input[type=radio][checked=checked]");return b?b.val():void 0},_setValue:function(a){var b=this.items[a];b&&(b.input.attr("checked",!0),this.set("value",a))}},{ATTRS:{node:{value:"",setter:function(b){return b instanceof a.NodeList?b:a.one(b)}},name:{value:""},selectedClass:{value:"selected"},value:{value:null}}}),b},{requires:["node","event","base","sizzle"]}),KISSY.add("gallery/tsearch/1.0/tsearch",function(a,b,c,d,e,f){function g(a){var b=this;g.superclass.constructor.call(b,a),this.initializer()}Node.all;var h={TripAutocomplete:c,Calendar:e,Placeholder:f,Tradio:d};return a.extend(g,b,{initializer:function(){return this.form=this.get("form"),this.form?(this.fields=this.get("fields"),a.each(this.fields,function(b,c){var d=a.one(c);return d?(b.node=d,b.val&&b.node.val(b.val),this.bindWidgets(b),b.autoSwitch&&this.setSwitchInput(c),void 0):(a.log(c+"is not find.."),!1)},this),this.bindEvent(),void 0):(a.log("TSearch:\xfb\ufffd\ufffd\ufffd\u04b5\ufffd\ufffd\udd65\ufffd\u06b5\ufffd,\ufffd\ufffd\u02bc\ufffd\ufffd\u02a7\ufffd\ufffd"),void 0)},bindEvent:function(){this.form.on("submit",this._doSubmit,this),this.get("switchSearchType")&&this.initRadioSwitch();var b=this.get("swapper");b&&a.Event.on(b.trigger,"click",function(a){a.halt(),this.swap()},this)},addField:function(){},bindWidgets:function(b){var c=this;a.each(b.widgets,function(d,e){var f=h[e];f&&("TripAutocomplete"==e?a.each(b.widgets[e],function(a,c){b[e]=f[c](a)}):b[e]=new f(d),"Calendar"===e&&d.finalTriggerNode&&c.fields[d.finalTriggerNode]&&(c.fields[d.finalTriggerNode][e]=b[e]))}),b.showTip=function(a){return a.TripAutocomplete?function(b){a.node[0].focus(),a.TripAutocomplete.showMessage(b)}:a.Calendar?function(b){a.node[0].focus(),a.Calendar.currentNode=a.node,a.Calendar.set("message",b),a.Calendar.showMessage(b)}:void 0}(b)},swap:function(){a.each(this.get("swapper").list,function(a,b){this._swapItem(b,a)},this)},_swapItem:function(a,b){var c;a=this.fields[a],b=this.fields[b],c=a.node.val(),a.node.val(b.node.val()),b.node.val(c)},setSwitchInput:function(a){return!1},initRadioSwitch:function(){var b=this.get("switchSearchType"),c=this.fields,d=(a.one(b.back_container),c[b.back_input].node),e=c[b.trigger].Tradio,f=c[b.go_input].Calendar;return e?(e.on("afterValueChange",function(a){"0"===a.newVal&&(d.val(""),f.currentNode=d,f._setDateInfo("")),this._setSearchType(a.newVal)},this),d.on("valuechange",function(a){""===a.newVal&&e.val("0")}),f.on("dateclick",function(){this.currentNode.attr("id")===b.back_input.replace("#","")&&e.val("1")}),this._setSearchType(e.val()),void 0):this},_setSearchType:function(b){var c=this.get("switchSearchType"),d=this.fields,e=a.one(c.back_container);"1"===b?(e.removeClass("disabled"),d[c.go_input].autoSwitch&&(d[c.back_input].disabled=!1)):(e.addClass("disabled"),d[c.go_input].autoSwitch&&(d[c.back_input].disabled=!0))},_doSubmit:function(a){return this.validate()?(this.fire("submit",{form:this.form,fields:this.fields}),void 0):(a.preventDefault(),!1)},_isResetDate:function(a){return a=a.split("-"),new Date>new Date(a[0],a[1]-1,a[2])},getDate:function(a){function b(a){return a+="",1==a.length?"0"+a:a}a=a||0;var c,d,e,f=new Date;return f.setDate(f.getDate()+a),c=f.getFullYear(),d=b(f.getMonth()+1),e=b(f.getDate()),[c,d,e].join("-")},validate:function(){var a,b,c,d,e,f,g,h=this.fields,i=this,j=!0;for(b=0,d=this.get("validation_order"),e=d.length;e>b&&(a=d[b],h[a].validation&&j&&!h[a].disabled);b++){for(c=0,f=h[a].validation,g=f.length;g>c;c++){var k=f[c];if(!i._validateRule(k,h[a])){i.fire("validate",{rule:k,field:h[a]}),"function"==typeof k.onValidateFailure?k.onValidateFailure.call(h[a],k):h[a].showTip&&h[a].showTip(k.tip),j=!1;break}}if(0==j)break}return j},_validateRule:function(a,b){var c=function(a){var b=a.split("-");return new Date(b[0],b[1]-1,b[2])};switch(a.type){case"required":return""!=b.node.val();case"dateformat":var d=b.node.val();return 10==d.length&&/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.test(d);case"mindate":var e,d=b.node.val(),f=c(d);return e="string"==typeof a.minDate?c(this.fields[a.minDate].node.val()):a.minDate,f>=e;case"identical":var d=b.node.val(),g=this.fields[a.identicalWidth];return d!=g.node.val();case"custom":return"function"==typeof a.validateFn?a.validateFn.call(b,a.arg,this):!0}return!0}},{ATTRS:{form:{value:"",setter:function(b){return b instanceof a.NodeList?b:a.one(b)}},fields:{value:{"#J_FlightDepCity":{input_node:null,widgets:{Placeholder:{inputNode:null},TripAutocompleteV2:{}},validation:[{blur:[{required:""}]}]}}},validate_order:{value:[]},swapper:{value:{trigger:"#J_Pi_Search_FlightSwap",children:{from:"to"}}},switchSearchType:{value:null},storage:{value:!1},validation_order:{value:null}}}),g},{requires:["base","./trip-autocomplete","./radio-button","gallery/calendar/1.1/index","gallery/placeholder/1.0/index","node","base"]}),KISSY.add("gallery/tsearch/1.0/index",function(a,b){var c={createFlightSearch:function(){return new b({form:"#J_Pi_Search_jipiao_form",fields:{"#J_Pi_Search_FlightRadio":{widgets:{Tradio:{node:"#J_Pi_Search_FlightRadio",name:"tripType"}}},"#J_Pi_Search_jipiao_depCity":{val:"",widgets:{TripAutocomplete:{flight:{inputNode:"#J_Pi_Search_jipiao_depCity",codeInputNode:"#J_Pi_Search_jipiao_depCity_code"}},Placeholder:{inputNode:"#J_Pi_Search_jipiao_depCity"}},autoSwitch:{nextField:"#J_Pi_Search_jipiao_arrCity"},validation:[{type:"required",when:"blur",tip:"\ufffd\ufffd\ufffd\ufffd\u0434\ufffd\uda9e\udcb3\ufffd\ufffd\ufffd"}]},"#J_Pi_Search_jipiao_depCity_code":{},"#J_Pi_Search_jipiao_arrCity":{widgets:{TripAutocomplete:{flight:{inputNode:"#J_Pi_Search_jipiao_arrCity",codeInputNode:"#J_Pi_Search_jipiao_arrCity_code"}},Placeholder:{inputNode:"#J_Pi_Search_jipiao_arrCity"}},validation:[{type:"required",when:"blur",tip:"\ufffd\ufffd\ufffd\ufffd\u0434\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"},{type:"identical",identicalWidth:"#J_Pi_Search_jipiao_depCity",tip:"\ufffd\uda9e\udcb5\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0432\ufffd\ufffd\ufffd\ufffd\ufffd\u036c"}]},"#J_Pi_Search_jipiao_arrCity_code":{},"#J_Pi_Search_FlightDepDate":{widgets:{Placeholder:{inputNode:"#J_Pi_Search_FlightDepDate"},Calendar:{triggerNode:"#J_Pi_Search_FlightDepDate",finalTriggerNode:"#J_Pi_Search_FlightArrDate",minDate:new Date,isDateInfo:1,isDateIcon:1,afterDays:364,isKeyup:!1,isHoliday:1}},validation:[{type:"required",tip:"\ufffd\ufffd\ufffd\ufffd\u0434\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"},{type:"dateformat",tip:"\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0237\ufffd\ufffd\ufffd\ufffd\ufffd\u06b8\ufffd\u02bd \ufffd\u78fa2018-01-01"},{type:"mindate",minDate:new Date-864e5,tip:"\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06b2\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06bd\ufffd\ufffd\ufffd"}],autoSwitch:{active:!0,nextField:"#J_Pi_Search_FlightArrDate"}},"#J_Pi_Search_FlightArrDate":{disabled:!0,widgets:{Placeholder:{inputNode:"#J_Pi_Search_FlightArrDate"}},validation:[{type:"required",tip:"\ufffd\ufffd\ufffd\ufffd\u0434\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"},{type:"dateformat",tip:"\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0237\ufffd\ufffd\ufffd\ufffd\ufffd\u06b8\ufffd\u02bd \ufffd\u78fa2018-01-01"},{type:"mindate",minDate:"#J_Pi_Search_FlightDepDate",tip:"\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06b2\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06b3\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"}]}},validation_order:["#J_Pi_Search_jipiao_depCity","#J_Pi_Search_jipiao_arrCity","#J_Pi_Search_FlightDepDate","#J_Pi_Search_FlightArrDate"],swapper:{trigger:"#J_Pi_Search_FlightSwap",list:{"#J_Pi_Search_jipiao_depCity":"#J_Pi_Search_jipiao_arrCity","#J_Pi_Search_jipiao_depCity_code":"#J_Pi_Search_jipiao_arrCity_code"}},switchSearchType:{trigger:"#J_Pi_Search_FlightRadio",back_container:"#J_Pi_Search_FlightBackField",go_input:"#J_Pi_Search_FlightDepDate",back_input:"#J_Pi_Search_FlightArrDate"},storage:!0})},createIflightSearch:function(){return new b({form:"#J_Pi_Search_ijipiao_form",fields:{"#J_Pi_Search_IFlightRadio":{widgets:{Tradio:{node:"#J_Pi_Search_IFlightRadio",name:"_fmie.ie._0.t"}}},"#J_Pi_Search_ijipiao_depCity":{widgets:{TripAutocomplete:{iflight:{inputNode:"#J_Pi_Search_ijipiao_depCity",codeInputNode:"#J_Pi_Search_ijipiao_depCity_code",hotSource:"http://www.taobao.com/go/rgn/trip/chinahotcity_jsonp.php"}},Placeholder:{inputNode:"#J_Pi_Search_ijipiao_depCity"}},autoSwitch:{active:!0,nextField:"#J_Pi_Search_ijipiao_arrCity"},validation:[{type:"required",when:"blur",tip:"\ufffd\ufffd\ufffd\ufffd\u0434\ufffd\uda9e\udcb3\ufffd\ufffd\ufffd"}]},"#J_Pi_Search_ijipiao_depCity_code":{},"#J_Pi_Search_ijipiao_arrCity":{widgets:{TripAutocomplete:{iflight:{inputNode:"#J_Pi_Search_ijipiao_arrCity",codeInputNode:"#J_Pi_Search_ijipiao_arrCity_code"}},Placeholder:{inputNode:"#J_Pi_Search_ijipiao_arrCity"}},validation:[{type:"required",tip:"\ufffd\ufffd\ufffd\ufffd\u0434\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"},{type:"identical",identicalWidth:"#J_Pi_Search_ijipiao_depCity",tip:"\ufffd\uda9e\udcb5\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0432\ufffd\ufffd\ufffd\ufffd\ufffd\u036c"}]},"#J_Pi_Search_ijipiao_arrCity_code":{},"#J_Pi_Search_IFlightDepDate":{widgets:{Placeholder:{inputNode:"#J_Pi_Search_IFlightDepDate"},Calendar:{triggerNode:"#J_Pi_Search_IFlightDepDate",finalTriggerNode:"#J_Pi_Search_IFlightArrDate",minDate:new Date,isDateInfo:1,isDateIcon:1,isKeyup:!1,afterDays:364,isHoliday:1}},validation:[{type:"required",tip:"\ufffd\ufffd\ufffd\ufffd\u0434\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"},{type:"dateformat",tip:"\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0237\ufffd\ufffd\ufffd\ufffd\ufffd\u06b8\ufffd\u02bd \ufffd\u78fa2018-01-01"},{type:"mindate",minDate:new Date-864e5,tip:"\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06b2\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06bd\ufffd\ufffd\ufffd"}],autoSwitch:{active:!0,nextField:"#J_Pi_Search_IFlightArrDate"}},"#J_Pi_Search_IFlightArrDate":{disabled:!0,widgets:{Placeholder:{inputNode:"#J_Pi_Search_IFlightArrDate"}},validation:[{type:"required",tip:"\ufffd\ufffd\ufffd\ufffd\u0434\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"},{type:"dateformat",tip:"\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0237\ufffd\ufffd\ufffd\ufffd\ufffd\u06b8\ufffd\u02bd \ufffd\u78fa2018-01-01"},{type:"mindate",minDate:"#J_Pi_Search_IFlightDepDate",tip:"\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06b2\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06b3\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"}]}},validation_order:["#J_Pi_Search_ijipiao_depCity","#J_Pi_Search_ijipiao_arrCity","#J_Pi_Search_IFlightDepDate","#J_Pi_Search_IFlightArrDate"],swapper:{trigger:"#J_Pi_Search_IFlightSwap",list:{"#J_Pi_Search_ijipiao_depCity":"#J_Pi_Search_ijipiao_arrCity","#J_Pi_Search_ijipiao_depCity_code":"#J_Pi_Search_ijipiao_arrCity_code"}},switchSearchType:{trigger:"#J_Pi_Search_IFlightRadio",back_container:"#J_Pi_Search_IFlightBackField",go_input:"#J_Pi_Search_IFlightDepDate",back_input:"#J_Pi_Search_IFlightArrDate"},storage:!0})},createHotelSearch:function(){a.use("pi/tsearch/1.0/hotel-search",function(a,b){b({form:"#J_Pi_Search_HotelForm",radio:"#J_Pi_Search_HotelLocationRadio",radioName:"_fmd.h._0.r",HotelToCity:"#J_Pi_Search_HotelToCity",HotelDepDate:"#J_Pi_Search_HotelDepDate",HotelEndDate:"#J_Pi_Search_HotelEndDate",Omni:"#J_Pi_Search_OmniCode",HotelSearchKeywords:"#J_Pi_Search_HotelSearchKeywords"})})},createLodgeSearch:function(){a.use("pi/tsearch/1.0/hotel-search",function(a,b){b({form:"#J_Pi_Search_LodgeForm",radioName:"_fmd.h._0.r",HotelToCity:"#J_Pi_Search_LodgeToCity",HotelDepDate:"#J_Pi_Search_LodgeDepDate",HotelEndDate:"#J_Pi_Search_LodgeEndDate",Omni:"#J_Pi_Search_LodgeOmniCode",HotelSearchKeywords:"#J_Pi_Search_LodgeSearchKeywords"})})},createTravelSearch:function(){return new b({form:"#J_Pi_Search_dujia_form",fields:{"#J_Pi_Search_dujia_depCity":{widgets:{Placeholder:{inputNode:"#J_Pi_Search_dujia_depCity"},TripAutocomplete:{travel:{inputNode:"#J_Pi_Search_dujia_depCity"}}}},"#J_Pi_Search_dujia_arrCity":{widgets:{Placeholder:{inputNode:"#J_Pi_Search_dujia_arrCity"},TripAutocomplete:{travel:{inputNode:"#J_Pi_Search_dujia_arrCity"}}},validation:[{type:"required",tip:"\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u013f\ufffd\u0135\ufffd"}]}},validation_order:["#J_Pi_Search_dujia_arrCity"]})},createTicketSearch:function(){return new b({form:"#J_Pi_Search_menpiao_form",fields:{"#J_Pi_Search_menpiao_arrCity":{widgets:{Placeholder:{inputNode:"#J_Pi_Search_menpiao_arrCity"}},validation:[{type:"required",onValidateFailure:function(){this.node[0].focus()}}]}},validation_order:["#J_Pi_Search_menpiao_arrCity"]})},createCarSearch:function(){return new b({form:"#J_Pi_Search_zuche_form",fields:{"#J_Pi_Search_zuche_arrCity":{widgets:{Placeholder:{inputNode:"#J_Pi_Search_zuche_arrCity"},TripAutocomplete:{city:{inputNode:"#J_Pi_Search_zuche_arrCity"}}},validation:[{type:"required",tip:"\ufffd\ufffd\ufffd\ufffd\u0434\ufffd\u2cf5\ufffd\ufffd\ufffd\ufffd"}]}},validation_order:["#J_Pi_Search_zuche_arrCity"]})}};return c},{requires:["./tsearch","node","event","base"]});