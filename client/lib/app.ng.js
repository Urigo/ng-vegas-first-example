angular.module('vegasParties',[
  'angular-meteor',
  'ui.router',
  'ngMaterial'
], {strictDi: true});

function onReady() {
  angular.bootstrap(document, ['vegasParties']);
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);

