import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("email");

  const onLogin = () => {
    console.log("Login button pressed");
  };

  const selectEmail = () => {
    setSelected("email");
  };

  const selectPhone = () => {
    setSelected("phone");
  };

  const initialValues = {
    email: "",
    phone: "",
  };

  const onSubmit = (values: any) => {
    if (selected === "email") {
      navigate("/verify", { state: selected });
    } else if (selected === "phone") {
      navigate("/verify", { state: selected });
    }
    console.log(values);
  };

  // const validateEmail = (value: string) => {
  //   let error;
  //   if (!value) {
  //     error = "Email address is required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
  //     error = "Invalid email address";
  //   }
  //   return error;
  // };

  // const validatePhone = (value: string) => {
  //   let error;
  //   if (!value) {
  //     error = "Phone number is required";
  //   }
  //   return error;
  // };

  const phoneSchema = Yup.object({
    phone: Yup.string().length(10, "Phone number is invalid").required("Phone number is required"),
  });

  const emailSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email address is required"),
  });

  return (
    <div className="wrapper">
      <header>
        <h1 id="logo">
          <a href="#">
            <img src={logo} className="logo" alt="" /> <span>Home</span>Page
          </a>
        </h1>
      </header>
      <article>
        <ul className="list-ema-pho">
          <li className={selected === "email" ? "active" : ""}>
            <a href="#" title="Email" onClick={selectEmail}>
              Email
            </a>
          </li>
          <li className={selected === "phone" ? "active" : ""}>
            <a href="#" title="Phone" onClick={selectPhone}>
              Phone
            </a>
          </li>
        </ul>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={selected === "phone" ? phoneSchema : emailSchema}
          isInitialValid={false}
        >
          {(formik) => (
            <Form>
              <div style={{ paddingBottom: "20px" }}>
                {selected === "phone" ? (
                  <>
                    <Field type="number" title="" name="phone" placeholder="Ex (337) 378 8383" />
                    {formik.errors.phone && formik.touched.phone && (
                      <div className="input-error">{formik.errors.phone}</div>
                    )}
                  </>
                ) : (
                  <>
                    <Field type="email" title="" name="email" placeholder="johndoe@gmail.com" />
                    {formik.errors.email && formik.touched.email && (
                      <div className="input-error">{formik.errors.email}</div>
                    )}
                  </>
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
        <button className="btn btn-log" onClick={onLogin}>
          Log in with NEAR
        </button>
      </article>
    </div>
  );
};

export default Register;
