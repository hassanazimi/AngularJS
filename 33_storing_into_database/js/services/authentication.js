
myApp.factory('Authentication',
		['$rootScope', '$firebaseAuth', 'FIREBASE_URL',
			function($rootScope, $firebaseAuth, FIREBASE_URL) {

				var ref  = new Firebase(FIREBASE_URL);
				var auth = $firebaseAuth(ref);

				return {

					login : function(user) {
						$rootScope.message = "Welcome " + user.email;
					}, //login

					register : function(user) {
						auth.$createUser({
							email    : user.email,
							password : user.password
						}).then(function(regUser) {
							var regRef = new Firebase(FIREBASE_URL + 'users');
							regRef.child(regUser.uid).set({
								date      : Firebase.ServerValue.TIMESTAMP,
								regUser   : regUser.uid,
								firstname : user.firstname,
								lastname  : user.lastname,
								email     : user.email
							});
							$rootScope.message = "Hello " + user.firstname + ", Thank you for registration.";
						}).catch(function(error) {
							$rootScope.message = error.message;
						});
					} // register
				};
			}
		]);
