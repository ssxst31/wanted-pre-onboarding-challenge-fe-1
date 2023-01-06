import React from "react";
import { Tab } from "@headlessui/react";

import Login from "components/pages/auth/Login";
import Signin from "components/pages/auth/Signin";

function Auth() {
  return (
    <div
      className="absolute transform w-96 top-1/2 left-1/2"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <Tab.Group>
        <Tab.List className="text-center ">
          <Tab
            className={({ selected }) =>
              selected ? "pt-5 pb-2 font-bold w-1/2" : "pt-5 pb-2 w-1/2"
            }
          >
            로그인
          </Tab>
          <Tab
            className={({ selected }) =>
              selected ? "pt-5 pb-2 font-bold w-1/2" : "pt-5 pb-2 w-1/2"
            }
          >
            회원가입
          </Tab>
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
