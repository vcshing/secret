var defaultMapItem = getCookie("selectMapItem","","0")

function mainPage(){

  setLang();
  frontEndTranslateToSelectedLang(defaultLangArr, function(translatedLangArr) {
      assignWordClassTranslation(translatedLangArr, "word");
  });

    document.addEventListener("online", onOnline, false);
		document.addEventListener("offline", onOffline, false);

//    $(".pinch-zoom").html("<iframe src=\"https://globfone.com/send-text/\" width=\"100%\" height=\""+($(window).height()-30)+"px\"></iframe>");

    function onOnline() {
			$(".pinch-zoom").html("<iframe src=\"https://globfone.com/send-text/\" width=\"100%\" height=\""+($(window).height()-30)+"px\"></iframe>");
		}

		function onOffline() {
			$(".pinch-zoom").html("<iframe src=\"image/map.png\" width=\"100%\" height=\""+($(window).height()-30)+"px\"></iframe>");
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
