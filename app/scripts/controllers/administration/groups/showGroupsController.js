/**
 * Created by Camus-122 on 03/05/2016.
 */
function showGroupsController($scope,$http,$location) {
  $scope.limit=20;
  $scope.offsetCounter=0;
  $scope.filterName=undefined;
  $scope.hasMoreElements=false;
  $scope.myGroups=[];

  //Busca al iniciar
  searchMarvelCharacters();
  myGroups();

  //Comportamiento
  $scope.search=searchMarvelCharacters;
  $scope.removeNewGroup=removeNewGroup;

  //Obtiene mas resultados
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

  $scope.createNewGroup=function(){
    $scope.group={
      name:'',
      characters:[]
    };
  }


  function removeNewGroup(){
    $scope.group=undefined;
  }


  //Obtiene mas resultados
  $scope.saveGroup=function(group){
    $http.post('/v1/groups',group
    ).success(function(value){
      myGroups();
      removeNewGroup();
      console.log('exito');
    }).error(function(error){
      console.error(error);
    })
  }

  //Obtiene mas resultados
  $scope.updateGroup=function(group){
    $http.put('/v1/groups',group
    ).success(function(value){
      myGroups();
      removeNewGroup();
      console.log('exito');
    }).error(function(error){
      console.error(error);
    })
  }


  $scope.removeGroup=function(group){
    $http.delete('/v1/groups/'+group._id
    ).success(function(){
      myGroups();
      console.log('exito');
    }).error(function(error){
      console.error(error);
    })
  }


  //Auxiliares
  function myGroups(){
    $http.get('/v1/groups').success(function(value){
      $scope.myGroups=value.response;
      console.log('exito');
    }).error(function(error){
      console.error(error);
    })
  }

  function searchMarvelCharacters(){
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
