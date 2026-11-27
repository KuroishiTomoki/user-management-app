import { memo, type FC } from "react";
import { Route, Routes } from "react-router";
import { Login } from "../page/Login";
import { homeRouters } from "./HomeRouters";

export const Router: FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path= "/home" >
                {homeRouters.map((home) => {
                    return(
                        <Route key={home.path} path={home.path} element={home.children}/>
                    )
                })}
            </Route>
        </Routes>
    )
})
