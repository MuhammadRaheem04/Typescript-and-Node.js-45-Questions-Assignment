// Question 30 
// Hello Admin
var users = ["Raheem", "Saleh", "Hashim", "Faheem", "Admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var one_user = users_1[_i];
    if (one_user === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(one_user, ", thank you for logging in again."));
    }
}
