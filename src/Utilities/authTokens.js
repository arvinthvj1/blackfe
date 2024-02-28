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
    debugger
    try{
        let decrypt = decryptText(localStorage.getItem("userToken"),"secretkey");
        return  true
    }catch(err){
        return false
    }
  
}




export {
    storeUserToken,
    isUserAvailable
}