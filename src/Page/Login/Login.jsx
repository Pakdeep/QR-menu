import React from 'react'
import styles from "./login.module.css"
import { Button, FormControl, InputAdornment, TextField } from '@mui/material'

import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ClosedEyeIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [details, setDetails] = React.useState({ name: "", password: "", email: "" })
    const [show, setShow] = React.useState(false)
    const navigate = useNavigate()
    return (
        <div className={styles.login}>
            <div className={styles.welcome}>
                <h1>Welcome !!!</h1>
                <h3>Please register your Place.</h3>
            </div>
            <form className={styles.formWrapper}
                onSubmit={async (e) => {
                    e.preventDefault();
                }}
            >
                <FormControl className={styles.form}>
                    <TextField
                        margin="dense"
                        label="Name"
                        value={details.name}
                        name="name"
                        type="text"
                        autoComplete='off'
                        variant="outlined"
                        color='primary'
                        sx={{
                            width: "90% !important",
                        }}
                        InputProps={{
                            id: "name",
                            required: true,
                            type: "text",
                            className: styles.input,
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    className={styles.adornment}
                                >
                                    <PersonIcon className={styles.icon} />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            style: {
                                fontFamily: "Plus Jakarta Sans",
                            },
                        }}
                        onChange={(e) => {
                            setDetails({ ...details, [e.target.name]: e.target.value })
                        }}
                    />
                    <TextField
                        margin="dense"
                        label="Email"
                        value={details.email}
                        name="email"
                        type="email"
                        sx={{
                            width: "90% !important",
                        }}
                        autoComplete='off'
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            id: "email",
                            required: true,
                            type: "email",
                            className: styles.input,
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    className={styles.adornment}
                                >
                                    <EmailIcon className={styles.icon} />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            style: {
                                fontFamily: "Plus Jakarta Sans",
                            },
                        }}
                        onChange={(e) => {
                            setDetails({ ...details, [e.target.name]: e.target.value })
                        }}
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        value={details.password}
                        name="password"
                        type="password"
                        sx={{
                            width: "90% !important",
                        }}
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            id: "password",
                            required: true,
                            type: show ? "text" : "password",
                            className: styles.input,
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    className={styles.adornment}
                                >
                                    {show ? (
                                        <div
                                            role="button"
                                            aria-label="hide password"
                                            onClick={() => {
                                                setShow(false);
                                            }}
                                        >
                                            <EyeIcon className={styles.icon} />
                                        </div>
                                    ) : (
                                        <div
                                            role="button"
                                            aria-label="show password"
                                            onClick={() => {
                                                setShow(true);
                                            }}
                                        >
                                            <ClosedEyeIcon className={styles.icon} />
                                        </div>
                                    )}
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            style: {
                                fontFamily: "Plus Jakarta Sans",
                            },
                        }}
                        onChange={(e) => {
                            setDetails({ ...details, [e.target.name]: e.target.value })
                        }}
                    />
                    <Button type="submit"
                        variant="contained"
                        className={styles.outlined}
                        sx={{
                            width: "90% !important",
                        }}
                        onClick={() => {
                            navigate("/home")
                            // console.log(details)
                        }}>
                        Sign up
                    </Button>
                </FormControl>
            </form>
        </div >
    )
}

export default Login
