import * as Yup from "yup";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});
export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: "",
    number: "",
  };
  const nameFieldId = nanoid();
  const phoneFieldId = nanoid();
  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), ...values });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formAdd}>
        <label htmlFor={nameFieldId} className={css.formLabel}>
          Name
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.formField}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>

        <label htmlFor={phoneFieldId} className={css.formLabel}>
          Phone number
          <Field
            type="text"
            name="number"
            id={phoneFieldId}
            className={css.formField}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>

        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
