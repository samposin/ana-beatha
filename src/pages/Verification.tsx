import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialValues = {
    firstDigit: "",
    secondDigit: "",
    thirdDigit: "",
    fourthDigit: "",
    fifthDigit: "",
    sixthDigit: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);
    navigate("/email");
  };

  return (
    <div className="wrapper">
      <header>
        <h1 id="logo" className="hea-ver">
          Verification <a href="#" title="Close" className="icon-close" />
        </h1>
      </header>
      <article>
        <p>
          {location.state === "phone"
            ? `We've sent a 6-digit verification code to your phone`
            : `We've sent a 6-digit verification code to the email address`}
          <br />
          <span className="color-blue">{location.state === "phone" ? "+1 4747948894" : "johndoe@gmail.com"}</span>
        </p>
        <p>Enter verification code</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit} isInitialValid={false}>
          {(formik) => (
            <Form>
              <ul className="list-int-ver">
                <li>
                  <Field type="number" name="firstDigit" title="" placeholder="" />
                </li>
                <li>
                  <Field type="number" name="secondDigit" title="" placeholder="" />
                </li>
                <li>
                  <Field type="number" name="thirdDigit" title="" placeholder="" />
                </li>
                <li>
                  <Field type="number" name="fourthDigit" title="" placeholder="" />
                </li>
                <li>
                  <Field type="number" name="fifthDigit" title="" placeholder="" />
                </li>
                <li>
                  <Field type="number" name="sixthDigit" title="" placeholder="" />
                </li>
              </ul>
              <p>
                <button type="submit" className={formik.isValid ? "btn" : ""} disabled={!formik.isValid}>
                  Submit
                </button>
              </p>
            </Form>
          )}
        </Formik>

        <div className="txt-pri-pol-top">Didn't receive your code?</div>
        <p>
          <a href="#" title="Send to a different email address">
            Send to a different email address
          </a>
        </p>
        <p>
          <a href="#" title="Resend your code">
            Resend your code
          </a>
        </p>
      </article>
    </div>
  );
};

export default Verification;
