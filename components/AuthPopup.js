import { useState } from 'react';
import { useTransition, animated } from 'react-spring'
import { signOut } from "../src/auth/SignOut";
import { SignInForm } from "../src/auth/SignIn";
import { SignUpForm } from "../src/auth/SignUp";

export default function AuthPopup(props) {
    const [logIn, setLogIn] = useState(true)
    const maskTransitions = useTransition(props.open, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    const menuTransitions = useTransition(props.open, {
        from: { opacity: 0 },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0 }
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
                            className="auth_transition_b"
                        >
                            {logIn ?
                                <SignInForm signUpForm={() => setLogIn(false)} closeMenu={props.setOpen} />
                                :
                                <SignUpForm signInForm={() => setLogIn(true)} closeMenu={props.setOpen} />
                            }
                        </animated.div>
                )
            }

        </nav>
    )
}