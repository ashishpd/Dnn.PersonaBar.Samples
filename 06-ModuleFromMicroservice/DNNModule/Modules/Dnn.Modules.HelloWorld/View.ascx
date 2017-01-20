<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="Dnn.Modules.HelloWorld.View" %>

<div id="helloworld-container<%= ModuleId %>"></div>
<script>
    var currentUserCanView = "<%= userCanView %>";
    if (currentUserCanView === "True") {
        function loadScript() {
            var url = "http://webapplication120170119093536.azurewebsites.net/helloworld-bundle.js";
            //var url = "http://localhost:8080/dist/helloworld-bundle.js";
            //var url = "/DesktopModules/HelloWorld/scripts/helloworld-bundle.js";
            $.ajax({
                dataType: "script",
                cache: true,
                url: url
            });
        }
	
	    var _sf = {
		    get: function(data, callback, errorCallback){
			    $.ajax({
				    url: 'http://webapplication120170119093536.azurewebsites.net/api/values',
				    type: "GET",
				    data: data,
				    success: callback,
				    failure: errorCallback
			    });
		    },
		    post: function(data, callback, errorCallback){
			    $.ajax({
				    url: 'http://webapplication120170119093536.azurewebsites.net/api/values',
				    type: "POST",
				    data: data,
				    success: callback,
				    failure: errorCallback
			    });
		    }
	    };
	
	    $(document).ready(function(){
		    window.dnn.initHelloWorld = function(){
			    return {
				    sf: _sf
			    };
		    }
			if(!window.dnn.helloWorldLoaded){
				loadScript();
				window.dnn.helloWorldLoaded = true;
			}
	    });
    }

</script>