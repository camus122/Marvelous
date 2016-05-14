/**
 * Created by Camus-122 on 03/05/2016.
 */
function showGroupsController($scope,$http,$location) {
  $scope.limit=20;
  $scope.offsetCounter=0;
  $scope.filterName=undefined;
  $scope.hasMoreElements=false;
  $scope.group={
    name:'',
    characters:[]
  };
  //Busca al iniciar
  search();

  //Comportamiento
  $scope.onDropComplete=function(){

  }

  $scope.onDragComplete=function(){

  }

  $scope.search=search;

  $scope.addCharacter=function(event, ui){
    var marvelCharacter=ui.draggable.scope().character;
    $scope.group.characters.push({
      marvel_id:marvelCharacter.id,
      name:marvelCharacter.name,
      thumbnail:marvelCharacter.thumbnail,
    })
  }

  $scope.removeCharacter=function(marvelId){
    $scope.group.characters=$scope.group.characters.filter(function(element){
      return element.id!=marvelId;
    })
  }

  $scope.moreResults=function(){
    $scope.offsetCounter=$scope.offsetCounter+1;
    $http.get('/v1/marvel/characters',
      { params: {
        limit:$scope.limit,
        offset:$scope.limit*$scope.offsetCounter,
        nameStartsWith: $scope.filterName }
      }
    ).success(function(value){
      $scope.characters=$scope.characters.concat(value.response.results);
      $scope.hasMoreElements=value.response.count>0;
      console.log('exito');
    }).error(function(error){
      console.error(error);
      $scope.offsetCounter=$scope.offsetCounter-1;
    })
  }


  //Auxiliares
  function search(){
      $http.get('/v1/marvel/characters',
        { params: {
          limit:20,
          offset:0,
          nameStartsWith: $scope.filterName }
        }
      ).success(function(value){
        $scope.offsetCounter=0;
        $scope.characters=value.response.results;
        $scope.hasMoreElements=value.response.count>0;
        console.log('exito');
      }).error(function(error){
        console.error(error);
      })
    }

}
