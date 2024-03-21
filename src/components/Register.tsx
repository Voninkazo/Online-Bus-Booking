// import axios from "axios";
// import React, { useState } from "react";
// import {
//   Card,
//   Input,
//   Button,
//   Typography,
//   Select,
//   Option,
//   Alert,
// } from "@material-tailwind/react";
// import { signupUrl } from "../utils/variables.js";

// const Register = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [role, setRole] = useState("");
//   const [file, setFile] = useState<any>(null);
//   const { name, email, password } = user;
//   const [alertMessage, setAlertMessage] = useState("");

//   const handleFileChange = (e: any) => {
//     setFile(e.target.files[0]);
//   };

//   function resetInput() {
//     setUser({
//       name: "",
//       email: "",
//       password: "",
//     });
//     setRole("");
//     setFile("");
//   }

//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("role", role);

//     if (!role) return;

//     try {
//       const response = await axios.post(signupUrl, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       window.location.href = "/signin";
//       resetInput();
//     } catch (error) {
//       setAlertMessage("Failed to registered");
//       resetInput();
//     }
//   }

//   const handleInputChange = (event: any) => {
//     const { name, value } = event.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   return (
//     <Card
//       color="transparent"
//       shadow={false}
//       placeholder={""}
//       className="max-w-xl mx-auto items-center relative top-36"
//     >
//       <Typography placeholder={""} variant="h4" color="blue-gray">
//         Sign Up
//       </Typography>
//       <Typography placeholder={""} color="gray" className="mt-1 font-normal">
//         Nice to meet you! Enter your details to register.
//       </Typography>
//       <Alert
//         color="red"
//         open={alertMessage !== ""}
//         onClose={() => setAlertMessage("")}
//         className="mt-6"
//       >
//         {alertMessage}
//       </Alert>
//       <form
//         className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
//         onSubmit={(e) => handleSubmit(e)}
//       >
//         <div className="mb-1 flex flex-col gap-6">
//           <Typography
//             placeholder={""}
//             variant="h6"
//             color="blue-gray"
//             className="-mb-3"
//           >
//             Your Name
//           </Typography>
//           <Input
//             size="lg"
//             placeholder="name"
//             name="name"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             crossOrigin={""}
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             required
//             value={name}
//             onChange={handleInputChange}
//           />
//           <Typography
//             placeholder={""}
//             variant="h6"
//             color="blue-gray"
//             className="-mb-3"
//           >
//             Your Email
//           </Typography>
//           <Input
//             crossOrigin={""}
//             size="lg"
//             placeholder="name@mail.com"
//             className=" !border-t-blue-event: React.ChangeEvent<HTMLInputElement | HTMLSelectElementgray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             type="email"
//             name="email"
//             required
//             value={email}
//             onChange={handleInputChange}
//           />
//           <Typography
//             placeholder={""}
//             variant="h6"
//             color="blue-gray"
//             className="-mb-3"
//           >
//             Upload your profile picture
//           </Typography>
//           <div className="flex flex-col items-center">
//             <label htmlFor="upload-img" className="w-28 h-28 cursor-pointer">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="#FFF6E0"
//                 viewBox="0 0 24 24"
//                 strokeWidth="0.2"
//                 stroke="#3A2953"
//                 className="w-full h-full"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </label>
//             <input
//               type="file"
//               className="hidden"
//               id="upload-img"
//               accept=".png, .jpeg, .jpg"
//               required
//               onChange={handleFileChange}
//             />
//             <button className="font-Roboto font-normal text-allsafe-black-400 text-xs leading-3 uppercase">
//               Upload screenshot
//             </button>
//           </div>
//           {file && (
//             <div className="my-8">
//               <img src={`http://localhost:3001/${file.name}`} alt="Uploaded" />
//             </div>
//           )}
//           <Select
//             placeholder="role"
//             label="Select Version"
//             name="role"
//             value={role}
//             onChange={(val: any) => setRole(val)}
//           >
//             <Option value="Driver">Driver</Option>
//             <Option value="Passenger">Passenger</Option>
//           </Select>
//           <Typography
//             placeholder={"Password"}
//             variant="h6"
//             color="blue-gray"
//             className="-mb-3"
//           >
//             Password
//           </Typography>
//           <Input
//             type="password"
//             size="lg"
//             placeholder="********"
//             crossOrigin={""}
//             required
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             name="password"
//             value={password}
//             onChange={handleInputChange}
//           />
//         </div>

//         <Button type="submit" placeholder={""} className="mt-6" fullWidth>
//           sign up
//         </Button>
//         <Typography
//           placeholder={""}
//           color="gray"
//           className="mt-4 text-center font-normal"
//         >
//           Already have an account?{" "}
//           <a href="#" className="font-medium text-gray-900">
//             Sign In
//           </a>
//         </Typography>
//       </form>
//     </Card>
//   );
// };

// export default Register;
