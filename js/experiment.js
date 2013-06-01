(function(){
    var db = new Firebase('https://effrafax.firebaseio.com/');

    var registerEventFor = function registerEventFor(name) {
	var timestamp = (new Date()).getTime();
	return {
	    timestamp : timestamp,
	    user : name
	};
    };

    var input = document.getElementById('name');
    var button = document.getElementById('register');
    button.addEventListener('click', function register(){
	var name = input.value;
	if (name) {
	    db.set(registerEventFor(name));
	}
    });
})();
