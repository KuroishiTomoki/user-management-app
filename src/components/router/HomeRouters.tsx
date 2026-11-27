import { Home } from "../page/Home";
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
    
]
