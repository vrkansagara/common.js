getCookieValue=function(f) { if (!f) { return null } var a = f + "=";  var d = document.cookie.split(/;\s/g); for (var b = 0; b < d.length; b++) {
            var e = d[b];  while (e.charAt(0) == " ") { e = e.substring(1, e.length)  }if (e.indexOf(a) === 0) { return e.substring(a.length, e.length)
            } } return null
    }
protocol=("https:" === document.location.protocol ? "https://" : "http://")
head=document.getElementsByTagName("HEAD").item(0);
element=function(item){return document.createElement(item);
deleteCookie=function(a) {  if (!a) { return } document.cookie = a + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/; example.com;" }
pathname = window.location.pathname; // Returns path only
url      = window.location.href;   // Return full url
getHasValue= window.location.hash.substr(1);
getWithHasValue= window.location.hash.substr(0);
activeTab=function (tab){ $('.nav-tabs a[href="#' + tab + '"]').tab('show');} };
local_port = window.location.port;
iurl=function(local_port){
				if(local_port =="" || local_port == "80") {
            var iurl=window.location.href;
								if(iurl.indexOf("http://")==0){
									iurl=iurl.replace("http://", "https://");
									window.location.href=iurl;
								}
        }
function getFormData(formId){
    var queryString = $('#' + formId).serialize(),
        obj = {};
    queryString.split("&").forEach(function (element, index, arr){
        var keyValue = element.split("=");
        obj[keyValue[0]] = keyValue[1];
    });
    return obj;
}}
backToTop = backToTop(){
	if (jQuery('#back-to-top').length) {
        var scrollTrigger = 600; // px
        backToTop = function () {
            var scrollTop = jQuery(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                jQuery('#back-to-top').fadeIn();
            } else {
                jQuery('#back-to-top').fadeOut();
            }
        };
        backToTop();
        jQuery(window).on('scroll', function () {
            backToTop();
        });
        jQuery('#back-to-top').on('click', function (e) {
            e.preventDefault();
            jQuery('html,body').animate({
                scrollTop: 0,
            }, 800);
        });
    }
}
viewPort = getViewPort(){
		var e = window, a = 'inner';
		if ( !( 'innerWidth' in window ) ){
			a = 'client';
			e = document.documentElement || document.body;
		}
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
