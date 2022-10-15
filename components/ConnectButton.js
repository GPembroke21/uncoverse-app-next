import { styled } from "@mui/system"
import React from "react";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Popout from "./Popout";
import Infopane from "./LanderPopup";

const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="bottom" ref={ref} {...props} />; });

const ConnectButtonStyled = styled("button")(({ theme }) => ({
    fontFamily: "Inter",
    fontSize: "0.8rem",
    fontWeight: "500",
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "0.4rem",
    width: "7rem",
    padding: "0.46rem",
    cursor: "pointer",
    marginRight: "1rem",
    "&:hover": {
        border: "1px solid #dd00ff",
        color: "#dd00ff",
    }
}));

export default function ConnectButton() {
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    return (
        <nav>
            <ConnectButtonStyled onClick={() => setOpen(!open)}>
                Connect
            </ConnectButtonStyled>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    opacity: "100",
                    backgroundColor: "black",
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <Popout closeMenu={() => setOpen(false)} />
            </Dialog>
        </nav>
    )
}