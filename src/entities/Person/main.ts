import { fetchUserData,  type Data } from "./main.api";


function isData(obj: any): obj is Data {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      typeof obj.id === 'string' &&
      typeof obj.name === 'string' &&
      typeof obj.country === 'string' &&
      typeof obj.city === 'string' &&
      typeof obj.profession === 'string' &&
      (obj.email === undefined || typeof obj.email === 'string') &&
      (obj.description === undefined || typeof obj.description === 'string')
    );
  }  
  
export const initUser = async (id: string) => {
    const localUser = localStorage.getItem("currentUser");
    console.log(localUser)
    if(localUser == null || undefined || !localUser || JSON.parse(localUser) !== isData(JSON.parse(localUser))){
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