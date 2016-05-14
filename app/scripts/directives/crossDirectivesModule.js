var myModule = angular.module('crossDirectivesModule', []);
/*
 * AUXILIARES
 */
function getAlertClassbyType(type){
  if(type=="SUCCESS"){
    return 'alert-success';
  }
  if(type=="FAILURE" || type=='ERROR'){
    return 'alert-danger';
  }
  if(type=="VALIDATION"){
    return 'alert-warning';
  }
  return 'alert-info';
}

function getTitleClassbyType(type){
  if(type=="SUCCESS"){
    return 'FUNCIONO!';
  }
  if(type=="FAILURE" || type=='ERROR'){
    return 'UPS!!';
  }
  if(type=="VALIDATION"){
    return 'VALIDACION:';
  }
  return 'Camino no esperado.';
}
/*
 * FIN AUXILIARES!
 */


/**
 * Se encarga de mostrar todos aquellos mensajes que se generan por error de invocacion.
 * Los mismos son interceptados desde APP.js con el service 'globalMessageInterceptor'
 */
myModule.directive('dcGlobalMessage', function($rootScope) {
  return {
    restrict: 'E',
    transclude: true,
    scope:{
      atType:'=', //String
      atMessage:'=', //String
      atShow:'=' //boolean
    },
    templateUrl: 'views/component/messageTemplate.html',
    link: function($scope, $element, $attrs){
      /*
       * Verifica si se genero algun cambio en el atributo atShow, en base a eso muestra o no
       * el mensaje enviado por parametro
       */
      $scope.$watch(
        // This function returns the value being watched. It is called for each turn of the $digest loop
        function() { return $scope.atShow; },
        // This is the change listener, called when the value returned from the above function changes
        function(newValue, oldValue) {
          //Si el nuevo valor es 'true' muestra el modal
          if ( newValue ===true) {
              $scope.alertClass=getAlertClassbyType($scope.atType);
              $scope.alertTitle=getTitleClassbyType($scope.atType);
              $scope.alertMessage=$scope.atMessage;
              $scope.atShow=false;
              $('#myModal').modal();
          }
        }
      );

        /*
         * Verificia la variable global alertMessage.show, el cual es alternado por el interceptor
         * 'globalMessageInterceptor' en app.js para capturar mensajes de error/validacion en las invocaciones
         */
      $scope.$watch(
        // This function returns the value being watched. It is called for each turn of the $digest loop
        function() { return $rootScope.alertMessage.show; },
        // This is the change listener, called when the value returned from the above function changes
        function(newValue, oldValue) {
          //Si el nuevo valor es 'true' muestra el modal
          if ( newValue ===true) {
            $scope.alertClass=getAlertClassbyType($rootScope.alertMessage.type);
            $scope.alertTitle=getTitleClassbyType($rootScope.alertMessage.type);
            $scope.alertMessage=$rootScope.alertMessage.info;
            $rootScope.alertMessage.show=false;
            $('#myModal').modal();
          }
        }
      );
    }
  };
});

/**
 * Se encarga de mostrar todos aquellos mensajes que se generan por error de invocacion.
 * Los mismos son interceptados desde APP.js con el service 'globalMessageInterceptor'
 */
myModule.directive('dcMessage', function($rootScope) {
  return {
    restrict: 'E',
    transclude: true,
    scope:{
      atType:'=', //String
      atMessage:'=', //String
      atShow:'=' //boolean
    },
    templateUrl: 'views/component/messageTemplate.html',
    link: function($scope, $element, $attrs){
      /*
       * Verifica si se genero algun cambio en el atributo atShow, en base a eso muestra o no
       * el mensaje enviado por parametro
       */
      $scope.$watch(
        // This function returns the value being watched. It is called for each turn of the $digest loop
        function() { return $scope.atShow; },
        // This is the change listener, called when the value returned from the above function changes
        function(newValue, oldValue) {
          //Si el nuevo valor es 'true' muestra el modal
          if ( newValue ===true) {
            $scope.alertClass=getAlertClassbyType($scope.atType);
            $scope.alertTitle=getTitleClassbyType($scope.atType);
            $scope.alertMessage=$scope.atMessage;
            $scope.atShow=false;
            $('#myModal').modal();
          }
        }
      );

      /*
       * Verificia la variable global alertMessage.show, el cual es alternado por el interceptor
       * 'globalMessageInterceptor' en app.js para capturar mensajes de error/validacion en las invocaciones
       */
      $scope.$watch(
        // This function returns the value being watched. It is called for each turn of the $digest loop
        function() { return $rootScope.alertMessage.show; },
        // This is the change listener, called when the value returned from the above function changes
        function(newValue, oldValue) {
          //Si el nuevo valor es 'true' muestra el modal
          if ( newValue ===true) {
            $scope.alertClass=getAlertClassbyType($rootScope.alertMessage.type);
            $scope.alertTitle=getTitleClassbyType($rootScope.alertMessage.type);
            $scope.alertMessage=$rootScope.alertMessage.info;
            $rootScope.alertMessage.show=false;
            $('#myModal').modal();
          }
        }
      );
    }
  };
});


