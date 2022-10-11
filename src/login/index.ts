let axios = require("axios").default;


let options = {
  method: 'GET',
  url: 'http://192.168.237.65:4000/loginSenior',
   params: {email:  "", password:""},
  headers: {'Content-Type': 'application/json'},
  
};

export const loginSenior = async (email: string, password: string) => {
  options.params = {email, password }
  
  return axios.request(options).then(function (response: { data: any; }) {
 
    localStorage.setItem("token", response.data.accessToken)
  }).catch(function (error: any) {
    console.error(error);
  });
   
}