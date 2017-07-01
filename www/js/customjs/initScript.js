var defaultMapItem = getCookie("selectMapItem","","0")

function mainPage(){

  setLang();
  frontEndTranslateToSelectedLang(defaultLangArr, function(translatedLangArr) {
      assignWordClassTranslation(translatedLangArr, "word");
  });

    document.addEventListener("online", onOnline, false);
		document.addEventListener("offline", onOffline, false);

  //  $(".pinch-zoom").html("<iframe src=\"https://globfone.com/send-text/\" width=\"100%\" height=\""+($(window).height()-30)+"px\"></iframe>");
//onOnline()
    function onOnline() {
		//	$(".pinch-zoom").html("<iframe src=\"https://globfone.com/send-text/\" width=\"100%\" height=\""+($(window).height()-30)+"px\"></iframe>");

        var target = "_blank";
        var options = "location=no";
        var url = "https://globfone.com/send-text/";
      //  window.open(url, target, options);


    }

		function onOffline() {
      myApp.alert("Please connect Internet");
		//	$(".pinch-zoom").html("<iframe src=\"image/map.png\" width=\"100%\" height=\""+($(window).height()-30)+"px\"></iframe>");
		}
}

myApp.onPageInit('register', function(page) {
    // Do something here for "about" page

    $('.save-storage-data').on('click', function() {


    });


})

myApp.onPageInit('login', function(page) {
    // Do something here for "about" page

    $('.save-storage-data').on('click', function() {

    });


})
