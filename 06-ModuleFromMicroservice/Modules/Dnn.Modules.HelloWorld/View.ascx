<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="Dnn.Modules.HelloWorld.View" %>

<div id="helloworld-container<%= ModuleId %>"></div>
<script>
    var ModuleId = <%= ModuleId %>;
    var currentUserCanView = "<%= userCanView %>";
    if (currentUserCanView === "True") {
	    var sf = $.ServicesFramework(ModuleId);
		console.log(sf);
        function loadScript() {
            //var url = "http://localhost:8080/dist/helloworld-bundle.js";
            var url = "/DesktopModules/HelloWorld/scripts/helloworld-bundle.js";
            $.ajax({
                dataType: "script",
                cache: true,
                url: url
            });
        }
	
	    var _sf = {
		    serviceRoot: "",
		    controller: "",
		    init: function(serviceRoot, controller){
			    this.serviceRoot = serviceRoot;
			    this.controller = controller;
		    },
		    get: function(endPointUrl, data, callback, errorCallback){
			    $.ajax({
				    url: sf.getServiceRoot(this.serviceRoot) + this.controller + "/" + endPointUrl,
				    type: "GET",
				    data: data,
				    beforeSend: sf.setModuleHeaders,
				    success: callback,
				    failure: errorCallback
			    });
		    },
		    post: function(endPointUrl, data, callback, errorCallback){
			    $.ajax({
				    url: sf.getServiceRoot(this.serviceRoot) + this.controller + "/" + endPointUrl,
				    type: "POST",
				    data: data,
				    beforeSend: sf.setModuleHeaders,
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