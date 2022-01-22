import React from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Password = () => {
  const navigate = useNavigate();

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords do not match"),
  });

  const onSubmit = (values: any) => {
    console.log(values);
    navigate("/popular-categories");
  };

  return (
    <div className="wrapper">
      <header>
        <h1 id="logo" className="hea-ver">
          Create NEAR account <a href="#" title="Close" className="icon-close" />
        </h1>
        <div className="pro-bar" style={{ width: "70%" }} />
      </header>
      <article>
        <div className="txt-acc">Keep your apps safe from other with access to your computer.</div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          isInitialValid={false}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <label>Password</label>
              <div style={{ paddingBottom: "20px" }}>
                <Field type="password" name="password" placeholder="Password" />
                {formik.errors.password && formik.touched.password && (
                  <div className="input-error">{formik.errors.password}</div>
                )}
              </div>
              <label>Confirm Password</label>
              <div style={{ paddingBottom: "20px" }}>
                <Field type="password" name="confirmPassword" placeholder="Confirm password" />
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                  <div className="input-error">{formik.errors.confirmPassword}</div>
                )}
              </div>
              <p>
                <button type="submit" className={formik.isValid ? "btn" : ""} disabled={!formik.isValid}>
                  Submit
                </button>
              </p>
            </Form>
          )}
        </Formik>
        <div className="txt-pri-pol none">
          <strong>claudio@metapool.app</strong>
          <br />
          by clicking continue you must agree to near labs <br />
          <a href="#" title="Terms & Conditions">
            Terms &amp; Conditions
          </a>{" "}
          ans{" "}
          <a href="#" title="Privacy Policy">
            Privacy Policy
          </a>
        </div>
      </article>
    </div>
  );
};

export default Password;
