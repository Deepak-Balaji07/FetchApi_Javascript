async function loadUser() {
  try {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    const users = data.users;
    const tablebody = document.getElementById("tablebody");


    let rows = "";
    users.forEach((user) => {
      rows += `
        <tr>
           <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.address.city}</td>
          <td>${user.phone}</td>
        </tr>`;
    });
    tablebody.innerHTML = rows;
  } catch (e) {
    console.log(e);
  }
}
loadUser();


// async function UserDetails() {
//     try{
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     const users = data.users;
    
//     const tablebody = document.getElementById("tablebody");
//     let info =""
//     users.forEach(user=>{
//         info +=`
//         <tr>
//             <td>${user.id}</td>
//            <td>${user.name}</td>
//            <td>${user.email}</td>
//            <td>${user.address.city}</td>
//            <td>${user.phone}</td>
//          </tr>`
//     });
//     tablebody.innerHTML += info;
//     }catch(e){
//         console.log(e);
//     }

// }

// UserDetails();