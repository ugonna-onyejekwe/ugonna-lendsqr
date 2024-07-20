import { useState } from "react";
import "./style.scss";
import { loginbg, logo } from "../../assets";
import { loginValidation } from "../../model/validate-schema";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/dashboard/users");
  };

  const { values, handleSubmit, handleBlur, touched, errors, handleChange } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginValidation,
      onSubmit,
    });

  console.log(touched.email);

  return (
    <section className="login_page">
      <div className="logo">
        <img src={logo} alt="logo_image" />
      </div>
      <div className="img_wrapper">
        <div className="img_con">
          <img src={loginbg} alt="login_bg" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="auth_con">
        <h1>welcome!</h1>
        <p>Enter details to login</p>

        <div className="input_section">
          <div className="input_con">
            <div className="input">
              <input
                type="email"
                placeholder="Email"
                onChange={handleChange("email")}
                value={values.email}
                onBlur={handleBlur("email")}
              />
            </div>
            {touched.email && errors.email && (
              <p className={"error_msg"}>{errors.email}</p>
            )}

            <p>{touched.email}</p>
          </div>
          <div className="input_con">
            <div className="input">
              <input
                type={show ? "text" : "password"}
                value={values.password}
                placeholder="Password"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <span onClick={() => setShow(!show)}>
                {show ? "hide" : "show"}
              </span>
            </div>
            {touched.password && errors.password && (
              <p className={"error_msg"}>{errors.password},llll</p>
            )}
          </div>
        </div>

        <h6>forgot password?</h6>

        <button>log in</button>
      </form>
    </section>
  );
};
