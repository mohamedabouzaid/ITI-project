import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import photo from '../../assets/Account-amico.svg'
import { Link } from 'react-router-dom'
import Authentication from "../../auth/authentication";
import Alert from 'react-bootstrap/Alert';
// import Alert from "react-bootstrap/Alert";

const MyForm = styled(Form)`
	border-radius:10px;
	box-shadow: 5px 0px 3px #4F46E5;
	padding:10px;
`;

const MyAlert = styled(Alert)`
	position: sticky;
	top: 0px
`;

const Login = () => {
	const navigate = useNavigate();
  const [unAuthenticated, setUnAuthentication] = useState(false)
	const [errorMessage, setErrorMessage] = useState('');
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      Authentication.LogIn(values).then(res=>{
        Authentication.LogIn(values).then((res) => {
          console.log(res.error)
          if(res.data.data.user.role === 'user'){
            localStorage.setItem('token', res.data.token)
            navigate('/') 
          }else{
            setUnAuthentication(true);
            setErrorMessage("Invalid Username or Password")
            setTimeout(() => {
              setUnAuthentication(false)
            }, 3000);
          }
        }).catch(error => {
          setUnAuthentication(true);
          setErrorMessage("Invalid Username or Password")
          setTimeout(() => {
            setUnAuthentication(false)
          }, 3000);
        })
      })
    },
  });
  return (
    <>
      {unAuthenticated ? <MyAlert variant='danger'>
				{errorMessage}
			</MyAlert> : ''}
      <div className="grid grid-cols-2 items-center p-5">

        <img
          src={photo}
          alt="finger"
        />
        <MyForm onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Typography variant="h2" gutterBottom component="div">
              Log In
            </Typography>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className={
                formik.touched.email && formik.errors.email ? "is-invalid" : ""
              }
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              autoComplete="on"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={
                formik.touched.password && formik.errors.password
                  ? "is-invalid"
                  : ""
              }
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Password"
              autoComplete="on"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </Form.Group>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#4F46E5] hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log In
          </button>
          <Link to="/signup">Create Account</Link>
        </MyForm>
      </div>
    </>
  );
};

export default Login;

