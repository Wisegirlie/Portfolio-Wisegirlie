/* ===============================
   |  Student: GABRIELA WAISMAN  |
   |         # 301328259         |
   =============================== 
   |   COMPONENT: not used       |
   |      (saved for later)      |
   =============================== */ 
   
const nav_buttons = getElementsbyClassName ("nav-button");
nav_buttons.classList.remove("nav-button-dot");

export default function Nav_dot(props) {
    return (
        <div>
            <script>
               const nav_active = getElementbyId("props.id");
               nav_buttons.classList.add("nav-button-dot");
            </script>    
        </div>
    );
}
   