(function(){function t(n,t){for(var u=[],f,e,i,r=0;r<=t.length;r++)for(i=0;i<=n.length;i++)e=r&&i?n.charAt(i-1)===t.charAt(r-1)?f:Math.min(u[i],u[i-1],f)+1:r+i,f=u[i],u[i]=e;return u.pop()}var n=String.prototype;n.isEmpty=function(){return!this.length},n.isNotEmpty=function(){return!this.isEmpty()},n.isBlank=function(){return/^\s*$/.test(this)},n.isNotBlank=function(){return!this.isBlank()},n.clean=function(){return this.trim().replace(/\s+/g," ")},n.equals=function(n){return this==n},n.equalsIgnoreCase=function(n){return n!=null?this.toLowerCase()==String(n).toLowerCase():!1},n.contains=function(n){return n!=null&&n.length<=this.length?this.indexOf(n)!=-1:!1},n.containsIgnoreCase=function(n){return n=String(n),n!=null&&n.length<=this.length?this.toLowerCase().indexOf(n.toLowerCase())!=-1:!1},n.count=function(n){if(n==null)return 0;n=String(n);for(var i=0,t=0,r=n.length;;){if(t=this.indexOf(n,t),t===-1||i>this.length)break;i++,t+=r}return i},n.countIgnoreCase=function(n){if(n==null)return 0;n=String(n).toLowerCase();for(var i=0,t=0,u=n.length,r=this.toLowerCase();;){if(t=r.indexOf(n,t),t===-1||i>r.length)break;i++,t+=u}return i},n.remove=function(n){return this.replace(new RegExp(n,"g"),"")},n.removeIgnoreCase=function(n){return this.replace(new RegExp(n,"gi"),"")},n.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},n.uncapitalize=function(){return this.charAt(0).toLowerCase()+this.substring(1)},n.truncate=function(n,t){return this.length>n&&n>0?this.substring(0,n)+(t||"..."):this},n.abbreviate=function(n,t){var i=this,r=i.indexOf(" ");if(t=t||"...",r===-1)return i;if(n<r)return i.substring(0,r)+t;while(i[n]!=" "&&n<i.length&&n>0)n--;return i.length>n?i.substring(0,n)+t:i},n.startsWith=function(n){return n=String(n),n==null||n.length>this.length?!1:this.substring(0,n.length)==n},n.startsWithIgnoreCase=function(n){return n=String(n),n==null||n.length>this.length?!1:this.substring(0,n.length).equalsIgnoreCase(n)},n.endsWith=function(n){return n=String(n),n==null||n.length>this.length?!1:this.substring(this.length-n.length,this.length)==n},n.endsWithIgnoreCase=function(n){return n=String(n),n==null||n.length>this.length?!1:this.substring(this.length-n.length,this.length).equalsIgnoreCase(n)},n.reverse=function(){for(var n=this.length-1,t="";n>=0;--n)t+=this[n];return t},n.reverseWords=function(n){return n|=" ",this.split(n).reverse().join(n)},n.words=function(){return this.isBlank()?[]:this.clean().split(" ")},n.isNumeric=function(){return this.isBlank()?!1:!isNaN(this)},n.isNotNumeric=function(){return!this.isNumeric()},n.toNumber=function(n){return this.isNumeric()?parseFloat(this).toFixed(n||this.countRight(".")):NaN},n.toNumberRound=function(){return this.isNumeric()?Math.round(parseFloat(this)):NaN},n.countRight=function(n){return n?this.length-this.indexOf(n)-1:0},n.countLeft=function(n){var t=this.indexOf(n);return n&&t!=-1?t:0},n.repeat=function(n,t){if(!n||isNaN(n))return this;for(var r=0,i="",u=this+t;r<n;r++)i+=u;return i.slice(0,-t.length)},n.distanceKm=function(n,t){var f=this.split(","),i=Math.PI/180,e=f[0]*i,o=f[1]*i,r,u;return n*=i,t*=i,r=(t-o)*Math.cos((e+n)/2),u=n-e,(Math.sqrt(r*r+u*u)*6371).toFixed(1)},n.difference=function(n){return n?t(this,String(n)):this.length},n.differenceIgnoreCase=function(n){return n?t(this.toLowerCase(),String(n).toLowerCase()):this.length}})();
