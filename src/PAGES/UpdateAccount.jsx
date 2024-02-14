/* eslint-disable react-refresh/only-export-components */
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useUpdateUser } from "../authentication/useUpdateUser";
const Form = styled.form`
  width: 50vw;
  background-color: rgba(73, 39, 97, 0.8);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0 2rem 5rem;
  color: white;
`;
const FormRow = styled.div`
  width: 40vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 20vw;
  height: 5vh;
  background-color: #ded6e6;
  color: black;
  border-radius: 5px;
`;
const Label = styled.label`
  font-size: large;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: #240741;
  font-size: large;
  border-radius: 10px;
`;
const Div = styled.div`
  width: 100vw;
  height: 51.8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function updateAccount() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { updateUser } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset() });
  }

  return (
    <Div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Label htmlFor="password">New Password</Label>
          <Input
            type="password"
            error={errors?.password?.message}
            id="password"
            autoComplete="current-password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            type="passwordConfirm"
            error={errors?.passwordConfirm?.message}
            autoComplete="new-password"
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                getValues().password === value || "Passwords need to match",
            })}
          />
        </FormRow>
        <FormRow>
          <Button onClick={() => reset()}>Cancel</Button>
          <Button>Update password</Button>
        </FormRow>
      </Form>
    </Div>
  );
}

export default updateAccount;
