/*! tsearch - v1.0 - 2013-06-26 1:50:33 PM
* Copyright (c) 2013 舒克; Licensed  */
KISSY.add(function(a){function b(){b.superclass.constructor.apply(this,arguments),this.initializer()}return a.extend(b,a.Base,{initializer:function(){var a=this.node=this.get("node"),b=this;this.items={},this.radios=a.all('input[type="radio"]'),this.radios.each(function(c){var d={input:c},e=c.attr("id");e&&a.one("label[for="+e+"]")&&(d.label=a.one("label[for="+e+"]")),b.items[c.val()]=d}),this.bindUI(),this.set("value",this.val())},bindUI:function(){this.node.delegate("click","label",function(b){var c=a.one(b.currentTarget);a.one("#"+c.attr("for")).attr("checked",!0),this.set("value",this.node.one("#"+c.attr("for")).val())},this),this.on("afterValueChange",this._syncUI,this)},_syncUI:function(a){var b=this.items,c=b[a.newVal],d=b[a.prevVal],e=this.get("selectedClass");d&&d.label.removeClass(e),c&&c.label.addClass(e)},val:function(){return arguments.length<1?this._getValue():this._setValue.apply(this,arguments)},_getValue:function(){var b=a.one("input[type=radio][checked=checked]");return b?b.val():void 0},_setValue:function(a){var b=this.items[a];b&&(b.input.attr("checked",!0),this.set("value",a))}},{ATTRS:{node:{value:"",setter:function(b){return b instanceof a.NodeList?b:a.one(b)}},name:{value:""},selectedClass:{value:"selected"},value:{value:null}}}),b},{requires:["node","event","base","sizzle"]});