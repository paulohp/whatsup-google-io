var app = angular.module('googleIO', [
    'btford.socket-io'
  ]);
app.value('nickName', 'anonymous');
app.factory('mySocket', function (socketFactory) {
  return socketFactory();
});

app.controller('chatCtrl',
  function ($log, $scope, chatSocket, messageFormatter, nickName) {
  $scope.nickName = nickName;
  $scope.messageLog = 'Ready to chat!';
  $scope.sendMessage = function() {
    var match = $scope.message.match('^\/nick (.*)');

    if (angular.isDefined(match) &&
        angular.isArray(match) && match.length === 2) {
      var oldNick = nickName;
      nickName = match[1];
      $scope.message = '';
      $scope.messageLog = messageFormatter(new Date(),
                      nickName, 'nickname changed - from ' +
                      oldNick + ' to ' + nickName + '!') +
                      $scope.messageLog;
      $scope.nickName = nickName;
    }

    $log.debug('sending message', $scope.message);
    chatSocket.emit('message', nickName, $scope.message);
    $log.debug('message sent', $scope.message);
    $scope.message = '';
  };
  $scope.$on('socket:broadcast', function(event, data) {
    $log.debug('got a message', event.name);
    if (!data.payload) {
      $log.error('invalid message', 'event', event,
                 'data', JSON.stringify(data));
      return;
    }
    $scope.$apply(function() {
      $scope.messageLog = messageFormatter(
            new Date(), data.source,
            data.payload) + $scope.messageLog;
    });
  });
});  // end of controller

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