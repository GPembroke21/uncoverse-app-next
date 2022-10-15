import React, { useState } from "react";
import { useTransition, animated } from 'react-spring'
import Popout from "./Popout";
import { styled } from "@mui/system";

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


function Navigation(props) {
    const maskTransitions = useTransition(props.open, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    const menuTransitions = useTransition(props.open, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' }
    })

    return (
        <nav>
            {
                maskTransitions(
                    (styles, item) =>
                        item &&
                        <animated.div
                            style={styles}
                            className="transition_a"
                            onClick={props.setOpen}
                        >
                        </animated.div>
                )
            }

            {
                menuTransitions(
                    (styles, item) =>
                        item &&
                        <animated.div
                            style={styles}
                            className="transition_b"
                        >
                            <Popout 
                            closeMenu={props.setOpen}/>
                        </animated.div>
                )
            }

        </nav>
    )
}

export default Navigation