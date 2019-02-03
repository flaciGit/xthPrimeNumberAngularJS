app.controller("primeAppCtrl", function($scope){
    $scope.msg = "";

    $scope.primeFunction = function(e){
        if($scope.x == null || $scope.x.length == 0 ||$scope.x <= 0){
            $scope.msg = "Give a valid x!";
            e.eventDefault();
        }else{
            $scope.msg="Xth prime: "+findXthPrime($scope.x);
        }
    };
});

function isPrime(n) {
		
		i = 2;
		while(i <= Math.sqrt(n)) {
			
			if(n % i == 0)
				return false;
			
			i++;
		}
		return true;
};
	
function findXthPrime(x) {
		
		db = 0;
		number = 2;
		
		while(db < x) {
			if(isPrime(number))
				db++;
			number++;
		}
		return number-1;
};
