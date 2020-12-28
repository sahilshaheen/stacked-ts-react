import { RouteComponentProps } from "@reach/router";
import { Form, Formik } from "formik";
import React from "react";
import Input from "./utils/Input";
import * as Yup from "yup";

const Login: React.FC<RouteComponentProps> = () => {
  return (
    <div className="box container w-sm">
      <h1 className="is-size-4">Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-4">
            <Input
              name="email"
              type="email"
              label="Email address"
              placeholder="john@apple.com"
            />
            <Input name="password" type="password" label="Password" />
            <button className="mt-2 button is-light" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
