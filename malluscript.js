/*        മല്ലുസ്ക്രിപ്ട് 
          @author : എഴുതിതുടങ്ങിയത് ടിൻറു.
	  ഏതു രീതിയിലും ഇഷ്ടം പോലെ ഉപയോഗിക്കാവുന്ന ലൈസൻസ്.
	  തെറ്റുകൾ തിരുത്തുകയും പുതിയ സംഗതികൾ കൂട്ടിച്ചെർക്കുകയും ആകാം.  
*/

MalluScript = function(options={}){

	
	this.version  = "0.1";
	this.getVersion = function(){
		return this.version;
	}
	
	/*
	
		ഈ ഒബ്ജക്റ്റ് ഉപയോഗിച്ചാണ് ഓരോ മലയാളം വാക്കിനും തുല്യമായ ജാവാസ്ക്രിപ്റ്റ് (ഇംഗ്ലീഷ് )വാക് തിരഞ്ഞെടുക്കുക. 
		ഇതിനു ഉചിതമായ മറ്റു പേരുകൾ നിശ്ചയിക്കുകയോ ചേരാത്തവാ ഉണ്ടെങ്കിൽ തിരുത്തുകയോ ചെയ്യാം.
	
	*/
	
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
		"ആവട്ടെ": "var",
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
		"തുടർച്ച":"for (  ",
		"മുതൽ":";",
		"വരെ":"; ",
		"ഒന്ന് കൂടുന്നു":"++",
		"ഒന്ന് കുറയുന്നു":"--",
		"ആവർത്തനം":"for",
		"കാണുക":"console.log()",
		"കാണിക്കുക":"",
		"അറിയിപ്പ്":"",
		"മുന്നറിയിപ്പ്":"",
		"അറിയിക്കുക":"",
		"ഒന്ന് ":"1",
		"രണ്ട് ":"2",
		"മൂന്ന് ":"3",
		"നാല് ":"4",
		"അഞ്ച് ":"5",
		"ആറ്":"6",
		"ഏഴ് ":"7",
		"എട്ട് ":"8",
		"ഒൻപത് ":"9",
		"പത്ത്":"10",
		"മുന്നോട്ട് ":"++ )",
		"പിന്നോട്ട്  ":"-- )"

	};
		  
	/*
		ജാവാസ്ക്രിപ്റ്റിൽ eval എന്ന പ്രയോഗം അപകടം പിടിച്ചതാണ് എന്നിരുന്നാലും 
		നമ്മുടെ പ്രോഗ്രാം പ്രവർത്തിക്കപ്പെടണമെങ്കിൽ ഈ function വിളിക്കാതെ തരമില്ല. 
		ജാവാസ്ക്രിപ്റ്റ് ലേക്ക് പരിഭാഷപ്പെടുത്തിയ മല്ലുസ്ക്രിപ്ടിനെ eval ലേക്ക് കൊടുത്ത് പ്രവർത്തിപ്പിക്കുന്നു.
	*/	  
	this.exec= function(_script){
		eval(this.compile(_script));
	}
		
	
	/*
		മറ്റൊരു മല്ലുസ്ക്രിപ്ട് ഫയലിനെ നമ്മുടെ പ്രോഗ്രാമിലേക് ഉൾപ്പെടുത്താൻ ഉള്ള മാർഗം ആണിത്. 
		async എന്ന പദം ശ്രദ്ധിക്കുക  for( .js ഫയലിനെ തുറന്ന് അതിലെ വിവരങ്ങൾ എടുക്കുന്നു. 
		ഫയൽ തുറക്കുന്നത് for( asynchronous(മുൻ വിധികളോടെ സമയം നിശ്ചയിക്കാൻ കഴിയാത്തത് ) 
		പ്രവർത്തനം ആയതിനാൽ ആണ്this നൽകുന്നത്. 
 
	*/	
	this.loadScript = async function(srcipt_source) {

		var _script_content = null;
		
		try {
			/*
				js ഫയലിലെ വിവരങ്ങൾ എടുക്കുന്നു  
			*/
			_script_content = await fetch(script_source);

		} catch(e) {
			/*
				അങ്ങിനെ ഒരു ഫയൽ തുറക്കാൻ സാധിക്കുന്നില്ല. 
			*/
			console.log("404 Unable to load the requested malluscript file", e);
			return false;
		}

		var body = _script_content? await _script_content.text():null;

		return body;

	};		
		
	this.init = async function(){
		/*
			ടൈപ്പ് മല്ലുസ്ക്രിപ്ട് ആയിട്ടുള്ള എല്ലാ സ്ക്രിപ്ട് ടാഗുകളും തെരഞ്ഞെടുക്കുന്നു. 
		*/
		var mallu_scripts = document.querySelectorAll("[type='text/malluscript']");
		
		
		for(let script of mallu_scripts) {
			
			if(script.src) {

				var _script = await this.loadScript(script.src);

					this.exec(this.compile(_script));

			} else {
				_script = scripts[0].innerHTML;
				this.exec(this.compile(_script));

			}					
		}

   }		
	
	/*
		പരിഭാഷ നടക്കുന്നത് ഇവിടെയാണ്. അത് വളരെ ലളിതമാണ്. നേരത്തെ നിർമ്മിച്ച മലയാള പദങ്ങളെ ആങ്കലേയ പദങ്ങളിലേക്ക് മാറ്റുക.
	*/
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
		/*
			ഒരു താൾ സജ്ജമാകുമ്പോൾ തന്നെ നമ്മുടെ മല്ലുസ്ക്രിപ്ട് പരിഭാഷ പ്രവർത്തിക്കാനായി 
			സജ്ജവുമാകുന്ന സമയത്ത് മല്ലുസ്ക്രിപ്ട് ൻ്റെ ഒരു പകർപ്പ് എടുക്കുകയും 
			തനിയെ പ്രവർത്തിക്കാൻ സജ്ജമാക്കുകയും ചെയ്യുന്നു. 
		*/
		document.addEventListener('DOMContentLoaded', function(){
		var ob = new MalluScript();
		ob.init();
	}, false);
