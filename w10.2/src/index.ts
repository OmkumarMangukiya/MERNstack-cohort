// // import { PrismaClient } from "@prisma/client";
// // const prisma = new PrismaClient();

// // async function insertUser(username: string, password: string, firstName: string, lastName: string) {
// //     const res = await prisma.user.create({
// //         data:{
// //             email : username,
// //             password,
// //             firstName,
// //             lastName,
// //         }
// //     })
// //     console.log(res);
// // }
// // insertUser("user1@gmail.com","user1@g" , "user" , "1" )

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {

//   const res = await prisma.user.update({
//     where : {email: username},
//     data:{
//         firstName,
//         lastName,
//     }
//   })
//   console.log(res)
// }
// updateUser("user1@gmail.com",{firstName : "user0" , lastName:"1"})

import { PrismaClient } from "@prisma/client";
import { userInfo } from "os";

const prisma = new PrismaClient();

async function getUser(username: string) {
 const res = await prisma.user.findFirst({
    where: {email:username},

 })
 if(res){
    console.log("User found");
    console.log(res)
 }
  else{
    console.log("User not found")
  }
}

getUser("user@gmail.com")