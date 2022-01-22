import React from "react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Email = () => {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    accountId: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Please enter your full name"),
    accountId: Yup.string().required("Account ID is required"),
  });

  const onSubmit = (values: any) => {
    console.log(values);
    navigate("/password");
  };

  return (
    <div className="wrapper">
      <header>
        <h1 id="logo" className="hea-ver">
          Create NEAR account <a href="#" title="Close" className="icon-close" />
        </h1>
      </header>
      <article>
        <div className="txt-acc">
          Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations,
          including sending and receiving assets.
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          isInitialValid={false}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <label>Full Name</label>
              <div style={{ paddingBottom: "20px" }}>
                <Field type="text" name="fullName" placeholder="Ex. John doe" />
                {formik.errors.fullName && formik.touched.fullName && (
                  <div className="input-error">{formik.errors.fullName}</div>
                )}
              </div>
              <label>
                Account ID <a href="#" title="Information" className="icon-info" />
              </label>
              <div className="bposi" style={{ paddingBottom: "20px" }}>
                <Field type="text" name="accountId" placeholder="yourname" className="inp-yourname" />
                {formik.errors.accountId && formik.touched.accountId && (
                  <div className="input-error">{formik.errors.accountId}</div>
                )}
                <span>.near</span>
              </div>
              <p>
                <button type="submit" className={formik.isValid ? "btn" : ""} disabled={!formik.isValid}>
                  Submit
                </button>
              </p>
            </Form>
          )}
        </Formik>
        <div className="txt-pri-pol">
          by clicking continue you must agree to near labs <br />
          <a href="#" title="Terms & Conditions">
            Terms &amp; Conditions
          </a>{" "}
          ans{" "}
          <a href="#" title="Privacy Policy">
            Privacy Policy
          </a>
        </div>
        <h4>Already have NEAR account?</h4>
        <a href="#" title="Log in with NEAR" className="btn btn-log">
          Log in with NEAR
        </a>
      </article>
    </div>
  );
};

export default Email;
