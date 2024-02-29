import { postData } from "./apiBase";
import { decryptText, encryptText } from "./cryptEncryption";

// import { encryptedMessage } from "./cryptEncryption";

const storeUserToken = (token) =>{
    if(token){
        localStorage.setItem("userToken",encryptText(token, "secretkey"));
        return true
    }
    return false
};



const isUserAvailable = async()=>{
    try{
        let authVerify = await postData("user/isAuthUser", {
            token : localStorage.getItem("userToken")
        });
        if(authVerify.status == 201){
            return true
        }
        return false
    }catch(err){
        return false
    }
  
}




export {
    storeUserToken,
    isUserAvailable
}