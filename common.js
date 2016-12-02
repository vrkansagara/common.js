getCookieValue=function(f) {
        if (!f) {
            return null
        }
        var a = f + "=";
        var d = document.cookie.split(/;\s/g);
        for (var b = 0; b < d.length; b++) {
            var e = d[b];
            while (e.charAt(0) == " ") {
                e = e.substring(1, e.length)
            }
            if (e.indexOf(a) === 0) {
                return e.substring(a.length, e.length)
            }
        }
        return null
    }
protocol=("https:" === document.location.protocol ? "https://" : "http://")
head=document.getElementsByTagName("HEAD").item(0);
element=function(item){return document.createElement(item);
deleteCookie=function(a) {
  if (!a) {
   return
  }
  document.cookie = a + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/; example.com;"
 }
pathname = window.location.pathname; // Returns path only
url      = window.location.href;   // Return full url
getHasValue= window.location.hash.substr(1);
