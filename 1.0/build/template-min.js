/*! tsearch - v1.0 - 2013-06-25 6:14:17 PM
* Copyright (c) 2013 舒克; Licensed  */
KISSY.add(function(){return{searchTemplate:'<div class="mod-search" id="J_Pi_Search_SearchModule"><div class="search-hd"><nav class="search-nav"><ul class="J_Pi_Search_SearchTabNav"><li class="swing-slice-indicator J_Pi_Search_NavItemFlight selected"><s class="search-nav-flight"></s><a href="http://trip.taobao.com/jipiao" hidefocus="true">\ufffd\ufffd\ufffd\u06bb\ufffd\u01b1</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemIFlight"><s class="search-nav-iflight"></s><a href="http://trip.taobao.com/ijipiao" hidefocus="true">\ufffd\ufffd\ufffd\ufffd &#8226 \ufffd\u06f0\ufffd\u0328</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemHotel"><s class="search-nav-hotel"></s><a href="http://trip.taobao.com/jiudian" hidefocus="true">\ufffd\u01b5\ufffd</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemLodge"><s class="search-nav-lodge"></s><a href="http://trip.taobao.com/kezhan" hidefocus="true">\ufffd\ufffd\u057b</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemTicket"><s class="search-nav-ticket"></s><a href="http://trip.taobao.com/menpiao" hidefocus="true">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01b1</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemTravel"><s class="search-nav-travel"></s><a href="http://trip.taobao.com/dujia" hidefocus="true">\ufffd\ufffd\ufffd\u03b6\u023c\ufffd</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemCar"><s class="search-nav-car"></s><a href="http://trip.taobao.com/zuche" hidefocus="true">\ufffd\u2cf5</a></li></ul></nav></div><div class="search-bd"><div class="search-item swing-slice J_Pi_Search_TabPannel"><form method="get" target="_blank" action="http://s.jipiao.trip.taobao.com/flight_search_result.htm"class="search-form search-jipiao" id="J_Pi_Search_jipiao_form"><a href="javascript:void(0)" target="_self" class="search-trade" id="J_Pi_Search_FlightSwap">\ufffd\ufffd\ufffd\ufffd\ufffd\uda9e\udcb5\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd</a><fieldset><input type="hidden" name="spm" value="181.1113091.a1z0v.1"/><div class="search-field"><label class="search-item-intro search-tit">\ufffd\uda9e\udcb3\ufffd\ufffd\u0423\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required" name="depCityName" id="J_Pi_Search_jipiao_depCity" placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" value=""/><input name="depCity" type="hidden" id="J_Pi_Search_jipiao_depCity_code" data-trade="J_Pi_Search_jipiao_arrCity_code"/></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0423\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required" name="arrCityName"id="J_Pi_Search_jipiao_arrCity" placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" value="" data-description="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"/><input name="arrCity" type="hidden" id="J_Pi_Search_jipiao_arrCity_code"/></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0363\ufffd</label><div class="search-inputarea"><div class="search-radio" id="J_Pi_Search_FlightRadio"><label for="J_Pi_Search_jipiao_FlightTypeRadio_1" class="flight-type-radio first-label"><input type="radio" name="tripType" id="J_Pi_Search_jipiao_FlightTypeRadio_1" class="J_Pi_Search_type_radio" value="0" checked="checked"/>\ufffd\ufffd\ufffd\ufffd</label><label for="J_Pi_Search_jipiao_FlightTypeRadio_2" class="flight-type-radio last-label"><input type="radio" name="tripType" id="J_Pi_Search_jipiao_FlightTypeRadio_2" class="J_Pi_Search_type_radio" value="1"/>\ufffd\ufffd\ufffd\ufffd</label></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06a3\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required dateformat J_Pi_Search_DateInput J_Pi_Search_depDate" name="depDate" id="J_Pi_Search_FlightDepDate" placeholder="yyyy-mm-dd" value="" autocomplete="off" /></div></div><div class="search-field disabled" id="J_Pi_Search_FlightBackField"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06a3\ufffd</label><div class="search-inputarea"><input type="text" class="search-input J_Pi_Search_DateInput J_Pi_Search_endDate" name="arrDate" maxlength="10" id="J_Pi_Search_FlightArrDate" placeholder="yyyy-mm-dd" value="" autocomplete="off" /></div></div><div class="search-submitarea"><button type="submit" class="search-submit-btn">\ufffd\ufffd\ufffd\ufffd</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" target="_blank" action="http://s.ijipiao.trip.taobao.com/ie/flight_search.htm"class="search-form search-jipiao" id="J_Pi_Search_ijipiao_form"><input type="hidden" name="spm" value="181.1113091.a1z0v.2"/><a href="javascript:void(0)" target="_self" class="search-trade" id="J_Pi_Search_IFlightSwap">\ufffd\ufffd\ufffd\ufffd\ufffd\uda9e\udcb5\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd</a><fieldset><div class="search-field"><label class="search-item-intro search-tit">\ufffd\uda9e\udcb3\ufffd\ufffd\u0423\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required" name="_fmie.ie._0.st"id="J_Pi_Search_ijipiao_depCity" placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" value=""data-trade="J_Pi_Search_ijipiao_arrCity" data-autotab="J_Pi_Search_ijipiao_arrCity"data-description="\ufffd\uda9e\udcb3\ufffd\ufffd\ufffd"/><input name="_fmie.ie._0.s" type="hidden" id="J_Pi_Search_ijipiao_depCity_code"data-trade="J_Pi_Search_ijipiao_arrCity_code"/></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0423\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required" name="_fmie.ie._0.en"id="J_Pi_Search_ijipiao_arrCity" placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" value="" data-description="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"/><input name="_fmie.ie._0.e" type="hidden" id="J_Pi_Search_ijipiao_arrCity_code"/></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0363\ufffd</label><div class="search-inputarea"><div class="search-radio" id="J_Pi_Search_IFlightRadio"><label for="J_Pi_Search_ijipiao_FlightTypeRadio_1" class="flight-type-radio first-label"><input type="radio" name="_fmie.ie._0.t" id="J_Pi_Search_ijipiao_FlightTypeRadio_1" class="J_Pi_Search_type_radio" value="0"/>\ufffd\ufffd\ufffd\ufffd</label><label for="J_Pi_Search_ijipiao_FlightTypeRadio_2" class="flight-type-radio last-label"><input type="radio" name="_fmie.ie._0.t" id="J_Pi_Search_ijipiao_FlightTypeRadio_2" class="J_Pi_Search_type_radio" value="1" checked="checked"/>\ufffd\ufffd\ufffd\ufffd</label></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06a3\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required dateformat J_Pi_Search_DateInput J_Pi_Search_depDate" name="_fmie.ie._0.sta" id="J_Pi_Search_IFlightDepDate" placeholder="yyyy-mm-dd" value="" autocomplete="off" /></div></div><div class="search-field" id="J_Pi_Search_IFlightBackField"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06a3\ufffd</label><div class="search-inputarea"><input type="text" class="search-input J_Pi_Search_DateInput J_Pi_Search_endDate J_Pi_Search_ieEndDate required" name="_fmie.ie._0.end" id="J_Pi_Search_IFlightArrDate" placeholder="yyyy-mm-dd" value="" autocomplete="off" /></div></div><div class="search-submitarea"><button type="submit" class="search-submit-btn">\ufffd\ufffd\ufffd\ufffd</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" target="_blank" id="J_Pi_Search_HotelForm" action="http://kezhan.trip.taobao.com/hotel_list2.htm" class="search-form search-jiudian"><input type="hidden" name="spm" value="181.1113091.a1z0v.3"/><input type="hidden" id="J_Pi_Search_HotelSearchAction" name="action" value="hotel_list_action2"/><input type="hidden" id="J_Pi_Search_HotelSearchDoSearch" name="event_submit_do_search" value="submit"/><fieldset><div class="search-field"><div class="search-radio" id="J_Pi_Search_HotelLocationRadio"><label for="J_Pi_Search_HotelLocal" class="first-label"><input id="J_Pi_Search_HotelLocal" type="radio" value="0" name="_fmd.h._0.r" checked="checked" class="flight-type-radio">\ufffd\ufffd\ufffd\ufffd/\ufffd\u06f0\ufffd\u0328</label><label for="J_Pi_Search_HotelInternational" class="last-label"><input id="J_Pi_Search_HotelInternational" type="radio" value="1" name="_fmd.h._0.r" class="flight-type-radio">\ufffd\ufffd\ufffd\ufffd</label></div></div><div class="search-field"><label class="search-item-intro search-tit J_Pi_Search_HotelToPlaceIndicator">\u013f\ufffd\u0133\ufffd\ufffd\u0423\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required" id="J_Pi_Search_HotelToCity"placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" name="city" value="" data-description="\u013f\ufffd\u0133\ufffd\ufffd\ufffd"/><input name="c" type="hidden" id="J_Pi_Search_OmniCode" value=""/></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\u05e1\ufffd\ufffd\ufffd\u06a3\ufffd</label><div class="search-inputarea"><div id="J_Pi_Search_jiudian_depDateBox" class="cal-input"><input type="text" class="search-input required dateformat J_Pi_Search_depDate"name="_fmd.h._0.ch" id="J_Pi_Search_HotelDepDate" placeholder="yyyy-mm-dd"value="" autocomplete="off"/></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06a3\ufffd</label><div class="search-inputarea"><div id="J_Pi_Search_jiudian_endDateBox" class="cal-input"><input type="text" class="search-input required dateformat J_Pi_Search_endDate"name="_fmd.h._0.che" id="J_Pi_Search_HotelEndDate" placeholder="yyyy-mm-dd"value="" autocomplete="off"/></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\u063c\ufffd\ufffd\u05a3\ufffd</label><div class="search-inputarea"><input type="text" class="search-input" name="_fmd.h._0.n" id="J_Pi_Search_HotelSearchKeywords" placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\u01b5\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0226\ufffd\ufffd\ufffd\u0631\ufffd\ufffd\ufffd" value=""/></div></div><div class="search-submitarea"><button type="submit" class="J_Pi_Search_HotelListSearch search-submit-btn">\ufffd\ufffd\ufffd\ufffd</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" target="_blank" id="J_Pi_Search_LodgeForm" action="http://kezhan.trip.taobao.com/hotel_list2.htm" class="search-form search-jiudian"><input type="hidden" name="spm" value="181.1113091.a1z0v.4"/><input type="hidden" id="J_Pi_Search_LodgeSearchAction" name="action" value="hotel_list_action2"/><input type="hidden" id="J_Pi_Search_LodgeSearchDoSearch" name="event_submit_do_search" value="submit"/><input type="hidden" name="from" value="kezhan"/><input type="hidden" name="searchBy" value="trip-kezhan"/><input type="hidden" name="_fmd.h._0.l" value="0"/><fieldset><div class="search-field"><label class="search-item-intro search-tit J_Pi_Search_HotelToPlaceIndicator">\u013f\ufffd\u0133\ufffd\ufffd\u0423\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required" id="J_Pi_Search_LodgeToCity"placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" name="city" value="" data-description="\u013f\ufffd\u0133\ufffd\ufffd\ufffd"/><input name="c" type="hidden" id="J_Pi_Search_LodgeOmniCode" value=""/><input type="text" class="search-input required hidden" id="J_Pi_Search_LodgeToOversea"placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" value="" data-description="\u013f\ufffd\u0133\ufffd\ufffd\ufffd"/></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\u05e1\ufffd\ufffd\ufffd\u06a3\ufffd</label><div class="search-inputarea"><div id="J_Pi_Search_LodgeDepDateBox" class="cal-input"><input type="text" class="search-input required dateformat J_Pi_Search_depDate"name="_fmd.h._0.ch" id="J_Pi_Search_LodgeDepDate" placeholder="yyyy-mm-dd"value="" data-autotab="J_Pi_Search_LodgeEndDate" autocomplete="off"/></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u06a3\ufffd</label><div class="search-inputarea"><div id="J_Pi_Search_LodgeEndDateBox" class="cal-input"><input type="text" class="search-input required dateformat J_Pi_Search_endDate"name="_fmd.h._0.che" id="J_Pi_Search_LodgeEndDate" placeholder="yyyy-mm-dd"value="" autocomplete="off"/></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\ufffd\u063c\ufffd\ufffd\u05a3\ufffd</label><div class="search-inputarea"><input type="text" class="search-input" name="_fmd.h._0.n" id="J_Pi_Search_LodgeSearchKeywords" placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\u01b5\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0226\ufffd\ufffd\ufffd\u0631\ufffd\ufffd\ufffd" value=""/></div></div><div class="search-submitarea"><button type="submit" class="J_Pi_Search_HotelListSearch search-submit-btn">\ufffd\ufffd\ufffd\ufffd</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" action="http://s.taobao.com/search?commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&cat=50037979&from=compass&navlog=compass-1-c-50037979" class="search-form search-menpiao" target="_blank" id="J_Pi_Search_menpiao_form"><fieldset><input type="hidden" name="cat" value="50037979"/><input type="hidden" name="spm" value="181.1113091.a1z0v.5"/><div class="search-field"><label class="search-tit">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01b1\ufffd\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required" name="q" id="J_Pi_Search_menpiao_arrCity" placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" value=""/></div></div><dl class="search-hot search-hot-first clearfix"><dt>\ufffd\ufffd\ufffd\u0173\ufffd\ufffd\u0423\ufffd</dt><dd><a href="http://s.taobao.com/search?spm=181.411099.317054.6&q=&commend=all&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=2&bcoffset=2&cat=50040234&from=compass&navlog=compass-5-c-50040234">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.7&q=&commend=all&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=2&bcoffset=2&cat=50040353&from=compass&navlog=compass-1-c-50040353">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.8&q=&commend=all&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=2&bcoffset=1&cat=50040237&from=compass&navlog=compass-2-c-50040237">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.9&q=&commend=all&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=1&bcoffset=2&cat=50040264&from=compass&navlog=compass-3-c-50040264">\ufffd\u03fa\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.10&q=&commend=all&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=2&bcoffset=1&cat=50040286&from=compass&navlog=compass-1-c-50040286">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.11&q=&commend=all&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=1&bcoffset=2&cat=50040262&from=compass&navlog=compass-1-c-50040262">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.12&q=&commend=all&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=2&bcoffset=1&cat=50040246&from=compass&navlog=compass-1-c-50040246">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.13&q=&commend=all&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=2&bcoffset=2&cat=50040342&from=compass&navlog=compass-1-c-50040342">\ufffd\ufffd\ufffd\ufffd</a></dd></dl><dl class="search-hot clearfix"><dt>\ufffd\ufffd\ufffd\u017e\ufffd\ufffd\ufffd\ufffd\ufffd</dt><dd><a href="http://s.taobao.com/search?spm=181.411099.317054.14&q=&commend=all&ppath=5434603%3A3733229&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=1&bcoffset=1&cat=50040234&from=compass&navlog=compass-1-c-50040234">\ufffd\ufffd\ufffd\u06f5\ufffd\u02bf\ufffd\ufffd\ufffd\ufffd\u0530</a><a href="http://s.taobao.com/search?spm=181.411099.317054.15&q=&cat=50040234&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&bcoffset=2&ppath=5434603:4272640&cps=yes&from=compass&navlog=compass-3-p-5434603:4272640">\ufffd\ufffd\ufffd\u06fa\ufffd\ufffd\ufffd\ufffd\ufffd\u0530</a><a href="http://s.taobao.com/search?spm=181.411099.317054.16&q=&cat=50037979&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&bcoffset=1&ppath=5434603:57545&cps=yes&from=compass&navlog=compass-3-p-5434603:57545">\ufffd\ufffd\ufffd\u05b9\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.17&q=&commend=all&ppath=5434603%3A12097611&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=2&bcoffset=2&cat=50040278&from=compass&navlog=compass-1-c-50040278">\ufffd\ufffd\ufffd\u077f\ufffd\ufffd\ufffd\u0530</a><a href="http://s.taobao.com/search?spm=181.411099.317054.18&q=&commend=all&ppath=5434603%3A17769047&tab=coefp&cd=false&cps=yes&ssid=s5-e&fs=1&bcoffset=2&bcoffset=2&cat=50040286&from=compass&navlog=compass-1-c-50040286">\ufffd\ufffd\ufffd\ufffd\u04e1\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.19&q=&cat=50040236&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&bcoffset=1&ppath=5434603:93345&cps=yes&from=compass&navlog=compass-2-p-5434603:93345">\ufffd\ufffd\ufffd\u0773\ufffd\xa1\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd</a></dd></dl><div class="search-submitarea"><button type="submit" class="search-submit-btn">\ufffd\ufffd\ufffd\ufffd</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" target="_blank" id="J_Pi_Search_dujia_form" action="http://dujia.trip.taobao.com/search.htm"class="search-form search-dujia"><fieldset><input type="hidden" name="spm" value="181.1113091.a1z0v.6"/><div class="search-field"><label class="search-item-intro search-tit">\ufffd\uda9e\udcb3\ufffd\ufffd\u0423\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required" name="cq" id="J_Pi_Search_dujia_depCity"placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" value=""/></div></div><div class="search-field"><label class="search-item-intro search-tit">\ufffd\ufffd\u013f\ufffd\u0135\u0623\ufffd</label><div class="search-inputarea"><input type="text" class="search-input required" name="mq" id="J_Pi_Search_dujia_arrCity"placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" value=""/></div></div><dl class="search-hot search-hot-first clearfix"><dt>\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0163\ufffd</dt><dd><a href="http://dujia.trip.taobao.com/search.htm?spm=181.411099.317054.20&playType=&playId=&searchConditions=&isChangePlayOrder=&cq=&ccode=&fromCityCode=&fromCityId=100&mq=%C8%FD%D1%C7-%BA%A3%C4%CF&mcode=460200&toCityCode=38732&toCityId=356">\ufffd\ufffd\ufffd\ufffd</a><a href="http://dujia.trip.taobao.com/search.htm?spm=181.411099.317054.21&playType=&playId=&searchConditions=&isChangePlayOrder=&cq=&ccode=&fromCityCode=&fromCityId=100&mq=%BE%C5%D5%AF%B9%B5-%B0%A2%B0%D3%B2%D8%D7%E5%C7%BC%D7%E5%D7%D4%D6%CE%D6%DD&mcode=undefined&toCityCode=82719357&toCityId=4049">\ufffd\ufffd\u056f\ufffd\ufffd</a><a href="http://dujia.trip.taobao.com/search.htm?spm=181.411099.317054.22&playType=&playId=&searchConditions=&isChangePlayOrder=&cq=&ccode=&fromCityCode=&fromCityId=100&mq=%C0%F6%BD%AD-%D4%C6%C4%CF&mcode=530700&toCityCode=29419&toCityId=416">\ufffd\ufffd\ufffd\ufffd</a><a href="http://dujia.trip.taobao.com/search.htm?spm=181.411099.317054.23&playType=&playId=&searchConditions=&isChangePlayOrder=&cq=&ccode=&fromCityCode=&fromCityId=100&mq=%CF%E3%B8%F1%C0%EF%C0%AD-%C0%F6%BD%AD&mcode=undefined&toCityCode=29419&toCityId=3570">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd</a><a href="http://dujia.trip.taobao.com/search.htm?spm=181.411099.317054.24&playType=&playId=&searchConditions=&isChangePlayOrder=&cq=&ccode=&fromCityCode=&fromCityId=100&mq=%B9%F0%C1%D6-%B9%E3%CE%F7%D7%B3%D7%E5%D7%D4%D6%CE%C7%F8&mcode=450300&toCityCode=29408&toCityId=342">\ufffd\ufffd\ufffd\ufffd</a></dd></dl><dl class="search-hot clearfix"><dt>\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0163\ufffd</dt><dd><a href="http://dujia.trip.taobao.com/search.htm?spm=181.411099.317054.25&playType=&playId=&searchConditions=&isChangePlayOrder=&cq=&ccode=&fromCityCode=&fromCityId=100&mq=%C2%ED%B6%FB%B4%FA%B7%F2&mcode=900106&toCityCode=3299559&toCityId=531">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd</a><a href="http://dujia.trip.taobao.com/search.htm?spm=181.411099.317054.26&playType=&playId=&searchConditions=&isChangePlayOrder=&cq=&ccode=&fromCityCode=&fromCityId=100&mq=%CF%E3%B8%DB&mcode=810000&toCityCode=27369&toCityId=3090">\ufffd\ufffd\ufffd\ufffd</a><a href="http://dujia.trip.taobao.com/search.htm?spm=181.411099.317054.27&playType=&playId=&searchConditions=&isChangePlayOrder=&cq=&ccode=&fromCityCode=&fromCityId=100&mq=%CC%A9%B9%FA&mcode=900170&toCityCode=27024&toCityId=1133">\u0329\ufffd\ufffd</a><a href="http://dujia.trip.taobao.com/search.htm?spm=181.411099.317054.28&playType=&playId=&searchConditions=&isChangePlayOrder=&cq=&ccode=&fromCityCode=&fromCityId=100&mq=%B0%CD%C0%E5%B5%BA-%D3%A1%B6%C8%C4%E1%CE%F7%D1%C7&mcode=902887&toCityCode=3301027&toCityId=1288">\ufffd\ufffd\ufffd\u5d7a</a><a href="http://dujia.trip.taobao.com/search.htm?spm=181.411099.317054.29&playType=&playId=&searchConditions=&isChangePlayOrder=&cq=&ccode=&fromCityCode=&fromCityId=100&mq=%C2%ED%C0%B4%CE%F7%D1%C7&mcode=900105&toCityCode=3286452&toCityId=1155">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd</a></dd></dl><div class="search-submitarea"><button type="submit" class="search-submit-btn">\ufffd\ufffd\ufffd\ufffd</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" action="http://s.taobao.com/search?commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&bcoffset=2&cat=50036351&from=compass&navlog=compass-7-c-50036351" class="search-form search-zuche" target="_blank" id="J_Pi_Search_zuche_form"><fieldset><input type="hidden" name="cat" value="50036351"/><input type="hidden" name="spm" value="181.1113091.a1z0v.7"/><div class="search-field"><div class="search-inputarea"><label class="search-item-intro search-tit" for="J_Pi_Search_zuche_arrCity">\ufffd\u2cf5\ufffd\ufffd\ufffd\u0423\ufffd</label><input type="text" class="search-input required" name="q" id="J_Pi_Search_zuche_arrCity"placeholder="\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" value=""/></div></div><dl class="search-hot search-hot-first clearfix"><dt>\ufffd\ufffd\ufffd\u0173\ufffd\ufffd\u0423\ufffd</dt><dd><a href="http://s.taobao.com/search?spm=181.411099.317054.30&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&bcoffset=2&ppath=2379631:30520;2380304:38732&cps=yes&from=compass&navlog=compass-2-p-2379631:30520;2380304:38732">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.31&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&ppath=2379631:30515;2380306:29419&cps=yes&from=compass&navlog=compass-2-p-2379631:30515;2380306:29419">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.32&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&bcoffset=2&ppath=2379631:30518;2380303:29408&cps=yes&from=compass&navlog=compass-2-p-2379631:30518;2380303:29408">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.33&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&ppath=2379631:30508;2380305:57280&cps=yes&from=compass&navlog=compass-2-p-2379631:30508;2380305:57280">\ufffd\ufffd\u056f\ufffd\ufffd</a></dd></dl><dl class="search-hot clearfix"><dt>\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u037e\ufffd\ufffd</dt><dd><a href="http://s.taobao.com/search?spm=181.411099.317054.34&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&ppath=7682901:69814562&cps=yes&from=compass&navlog=compass-40-p-7682901:69814562">\ufffd\u053c\ufffd\ufffd\u2cf5</a><a href="http://s.taobao.com/search?spm=181.411099.317054.35&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&ppath=7682901:51480417&cps=yes&from=compass&navlog=compass-41-p-7682901:51480417">\ufffd\ufffd\ufffd\u03b0\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.36&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&ppath=7682901:42756097&cps=yes&from=compass&navlog=compass-42-p-7682901:42756097">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.37&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&ppath=7682901:74600559&cps=yes&from=compass&navlog=compass-43-p-7682901:74600559">\ufffd\ufffd\ufffd\u0433\ufffd</a></dd></dl><dl class="search-hot clearfix"><dt>\ufffd\ufffd\ufffd\u0173\ufffd\ufffd\u0363\ufffd</dt><dd><a href="http://s.taobao.com/search?spm=181.411099.317054.38&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&ppath=7682844:74600289&cps=yes&from=compass&navlog=compass-47-p-7682844:74600289">\ufffd\u03b3\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.39&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&ppath=7682844:74600291&cps=yes&from=compass&navlog=compass-48-p-7682844:74600291">\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.40&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&ppath=7682844:74600294&cps=yes&from=compass&navlog=compass-52-p-7682844:74600294">\ufffd\ufffd\ufffd\u0370\ufffd\u02bf</a><a href="http://s.taobao.com/search?spm=181.411099.317054.41&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&ppath=7682844:74600295&cps=yes&from=compass&navlog=compass-53-p-7682844:74600295">\ufffd\ufffd\ufffd\u0370\ufffd\u02bf</a></dd></dl><dl class="search-hot clearfix"><dt>\ufffd\ufffd\ufffd\ufffd\u01b7\ufffd\u01a3\ufffd</dt><dd><a href="http://s.taobao.com/search?spm=181.411099.317054.42&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&ppath=9747306:31020&cps=yes&from=compass&navlog=compass-58-p-9747306:31020">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.43&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&ppath=9747306:38915&cps=yes&from=compass&navlog=compass-59-p-9747306:38915">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.44&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&ppath=9747306:38918&cps=yes&from=compass&navlog=compass-61-p-9747306:38918">\ufffd\ufffd\ufffd\ufffd</a><a href="http://s.taobao.com/search?spm=181.411099.317054.45&q=&cat=50036351&commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&ppath=9747306:52923271&cps=yes&from=compass&navlog=compass-62-p-9747306:52923271">\ufffd\u05b4\ufffd</a></dd></dl><div class="search-submitarea"><button type="submit" class="search-submit-btn">\ufffd\ufffd\ufffd\ufffd</button></div></fieldset></form></div></div></div>'}});