
$(function(){
	$('body').plusAnchor({
        easing: 'linear',
        speed:  1300
    });

    $('header').animate({
    	opacity: 1,
    	width: "101%"
  	}, 1700, function() {
    	$('header').animate({
    		width:"100%"
    	},100);

  	});
    $('section').fadeIn(1200);

    //fb
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=142371159301532";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    });	

    //tw
     $().ready(function() {
    var via = 'geeknightscuu';                // Change to your Twitter username
    var txt = 'Transporte Público Chihuahua ayuda a ubicar las estaciones del nuevo sistema de transporte de #CUU http://geeknightscuu.com/chart'; // Change to whatever..
    var a=window.location.href,b="http://urls.api.twitter.com/1/urls/count.json?url="+encodeURIComponent(a),c="http://twitter.com/intent/tweet?related=&text="+encodeURIComponent(txt)+"&url="+a+"&via="+via;
    $("#tweet-btn, #tweet-cnt").click(function(d){d.preventDefault();window.open(c,"","width=550,height=420,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=100,top=100");return!0});
    $.ajax({url:b,dataType:"jsonp",success:function(d){console.log("Tweet count for "+a+": "+d.count);$("#tweet-cnt").text(d.count.toString())},error:function(d){console.log("Can not get tweet count from "+b);}});});


    //google
    window.___gcfg = {
  lang: 'en-US',
  parsetags: 'onload'
};
    (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();




