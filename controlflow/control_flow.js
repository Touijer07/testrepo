let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : " not authenticated" ;
console.log("authentication status :" , authenticationStatus);

// PARCTICE TASK
let userid = 'employee';
let accespermision ;

if (userid === "employee"){
    accespermision = " have access to Dietary Services";
}else if (userid === "Enrolled Member"){
    accespermision = " have access to Dietary Services  and one-on-one interaction with a dietician."
}else if (userid ==="Subsecriber"){
    accespermision = "you have partial acces to dietry service only . ";
}else {
    accespermision = "SUBSUCRIBE DUUH ! ";
}
console.log("you ", accespermision); 

































