import '../css/loader.css'
import loader_img from '../assets/loading2.gif';
import '../css/loader.css'

export default function Loader() {

    return (
      <div class="loader_fullscreen" id="form_loader">
        <div class="loader_container">
          <img src={loader_img} class="loader_img" alt="Sending Message" />
          <div class="loader_texto">Sending message</div>
        </div>
      </div>
    );    
}