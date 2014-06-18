var app = angular.module('googleIO', []);

app.directive('googlemaps', function($http) {
    var map,
        marks = [],
        mapOptions = {
          zoom: 3,
          center: new google.maps.LatLng(11.7717786,12.3236875)
        };

    return {
        restrict: 'AE',
        scope: {},
        template: '<div id="map"></div>',
        link: function(scope, iElement, iAttrs) {

            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            $http.get('/api/gdgs').success(function(gdgs) {

              for (var i = 0; i < gdgs.groups.length; i++) {
                marks.push({
                  latLng: new google.maps.LatLng(gdgs.groups[i].geo.lat,gdgs.groups[i].geo.lng),
                  map: map,
                  icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
                );
              };

              $http.get('/api/google-ios').success(function(googleios) {

                  for (var i = 0; i < googleios.events.length; i++) {
                    marks.push({
                      latLng: new google.maps.LatLng(googleios.events[i].latitude, googleios.events[i].longitude),
                      map: map,
                      icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
                    );
                  }

                  for (var i = 0; i < marks.length; i++) {
                      var marker = new google.maps.Marker({
                          position: marks[i].latLng,
                          map: marks[i].map,
                          title: marks[i].title,
                          icon: marks[i].icon
                      });
                  };

              });

            });

        }
    };
});