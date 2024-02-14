import { useForm } from "react-hook-form";
import styled from "styled-components";
import Logo from "../COMPONENT/Logo/Logo";
import { useNavigate } from "react-router-dom";
const Page = styled.div`
  font-family: "Mulish", sans-serif;
  padding: 1.5rem 2rem;
  min-height: 100vh;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(to right bottom, #130520, rebeccapurple);
`;
const Form = styled.form`
  width: 50vw;
  color: #0e0a0a;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
  background-color: #d2c0e4;
  border-radius: 20px;
  padding: 1.5rem 1.5rem;
`;
const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Label = styled.label`
  border-radius: 10px;
  padding: 0rem 0.5rem;
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
  padding: 0.2rem 0.5rem;
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

function CreateUser() {
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  function onSubmit() {
    navigate("/login");
    console.log("click");
    reset();
  }
  return (
    <Page className="text-2xl">
      <FormRow>
        <Logo size="44px" padding="20px 40px" />
        <h1 className="text-white text-center my-5 text-3xl">
          Create a new account
        </h1>
      </FormRow>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow error={errors?.name?.message}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            error={errors?.name?.message}
            {...register("name", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow error={errors?.email?.message}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.phone?.message}>
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: /^\d+$/,
                message: "Please provide a valid phone number",
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.password?.message}>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.confirmPassword?.message}>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "This field is required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
          />
        </FormRow>

        <FormRow>
          <Button className="text-white">Create Account</Button>
        </FormRow>

        <P className="text">
          Already have an account?{" "}
          <a
            className="text-sky-950 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log In
          </a>
        </P>
      </Form>
    </Page>
  );
}

export default CreateUser;
