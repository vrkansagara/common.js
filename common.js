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
