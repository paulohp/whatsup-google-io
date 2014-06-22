angular.module('googleioDirectives', [])
.directive('googleMaps', function($http) {
  var map,
  marks = [],
  mapOptions = {
    zoom: 3,
    center: new google.maps.LatLng(11.7717786,12.3236875)
  };

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'app/templates/map.html',
    link: function($scope, $element, $attrs) {

      $element.find('#controls').css({
        "width": "75%",
        "position": "absolute",
        "z-index": 2,
        "text-align": "center"
      });
      $element.find('#controls').find("button").css({
        "margin": "20px 10px 0 10px",
      });

      $element.find('#map').css({
        "height": "100%",
        "position": "relative",
        "z-index": 1,
      });

      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      $http.get('/api/gdgs').success(function(gdgs) {

        for (var i = 0; i < gdgs.groups.length; i++) {
          marks.push({
            latLng: new google.maps.LatLng(gdgs.groups[i].geo.lat,gdgs.groups[i].geo.lng),
            map: $scope.map,
            title: gdgs.groups[i].name,
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: 1
            });
        };

        $http.get('/api/google-ios').success(function(googleios) {

          var infoWindow = new google.maps.InfoWindow();
          $scope.marks = marks;
          $scope.markers = [];

          for (var i = 0; i < googleios.events.length; i++) {
            marks.push({
              latLng: new google.maps.LatLng(googleios.events[i].latitude, googleios.events[i].longitude),
              map: $scope.map,
              title: googleios.events[i].event_name,
              icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
              type: 2
              });
          }

          for (var i = 0; i < $scope.marks.length; i++) {
            var marker = new google.maps.Marker({
              position: $scope.marks[i].latLng,
              map: $scope.marks[i].map,
              title: $scope.marks[i].title,
              icon: $scope.marks[i].icon,
              type: $scope.marks[i].type
            });

            google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
                return function() {
                    infoWindow.setContent(marker.title);
                    infoWindow.open($scope.map, marker);
                }
            })(marker, i));

            $scope.markers.push(marker)
          };

          $scope.filter = function(type){
            var markers = $scope.markers;

            switch (type) {
              case 1:
              case 2:
                for (var i = 0; i < markers.length; i++) {
                  if(markers[i].type !== type)
                    markers[i].setMap(null);
                  else
                    markers[i].setMap($scope.map);
                }
                break;
              default:
                for (var i = 0; i < markers.length; i++) {
                  markers[i].setMap($scope.map);
                }
                break;
            }
          }

        });

      });

    }
  };
});