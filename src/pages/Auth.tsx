import React from "react";
import { Tab } from "@headlessui/react";

function Auth() {
  return (
    <div className="min-h-full px-4 py-12 mx-auto w-96">
      <Tab.Group>
        <Tab.List>
          <Tab>로그인</Tab>
          <Tab>회원가입</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="flex flex-col mx-auto">
            <input
              placeholder="이메일"
              className="px-2 py-3 border border-gray-300"
            />
            <input
              placeholder="비밀번호"
              className="px-2 py-3 border border-gray-300"
            />
          </Tab.Panel>
          <Tab.Panel className="flex flex-col">
            <input
              placeholder="이메일"
              className="px-2 py-3 border border-gray-300"
            />
            <input
              placeholder="비밀번호"
              className="px-2 py-3 border border-gray-300"
            />
            <input
              placeholder="비밀번호 확인"
              className="px-2 py-3 border border-gray-300"
            />
            <button>회원가입</button>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Auth;
