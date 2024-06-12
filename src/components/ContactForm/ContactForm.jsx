import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import InputMask from "react-input-mask";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    username: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Required!")
      .min(3, "Too short!")
      .max(50, "Name must be at most 50 characters!")
      .test(
        "trim",
        "Name cannot be only spaces!",
        (value) => value.trim() !== ""
      ),
    number: Yup.string()
      .required("Required!")
      .min(3, "Too short!")
      .max(50, "Number must be at most 50 characters!"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };

    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css["contact-form"]}>
        <div className={css["contact-form-element"]}>
          <label htmlFor={nameFieldId} className={css["contact-form-label"]}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={nameFieldId}
            className={css["contact-form-input"]}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css["contact-form-warning"]}
          />
        </div>
        <div className={css["contact-form-element"]}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css["contact-form-input"]}
            as={InputMask}
            mask="+38(999)999-99-99"
            maskChar={null}
          />
          <ErrorMessage
            className={css["contact-form-warning"]}
            name="number"
            component="span"
          />
        </div>
        <button type="submit" className={css["contact-form-button"]}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
