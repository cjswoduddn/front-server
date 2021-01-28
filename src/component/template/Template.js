import React from 'react';
import { Link } from 'react-router-dom';

const Template = () =>{
    return (
        <div>
          <div className="wallpaper" style={{textAlign: "center", alignItems: "center"}}>
              <div className="content">
                  <Link to="/template/t1"><div className="block x1">x1</div></Link>
                  <Link to="/t2"><div className="block x2">x2</div></Link>
                  <div className="block x3">x3</div>
                  <div className="block x4">x4</div>
                  <div className="block x5">x5</div>
              </div>
          </div>
        </div>

    );
}

export default Template;
