import React, { useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";
import penguinImage2 from "../../img/penguin2.png";


export const PrivateComponent = () => {
    const { store, actions } = useContext(Context);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
   

    useEffect(() => {
        if (token) {
            actions.isAuthenticated(token);
        } else {
            navigate("/login");
        }
    }, [token, actions, navigate]);

    const signOut = () => {
        actions.signOut();
        localStorage.removeItem('token');
        navigate("/");
    };
    if (store.storeToken) {
        return <h4>Cargando...</h4>
    }
    return (
        <div className="text-center mt-5">
            <h2>¡¡ENHORABUENA!! Has conseguido entrar a una vista privada</h2>
            <p>
                <img src={penguinImage2} style={{ width: 350 }} />
            </p>
            <button type="submit" className="btn btn-custom btn-lg mb-5 fs-4" onClick={signOut}>Cerrar sesión</button>
        </div>
     );
} 