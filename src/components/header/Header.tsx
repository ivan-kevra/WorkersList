import { Button } from "../button/Button"
import { Typography } from "../typography/Typography"
import style from "./Header.module.scss"
import {Link, useLocation  } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    return (
        <>
            <Typography variant='h1'>Workers list</Typography>
            <div className={style.buttons}>
                <Button as={Link} to={'/'} className={location.pathname === '/' ? style.active : ''}>All workers</Button>
                <Button as={Link} to={'/doctors'} className={location.pathname === '/doctors' ? style.active : ''}>Doctors</Button>
                <Button as={Link} to={'/nurses'} className={location.pathname === '/nurses' ? style.active : ''}>Nurses</Button>
            </div>
        </>
    )
}