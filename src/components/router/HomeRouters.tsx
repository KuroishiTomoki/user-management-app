import { Home } from "../page/Home";
import { Page404 } from "../page/page404";
import { Setting } from "../page/Setting";
import { UserManagement } from "../page/UserManagement";


export const homeRouters = [
    {
        path: "",
        children: <Home/>
    },
    {
        path: "userManagement",
        children: <UserManagement/>
    },
    {
        path: "setting",
        children: <Setting/>
    },
    {
        path: "*",
        children: <Page404/>
    },
    
    
]
