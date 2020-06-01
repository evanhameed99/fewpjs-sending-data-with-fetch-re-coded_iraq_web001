// Add your code here

<<<<<<< HEAD

let body = document.getElementsByTagName("body")[0];
=======
>>>>>>> 56ff11c41b5613e29a30a91045d417d639d43114
function submitData(name,email){

let data = {
  name:name,
  email:email
};

let configurationObject = {

  method : 'POST',
  headers : { 'content-type':'application/json' , 'Accept':'application/json'},
<<<<<<< HEAD
  body : JSON.stringify(data)

}
return fetch ('http://localhost:3000/users',configurationObject)
.then(resp=> resp.json())
.then(resp => {

  body.innerHTML = `${resp.id}`;
}).catch( error=> {

body.innerHTML = `${error.message}`;
})
=======
  body : JSON.stringify(data);

}
return fetch ('http://localhost:3000/users',configurationObject)
>>>>>>> 56ff11c41b5613e29a30a91045d417d639d43114



}
