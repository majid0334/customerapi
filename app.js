function startApp(){

  let options = {indicators: true, fulWidth: true};
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
  
  // hämta referens till ladda-knapp
  let loadUsersButtonDOM = document.getElementById("load-users-button");
  loadUsersButtonDOM.onclick = loadUsers;
  // lägga in loadUsers som klick-lyssnare
}










function loadUsers(){
  console.log("Laddar users...");
  // asynkront anrop - Promise if-sats "om", ett promise är "när
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
      console.log(response.data);
      renderUsers(response.data);
    })
    .catch(function(err){
      console.log(err);
    });

}
//SKApa HTML for USer
function renderUsers(userData) {
 for(let user of userData){
   console.log(user);
   let userDOM = createUserDOM(user);
   document.getElementById("member-list").appendChild(userDOM);
 }
}


function createUserDOM(user){
 let nameDOM = document.createElement("h3");
 nameDOM.innerText = user.name
 let cityDOM = document.createElement("h5");
 cityDOM.innerText = user.address.city
 let streetDOM = document.createElement("h6");
 streetDOM.innerText = user.address.street
 let emailDOM = document.createElement("p");
 emailDOM.innerText = user.email
 let phoneDOM = document.createElement("p");
 phoneDOM.innerText = user.phone
 let usernameDOM = document.createElement("p");
 usernameDOM.innerText = user.username


 let containerDOM = document.createElement("div");
 containerDOM.appendChild(nameDOM);
 containerDOM.appendChild(cityDOM);
 containerDOM.appendChild(streetDOM);
 containerDOM.appendChild(emailDOM);


 return containerDOM;
}
