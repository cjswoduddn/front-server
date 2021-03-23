import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const TEMPLATE_BASE_URL = 'http://localhost:8080/signout';

const Account = ({memberId, mode}) =>{

  const history = useHistory();

  const signOut = () =>{
    axios({
      method: 'post',
      withCredentials: true,
      url: TEMPLATE_BASE_URL,
    })
    .then((res)=>{
      localStorage.memberId = "0";
      history.push({
        pathname: "/template"
      });
    })
    .catch((err)=>{
      alert(err.data);
    });

  }

  useEffect(()=>{
  }, [memberId]);

  return(
    <>
          {memberId === "0"?
          <Link to="/account" className="nav-link">
            <li className="nav-li"  style={{color: mode === 'nav-shrink' ? 'white' : null}}>login</li>
          </Link>
          :
          <button onClick={signOut}>logout</button>
          }
    </>
  )
}

export default Account;
