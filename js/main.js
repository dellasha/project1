 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  var goHere = function() {

		$('.mouse-icon').on('click', function(event){
			
			event.preventDefault();

			$('html,body').animate({
				scrollTop: $('.goto-here').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});
	};
	goHere();

	// $("#myScrollspy").scrollspy({ offset: -75 });



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


})(jQuery);







// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function($){
  //variable that will hold the href attr of the links in the menu
  var sections = [];
  //variable that stores the id of the section
  var id = false;
  //variable for the selection of the anchors in the navbar
  var $navbara = $('#navi a');
  
  $navbara.click(function(e){
    //prevent the page from refreshing
    e.preventDefault();
    //set the top offset animation and speed
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 180
},500);
    hash($(this).attr('href'));
  });
  
  
  
  //select all the anchors in the navbar one after another
  $navbara.each(function(){
   // and adds them in the sections variable
    sections.push($($(this).attr('href')));
    
  })
  $(window).scroll(function(e){
    // scrollTop retains the value of the scroll top with the reference at the middle of the page
    var scrollTop = $(this).scrollTop() + ($(window).height()/2);
    //cycle through the values in sections array
    for (var i in sections) {
      var section = sections[i];
      //if scrollTop variable is bigger than the top offset of a section in the sections array then 
      if (scrollTop > section.offset().top){
        var scrolled_id = section.attr('id');
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $($navbara).removeClass('current');
      $('#navi a[href="#' + id + '"]').addClass('current'); 
    }
  })
})(jQuery);

hash = function(h){
  if (history.pushState){
    history.pushState(null, null, h);
  }else{
    location.hash = h;
  }
}


$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});

/* 이징 그래프 */

$(document).ready(function(){//시작

	$('.chart').easyPieChart({
		  easing: 'easeOutBounce',
		  barColor:'#b9e4ff',
		  onStep: function(from, to, percent) {
			  $(this.el).find('.percent').text(Math.round(percent));
		  }
	  });

  
	  // var chart = window.chart = $('.chart').data('easyPieChart');
	  // $('.js_update').on('click', function() {
	  // 	chart.update(Math.random()*200-100);
	  // });


  })//끝


/* 캔버스 동그라미 */ 


		//메인 bg 애니메이션
		;(function() {

			"use strict";
	  
			var lava0;
			var ge1doot = {
			  screen: {
				elem:     null,
				callback: null,
				ctx:      null,
				width:    0,
				height:   0,
				left:     0,
				top:      0,
				init: function (id, callback, initRes) {
				  this.elem = document.getElementById(id);
				  this.callback = callback || null;
				  if (this.elem.tagName == "CANVAS") this.ctx = this.elem.getContext("2d");
				  window.addEventListener('resize', function () {
					this.resize();
				  }.bind(this), false);
				  this.elem.onselectstart = function () { return false; }
				  this.elem.ondrag        = function () { return false; }
				  initRes && this.resize();
				  return this;
				},
				resize: function () {
				  var o = this.elem;
				  this.width  = o.offsetWidth;
				  this.height = o.offsetHeight;
				  for (this.left = 0, this.top = 0; o != null; o = o.offsetParent) {
					this.left += o.offsetLeft;
					this.top  += o.offsetTop;
				  }
				  if (this.ctx) {
					this.elem.width  = this.width;
					this.elem.height = this.height;
				  }
				  this.callback && this.callback();
				}
			  }
			}
	  
			// Point constructor
			var Point = function(x, y) {
			  this.x = x;
			  this.y = y;
			  this.magnitude = x * x + y * y;
			  this.computed = 0;
			  this.force = 0;
			};
			Point.prototype.add = function(p) {
			  return new Point(this.x + p.x, this.y + p.y);
			};
	  
			// Ball constructor
			var Ball = function(parent) {
			  var min = .1;
			  var max = 1.5;
			  this.vel = new Point(
				(Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.25), (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random())
			  );
			  this.pos = new Point(
				parent.width * 0.2 + Math.random() * parent.width * 0.6,
				parent.height * 0.2 + Math.random() * parent.height * 0.6
			  );
			  this.size = (parent.wh / 15) + ( Math.random() * (max - min) + min ) * (parent.wh / 15);
			  this.width = parent.width;
			  this.height = parent.height;
			};
	  
			// move balls
			Ball.prototype.move = function() {
	  
			  // bounce borders
			  if (this.pos.x >= this.width - this.size) {
				if (this.vel.x > 0) this.vel.x = -this.vel.x;
				this.pos.x = this.width - this.size;
			  } else if (this.pos.x <= this.size) {
				if (this.vel.x < 0) this.vel.x = -this.vel.x;
				this.pos.x = this.size;
			  }
	  
			  if (this.pos.y >= this.height - this.size) {
				if (this.vel.y > 0) this.vel.y = -this.vel.y;
				this.pos.y = this.height - this.size;
			  } else if (this.pos.y <= this.size) {
				if (this.vel.y < 0) this.vel.y = -this.vel.y;
				this.pos.y = this.size;
			  }
	  
			  // velocity
			  this.pos = this.pos.add(this.vel);
	  
			};
	  
			// lavalamp constructor
			var LavaLamp = function(width, height, numBalls, c0, c1) {
			  this.step = 5;
			  this.width = width;
			  this.height = height;
			  this.wh = Math.min(width, height);
			  this.sx = Math.floor(this.width / this.step);
			  this.sy = Math.floor(this.height / this.step);
			  this.paint = false;
			  this.metaFill = createRadialGradient(width, height, width, c0, c1);
			  this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
			  this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
			  this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
			  this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1];
			  this.grid = [];
			  this.balls = [];
			  this.iter = 0;
			  this.sign = 1;
	  
			  // init grid
			  for (var i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
				this.grid[i] = new Point(
				  (i % (this.sx + 2)) * this.step, (Math.floor(i / (this.sx + 2))) * this.step
				)
			  }
	  
			  // create metaballs
			  for (var k = 0; k < numBalls; k++) {
				this.balls[k] = new Ball(this);
			  }
			};
			// compute cell force
			LavaLamp.prototype.computeForce = function(x, y, idx) {
	  
			  var force;
			  var id = idx || x + y * (this.sx + 2);
	  
			  if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
				force = 0.6 * this.sign;
			  } else {
				force = 0;
				var cell = this.grid[id];
				var i = 0;
				var ball;
				while (ball = this.balls[i++]) {
				  force += ball.size * ball.size / (-2 * cell.x * ball.pos.x - 2 * cell.y * ball.pos.y + ball.pos.magnitude + cell.magnitude);
				}
				force *= this.sign
			  }
			  this.grid[id].force = force;
			  return force;
			};
			// compute cell
			LavaLamp.prototype.marchingSquares = function(next) {
			  var x = next[0];
			  var y = next[1];
			  var pdir = next[2];
			  var id = x + y * (this.sx + 2);
			  if (this.grid[id].computed === this.iter) {
				return false;
			  }
			  var dir, mscase = 0;
	  
			  // neighbors force
			  for (var i = 0; i < 4; i++) {
				var idn = (x + this.ix[i + 12]) + (y + this.ix[i + 16]) * (this.sx + 2);
				var force = this.grid[idn].force;
				if ((force > 0 && this.sign < 0) || (force < 0 && this.sign > 0) || !force) {
				  // compute force if not in buffer
				  force = this.computeForce(
					x + this.ix[i + 12],
					y + this.ix[i + 16],
					idn
				  );
				}
				if (Math.abs(force) > 1) mscase += Math.pow(2, i);
			  }
			  if (mscase === 15) {
				// inside
				return [x, y - 1, false];
			  } else {
				// ambiguous cases
				if (mscase === 5) dir = (pdir === 2) ? 3 : 1;
				else if (mscase === 10) dir = (pdir === 3) ? 0 : 2;
				else {
				  // lookup
				  dir = this.mscases[mscase];
				  this.grid[id].computed = this.iter;
				}
				// draw line
				var ix = this.step / (
					Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 2]) + (y + this.ply[4 * dir + 2]) * (this.sx + 2)].force) - 1) /
					Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 3]) + (y + this.ply[4 * dir + 3]) * (this.sx + 2)].force) - 1) + 1
				  );
				ctx.lineTo(
				  this.grid[(x + this.plx[4 * dir]) + (y + this.ply[4 * dir]) * (this.sx + 2)].x + this.ix[dir] * ix,
				  this.grid[(x + this.plx[4 * dir + 1]) + (y + this.ply[4 * dir + 1]) * (this.sx + 2)].y + this.ix[dir + 4] * ix
				);
				this.paint = true;
				// next
				return [
				  x + this.ix[dir + 4],
				  y + this.ix[dir + 8],
				  dir
				];
			  }
			};
	  
			LavaLamp.prototype.renderMetaballs = function() {
			  var i = 0, ball;
			  while (ball = this.balls[i++]) ball.move();
			  // reset grid
			  this.iter++;
			  this.sign = -this.sign;
			  this.paint = false;
			  ctx.fillStyle = this.metaFill;
			  ctx.beginPath();
			  // compute metaballs
			  i = 0;
			  //ctx.shadowBlur = 50;
			  //ctx.shadowColor = "green";
			  while (ball = this.balls[i++]) {
				// first cell
				var next = [
				  Math.round(ball.pos.x / this.step),
				  Math.round(ball.pos.y / this.step), false
				];
				// marching squares
				do {
				  next = this.marchingSquares(next);
				} while (next);
				// fill and close path
				if (this.paint) {
				  ctx.fill();
				  ctx.closePath();
				  ctx.beginPath();
				  this.paint = false;
				}
			  }
			};
	  
			// gradients
			var createRadialGradient = function(w, h, r, c0, c1) {
			  var gradient = ctx.createRadialGradient(
				w / 1, h / 1, 0,
				w / 1, h / 1, r
			  );
			  gradient.addColorStop(0, c0);
			  gradient.addColorStop(1, c1);
			  return gradient;
			};
	  
			// main loop
			var run = function() {
			  requestAnimationFrame(run);
			  ctx.clearRect(0, 0, screen.width, screen.height);
			  lava0.renderMetaballs();
			};
			// canvas
			var screen = ge1doot.screen.init("bubble", null, true),
				ctx = screen.ctx;
			screen.resize();
			// create LavaLamps
			lava0 = new LavaLamp(screen.width, screen.height, 6, "#b9e4ff", "#f7f5e6");
	  
			run();
	  
	  
		  //Works 슬라이더
		  var x = document.getElementsByClassName("works-slider");
	  
		  for(var i = 0; i < x.length; i++) {
	  
			  var el = x[i];
			
			var swiper = el.getElementsByClassName("works-container")[0];
			var nx = el.getElementsByClassName("swiper-button-next")[0];
			var pr = el.getElementsByClassName("swiper-button-prev")[0];
	  
			new Swiper(swiper, {
				  slidesPerView: 5,  
				  spaceBetween: 80,
				  navigation: {
					nextEl: nx,
					prevEl: pr
				  },
				  autoplay: {
					  delay: 1000
				  },
				  speed:1000,
				  breakpoints: {
					  375: {
						slidesPerView: 1,
						spaceBetween: 0
					  },
					  500: {
						slidesPerView: 2,
						spaceBetween: 20
					  },
					  768: {
						slidesPerView: 3,
						spaceBetween: 30
					  },
					  1024: {
						slidesPerView: 4,
						spaceBetween: 40
					  }
				  }
			});
		  }
	  
		  })();
	  
	  
		  $(".works-container").hover(function() {
			  (this).swiper.autoplay.stop();
		  }, function() {
			  (this).swiper.autoplay.start();
		  });
	  
	  
	  
	  