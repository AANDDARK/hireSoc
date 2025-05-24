import { fetchUserData, type Data } from "./main.api";

export const initUser = async (id: string) => {
    const localUser = localStorage.getItem("currentUser");
    console.log(localUser)
    if(localUser == null || undefined || !localUser){
        try{
            const user = await fetchUserData(id)
            localStorage.setItem("currentUser", JSON.stringify(user));
            return user;
        } catch(err){
            throw err
            return err;
        }
    }
};