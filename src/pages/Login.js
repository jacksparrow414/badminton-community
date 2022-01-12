import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { LoginForm } from "../components/authentication/login";

export default function Login() {
    return (
        <Container maxWidth="lg">
            <Stack>
                <Typography variant="h4" gutterBottom>Sign in to Badminton Community</Typography>
                <Typography sx={{color: 'text.secondary'}}>Enter Your Details Below.</Typography>
            </Stack>

            <LoginForm />
        </Container>
    );
}