//post method:
const admin = document.getElementById('register')
let url = 'http://localhost:8000/api/users'
admin.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let age = document.getElementById('age').value;
    console.log(name)
    console.log(password)
    console.log(age)
    fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            password: password,
            age: age,
        })
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
    })
    setTimeout(time,300);
    function time() {
        document.location.href = 'index1.html'
    }
});


//Delete method:
const table = document.querySelector('table');
table.addEventListener('click', (e) => {
    e.preventDefault()
    let deleteButton = e.target.id === 'delete-post';
    let userId = e.target.parentElement.dataset.id;
    if (deleteButton) {
        fetch(`${url}/${userId}`, {
            method: 'DELETE',
        })
            .then(res => res.text())
            .then(() => location.reload())
    }
});
//Update method:
// const adminEdit = document.getElementById('registerEdit')
// let url = 'http://localhost:8000/api/users'
//
// adminEdit.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let name = document.getElementById('name').value;
//     let password = document.getElementById('password').value;
//     let age = document.getElementById('age').value;
//     console.log(name)
//     console.log(password)
//     console.log(age)
//     fetch(url, {
//         method: "PUT",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: name,
//             password: password,
//             age: age,
//         })
//     }).then(function (response) {
//         return response.json()
//     }).then(function (data) {
//         console.log(data)
//     })
//     setTimeout(test,300);
//     function test() {
//         document.location.href = 'index1.html'
//
//     }
// });
async function getAllUsers() {
    let response = await fetch('http://localhost:8000/api/users')
    let content = await response.json()
        .then(users => {
            let li = `
            <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">password</th>
            <th scope="col">age</th>
            <th style="color: blueviolet" scope="col">edit</th>
            <th style="color: red" scope="col">delete</th>
            </tr>`
            users.forEach(user => {
                li += `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.password}</td>
                <td>${user.age}</td>
                <td><button class="btn btn-outline-success" data-toggle="modal" data-target="#UpdateUser" 
                onclick="updates(${user.id},'${user.name}','${user.password}','${user.age}')" 
                >Update</button></td>
                <td><button data-id="${user.id}" class="btn"><a href="#" id="delete-post">Delete</a></button></td>
            </tr>`
            });
            document.getElementById("users_table").innerHTML = li;
        })
}
getAllUsers()
// onclick="updateUser2(${u.id},${u.name},${u.password},${u.age})"

//Update methods forma:
function updates(id,name,password,age) {
    console.log("test")
    let ht = `                 <form id="registerEdit" >
                     <div class="form-group" align="center">
                         <label for="name">Name</label>
                         <br>
                         <input type="text" class="control-input col-sm-10" id="nameEdit" value="${name}">
                     </div>
                     <div class="form-group" align="center">
                         <label for="password">Password</label>
                         <br>
                         <input type="text" class="control-input col-sm-10" id="passwordEdit" value="${password}">
                     </div>
                     <div class="form-group" align="center">
                         <label   for="age">Age</label>
                         <br>
                         <input type="number" class="control-input col-sm-10"id="ageEdit" value="${age}">
                     </div>
                     <div class="form-group" align="center">
                     </div>
                     <!--                    <a href="#" class="card-link">Edit</a>-->
                     <!--                    <a href="#" class="card-link">Delete</a>-->
                     <!--                    <div class="form-group" align="center">-->
                     <!--                        <input type="submit" value="add User">-->
                     <!--                    </div>-->
                     <div class="modal-footer">
                         <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                         <button class="btn btn-outline-success" type="submit">Save</button>
                     </div>
                 </form>
`;
    document.getElementById("EditUserTest").innerHTML = ht;

    // update methods fetch
    const editForm = document.getElementById('registerEdit');
    editForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        let nameE = document.getElementById('nameEdit').value;
        let passwordE = document.getElementById('passwordEdit').value;
        let ageE = document.getElementById('ageEdit').value;
        console.log(nameE)
        console.log(passwordE)
        console.log(ageE)
        fetch(url+`/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: nameE,
                password: passwordE,
                age: ageE,
            })
        }).then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
        })
        setTimeout(test,300);
        function test() {
            document.location.href = 'index1.html'
        }
    })
}