"use strict";
// // import { PrismaClient } from "@prisma/client";
// // const prisma = new PrismaClient();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: { email: username },
        });
        if (res) {
            console.log("User found");
            console.log(res);
        }
        else {
            console.log("User not found");
        }
    });
}
getUser("user@gmail.com");
