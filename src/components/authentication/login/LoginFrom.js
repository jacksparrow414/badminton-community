import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
// 一个针对于Form表单的组件
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from 'yup';
import React from "react";
import { useState } from "react";
export default function LoginForm () {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };
    // Yup是一个前端验证框架 https://github.com/jquense/yup
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
        onSubmit: () => {
        //   留空
        }
    });
    // 写法为ES6的对象解构赋值，formik对象中包含{}里面的值，有相应值会自动赋值
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
                      {...getFieldProps('password')}
                    
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