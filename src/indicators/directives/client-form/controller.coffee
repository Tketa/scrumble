angular.module 'Scrumble.indicators'
.controller 'ClientFormCtrl', (
  $scope
  loadingToast
) ->
  $scope.indicators ?= angular.copy $scope.template

  $scope.save = ->
    loadingToast.show()
    $scope.saving = true
    $scope.onSave({$indicators: $scope.indicators})
    .then ->
      loadingToast.hide()
      $scope.saving = false

  $scope.print = ->
    window.print()
