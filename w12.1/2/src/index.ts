// https://projects.100xdevs.com/tracks/ts-hard/ts-hard-1
// // // // // interface User{
// // // // //     name : string,
// // // // //     age :number
// // // // // }
// // // // // function sumofAge(user1 : User ,user2 : User){
// // // // //     return user1.age + user2.age
// // // // // }


// // // // // const ans = sumofAge({name:"sadw",age:23},{name:"sadw",age:23})

// // // // // console.log(ans);


// // // // interface User {
// // // //     id: number;
// // // //     name: string;
// // // //     email: string;
// // // //     createdAt: Date;
// // // //   }
  
// // // //   // For a profile display, only pick `name` and `email`
// // // //   type UserProfile = Pick<User, 'name' | 'email'>;
// // // //   type UserProfileOptional = Partial<UserProfile>; // Make all properties optional
// // // //   type UserProfileReadOnly = Readonly<UserProfile>; // Make all properties readonly
// // // //   type UserProfileRequired = Required<UserProfile>; // Make all properties required oppposite of Partial

// // // //   const displayUserProfile = (user: UserProfile) => {
// // // //     console.log(`Name: ${user.name}, Email: ${user.email}`);
// // // //   };

// // // type User = Record<string , {age:number,name:string}>
// // // const users: User = {
// // //     'user1': { age: 23, name: 'John' },
// // //     'user2': { age: 25, name: 'Jane' }, }   

// // const map = new Map<string, {age:number , name:string}>();
// // map.set('user1', {age: 23, name: 'John'});
// // map.set('user2', {age:25, name: 'Jane'});
// // console.log(map.get('user1')); // 23

// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent('click'); // OK

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email " }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
type UserProfile = z.infer<typeof userProfileSchema>;
app.put("/user", (req :any, res:any) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody:UserProfile = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);