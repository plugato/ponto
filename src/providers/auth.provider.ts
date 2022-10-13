 import { AuthProvider } from 'react-admin';
import { loginSenior } from '../login';

 
const authProvider:AuthProvider = {
  login: async ({ email, password }: any) => {
      console.log({email,password})
      localStorage.removeItem('token')
      localStorage.setItem('email', email);
      localStorage.setItem('user', email);
      await loginSenior(email, password).then( ()=>
      { 
         console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token') != null ) return Promise.resolve()
        return Promise.reject()
      } 
      ).catch(()=>Promise.reject())
      Promise.resolve()
          
  },
  logout: () => {
      localStorage.removeItem('email');
      localStorage.removeItem('token')
      return Promise.resolve();
  },
      checkAuth: () =>{
      console.log("checkAuth")
      console.log( localStorage.getItem('token') )
      return localStorage.getItem('user') ? Promise.resolve() : Promise.reject()
      },
  checkError:  (error: { status: any; }) => {
      const status = error.status;
      console.log({status})
      if (status === 401 || status === 403) {
          localStorage.removeItem('email');
          localStorage.removeItem('token')
          return Promise.reject();
      }
      // other error code (404, 500, etc): no need to log out
      return Promise.resolve();
  },
  getIdentity: () =>
  {
    console.log("checkAuth")
     return  Promise.resolve({
          id: 'user',
          fullName: 'John Doe'
     } ) } ,
  getPermissions: () =>{  console.log("checkAuth")
  return Promise.resolve('')},
};

export default authProvider;