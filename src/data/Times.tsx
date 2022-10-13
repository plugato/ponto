import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const getInfo = (
  setData: {
    (value: React.SetStateAction<never[]>): void;
    (arg0: any): void;
  },
  token: string
) => {
  console.log({token})
  const options = {
    method: 'POST',
    url: 'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/hcm/pontomobile/queries/clockingEventByActiveUserQuery',
    headers: {
      cookie: '_ga=GA1.4.165761989.1651613027; _gid=GA1.4.584085928.1651613027; TS01cebc55=01a760ec21cacfc29845e9a3feaeec26b5a1508ec21443f48b829fe4152526e1f2d18cbdc06ab1515a67882d84035c41cb6119ea2b; TS015ca226=01a760ec21cacfc29845e9a3feaeec26b5a1508ec21443f48b829fe4152526e1f2d18cbdc06ab1515a67882d84035c41cb6119ea2b; com.senior.pau.domain=.senior.com.br; com.senior.pau.services.url=https%3A%2F%2Fplatform.senior.com.br%2Ft%2Fsenior.com.br%2Fbridge%2F1.0%2Frest%2F; com.senior.pau.odata.url=https%3A%2F%2Fplatform.senior.com.br%2Ft%2Fsenior.com.br%2Fbridge%2F1.0%2Fodata%2F; com.senior.pau.soap.url=https%3A%2F%2Fplatform.senior.com.br%2Ft%2Fsenior.com.br%2Fbridge%2F1.0%2Fsoap%2F; com.senior.pau.token="{\"version\":1,\"scope\":\"desktop\",\"expires_in\":604800,\"username\":\"08460903923@gazin.com.br\",\"token_type\":\"bearer\",\"access_token\":\"j9uTSweyZTfXLCTVULo46bB5ycuus78R\",\"refresh_token\":\"9OLc8I108rhPtMOAlh7cZHS2yO2yzabJ\",\"type\":\"internal\"}"; com.senior.pau.userdata=%7B%22id%22%3A%22ae80c9b4-df2a-4eb9-87fe-89871ecc631e%22%2C%22username%22%3A%2208460903923%40gazin.com.br%22%2C%22subject%22%3A%2208460903923%22%2C%22fullname%22%3A%22MANOEL+RICARDO+DE+AZEVEDO%22%2C%22description%22%3A%22%22%2C%22email%22%3A%22%22%2C%22tenantName%22%3A%22gazincombr%22%2C%22tenantLocale%22%3A%22pt-BR%22%2C%22locale%22%3A%22pt-BR%22%7D; com.senior.domain=.senior.com.br; com.senior.services.url=https%3A%2F%2Fplatform.senior.com.br%2Ft%2Fsenior.com.br%2Fbridge%2F1.0%2F; com.senior.token=%7B%22version%22%3A1%2C%22scope%22%3A%22desktop%22%2C%22expires_in%22%3A604800%2C%22username%22%3A%2208460903923%40gazin.com.br%22%2C%22token_type%22%3A%22bearer%22%2C%22access_token%22%3A%22j9uTSweyZTfXLCTVULo46bB5ycuus78R%22%2C%22refresh_token%22%3A%229OLc8I108rhPtMOAlh7cZHS2yO2yzabJ%22%2C%22type%22%3A%22internal%22%2C%22email%22%3A%22%22%2C%22fullName%22%3A%22MANOEL+RICARDO+DE+AZEVEDO%22%2C%22tenantName%22%3A%22gazincombr%22%2C%22locale%22%3A%22pt-BR%22%7D; com.senior.base.url=https%3A%2F%2Fplatform.senior.com.br; TS01cebc55030=01686c6380ba2f72ec36af9bf80532c269a24fa823fe7c29ac50760623c88590a57eb9b2104ddf426e1e3075ecb164b6c99a8039b4; com.senior.portal.url=https%3A%2F%2Fplatform.senior.com.br%2Fsenior-x%2F; _gid=GA1.3.584085928.1651613027; _ga=GA1.3.165761989.1651613027; _hjSessionUser_2856786=eyJpZCI6IjNhMjY0ZWU4LTVjNmYtNTg0ZS1hMmNjLWJhZmZjODViMWIxMiIsImNyZWF0ZWQiOjE2NTE2MTMxMzUwOTEsImV4aXN0aW5nIjpmYWxzZX0=; _hjFirstSeen=1; _hjSession_2856786=eyJpZCI6IjMxZTdjODdiLTlmM2UtNGQ3Yi1iMmNiLTAxNWE0ZjU5Zjk2ZCIsImNyZWF0ZWQiOjE2NTE2MTMxMzUwOTgsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _ga_T1C5R3GZCW=GS1.1.1651613134.1.0.1651613202.0; TS018608fa=01a760ec217e99f723b0fbc1ab8cccbbab9191b5376877eff52f31fc307057717c24131dee6dc85a4bf8b2bda784ee147e130201ba',
      authority: 'platform.senior.com.br',
      accept: 'application/json, text/plain, */*',
      'accept-language': 'pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7,pt-BR;q=0.6',
      authorization: `bearer ${token}`,
      'cache-control': 'no-cache',
      'Content-Type': 'application/json',
      origin: 'https://platform.senior.com.br',
      pragma: 'no-cache',
      referer: 'https://platform.senior.com.br/hcm-pontomobile/hcm/pontomobile/',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36'
    },
    
  
    data: {
      filter: {
        activePlatformUser: true,
        pageInfo: { page: 0, pageSize: '5000' },
        nameSearch: '',
        sort: { field: null, order: 'DESC' },
      },
    },
  };
console.log(options)
  axios
    .request(options)
    .then(function (response) {
      setData(response.data.result);
      console.log(response.data.result);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const Times = () =>{
  const [token,setToken] =useState("")
  useEffect(()=>{
    setToken(localStorage.getItem('token')||"")
  })
  const [dados,setDados] =useState([])
  useEffect(()=>{
    console.log("getINFO",{token})
    getInfo(setDados, token)
  },[token])

  const separeteItem = (data: any): any => {
    //data.reduce();
    const data2 = [...data];

    const arr = data2.reduce((acc, curr) => {
      if (curr.dateEvent.toString() in acc) {
        acc[curr.dateEvent.toString()].push({
          timeEvent: curr.timeEvent,
          geolocation: curr.geolocation,
        });
      } else {
        acc[curr.dateEvent.toString()] = [
          { timeEvent: curr.timeEvent, geolocation: curr.geolocation },
        ];
      }

      return acc;
    }, []);

    return arr;
  };
 
  return <Table>
            <Thead>
              <Tr>
                <Th>1</Th>
                <Th>2</Th>
                <Th>3</Th>
                <Th>4</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.entries(separeteItem(dados)).map((data:any )=>{ 
              
                  return ( <Tr>{data[0] as any}
                                  {data[1].sort((a: any,b: any)=>
                                  { 
                                    console.log(Number(a.timeEvent.slice(0,2)),Number(b.timeEvent.slice(0,2)))
                                    return Number(a.timeEvent.slice(0,2))-Number(b.timeEvent.slice(0,2)) }
                                  ).map((dt:any)=>{
                                    console.log(dt)
                                    return <Td>{String(dt.timeEvent).slice(0,5)}</Td>
                                  })}
                          </Tr> )})
              }
            </Tbody>
         </Table>
}


export default Times