import React from 'react';

import {useHistory} from 'react-router-dom';

const Accounts = () =>{

  const history = useHistory();

  return (
    <button onClick={()=>history.push("/")}>fj</button>
  );
}

export default Accounts;
