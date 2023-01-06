import React from "react";
import { Tab } from "@headlessui/react";

import Login from "components/pages/auth/Login";
import Signin from "components/pages/auth/Signin";

function Auth() {
  return (
    <div className="min-h-full px-4 py-12 mx-auto w-96">
      <Tab.Group>
        <Tab.List>
          <Tab>로그인</Tab>
          <Tab>회원가입</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="flex flex-col">
            <Login />
          </Tab.Panel>
          <Tab.Panel className="flex flex-col">
            <Signin />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Auth;
