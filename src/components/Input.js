import styled from "styled-components";
import { useField } from "formik";

const Control = styled.div`
  margin-botton: 20px;
`;

const Label = styled.label`
  color: #000;
  display: block;
  margin-bottom: 5px;
`;

const MyInput = styled.input`
  outline: none;
  padding: 8px;
  border: solid 1px #b1b3b5;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 5px;
`;

const Input = ({ label, ...props }) => {
  return (
    <Control>
      <Label> {label} </Label>
    </Control>
  );
};

export default Input;
