import styled from "styled-components";
import Logo from "../COMPONENT/Logo/Logo";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useLogin } from "../authentication/useLogin";
const Page = styled.div`
  font-family: "Mulish", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right bottom, #130520, rebeccapurple);
`;
const Form = styled.form`
  width: 50vw;
  color: #0e0a0a;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
  background-color: #d2c0e4;
  border-radius: 20px;
  padding: 2.4rem 4rem;
`;
const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Label = styled.label`
  border-radius: 10px;
  padding: 0.8rem 1.2rem;
  margin-bottom: 5px;
`;
const Input = styled.input`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  border-bottom: 2px steelblue solid;
  display: block;
  width: 100%;
  padding: 5px 0;
  font-size: 18px;
  padding: 0.2rem 1.5rem;
  &:focus {
    outline: 0;
    border-bottom-color: #110120;
  }

  &:valid {
    outline: 0;
    border-bottom-color: #110120;
  }
`;
const Button = styled.button`
  font-family: "Mulish", sans-serif;
  background-color: #090011;
  border: none;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  padding: 0.8rem 1.2rem;
`;
const P = styled.p`
  margin-top: 15px;
  margin-left: 10px;
`;

function Login() {
  const { login } = useLogin();
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  function onSubmit({ email, password }) {
    if (!email || !password) return;
    login(
      { email, password },

      {
        onSettled: () => {
          reset();
          console.log("logged");
        },
      }
    );
  }

  return (
    <Page className="text-2xl">
      <Logo size="3rem" padding="20px 40px" />

      <h1 className="text-white my-5 text-3xl">Log in to your account</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow error={errors?.email?.message}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            {...register("email", {
              required: "this field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "please Provide a valid email address",
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.password?.message}>
          <Label htmlFor="password">Password</Label>
          <Input
            type="text"
            id="password"
            {...register("password", {
              required: "this field is required",
              minLength: {
                value: 8,
                message: "password needs a minimum of 8 character",
              },
            })}
          />
        </FormRow>
        <FormRow>
          <Button className="text-white">Login</Button>
        </FormRow>
        <P className="text">
          Do not have an account ?{" "}
          <a
            className="text-sky-950 cursor-pointer"
            onClick={() => navigate("/createUser")}
          >
            Register
          </a>
        </P>
      </Form>
    </Page>
  );
}

export default Login;
