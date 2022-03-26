import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import photo from '../../assets/Account-amico.svg'
import {Link} from 'react-router-dom'
import axios from 'axios';


const MyForm = styled(Form)`
	border-radius:10px;
	box-shadow: 5px 0px 3px #4F46E5;
	padding:10px;
`;
const Signup = () => {
	const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 3) {
      errors.name = "Must be 3 characters or more";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }

    if (!values.passwordConfirmation) {
      errors.passwordConfirmation = "Required";
    } else if (values.passwordConfirmation !== values.password) {
      errors.passwordConfirmation = "passwords don't match";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (values.phone.length !== 11) {
      errors.phone = "Must be 11 Numbers";
    } else if (!isFinite(values.phone)){
      errors.phone = "only Numbers allowed";
    }

    // if (!values.address?.city) {
    //   errors.address?.city = "Required";
    // }
    // if (!values.address?.street) {
    //   errors.address?.street = "Required";
    // }
    // if (!values.address?.suite) {
    //   errors.address?.suite = "Required";
    // }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      phone: "",
      address:{
        city:"",
        street:"",
        suite:""
      },
    },
    validate,
    onSubmit: (values) => {
      const data = {
        name:values.name,
        email:values.email,
        password:values.password,
        passwordConfirmation:values.passwordConfirmation,
        phone:values.phone,
        address:{
          city:values.address.city,
          street:values.address.street,
          suite:values.address.suite
        },
        role:'user'
      }
      axios.post('http://localhost:3000/auth',data).then((res)=>{
        console.log(res)
        navigate('/login')
      })
    },
  });
  return (
		<div className="grid grid-cols-2 items-center p-5">

      <img
          src={photo}
          alt="finger"
      />  
      <MyForm onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
            <Typography variant="h2" gutterBottom component="div">
              Sign Up
            </Typography>
          <Form.Control
            className={
              formik.touched.name && formik.errors.name ? "is-invalid" : ""
            }
            required
            type="text"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            autoComplete="on"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-danger">{formik.errors.name}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
          <Form.Control
            className={
              `${formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
                ? "is-invalid"
                : ""} read-only:bg-gray-100"`
            }
            type="password"
            name="passwordConfirmation"
            placeholder="Password Confirmation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirmation}
            autoComplete="on"
          />
          {formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation ? (
            <div className="text-danger">
              {formik.errors.passwordConfirmation}
            </div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control
            className={
              `${formik.touched.phone &&
              formik.errors.phone
                ? "is-invalid"
                : ""} read-only:bg-gray-100"`
            }
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            autoComplete="on"
          />
          {formik.touched.phone &&
          formik.errors.phone ? (
            <div className="text-danger">
              {formik.errors.phone}
            </div>
          ) : null}
        </Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Group className="mb-3 grid gap-1 grid-cols-3" controlId="formBasicAddress">
          <Form.Group controlId="formBasicCity">
            <Form.Control
              className={
                `${formik.touched.address?.city &&
                formik.errors.address?.city
                  ? "is-invalid"
                  : ""} read-only:bg-gray-100"`
              }
              type="text"
              name="address.city"
              placeholder="City"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address?.city}
              autoComplete="on"
            />
            {formik.touched.address?.city &&
            formik.errors.address?.city ? (
              <div className="text-danger">
                {formik.errors.address?.city}
              </div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="formBasicStreet">
            <Form.Control
              className={
                `${formik.touched.address?.street &&
                formik.errors.address?.street
                  ? "is-invalid"
                  : ""} read-only:bg-gray-100"`
              }
              type="text"
              name="address.street"
              placeholder="Street"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address?.street}
              autoComplete="on"
            />
            {formik.touched.address?.street &&
            formik.errors.address?.street ? (
              <div className="text-danger">
                {formik.errors.address?.street}
              </div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="formBasicSuite">
            <Form.Control
              className={
                `${formik.touched.address?.suite &&
                formik.errors.address?.suite
                  ? "is-invalid"
                  : ""} read-only:bg-gray-100"`
              }
              type="text"
              name="address.suite"
              placeholder="Suite"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address?.suite}
              autoComplete="on"
            />
            {formik.touched.address?.suite &&
            formik.errors.address?.suite ? (
              <div className="text-danger">
                {formik.errors.address?.suite}
              </div>
            ) : null}
          </Form.Group>
        </Form.Group>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#4F46E5] hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >        
          Sign up
        </button>
        <Link to="/login">Already Have an Account ?</Link>
      </MyForm>
    </div>
    
  );
};

export default Signup;
