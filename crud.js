function phonebook(name, phoneNumber, email, address){
    return{
        userName : name,
        userNumber : phoneNumber,
        userEmail :email,
        userAddress : address
    }
}
let user1 = phonebook("renu","72187","renu@ng.com","amravati");
let user2 = phonebook("dhanu","947368","dhanu@12.com","nandgaon");
let user3 = phonebook("prati","957239","prati@ng.com","shendoda");
let user4 = phonebook("radha","746293","radhe@ng.com","wadhona");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

let users =[user1,user2,user3,user4];
console.log(users);
// function to add new user 
function addContact(name, phoneNumber, email, address){
    const newUser ={
        userName : name,
        userNumber : phoneNumber,
        userEmail :email,
        userAddress : address
    }
    users.push(newUser);
    console.log(users);
}
// usage of function addContact   , added new user
addContact("tej","952846","tej@gmail.com","pandhari");

//function to search user 
function searchUser (name){
    let foundUser = users.find(user => user.userName ===name);
    if (foundUser) {
        console.log("User found:", foundUser);
    } else {
        console.log("User not found.");
    }
}
// console.log("serch",(searchUser("tej")));
//usage of function searchuser
searchUser("tej");

// function to update user info 
function updateUserInfo (name, newphoneNumber, newEmail){
    let UpdateUser = users.find(user => user.userName ===name);
    if(UpdateUser){
        UpdateUser.phoneNumber =newphoneNumber;
        UpdateUser.email =newEmail;
        console.log(`user ${name}  updated successfully`);
    }
    else{
        console.log(`user with name ${name} does not exist.`);
    }
}
//Usage of function Update User Info
updateUserInfo("renu", "982745");

// function to delete user user
function deleteUser (name){
    const index = users.findIndex(user => user.userName === name);
    if(index !== -1){
        users.splice(index, 1);
        console.log(`User ${name} deleted Successfully.`)
    }
    else{
        console.log(`Contact with name ${name} does not exist.`);
    }
}
//Usage of function delete User Info

deleteUser("dhanu");
searchUser("dhanu");

