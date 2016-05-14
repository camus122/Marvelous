var myModule = angular.module('groupDirectivesModule', []);

/**
 * Evalua si se posee el permiso asociado a una funcionalidad ej: tis-secure="<functionality-code>".
 * atributos:
 *  	tis-validate-show="true" -> En caso de poseerse el permiso, se mostrara el elemento. Caso contrario "NO".
 *  	tis-redirect-failure-page="true" -> En caso de "NO" poseerse el permiso, se redirigira a una pagina defaul de acceso denegado.
 */
myModule.directive('dcGroup', function() {
  return {
    restrict: 'E',
    scope:{
      atGroupObj:'=', //Json Object
      atSaveGroupFunction:'=',
      atDeleteGroupFunction:'='
    },
    templateUrl: 'views/component/groupTemplate.html',
    link: function($scope, $element, $attrs){

      //Agrega un persona al grupo nuevo
      $scope.addCharacter=function(event, ui){
        var marvelCharacter=ui.draggable.scope().character;
        $scope.atGroupObj.characters.push({
          id:marvelCharacter.id,
          name:marvelCharacter.name,
          thumbnail:marvelCharacter.thumbnail,
        })
      }

      //Remove un personae de un grupo
      $scope.removeCharacter=function(marvelId){
        $scope.atGroupObj.characters=$scope.atGroupObj.characters.filter(function(element){
          return element.id!=marvelId;
        })
      }


    }
  };
});
