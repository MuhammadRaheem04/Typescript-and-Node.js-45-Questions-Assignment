var current_user = ['Raheem', 'Ibrahim', 'Hashim', 'Fahim', 'Dr Saleh'];
var new_user = ['raheem', 'Izhar', 'Javed', 'Aamir', 'dr saleh'];
// we will use forEach method
new_user.forEach(function (new_user) {
    var new_userLower = new_user.toLowerCase();
    // we will use some() method
    var userName = current_user.some(function (current_user) { return current_user.toLowerCase()
        === new_userLower; });
    if (userName) {
        console.log("".concat(new_user, " needs to choose a new username because it is already used. "));
    }
    else {
        console.log("".concat(new_user, " this username is available. "));
    }
});
