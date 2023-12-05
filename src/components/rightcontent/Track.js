import ListHeader from "./helpers/ListHeader"
import { GetAPI } from "../../APIContext"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import hls from 'hls.js'



const Track = () =>{
  const [track, setTrack] = useState({}) 
  const APIParams = GetAPI()
  const {id} = useParams()
  const api = `${APIParams.baseURL}tracks?ids=${id}&client_id=${APIParams.clientId}&%5Bobject%20Object%5D=&app_version=1701429092&app_locale=en`



useEffect(()=>{
  const getTracks = async () => {
    try {
      let response = await fetch(api, {
        method: 'GET',
        headers: {
          Authorization: APIParams.Authorization,
        },
      });

      response = await response.json();
      setTrack( ...response);
    } catch (error) {
      console.warn(error);
    }
  };
  getTracks()
},[])

  async function playHandler(e) {
    if (e.target.id !== "play_button") return


  }


    return(
        <div className="playlist">
       <ListHeader list={track} handleClick={playHandler} />
      </div>
    )
}
export default Track