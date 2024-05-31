/* ===============================
   |  Student: GABRIELA WAISMAN  |
   |         # 301328259         |
   =============================== 
   |   COMPONENT:    FOOTER      |
   =============================== */ 
   
import './footer.css'
import { Nets } from "./nets.jsx";

export function Footer() {

    return (
        <footer>
             © Gabriela Waisman <br />
             {/* <a href="tel:+6476422281">PH: (647) 642-2281</a> <br /> */}
             <a href="mailto:gabywaisman@hotmail.com">gabywaisman@hotmail.com</a> <br />  
             
             <Nets className="net_icon" />             
        </footer>
    );
}
   