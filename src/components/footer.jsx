/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |   COMPONENT:    FOOTER      |
   =============================== */ 
   
import '../css/footer.css';
import { Nets } from "./nets.jsx";

export function Footer() {

    return (
        <footer>
             <div className="footer-data">
                <strong>Gabriela Waisman</strong>
                <span style={{ fontSize: '90%', fontWeight: '300'}}>Software, Web & Mobile Developer</span>
             </div>
             {/* <a href="tel:+6476422281">PH: (647) 642-2281</a> <br /> */}
             <a href="mailto:developer@gabywaisman.com">developer@gabywaisman.com</a> <br />               
             <Nets className="net_icon" />             
        </footer>
    );
}
   