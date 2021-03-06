$(".otherApp").bind("click", function(e) {
    e.preventDefault();
    var target = "_system";
    var options = "location=yes";
    var url = "https://play.google.com/store/apps/developer?id=Sky+Explorer";
    window.open(url, target, options);
})

$(".shareApp").bind("click", function(e) {
    window.plugins.socialsharing.share("Secret", "Good App", "", "https://play.google.com/store/apps/details?id=com.skyexplorer.secret");
})


$(".sendsms").bind("click", function(e) {
    e.preventDefault();
    var target = "_blank";
    var options = "location=no";
    var url = "https://globfone.com/send-text/";
    window.open(url, target, options);
})

$(".googleMap").bind("click", function(e) {
    e.preventDefault();
    var target = "_system";
    var options = "location=yes";
    var url = "https://www.google.com.hk/maps";
    window.open(url, target, options);
})


$(".baiduMap").bind("click", function(e) {
    e.preventDefault();
    var target = "_system";
    var options = "location=yes";
    var url = "http://map.baidu.com/";
    window.open(url, target, options);
})

$(".gaodeMap").bind("click", function(e) {
    e.preventDefault();
    var target = "_system";
    var options = "location=yes";
    var url = "https://gaode.com/";
    window.open(url, target, options);
})

$(".linkFaceBook").bind("click", function(e) {
    e.preventDefault();
    var target = "_system";
    var options = "location=yes";
    var url = "https://www.facebook.com/329311567515888/";
    window.open(url, target, options);
})

$(".goodlist").bind("click", function(e) {
    $(".badlist").removeClass("active");
    $(".goodlist").addClass("active");
    getHomePageListRank("good");
})

$(".badlist").bind("click", function(e) {
    $(".goodlist").removeClass("active");
    $(".badlist").addClass("active");
    getHomePageListRank("bad");
    //alert(2);
    //	mainView.router.loadPage('indexRank.html')
})

$('.loginBtn').on('click', function() {
    //  myApp.loginScreen();
    mainView.router.loadPage("login.html");
});

$('.register').on('click', function() {
    mainView.router.loadPage("register.html");
});


$('.startTutorials').on('click', function(e) {

});






$(".langen").bind("click", function() {
    lang = "en";
    storageManager.setCookie("lang", {
        "selectedLang": lang
    });
    pageInit();

})

$(".langtc").bind("click", function() {
    //  alert(1);
    lang = "zh-tw";
    storageManager.setCookie("lang", {
        "selectedLang": lang
    });
    pageInit();
})

$(".langDefault").bind("click", function() {
    lang = checkLang();
    storageManager.setCookie("lang", {
        "selectedLang": lang
    });
    pageInit();
})

var allowsubmit = 1;
$$('.designFormSubmit').on('click', function() {
    if (allowsubmit = 1) {
        allowsubmit = 0;
        var formData = myApp.formToJSON('#designFormSubmit');
        formData['locale'] = lang;
        formData['deviceid'] = getDeviceID();
        formData['userid'] = '';
        if(formData['contentText']==""){
          myApp.alert("Please Enter Secret");
          return;
        }
        if(formData['name'] != ""){
          setCookieIndex("name",0,formData['name']);
        }

        myApp.showPreloader();
        $.ajax({
            type: 'POST',
            url: 'http://gogogo.synology.me/api/secret/secretinsert.php',
            data: formData,
            dataType: 'JSON',
            success: function(response) {
                if (response.status == 1) {
                    myApp.hidePreloader();
                    myApp.alert("Submit Successful");
                    $(".formDataContent").val("");
                } else {
                    myApp.hidePreloader();
                    myApp.alert("Server Error, Please Try Again Later");
                }
                allowsubmit = 1;
            },
            error: function(response) {
                myApp.hidePreloader();
                myApp.alert("Please Enter Value");
                allowsubmit = 1;
            }
        });
    }
})


$(".designFormPublish").bind("click", function() {
    if ($(".designImage").attr("data-id") != undefined) {
        myApp.showPreloader();
        $.ajax({
            type: 'POST',
            url: 'http://gogogo.synology.me/api/genword/publish.php',
            data: {
                "masterid": $(".designImage").attr("data-id")
            },
            dataType: 'JSON',
            success: function(response) {
                myApp.hidePreloader();
                if (response.status == 1) {
                    myApp.alert("Publish Success");
                } else {
                    myApp.alert("Publish Fail");
                }
            },
            error: function(response) {
                myApp.hidePreloader();
                myApp.alert("Publish Fail");
            }
        })
    }
})

var enableDownload = 1;
$(".designFormDownload").bind("click", function() {

    if ($(".designImage").attr("data-id") != undefined) {

        if (enableDownload == 1) {
            enableDownload = 0;

            imgurl = $(".designImage").attr("src");
            //DownloadFile(imgurl, "Cosplay", MD5(imgurl)) ;

            var success = function(msg) {
                myApp.alert("Saved to gallery");
                enableDownload = 1;
            };

            var error = function(err) {
                alert("Fail to Save");
                enableDownload = 1;
            };

            saveImageToPhone(encodeURI(imgurl), success, error);

        }


    }
})

$(".designFormShare").bind("click", function(e) {
    if ($(".designImage").attr("data-id") != undefined) {
        window.plugins.socialsharing.share(" ", "#freetalk", $(".designImage").attr("src"), " ");
    }
});

$(".titleButton").bind("click", function() {
    myApp.openPanel('left');

})
