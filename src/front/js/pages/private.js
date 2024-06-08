import React, { useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";


export const Private = () => {
    const { store, actions } = useContext(Context);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(()=>{
        actions.isAuthenticated(token)
        
    }, [])
    const signOut = ()=>{
        actions.signOut();
        localStorage.removeItem('token');
        navigate("/");
    }
    if (store.storeToken) {
        return (
            <div className="container">
                <div className="card mb-3">
                    <img src="https://static.wixstatic.com/media/1061d9_aa94cd19e56b4ff1b333a448cb4affcd~mv2.jpg/v1/fill/w_602,h_364,al_c,lg_1,q_80/1061d9_aa94cd19e56b4ff1b333a448cb4affcd~mv2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Congrats, you have successfully logged in""" </h5>
                        <button type="submit" className="btn btn-custom" onClick={signOut}>Cerrar sesión</button>
                    </div>
                </div>

            </div>
        )
    }else navigate("/")
    return (<></>)
    }




// import React, { useContext, useState, useEffect} from "react";
// import { Context } from "../store/appContext";
// import "../../styles/index.css";
// import { useNavigate } from "react-router-dom";


// export const Private = () => {
//     const { store, actions } = useContext(Context);
//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();

//     useEffect(()=>{
//         actions.isAuthenticated(token)
        
//     }, [])
//     const signOut = ()=>{
//         actions.signOut();
//         localStorage.removeItem('token');
//         navigate("/");
//     }
//     if (store.storeToken) {
//         return (
//             <div className="container">
//                 <div className="card mb-3">
//                     <img src="https://static.wixstatic.com/media/1061d9_aa94cd19e56b4ff1b333a448cb4affcd~mv2.jpg/v1/fill/w_602,h_364,al_c,lg_1,q_80/1061d9_aa94cd19e56b4ff1b333a448cb4affcd~mv2.jpg" className="card-img-top" alt="..."/>
//                     <div className="card-body">
//                         <h5 className="card-title">Congrats, you have successfully logged in""" </h5>
//                         <button type="submit" className="btn btn-custom" onClick={signOut}>Cerrar sesión</button>
//                     </div>
//                 </div>

//             </div>
//         )
//     }else navigate("/")
//     return (<></>)
    
// }