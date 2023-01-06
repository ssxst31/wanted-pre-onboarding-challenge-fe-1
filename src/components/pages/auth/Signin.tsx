import React, { useState } from "react";

import { signup } from "api/auth";
import getErrorMessage from "utils/error";
import Modal from "components/Modal";
import { useNavigate } from "react-router-dom";

interface inputState {
  email: string;
  password: string;
  checkPassword: string;
}
interface InputErrorState {
  emailError: boolean;
  passwordError: boolean;
  checkPasswordError: boolean;
}

function Signin() {
  const navigate = useNavigate();

  const goAuth = () => {
    navigate("/auth");
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");

  const [inputs, setInputs] = useState<inputState>({
    email: "",
    password: "",
    checkPassword: "",
  });

  const [inputsError, setInputsError] = useState<InputErrorState>({
    emailError: false,
    passwordError: false,
    checkPasswordError: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (!Object.values(inputsError).some((error) => error)) {
      const { email, password } = inputs;
      try {
        const res = await signup({ email, password });

        setShowModal(true);
        setModalContent(res.message);
      } catch (error) {
        const errorMessage = getErrorMessage(error);

        setShowModal(true);
        setModalContent(errorMessage.response.data.details);
      }
    } else {
      setShowModal(true);
      setModalContent("다시 확인해주세요.");
    }
  };

  const checkEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    setInputsError({
      ...inputsError,
      emailError: !regExp.test(e.target.value),
    });
  };

  const checkPassword = () => {
    const pwValid = inputs.password.length < 8;

    setInputsError({ ...inputsError, passwordError: pwValid });
  };

  const checkCheckPassword = () => {
    const checkPwValid = inputs.password !== inputs.checkPassword;

    setInputsError({ ...inputsError, checkPasswordError: checkPwValid });
  };

  return (
    <div className="flex flex-col space-y-5">
      <input
        placeholder="이메일"
        className="px-2 py-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        onChange={onChange}
        name="email"
        value={inputs.email}
        onBlur={checkEmail}
      />
      {inputsError.emailError && (
        <span className="text-sm text-red-600" style={{ marginTop: 4 }}>
          이메일 형식을 지켜주세요.
        </span>
      )}
      <input
        placeholder="비밀번호"
        className="px-2 py-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        onChange={onChange}
        name="password"
        value={inputs.password}
        onBlur={checkPassword}
        type="password"
      />
      {inputsError.passwordError && (
        <span className="text-sm text-red-600" style={{ marginTop: 4 }}>
          비밀번호는 8글자 이상 입력해 주세요.
        </span>
      )}
      <input
        placeholder="비밀번호 확인"
        className="px-2 py-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        onChange={onChange}
        name="checkPassword"
        value={inputs.checkPassword}
        onBlur={checkCheckPassword}
        type="password"
      />
      {inputsError.checkPasswordError && (
        <span className="text-sm text-red-600" style={{ marginTop: 4 }}>
          비밀번호를 다시 확인해주세요.
        </span>
      )}
      <button
        onClick={handleSubmit}
        className="h-12 text-white bg-indigo-500 rounded-md hover:bg-indigo-700"
      >
        회원가입
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        content={modalContent}
        action={goAuth}
      />
    </div>
  );
}

export default Signin;
