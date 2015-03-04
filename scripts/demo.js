// Load jquery, less and floatz in correct order
$LAB.script("./styles/floatz-1.3.0/scripts/jquery-1.11.2.min.js")
	.script("./styles/floatz-1.3.0/scripts/ua-parser-0.7.3.min.js").wait()
	.script("./styles/floatz-1.3.0/scripts/floatz.js")
	.wait(function() {
		$(document).ready(function() {
			
			// Start floatz modules
			floatz.start({
				debug : true,
				logLevel : floatz.LOGLEVEL.DEBUG,
				onStarted : function() {
					$("#userAgent").text("User Agent: " + floatz.userAgent.ua);
					$("#docMode").text("Document Mode: " + (document.documentMode ? document.documentMode : "n.a."));
					
					/**
					 * Important note: IE 8 is not correctly determined in compatibility mode thus we have to check the documentMode too.
					 * which is not available in IE 7. The reason is that - in contrast to all other IE versions greater 8, the user agent
					 * string does NOT change when IE 8 is used in compatibility mode.
					 */
					if(floatz.userAgent.browser.name === "IE") {
						var version = floatz.userAgent.browser.major;
						if(version === "6") {
							$("#ie6").addClass("hilite");
						} else if(version === "7" || (document.documentMode != undefined ? document.documentMode === 7 : false)) {
							$("#ie7").addClass("hilite");
						} else if(version === "8" || (document.documentMode != undefined ? document.documentMode === 8 : false)) {
							$("#ie8").addClass("hilite");                
						} else if(version === "9") {
							$("#ie9").addClass("hilite");
						} else if(version === "10") {
							$("#ie10").addClass("hilite");
						} else if(version === "11") {
							$("#ie11").addClass("hilite");
						}
					} else if(floatz.userAgent.browser.name === "Chrome") {
						 $("#chrome").addClass("hilite");
					} else if(floatz.userAgent.browser.name === "Firefox") {
						 $("#firefox").addClass("hilite");
					} else if(floatz.userAgent.browser.name === "Safari") {
						 $("#safari").addClass("hilite");
					}
				}
			});
		});
	 });
