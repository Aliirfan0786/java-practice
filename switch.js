//create an applications with following roles'
//admin - gets full access
//subadmin - gets access to create/delete courses
//testprep - get access to create/delrte test
//user -get access to consume content

var user = "subadmin";

switch (user) {
    case "admin":
       console.log("gets full access"); 
        break;
        case "subadmin":
            console.log(" gets access to create/delete courses"); 
             break;
             case "testprep":
       console.log("get access to create/delrte test"); 
        break;
        case "user":
            console.log("get access to consume content "); 
             break;


    default:
        console.log("trial user");
        break;
}