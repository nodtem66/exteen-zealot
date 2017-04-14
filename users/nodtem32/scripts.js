/*
 * scripts for exteen
 * v. 0.01e
 * nodtem32.exteen.com
 * (cc) 2012 No License DO WHAT YOU WANT
 */

(function(){
//start of scripts

/* Helping function */
var viewport = (function(){var e = window, a = 'inner';if ( !( 'innerWidth' in window )){a = 'client';e = document.documentElement || document.body;}return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }})();
function prettyDate(time){
  var date = new Date((time || "").replace(/[TZ]/g," ")),
      diff = (((new Date()).getTime() - date.getTime()) / 1000),
      day_diff = Math.floor(diff / 86400);
                  
  if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
    return time.replace(/ \d{2}:\d{2}/,'');;
                  
  return day_diff == 0 && (
                  diff < 60 && diff + " seconds ago" ||
                  diff < 120 && "1 minute ago" ||
                  diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
                  diff < 7200 && "1 hours ago" ||
                  diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
          day_diff < 2 && "1 day ago" ||
          day_diff < 7 && day_diff + " days ago" ||
          day_diff < 14 && "1 week ago" ||
          day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
}
var decode_pre = function(c){c=(c.trim!=undefined)?c.trim():c.replace(/^[\s\ ]*/,'').replace(/[\s\ ]*$/, '');return c=c.replace(/&amp;/g, '&'), c=c.replace(/&lt;/g, '<'), c=c.replace(/&gt;/g, '>');};
var Showdown = new function(){var e,t,n,r=0;this.makeHtml=function(r){return e=new Array,t=new Array,n=new Array,r=r.replace(/~/g,"~T"),r=r.replace(/\$/g,"~D"),r=r.replace(/\r\n/g,"\n"),r=r.replace(/\r/g,"\n"),r="\n\n"+r+"\n\n",r=M(r),r=r.replace(/^[ \t]+$/mg,""),r=y(r),r=s(r),r=i(r),r=u(r),r=A(r),r=r.replace(/~D/g,"$$"),r=r.replace(/~T/g,"~"),r};var i=function(n){var n=n.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|\Z)/gm,function(n,r,i,s,o){return r=r.toLowerCase(),e[r]=N(i),s?s+o:(o&&(t[r]=o.replace(/"/g,"&quot;")),"")});return n},s=function(e){e=e.replace(/\n/g,"\n\n");var t="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside",n="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,o),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,o),e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,o),e=e.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,o),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,o),e=e.replace(/\n\n/g,"\n"),e},o=function(e,t){var r=t;return r=r.replace(/\n\n/g,"\n"),r=r.replace(/^\n/,""),r=r.replace(/\n+$/g,""),r="\n\n~K"+(n.push(r)-1)+"K\n\n",r},u=function(e){e=d(e);var t=b("<hr />");return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,t),e=e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,t),e=e.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,t),e=m(e),e=g(e),e=x(e),e=s(e),e=T(e),e},a=function(e){return e=w(e),e=f(e),e=C(e),e=h(e),e=l(e),e=k(e),e=N(e),e=S(e),e=e.replace(/  +\n/g," <br />\n"),e},f=function(e){var t=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return e=e.replace(t,function(e){var t=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return t=_(t,"\\`*_"),t}),e},l=function(e){return e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,c),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,c),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,c),e},c=function(n,r,i,s,o,u,a,f){f==undefined&&(f="");var l=r,c=i,h=s.toLowerCase(),p=o,d=f;if(p==""){h==""&&(h=c.toLowerCase().replace(/ ?\n/g," ")),p="#"+h;if(e[h]!=undefined)p=e[h],t[h]!=undefined&&(d=t[h]);else{if(!(l.search(/\(\s*\)$/m)>-1))return l;p=""}}p=_(p,"*_");var v='<a href="'+p+'"';return d!=""&&(d=d.replace(/"/g,"&quot;"),d=_(d,"*_"),v+=' title="'+d+'"'),v+=">"+c+"</a>",v},h=function(e){return e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,p),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,p),e},p=function(n,r,i,s,o,u,a,f){var l=r,c=i,h=s.toLowerCase(),p=o,d=f;d||(d="");if(p==""){h==""&&(h=c.toLowerCase().replace(/ ?\n/g," ")),p="#"+h;if(e[h]==undefined)return l;p=e[h],t[h]!=undefined&&(d=t[h])}c=c.replace(/"/g,"&quot;"),p=_(p,"*_");var v='<img src="'+p+'" alt="'+c+'"';return d=d.replace(/"/g,"&quot;"),d=_(d,"*_"),v+=' title="'+d+'"',v+=" />",v},d=function(e){function t(e){return e.replace(/[^\w]/g,"").toLowerCase()}return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(e,n){return b('<h1 id="'+t(n)+'">'+a(n)+"</h1>")}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(e,n){return b('<h2 id="'+t(n)+'">'+a(n)+"</h2>")}),e=e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(e,n,r){var i=n.length;return b("<h"+i+' id="'+t(r)+'">'+a(r)+"</h"+i+">")}),e},v,m=function(e){e+="~0";var t=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return r?e=e.replace(t,function(e,t,n){var r=t,i=n.search(/[*+-]/g)>-1?"ul":"ol";r=r.replace(/\n{2,}/g,"\n\n\n");var s=v(r);return s=s.replace(/\s+$/,""),s="<"+i+">"+s+"</"+i+">\n",s}):(t=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(t,function(e,t,n,r){var i=t,s=n,o=r.search(/[*+-]/g)>-1?"ul":"ol",s=s.replace(/\n{2,}/g,"\n\n\n"),u=v(s);return u=i+"<"+o+">\n"+u+"</"+o+">\n",u})),e=e.replace(/~0/,""),e};v=function(e){return r++,e=e.replace(/\n{2,}$/,"\n"),e+="~0",e=e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,function(e,t,n,r,i){var s=i,o=t,f=n;return o||s.search(/\n{2,}/)>-1?s=u(O(s)):(s=m(O(s)),s=s.replace(/\n$/,""),s=a(s)),"<li>"+s+"</li>\n"}),e=e.replace(/~0/g,""),r--,e};var g=function(e){return e+="~0",e=e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(e,t,n){var r=t,i=n;return r=E(O(r)),r=M(r),r=r.replace(/^\n+/g,""),r=r.replace(/\n+$/g,""),r="<pre><code>"+r+"\n</code></pre>",b(r)+i}),e=e.replace(/~0/,""),e},y=function(e){return e+="~0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,t,n){var r=t,i=n;return i=E(i),i=M(i),i=i.replace(/^\n+/g,""),i=i.replace(/\n+$/g,""),i="<pre><code"+(r?' class="'+r+'"':"")+">"+i+"\n</code></pre>",b(i)}),e=e.replace(/~0/,""),e},b=function(e){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(n.push(e)-1)+"K\n\n"},w=function(e){return e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,t,n,r,i){var s=r;return s=s.replace(/^([ \t]*)/g,""),s=s.replace(/[ \t]*$/g,""),s=E(s),t+"<code>"+s+"</code>"}),e},E=function(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=_(e,"*_{}[]\\",!1),e},S=function(e){return e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),e=e.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),e},x=function(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,t){var n=t;return n=n.replace(/^[ \t]*>[ \t]?/gm,"~0"),n=n.replace(/~0/g,""),n=n.replace(/^[ \t]+$/gm,""),n=u(n),n=n.replace(/(^|\n)/g,"$1  "),n=n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,t){var n=t;return n=n.replace(/^  /mg,"~0"),n=n.replace(/~0/g,""),n}),b("<blockquote>\n"+n+"\n</blockquote>")}),e},T=function(e){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");var t=e.split(/\n{2,}/g),r=new Array,i=t.length;for(var s=0;s<i;s++){var o=t[s];o.search(/~K(\d+)K/g)>=0?r.push(o):o.search(/\S/)>=0&&(o=a(o),o=o.replace(/^([ \t]*)/g,"<p>"),o+="</p>",r.push(o))}i=r.length;for(var s=0;s<i;s++)while(r[s].search(/~K(\d+)K/)>=0){var u=n[RegExp.$1];u=u.replace(/\$/g,"$$$$"),r[s]=r[s].replace(/~K\d+K/,u)}return r.join("\n\n")},N=function(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;"),e},C=function(e){return e=e.replace(/\\(\\)/g,D),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,D),e},k=function(e){return e=e.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>'),e=e.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(e,t){return L(A(t))}),e},L=function(e){function t(e){var t="0123456789ABCDEF",n=e.charCodeAt(0);return t.charAt(n>>4)+t.charAt(n&15)}var n=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+t(e)+";"},function(e){return e}];return e="mailto:"+e,e=e.replace(/./g,function(e){if(e=="@")e=n[Math.floor(Math.random()*2)](e);else if(e!=":"){var t=Math.random();e=t>.9?n[2](e):t>.45?n[1](e):n[0](e)}return e}),e='<a href="'+e+'">'+e+"</a>",e=e.replace(/">.+:/g,'">'),e},A=function(e){return e=e.replace(/~E(\d+)E/g,function(e,t){var n=parseInt(t);return String.fromCharCode(n)}),e},O=function(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,""),e},M=function(e){return e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"~A~B"),e=e.replace(/~B(.+?)~A/g,function(e,t,n){var r=t,i=4-r.length%4;for(var s=0;s<i;s++)r+=" ";return r}),e=e.replace(/~A/g,"    "),e=e.replace(/~B/g,""),e},_=function(e,t,n){var r="(["+t.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(r="\\\\"+r);var i=new RegExp(r,"g");return e=e.replace(i,D),e},D=function(e,t){var n=t.charCodeAt(0);return"~E"+n+"E"}};
var insert_mathjax = function () {$('.post').append("<script type='text/x-mathjax-config'>MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$']],processEscapes:true,skipTags: ['script', 'noscript', 'style', 'textarea', 'pre']}});</script><script src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML'></script>");}
if(!jQuery) return;
$(document).ready(function(){
  
  /* Hide truehit logo */
  $('iframe[src*="truehit"]').hide();
  
  /* Effect admin bar */
  var bar = $('#adminbar .topbar')
  ,isVisible = true
  ;
  $(document).mousemove(function(e){
    if (e.clientY < 40){
      if(!isVisible){
        bar.animate({top: '0px'}, 100);
        isVisible = true;
      }
    } else if(isVisible){
      var element = e.target;
      while(element != null && element.nodeName.toLowerCase() != 'body'){
        if(element.id && element.id == 'adminbar'){
          return;
        }
        element = element.parentNode;
      }
      bar.animate({top: '-36px'}, 100);
      isVisible = false;
    }
  });
  
  /* change date */
  $('.title span').each(function(index,element){
    var date = element.innerHTML.match(/\d+ \w+ \d+ \d+:\d+/);
    if(date && date[0])
      element.innerHTML = prettyDate(date[0]);
  });
  
  /* showdown content */
  $('.post').each(function(index, element){
    var body = decode_pre(element.innerHTML);
    if(/<!--\s*showdown\s*-->/ig.test(body))
      element.innerHTML = Showdown.makeHtml(body);
    if(/<!--.*?math.*?-->/ig.test(body))
      insert_mathjax();
    
  });
  /* Effect focus text editor*/
  var id = setInterval(function(){
    if(parent.cc_ifr)
    {
      var editor = $('.mceLayout');
      $('#tinymce',parent.cc_ifr.document)
      .focus(function(e){editor.css({'box-shadow':'0 0 9px #0071DB'});})
      .blur(function(e){editor.css({'box-shadow':'none'});});
      clearInterval(id);
    }
  }, 1000);
  
});
//end of scripts
/*#FCFCFC #EFEEE9 9FD73E 0071DB
 * */
}());
