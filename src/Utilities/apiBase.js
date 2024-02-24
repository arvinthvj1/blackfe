import axios from "axios"


const apiInstance = axios.create({
    baseURL: 'http://localhost:3000/'
  });

apiInstance.interceptors.request.use(function (config) {
  debugger
  // debugger
  // Do something before request is sent
  config.headers = {
    ...config.headers, 
    withCredentials: true,
    crossdomain: true,
  };
  console.log('Request Interceptor - Request sent:', config);
  return config;
}, function (error) {
  // Do something with request error
  console.error('Request Interceptor - Request error:', error);
  return Promise.reject(error);
});



const getData =async(pathAsArray)=>{

  let promiseContainer = pathAsArray.map(async (e) => {
    try {
        let request = await apiInstance.get(e);
        return request.data;
    } catch (error) {
        console.error(`Failed to fetch data from ${e}: ${error.message}`);
        return null; // Return null or any other default value to indicate failure
    }
});

return Promise.all(promiseContainer);
}

const postData = async(path, data)=>{
  try{
    return  apiInstance.post(path, data);
  }catch(err){
    return err
  }
 
}


export {getData, postData};