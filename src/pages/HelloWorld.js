import React from "react";
import {Button, Stack} from "@mui/material";

export default function HelloWorld() {
    return (
        <Stack direction="row">
            <Button size="medium">
                Hello, World!
            </Button>
        </Stack>
    );
}