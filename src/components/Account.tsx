import React from "react";
import { useStore } from "@nanostores/react";
import { userInfo } from "../../stores/users";

const Account = () => {
  const user = useStore(userInfo);
  console.log('user::::::',user);
  return <div>test</div>;
};

export default Account;
