import React from 'react';
import Template2Viewer from '../template2/viewer/Template2Viewer';

const TEMPLATE_BASE_URL = 'http://localhost:8080/';

function TemplateService(){
  const {id, type} = useParams();

  const [data, setData] = useState();

  useEffect(async ()=>{
      const data = await axios({
      method: 'get',
      withCredentials: true,
      url: TEMPLATE_BASE_URL+type+"/"+id
    });
    setData(data);
  }, [])

  return(
    <div>
      {data === undefined ? <div></div> :
      <Template2Viewer />
      }
    </div>
  )
}

export default TemplateService;