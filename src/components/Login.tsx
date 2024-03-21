// import axios from "axios";
// import React, { useState } from "react";
// import { Card, Input, Button, Typography } from "@material-tailwind/react";
// import { loginUrl } from "../utils/variables";
// import { getUserInfo } from "../../stores/buses";

// const Login = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = user;

//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     try {
//       const response = await axios.post(loginUrl, {
//         email,
//         password,
//       });

//       getUserInfo(response?.data?.user);
//       window.location.assign("/home");
//     } catch (error) {
//       console.error(error);
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
//         Sign In
//       </Typography>
//       <Typography placeholder={""} color="gray" className="mt-1 font-normal">
//         Welcome to our community!
//       </Typography>
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
//             value={email}
//             onChange={handleInputChange}
//           />
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
//           sign in
//         </Button>
//       </form>
//     </Card>
//   );
// };

// export default Login;
