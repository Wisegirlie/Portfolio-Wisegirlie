import '../css/loader.css'
import loader_img from '../assets/loading2.gif';
import '../css/loader.css'

export default function Loader() {

    return (
      <div className="loader_fullscreen" id="form_loader">
        <div className="loader_container">
          <img src={loader_img} className="loader_img" alt="Sending Message" />
          <div className="loader_texto">Sending message</div>
        </div>
      </div>
    );    
}