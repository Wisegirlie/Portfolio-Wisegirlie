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
             © Gabriela Waisman <br />
             {/* <a href="tel:+6476422281">PH: (647) 642-2281</a> <br /> */}
             <a href="mailto:gabywaisman@outlook.com">gabywaisman@outlook.com</a> <br />  
             
             <Nets className="net_icon" />             
        </footer>
    );
}
   