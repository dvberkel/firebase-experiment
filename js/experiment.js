(function(){
    var db = new Firebase('https://effrafax.firebaseio.com/register-events');

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
	    db.push(registerEventFor(name));
	}
    });

    var registrations = document.getElementById('registrations');
    db.on('child_added', function(snapshot){
	var value = snapshot.val();
	var li = document.createElement('li');
	li.textContent = 'registered ' + value.user;
	registrations.insertBefore(li, registrations.childNodes[0]);
    });
})();
