import { LoadingButton } from "@mui/lab";
import {IconButton, InputAdornment, Stack, TextField } from "@mui/material";
// Icon组件
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// 一个针对于Form表单的组件
import { useFormik, Form, FormikProvider } from "formik";
// 第三方验证库 https://github.com/jquense/yup
import * as Yup from 'yup';
import React from "react";
import { useState } from "react";
import { login } from "../../../api/loginForm";
export default function LoginForm () {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };
    // 定义验证规则
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          remember: true
        },
        validationSchema: LoginSchema,
        onSubmit: (values, props) => {
            console.log('request-------->')
            login(values).then(data => {
              console.log(data)
              // https://formik.org/docs/api/withFormik#the-formikbag
              // 成功之后将setSubmitting设置为false
              props.setSubmitting(false)
            })
            console.log('response------->')
            
        }
    });
    // 写法为ES6的对象解构赋值，formik对象中包含{}里面的值，有相应值会自动赋值
    // http://es.xiecheng.live/es6/destructuring.html#%E5%AF%B9%E8%B1%A1%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC
    // formik所有props https://formik.org/docs/api/formik
    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    return (
        // https://formik.org/docs/tutorial#leveraging-react-context
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField 
                      autoComplete="username"
                      type="email"
                      label="Email Address"
                    //   getFieldProps 可以快速将输入的内容绑定在form元素上，https://formik.org/docs/tutorial#getfieldprops 
                      {...getFieldProps('email')}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}/>
                    <TextField
                      autoComplete="current-password"
                      type={showPassword ? 'text' : 'password'}
                      label="Password"
                      // https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do
                      {...getFieldProps('password')}
                    //   https://mui.com/zh/api/text-field/
                      InputProps={{
                        // https://mui.com/zh/api/input/
                        endAdornment: (
                            // https://mui.com/zh/api/input-adornment/
                              <InputAdornment position="end">
                                  <IconButton onClick={handleShowPassword} edge="end">
                                      <Icon icon={showPassword ? eyeFill : eyeOffFill}></Icon>
                                  </IconButton>
                              </InputAdornment>
                          )
                      }}
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}/>
                </Stack>
                <LoadingButton
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                    Login
                </LoadingButton>
            </Form>
        </FormikProvider>
    );
}