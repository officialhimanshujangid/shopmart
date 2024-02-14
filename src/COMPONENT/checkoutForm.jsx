import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  text-transform: capitalize;
  width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  font-family: "Open-sans", sans-serif;
`;
const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-size: 1.7rem;
  font-weight: 500;
`;
const Div = styled.div``;
const Label = styled.label`
  font-size: larger;
  margin-left: 0.3rem;
`;
const Input = styled.input`
  height: 2.3rem;
  border-radius: 10px;
  outline: 2px solid rebeccapurple;
  background-color: #f4faff;
  padding-left: 5px;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 0.8rem 2rem;
  margin: 0.5rem 0rem;
  color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
  background-color: #52089c;
`;
function CheckoutForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { errors } = formState;
  function onSubmit(data) {
    console.log(data);
    navigate("/");
    reset();
  }
  return (
    <Div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <H1>Add you address</H1>
        <FormRow>
          <Div2>
            <Label htmlFor="firstName">first Name</Label>
            <Input
              error={errors?.name?.message}
              {...register("firstName", {
                required: "This field is required",
              })}
              required
              type="text"
              id="firstName"
            />
          </Div2>
          <Div2>
            <Label htmlFor="middleName">middle name</Label>
            <Input
              error={errors?.name?.message}
              {...register("middleName", {
                required: "This field is required",
              })}
              type="text"
              id="middleName"
            />
          </Div2>
          <Div2>
            <Label htmlFor="lastName">last name</Label>
            <Input
              error={errors?.name?.message}
              {...register("lastName", {
                required: "This field is required",
              })}
              required
              type="text"
              id="lastName"
            />
          </Div2>
        </FormRow>
        <Div2>
          <Label htmlFor="address1">Address 1</Label>
          <Input
            error={errors?.name?.message}
            {...register("address1", {
              required: "This field is required",
            })}
            type="input"
            id="address1"
          />
        </Div2>
        <Div2>
          <Label htmlFor="address1">Address 1</Label>
          <Input
            error={errors?.name?.message}
            {...register("address2", {
              required: "This field is required",
            })}
            type="input"
            id="address2"
          />
        </Div2>
        <Div2>
          <Label htmlFor="address1">Address 1</Label>
          <Input
            error={errors?.name?.message}
            {...register("address3", {
              required: "This field is required",
            })}
            type="input"
            id="address3"
          />
        </Div2>
        <FormRow>
          <Div2 className="col-md-6">
            <Label htmlFor="inputCity">City</Label>
            <Input type="text" id="inputCity" />
          </Div2>
          <Div2 className="col-md-4">
            <Label htmlFor="inputState">State</Label>
            <Input required type="text" id="firstName" />
          </Div2>
          <Div2 className="col-md-2">
            <Label htmlFor="inputZip">Zip</Label>
            <Input type="text" id="inputZip" />
          </Div2>
        </FormRow>

        <Div>
          <Button type="submit" className="btn btn-primary">
            Order Now
          </Button>
        </Div>
      </Form>
    </Div>
  );
}

export default CheckoutForm;
