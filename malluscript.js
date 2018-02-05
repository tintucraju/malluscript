/*   Malluscript Version 0.1
     @author : Tintu C Raju
*/

MalluScript = function(){

	this.mapping = {	
		"പറയുക" : "alert" , 
		"പുതിയ": "new",
		"ഇപ്പൊ" : 'if (',
		"എങ്കിൽ":' ) ',
		"ഇത്": "this",
		"പ്രവർത്തി": "function",
		"ഗണം": "class",
		"തുടങ്ങുക:":"{",
		"തീരുക:":"}",
		"തിരികെ":"return",
		"മടക്കുക ":"return",
		"മടക്കം ":"return",
		"ആണെങ്കിൽ":' ) ',
		"അല്ലെങ്കിൽ":'else',
		"ഒരു":'for(',
		"യെ":'in',
		"നിന്നും എടുക്കുക":")",
		"അധികം":"+",
		"ഗുണം":"*",
		"സമം":"=",
		"തുല്യം":"==",
		"തെരഞ്ഞെടുക്കുക":"document.getElementById",
		"വിവരങ്ങൾ ":"innerHTML",
		"":""
	  };
		  
	this.exec= function(_script){
		eval(this.compile(_script));
	}
		
		
	this.init = function(){
		var scripts = document.querySelectorAll("[type='text/mangascript']");
		_script = scripts[0].innerHTML;
		_script = this.compile(_script);
		eval(_script);
   }		

	this.compile = function(_script){
		var replace_list = this.mapping;
		String.prototype.replaceArray = function(find, replace) {
		  var replaceString = this;
		  var regex; 
		  for (var i = 0; i < find.length; i++) {
			regex = new RegExp(find[i], "g");
			replaceString = replaceString.replace(regex, replace[i]);
		  }
		  return replaceString;
		};
		_script = _script.replace(new RegExp("(" + Object.keys(replace_list).map(function(i){return i.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")}).join("|") + ")", "g"), function(s){ return replace_list[s]});
		return _script;
	}
}

 document.addEventListener('DOMContentLoaded', function(){
		var ob = new MalluScript();
		ob.init();
	}, false);
