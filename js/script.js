/*global $, window, document, jQuery*/

// Stop carousel
jQuery(window).load(function() {
    $('.carousel').carousel('');

});



// Video
function autoPlayYouTubeModal() {
    var trigger = $('body').find('[data-toggle="modal"]');
    trigger.on('click',function() {
        var theModal = $(this).data('target'),
        videoSRC = $('.modal.youtube-video .modal-content iframe').attr('src'),
        videoSRCauto = videoSRC + '?autoplay=1';
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').on('click',function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
        $('.modal').on('click',function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
}
autoPlayYouTubeModal();


 $(document).on('scroll', function () {
     
     if ( !$('.navbar.change').hasClass('toggle') ) {
     
        if ($(this).scrollTop() >= 100) {
            
            $('img.light').addClass('hidden');
            $('img.dark').removeClass('hidden');
            
            $('.navbar.change').removeClass('amtop');
            
            if ( $('.navbar.change').hasClass('navbar-dark') ) {
                $('.navbar.change').removeClass('navbar-dark').addClass('navbar-light bg-light');                
            }
        } 

     else {
                $('img.light').removeClass('hidden');
                $('img.dark').addClass('hidden');
         
                $('.navbar.change').addClass('navbar-dark').removeClass('navbar-light bg-light');
                $('.navbar.change').addClass('amtop');
            
        }   
     }

});

 // Navbar Toggle
$('.navbar.change .navbar-toggler').on('click', function(){

    if ( $('.navbar.change').hasClass('amtop') ) {
    
        $('.navbar.change').toggleClass('toggle');
        $('.navbar.change').toggleClass('navbar-dark navbar-light bg-light');
        
    }

});

// Dropdown
$('.dropdown-toggle').dropdown();



// Install Owl Carousel
jQuery(document).on('ready', function () {
    $('.owl-carousel').owlCarousel();
});

// Best of the Best Carousel
$('.best_carousel').owlCarousel({
    loop: true,autoplay: false,smartSpeed: 700,responsiveClass:true,center:false,
    margin: 30,nav: true,
    responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
});

$('.best .owl-prev').html(' <i class="fa fa-arrow-left"></i> ');
$('.best .owl-next').html(' <i class="fa fa-arrow-right"></i> ');

// Box Carousel
$('.box_carousel').owlCarousel({
    loop: false,autoplay: false,smartSpeed: 700,responsiveClass:true,center:false,
    margin: 0,nav: true,
    responsive:{
            0:{
                items:1
            }
        }
});

$('.box .owl-prev').html(' <i class="fa fa-chevron-left"></i> ');
$('.box .owl-next').html(' <i class="fa fa-chevron-right"></i> ');


var $owl = $('.owl-carousel.user_carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$('.user_carousel').owlCarousel({
    loop: true,autoplay: true,smartSpeed: 700,responsiveClass:true,center:true,
    margin: 0,nav: false,mouseDrag: false,
    responsive:{
            0:{
                items:1
            },
            800:{
                items:5
            },
            1400:{
                items:5
            }
        }
});


$(document).on('click', '.owl-item>div', function() {
  $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
});




$('.user_carousel .owl-item.center').next().addClass('scale');
$('.user_carousel .owl-item.center').prev().addClass('scale');

$('.user_carousel .owl-item.center').next().next().addClass('scale-more');
$('.user_carousel .owl-item.center').prev().prev().addClass('scale-more');



$('.user_carousel .owl-item').on('click', function () {
    
    $(this).removeClass('scale scale-more');
    
    $(this).next().removeClass('scale-more').addClass('scale');
    $(this).prev().removeClass('scale-more').addClass('scale');

    $(this).next().next().removeClass('scale').addClass('scale-more');
    $(this).prev().prev().removeClass('scale').addClass('scale-more');
    
});








$('.navbar .user.original').on('click', function(){

    $('.navbar .all-users').toggleClass('show');

});


jQuery('.dropdown-menu').on('click', function (e) {
  e.stopPropagation();
});

if(1) {
  $('body').attr('tabindex', '0');
}
else {
  alertify.confirm().set({'reverseButtons': true});
  alertify.prompt().set({'reverseButtons': true});
}





// Calendar
var dateSelect     = $('#flight-datepicker');
var dateDepart     = $('#start-date');
var dateReturn     = $('#end-date');
var spanDepart     = $('.date-depart');
var spanReturn     = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
})


var dateSelect     = $('#flight-datepicker2');
var dateDepart     = $('#start-date2');
var dateReturn     = $('#end-date2');
var spanDepart     = $('.date-depart');
var spanReturn     = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
});


var dateSelect     = $('#flight-datepicker3');
var dateDepart     = $('#start-date3');
var dateReturn     = $('#end-date3');
var spanDepart     = $('.date-depart');
var spanReturn     = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
});

var dateSelect     = $('#flight-datepicker4');
var dateDepart     = $('#start-date4');
var dateReturn     = $('#end-date4');
var spanDepart     = $('.date-depart');
var spanReturn     = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
});


var dateSelect     = $('#flight-datepicker5');
var dateDepart     = $('#start-date5');
var dateReturn     = $('#end-date5');
var spanDepart     = $('.date-depart');
var spanReturn     = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
});

var dateSelect     = $('#flight-datepicker6');
var dateDepart     = $('#start-date6');
var dateReturn     = $('#end-date6');
var spanDepart     = $('.date-depart');
var spanReturn     = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
});


var dateSelect     = $('#flight-datepicker7');
var dateDepart     = $('#start-date7');
var dateReturn     = $('#end-date7');
var spanDepart     = $('.date-depart');
var spanReturn     = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
});


var dateSelect     = $('#flight-datepicker8');
var dateDepart     = $('#start-date8');
var dateReturn     = $('#end-date8');
var spanDepart     = $('.date-depart');
var spanReturn     = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
});


var dateSelect     = $('#flight-datepicker9');
var dateDepart     = $('#start-date9');
var dateReturn     = $('#end-date9');
var spanDepart     = $('.date-depart');
var spanReturn     = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
});



var dateSelect     = $('#flight-datepicker11');
var dateDepart     = $('#start-date11');
var dateReturn     = $('#end-date11');
var spanDepart     = $('.date-depart');
var spanReturn     = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
});




$('.show-comment').on('click', function (event) {
    
    event.preventDefault();
    
    var id = $(this).attr('for');
    
    $('#' + id).toggleClass('show');
    
});

$('.b-comment').on('click', function (event) {
    
    event.preventDefault();
    
    var id = $(this).attr('for');
    
    $('#' + id).toggleClass('show2');
    
});

$('.box .lcs .like-list').hover(function(){
    
    $(this).find('ul').addClass('show');
    }, function(){
    $(this).find('ul').removeClass('show');
    
  });
  
  
  
  
  
  
  
  
  
 $(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.cityDropBtn').html($(this).text() + ' <i class="fa fa-angle-down">');
  $(this).parents(".dropdown").find('.cityDropBtn').val($(this).data('value'));
});



 $(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.tourDate').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.tourDate').val($(this).data('value'));
});





$(function() {
  $('#colorselector').change(function(){
    $('.colors').hide();
    $('#' + $(this).val()).show();
  });
});