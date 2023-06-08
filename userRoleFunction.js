//create an applications with following roles'
//admin - gets full access
//subadmin - gets access to create/delete courses
//testprep - get access to create/delete test
//user -get access to consume content

//function getUserRole(name, role) {
    var getUserRole = function(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            
            break;//this is not necessary
            case "subadmin":
                return `${name} is subdmin with access to create delete courses`
                
                break;
                case "testprep":
                    return `${name} is testprep with access to create delete tests`
                    
                    break;
               case "user":
              return `${name} is user withaccess to consume content`
              
              break;      
    
        default:
            return `${name} is a trial user `
            break;
    }
}

    console.log(getUserRole ("irfan","admin"));

    var getrole = getUserRole("sammy", "user");

    console.log(getrole);
    
