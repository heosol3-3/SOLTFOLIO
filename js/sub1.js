(function($) {

var	$window = $(window),
$body = $('body'),
$main = $('#main');

// Breakpoints.
breakpoints({
xlarge:   [ '1281px',  '1680px' ],
large:    [ '981px',   '1280px' ],
medium:   [ '737px',   '980px'  ],
small:    [ '481px',   '736px'  ],
xsmall:   [ '361px',   '480px'  ],
xxsmall:  [ null,      '360px'  ]
});

// Play initial animations on page load.
$window.on('load', function() {
window.setTimeout(function() {
$body.removeClass('is-preload');
}, 100);
});

// Nav.
var $nav = $('#nav');

if ($nav.length > 0) {

// Shrink effect.
$main
.scrollex({
mode: 'top',
enter: function() {
$nav.addClass('alt');
},
leave: function() {
$nav.removeClass('alt');
},
});

// Links.
var $nav_a = $nav.find('a');

$nav_a
.scrolly({
speed: 1000,
offset: function() { return $nav.height(); }
})
.on('click', function() {

var $this = $(this);

// External link? Bail.
if ($this.attr('href').charAt(0) != '#')
return;

// Deactivate all links.
$nav_a
.removeClass('active')
.removeClass('active-locked');

// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
$this
.addClass('active')
.addClass('active-locked');

})
.each(function() {

var	$this = $(this),
id = $this.attr('href'),
$section = $(id);

// No section for this link? Bail.
if ($section.length < 1)
return;

// Scrollex.
$section.scrollex({
mode: 'middle',
initialize: function() {

// Deactivate section.
if (browser.canUse('transition'))
$section.addClass('inactive');

},
enter: function() {

// Activate section.
$section.removeClass('inactive');

// No locked links? Deactivate all links and activate this section's one.
if ($nav_a.filter('.active-locked').length == 0) {

$nav_a.removeClass('active');
$this.addClass('active');

}

// Otherwise, if this section's link is the one that's locked, unlock it.
else if ($this.hasClass('active-locked'))
$this.removeClass('active-locked');
}
});
});
}
// Scrolly.
$('.scrolly').scrolly({
speed: 1000
});

})(jQuery);




// 메일주소 복사

const contactemail = document.querySelectorAll(".contemail");
console.log(contactemail);

for(let i=0; i<contactemail.length; i++){
  contactemail[i].addEventListener("click",e=>{
    e.preventDefault();
    window.navigator.clipboard.writeText("diarysamz3@naver.com").then(() =>{
      alert("COPY OK!");
    })
  })

}


// 클릭하면 열리게 하기

const porta = document.querySelectorAll("#portfolio>.statistics>li>a");
console.log(porta);
const portinner = document.querySelector(".portfolio_wrap");
const body = document.querySelector("body");
const innerclose = document.querySelectorAll(".inner_close");

porta.forEach((el,i)=>{
  el.addEventListener("click",e=>{
    e.preventDefault();
    el.nextElementSibling.style.display = "block";
    body.style.overflow = "hidden";
  })
})
innerclose.forEach((el,i)=>{
  el.addEventListener("click",e=>{
    e.preventDefault();
    porta[i].nextElementSibling.style.display = "none";
    body.style.overflow = "auto";
    body.style.overflowX = "hidden"
  })
})

const lis = document.querySelectorAll(".features li>span");
console.log(lis);

for(let i=0; i<lis.length; i++){
  lis[i].addEventListener("mouseover",e=>{
    e.preventDefault();
    e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.style.opacity = "1"
  })
  lis[i].addEventListener("mouseleave",e=>{
    e.preventDefault();
    e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.style.opacity = "0"
  })
}


  // 차트(new)
  $js('.pie1').easyPieChart({
    barColor: '#e44f26',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie2').easyPieChart({
    barColor: '#1572b6',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie3').easyPieChart({
    barColor: '#f7df1e',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie4').easyPieChart({
    barColor: '#00d8ff',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie5').easyPieChart({
    barColor: '#cd6799',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie6').easyPieChart({
    barColor: '#f6820c',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie7').easyPieChart({
    barColor: '#3178c6',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie8').easyPieChart({
    barColor: '#ea2d2e',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie9').easyPieChart({
    barColor: '#6db33f',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });

  // tool 차트
  $js('.pie10').easyPieChart({
    barColor: '#007acc',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie11').easyPieChart({
    barColor: '#f24e1e',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie12').easyPieChart({
    barColor: '#2eb67d',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie13').easyPieChart({
    barColor: '#000',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie14').easyPieChart({
    barColor: '#31a8ff',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
  $js('.pie15').easyPieChart({
    barColor: '#ff9a00',
    trackColor: '#fff',
    scaleColor: '#fff',
    lineCap: 'round',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });


// top버튼

const btntop = document.querySelector(".topbtn");
console.log(btntop);

btntop.addEventListener("click",e=>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  });
});

window.addEventListener('scroll',e=>{
  let scrolls = document.querySelector('html').scrollTop;
  if(scrolls==0 && scrolls<=300){
    btntop.classList.remove("on")
  } else if(scrolls>300){
    btntop.classList.add("on");
  }
})