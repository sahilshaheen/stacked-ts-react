import { RouteComponentProps } from "@reach/router";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import Input from "./utils/Input";
import * as Yup from "yup";
import { useAuth } from "reactfire";

const Login: React.FC<RouteComponentProps> = ({ path, navigate }) => {
  const auth = useAuth();

  useEffect(() => {
    if (auth.currentUser) navigate!("/");
  }, [auth.currentUser]);

  return (
    <div className="box w-sm center">
      <h1 className="is-size-4">Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={({ email, password }, { setSubmitting }) => {
          auth.signInWithEmailAndPassword(email, password).then(() => {
            setSubmitting(false);
            if (path === "/login") navigate!("/")
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-4">
            <Input name="email" type="email" label="Email address" />
            <Input name="password" type="password" label="Password" />
            <button
              className="mt-2 button is-light"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
