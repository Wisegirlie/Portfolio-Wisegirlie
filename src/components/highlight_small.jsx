/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |   COMPONENT:                |
   |        HIGHLIGHT SMALL      |
   =============================== */ 
   import '../css/highlight_small.css';
   
   export default function Highlight_small(props) {
    return (
        <div className="highlight_small">
                {props.texto}
        </div>
    );
}