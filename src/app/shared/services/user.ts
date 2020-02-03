export class User {
   uid: string;
   email: string;
   displayName: string;
   photoURL: string;
   emailVerified: boolean;
   //ghg: string = "null";
   
}
export class details{
   firstName: string;
   secondName: string;
   University: string;
   mobile: string;
   description:string;
   interestedAreas:any;
}
export class company{
   companyName: string;
   Address: string;
   Op: string;
   mobile: string;
   description:string;
}

export class Upload {

   $key: string;
   file:File;
   name:string;
   url:string;
   progress:number;
   createdAt: Date = new Date();
 
   constructor(file:File) {
     this.file = file;
   }
 }
