angular.module 'Scrumble.settings'
.directive 'projectWidget', ->
  restrict: 'E'
  templateUrl: 'project/directives/project-widget/view.html'
  scope:
    project: '='
  controller: 'ProjectWidgetCtrl'
