$(function () {

    function initMap() {

        var location = new google.maps.LatLng(50.0875726, 14.4189987);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        /*var contentString = '<div class="info-window">' +
                '<h3>Info Window1 Content</h3>' +
                '<div class="info-content">' +
                '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
                '</div>' +
                '</div>';*/
				
		var contentString = '<div class="box mapPop">'+
          '<div class="head" ><div class=""><div class="box-img" style="background-image:url(images/explore/explore1-1.jpg)"><div class=" tag"> <span class="featured" >Featured</span> </div><div class="rating"> <img src="images/icons/stars.png" alt> <a href="#">(7 review)</a>'+
           '<div class="dropdown"><button type="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> </button><div class="dropdown-menu dropdown-menu-tip-nw"> <a href="#" class="dropdown-item">Compare</a> <a href="#" class="dropdown-item">Add to Favorite</a> </div></div></div>'+
           '<div class="content"><h5>Nightlife Rooftop Bar &amp; Club <span class="check pink"> <i class="fa fa-check"></i> </span> </h5><ul class="infos"><p class="info"> <img src="images/icons/map-light.png"> <a href="#">Santa Monica, CA</a></p><p class="info"> <img src="images/navbar/phone-light.png"> <a href="#">+61 1 2458 51278</a></p></ul>'+
            '<ul class="more-info"><li><a href="#"><i class="fa fa-bed"></i> 2</a></li>               <li><a href="#"><i class="fa fa-shower"></i> 2</a></li><li><a href="#"><i class="fa fa-user"></i> 8</a></li><li><div class="num-group"> <a href="#" class="num">+3</a><ul class="more-info cat-group"><li><a href="#"><i class="fa fa-bed"></i> 2</a></li><li><a href="#"><i class="fa fa-bed"></i> 2</a></li><li><a href="#"><i class="fa fa-bed"></i> 2</a></li></ul></div></li></ul></div></div></div></div>'+
         '<div class="bottom"><div class="content"> <div class="catHov_icon"> <span class="category bord"></span> <span class="category origin"><img src="images/map_icon.png" width="30" height="28"> </span><div class="Profilehv_pop"><div class="modal-dialog"><div class="modal-content"><div class="head" style="background-image: url(images/user-pop/user-pop-bg.jpg)"> <img src="images/user-pop/user-pop.jpg" alt><h4>Name Here</h4><ul class="btns"><li> <a href="#" class="btn">Follow Me</a> </li><li> <a href="#" class="btn">Notify Me</a> </li></ul></div>'+
         '<div class="bottom"><div class="row"><div class="col col-6"> <i class="fa fa-phone"></i> +7 (111) 123456789 </div><div class="col col-6"> <i class="fa fa-envelope-o"></i> yourmail@domain.com </div>  <div class="col col-12"> <i class="fa fa-map-marker"></i> USA 27TH Brooklyn NY </div></div></div></div></div></div></div><ul class="more-info"><li><a href="#" class="sub nightlife"> <img src="images/icons/shop.png"> Shopping</a></li><li><p class="statement">Open</p></li></ul></div>'+
         '<ul class="lcs bestLcsUl" ><li class="heart_icon"><a href="#"><img src="images/icons/love.png"></a><div class="heart_bx"> <span>John smith</span><span>Tom smith</span><span>HEry smith</span> <span>More(10)</span></div></li><li class="like-list"> <a href="#" class="love"><img src="images/reactions/love.png" alt=""></a><ul><li><a href="#"><img src="images/reactions/love.png"></a></li><li><a href="#"><img src="images/reactions/lol.png"></a></li>  <li><a href="#"><img src="images/reactions/cute.png"></a></li><li><a href="#"><img src="images/reactions/omg.png"></a></li><li><a href="#"><img src="images/reactions/wtf.png"></a></li>  <li><a href="#"><img src="images/reactions/cry.png"></a></li><li><a href="#"><img src="images/reactions/angry.png"></a></li></ul></li><li><a data-toggle="collapse" data-target="#mapPopcmt"><img src="images/icons/comment.png" alt=""></a></li><li class="social_list"><a href="#"><img src="images/icons/share.png" alt=""></a><div class="socialBx"> <span><a href="#"><i class="fa fa-facebook"></i></a></span> <span><a href="#"><i class="fa fa-twitter"></i></a></span> <span><a href="#"><i class="fa fa-pinterest-p"></i></a></span> <span><a href="#"><i class="fa fa-envelope-o"></i></a></span> </div></li></ul>'+
        '<div class="collapse all-comments" id="mapPopcmt" style="opacity:1; height:auto">    <ul class="more-info b-edition no-bg comment-info">  <li class="liked"> <a href="#" class="float-left"> <i class="fa fa-heart-o"></i> 24</a>   <div class="cell-image-list float-left"> <a data-toggle="modal" data-target="#user-pop1" href="#" class="cell-img" style="background-image: url(images/user/user-say1.jpg)"> </a> <a data-toggle="modal" data-target="#user-pop2" href="#" class="cell-img" style="background-image: url(images/user/user-say2.jpg)"></a> <a data-toggle="modal" data-target="#user-pop3" href="#" class="cell-img" style="background-image: url(images/user/user-say3.jpg)"></a> <a data-toggle="modal" data-target="#user-pop4" href="#" class="cell-img" style="background-image: url(images/user/user-say4.jpg)"></a> <a data-toggle="modal" data-target="#user-pop5"  href="#" class="cell-img" style="background-image: url(images/user/user-say5.jpg)"></a> </div> <div class="user float-left"> <a data-toggle="modal" data-target="#user-pop5" href="#" class="cell-img">You</a>, <a data-toggle="modal" data-target="#user-pop5" href="#" class="cell-img">Elaine</a> and </a>'+
        '<div class="liked">       <ul class="reaction-list">                      <li><a href="#">Name Here</a></li>  <li><a href="#">Name Here</a></li> <li><a href="#">Name Here</a></li>       <li><a href="#">Name Here</a></li> <li><a href="#">Name Here</a></li> <li><a href="#">Name Here</a></li>     <li><a href="#">Name Here</a></li>       <li><a href="#">Name Here</a></li>      </ul>                    <p class="time"> <a data-toggle="modal" data-target="#likersPop" href="#" class="cell-img">22 more liked this</a> </p>  </div> </div>  </li> <li>              <div class="float-left reactions"> <span class="reactSpn"><a href="#"><img src="images/reactions/angry.png" width="28" height="27"></a>          <ul class="reactions-count"> <li> John Smith </li> <li>Tom day</li> <li>Dick hery</li>              <li>More(10)</li> </ul>  </span> <span class="reactSpn"><a href="#"><img src="images/reactions/cry.png" width="28" height="27"></a> <ul class="reactions-count"><li> John Smith </li>     <li>Tom day</li>       <li>Dick hery</li><li>More(10)</li>   </ul>   </span> <span class="reactSpn"><a href="#"><img src="images/reactions/cute.png" width="28" height="27"></a><ul class="reactions-count">       <li> John Smith </li> <li>Tom day</li> <li>Dick hery</li> <li>More(10)</li>   </ul> </span> <span class="reactSpn"><a href="#"><img src="images/reactions/lol.png" width="28" height="27"></a>'+
        '<ul class="reactions-count"><li> John Smith </li>   <li>Tom day</li> <li>Dick hery</li>                  <li>More(10)</li>  </ul> </span> <span class="reactSpn"><a href="#"><img src="images/reactions/love.png" width="28" height="27"></a>  <ul class="reactions-count">  <li> John Smith </li>                   <li>Tom day</li><li>Dick hery</li>  <li>More(10)</li> </ul> </span> <span class="reactSpn"><a href="#"><img src="images/reactions/omg.png" width="28" height="27"></a> <ul class="reactions-count">   <li> John Smith </li>  <li>Tom day</li>    <li>Dick hery</li>  <li>More(10)</li>  </ul>                  </span> <span class="reactSpn"><a href="#"><img src="images/reactions/wtf.png" width="28" height="27"></a> <ul class="reactions-count"> <li> John Smith </li><li>Tom day</li>                 <li>Dick hery</li><li>More(10)</li> </ul>  </span> </div>      <a href="#" class="float-left margin-left"> <i class="fa fa-comment-o"></i> 17</a> <a href="#" class="float-left margin-left"> <i class="fa fa-link"></i> 24</a> </li></ul>'+
        '<div class="comment-section comment"><div class="dropdown"><button type="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-ellipsis-h" aria-hidden="true"></i> </button> <div class="dropdown-menu dropdown-menu-tip-nw"> <a href="#" class="dropdown-item">Compare</a> <a href="#" class="dropdown-item">Add to Favorite</a> </div> </div>             <div class="user"> <img src="https://via.placeholder.com/25x25" alt> <a data-toggle="modal" data-target="#user-pop6" href="#">James Spiegel</a>       <p class="time">33 min ago</p>    </div>    <p class="comment-content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys </p>      <ul class="comment-info">  <li><a href="#"> <i class="fa fa-heart-o"></i> 3</a></li>                <li><a href="#">Reply</a></li>     </ul>       </div>'+
        '<div class="comment-section comment"> <div class="dropdown"> <button type="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-ellipsis-h" aria-hidden="true"></i> </button> <div class="dropdown-menu dropdown-menu-tip-nw"> <a href="#" class="dropdown-item">Compare</a> <a href="#" class="dropdown-item">Add to Favorite</a> </div> </div><div class="user"> <img src="https://via.placeholder.com/25x25" alt> <a data-toggle="modal" data-target="#user-pop7" href="#">James Spiegel</a>  <p class="time">33 min ago</p>  </div>     <p class="comment-content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys </p>            <ul class="comment-info"><li><a href="#"> <i class="fa fa-heart-o"></i> 3</a></li><li><a href="#">Reply</a></li></ul></div>'+
		'<div class="view-more"> <a href="#">View more comments +</a> </div><div class="comment-post">                <div class="input-box"> <img src="https://via.placeholder.com/25x25" alt=""><input type="text" name="comment"> <a href="#"><i class="fa fa-camera"></i></a> </div>          <div class="btns"> <a href="#" class="btn reverse">Cancel</a> <a href="#" class="btn">Post Comments</a> </div> </div> </div></div>';		

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

        map.set('styles', styles);


    }

    google.maps.event.addDomListener(window, 'load', initMap);
});