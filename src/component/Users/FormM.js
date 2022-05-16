import Card from "../UI/Card";
import classes from "./FormInput.module.css";
import FormInput from "./FormInput";
import { useState } from "react";
import Button from "../UI/Button";

function FormM() {
  const [values, setValues] = useState({
    lastname: "",
    firstname: "",
    username: "",
    email: "",
    wilaya: "",
    hospital: "",
  });
  const inputs = [
    {
      id: 1,
      name: "lastname",
      placeholder: "Last name",
      errorMessage: "le nom doit etre entre 3 et 16 caractéres",
      required: true,
      type: "text",
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: 2,
      name: "firstname",
      placeholder: "First name",
      errorMessage: "le nom doit etre entre 3 et 16 caractéres",
      required: true,
      type: "text",
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: 3,
      name: "username",
      placeholder: "Username",
      errorMessage: "* Username ne doit etre entre 3 et 16 caractéres",
      required: true,
      type: "text",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 4,
      name: "email",
      placeholder: "Email",
      errorMessage: "enter a valid email address",
      required: true,
      type: "email",
    },
    {
      id: 5,
      name: "wilaya",
      placeholder: "Wilaya",
      required: true,
    },
    {
      id: 6,
      name: "hospital",
      placeholder: "Hospital",
      required: true,
      type: "text",
      pattern: "^[A-Za-z]{3,16}$",
      errorMessage: "Entrez un hopital dans votre région",
    },
    {
      id: 7,
      name: "Specialité",
      placeholder: "Specialité",
      required: true,
      type: "text",
      
    },
    {
      id: 8,
      name: "Number",
      placeholder: "Numéro",
      type: "number",
      pattern: "^\d{10}$",
      required:'true',
    },
  ];

  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function addUserHandler(event) {
    event.preventDefault();
  }

  console.log(values);
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <h2>Créer un Medecin :</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Button type="submit">Ajouter Medecin</Button>
      </form>
    </Card>
  );
}

export default FormM;
