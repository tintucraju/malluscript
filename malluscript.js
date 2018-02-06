/*   Malluscript Version 0.1
     @author : Tintu C Raju
*/

MalluScript = function(options={}){

	this.version  = "0.1";
	this.getVersion = function(){
		return this.version;
	}
	
	this.mapping = {	

		"ശരിയാണ് ":"== true",
		"തെറ്റാണ് ": "== false",
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
		"ആവട്ടെ": "let",
		"അവസ്ഥ": "case",
		"അസാധു": "null",
		"ഇറക്കുമതി": "import",
		"ചെയ്യുക": "do",
		"തിരിക്കുക": "switch",
		"തിരുത്തൽ": "debugger",
		"തുടരുക": "continue",
		"തെറ്റ്": "false",
		"നല്‍കുക": "yield",
		"നിർവഹിക്കുന്നു": "implements",
		"പരിവര്‍ത്തനം": "var",
		"പിടിക്കുക": "catch",
		"പുതിയ": "new",
		"പ്രയോഗം": "function",
		"പൊതു": "public",
		"ഭാണ്‌ഡം": "package",
		"മടക്കം": "return",
		"മുടക്കുക": "break",
		"മൂല്യനിർണ്ണയം": "eval",
		"വാദം": "arguments",
		"വ്യർത്ഥം": "void",
		"വ്യാപിപ്പിക്കുന്നു": "extends",
		"ശരി": "true",
		"ശാശ്വതം": "const",
		"ശ്രമിക്കുക": "try",
		"സമ്പര്‍ക്കമുഖം": "interface",
		"സുരക്ഷിതമാക്കപ്പെട്ട": "protected",
		"സ്വകാര്യ": "private",
		"സ്ഥായി": "static",
		"അമർത്തുക":"onclick",
		"അമർത്തുമ്പോൾ":"onclick",
		"ഞെക്കുക":"onclick",
		"രണ്ട് അമർത്തൽ":"dblclick",
		"രണ്ട് ഞെക്ക്":"dblclick",
		"കീ ഞെക്കുക്കുമ്പോൾ":"keypress",
		"കീ എടുക്കുമ്പോൾ":"keyup",
		"തയ്യാറാകുമ്പോൾ":"onload",
		"ജാലകം":"window",
		"രേഖ":"document",
		"തുടർച്ച":"for ( var __i= ",
		"മുതൽ":"; __i < ",
		"വരെ":"; __i++ )",



	};
		  
	this.exec= function(_script){
		eval(this.compile(_script));
	}
		
		
	this.init = function(){
		var scripts = document.querySelectorAll("[type='text/malluscript']");
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
