import React from "react";
import { PrivateComponent } from "../component/privatecomponent.js";

export const Private = () => {
    return (
        <div className="footer-view Login">
            <PrivateComponent />
        </div>
    )
 };
    
//     return (
//         <div className="container">
//                 <div className="card mb-3">
//                 <img src={penguinImage2} style={{width:350}} />
//                 <h4 className="card-title">¡Enhorabuena! Ahora puedes añadir más vistas como esta y probar por ti mism@</h4>
//                         <button type="submit" className="btn btn-primary" onClick={signOut}>Sign Out</button>
//                     </div>
//                 </div>
//     )
    
// }