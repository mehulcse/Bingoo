angular.module('bingooApp').directive('userCard', function() {
  return {
    restrict: "E",
    templateUrl: 'components/userCard/userCard.html',
    scope: {
      userProfileImageUrl: "@",
      availibilitystatus: "@",
      userName: "@",
      userStatus: "@",
      unreadMsgCount:"@"
    }
  };
});