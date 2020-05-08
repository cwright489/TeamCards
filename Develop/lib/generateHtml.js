// module.exports = function generateHTML(managerArr, engineerArr, interArr) {
//     return `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
//   <title>Cellular Sales Team Roster</title>
// </head>
// <body>
//   <div class="container">
//     <div class="jumbotron bg-primary text-white">
//       <h1 class="text-center">Sales Team</h1><br>
//     </div>
    
//     <!-- Manager Card-->
//     <h3>Management</h3>
//     <div class="row mb-5">
//       <div class="card col-3">
//         <div class="card-header bg-primary text-white">
//           <h4>${manager.name}</h4>
//           <h4>Manager</h4>
//         </div>
//         <div class="card-body">
//           <h6>Employee ID :<span> ${manager.id}  </span></h6>
//           <h6>Email :<a href = "Chance.Wright@Cellularsales.com"> ${manager.email}</a></h6>
//           <h6>Office Number: ${manager.officeNumber}</h6>
//         </div>
//       </div>
//     </div>
//       <!-- End Manager Card -->
//       <!-- Engineer Card -->
//       <h3>Employees</h3>
//       <div class="row">
//         <div class="card col-3">
//           <div class="card-header bg-primary text-white">
//           <h4>${engineer.name}</h4>
//           <h4><i class="fa fa-coffee"></i> Engineer</h4>
//         </div>
//         <div class="card-body">
//           <div>
//             <h6>Employee ID: <span> ${engineer.id}  </span></h6>
//             <h6>Email: <span>${engineer.email} </span></h6>
//             <h6>Office Number: ${engineer.officeNumber}</h6>
//           </div>
//         </div>
//       </div>
//       <!-- End Intern Card -->
//       <div class="card col-3 m-1">
//         <div class="card-header bg-primary text-white">
//           <h4>${intern.name} </h4>
//           <h4><i class="fa fa-graduation-cap"></i> Intern</h4>
//         </div>
//         <div class="card-body">
//           <div>
//             <h6>Employee ID:<span> ${intern.id} </span></h6>
//             <h6>Email: <span> ${intern.email} </span></h6>
//             <h6>School: <span> ${intern.school} </span></h6>
//           </div>
//         </div>
      
//       </div>
//   </div>
// </body>
// </html>`
// }