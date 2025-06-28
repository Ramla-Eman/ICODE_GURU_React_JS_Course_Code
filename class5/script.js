// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data");
//     }, 3000);
//   });

  // let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  // let data = await x.text();
  // return data;

  //   let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: "foo",
  //       body: "bar",
  //       userId: 1,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  //   let data = await x.json();
  //   return data;
// }

// console.log("Loading Modules");

// let data = getData();
// console.log(data);

// async function main() {
//   let data = await getData();
//   console.log(data);

//   console.log("do something else");
//   console.log("task 2");
// }

// main();

// console.log("do something else");
// console.log("task 2");
// data.then((v) => {
// });

// function getUser() {
//   const body = document.body;
//   let username = prompt("Write username here...");
//   if (!username) {
//     body.innerHTML = `User not found`;
//   } else {
//     fetch(`https://api.github.com/users/${username}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("User not found");
//         }
//         return response.json();
//       })
//       .then((user) => {
//         // If data is present, return user details
//         body.innerHTML = `
//             <div style="text-align: center; font-family: Arial, sans-serif;">
//               <img src="${
//                 user.avatar_url
//               }" alt="Avatar" style="border-radius: 50%; width: 150px; height: 150px;"/>
//               <h2>${user.name || "No Name"}</h2>
//               <p>${user.bio || "No bio available"}</p>
//               <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
//               <p><strong>Followers:</strong> ${user.followers}</p>
//               <p><strong>Following:</strong> ${user.following}</p>
//             </div>
//           `;
//       })
//       .catch((error) => {
//         body.innerHTML = `Error: ${error.message}`;
//       });
//   }
// }

// getUser();
