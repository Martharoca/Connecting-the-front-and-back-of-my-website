import React, { useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";
import penguinImage2 from "../../img/penguin2.png";


export const PrivateComponent = () => {
    const { store, actions } = useContext(Context);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    //console.log(token);
   

    useEffect(()=>{
        actions.isAuthenticated(token)
        
    }, [])
    const signOut = () => {
        actions.signOut();
        localStorage.removeItem('token');
        navigate("/");
    }
    if (store.storeToken) {
        return (
            <div className="container">
                 <div className="card mb-3">
                 <img src={penguinImage2} style={{width:350}} />
                 <h4 className="card-title">¡Enhorabuena! Ahora puedes añadir más vistas como esta y probar por ti mism@</h4>
                         <button type="submit" className="btn btn-primary" onClick={signOut}>Sign Out</button>
                     </div>
                 </div>
     )

}
};