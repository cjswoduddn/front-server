import React from 'react';
import Template2Viewer from '../template2/viewer/Template2Viewer';

const TEMPLATE_BASE_URL = 'http://ec2-3-35-145-52.ap-northeast-2.compute.amazonaws.com:8080/';

function TemplateService(){
  // const {id, type} = useParams();

  // const [data, setData] = useState();

  // useEffect(async ()=>{
  //     const data = await axios({
  //     method: 'get',
  //     withCredentials: true,
  //     url: TEMPLATE_BASE_URL+"/"+id
  //   });
  //   setData(data);
  // }, [])
  let data = 1;

  return(
    <div>
      {data === undefined ? <div></div> :
      <Template2Viewer />
      }
    </div>
  )
}

export default TemplateService;