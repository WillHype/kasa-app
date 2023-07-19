import React from "react";
import { Link } from "react-router-dom";
import '../Error/_index.scss'

function Error(){
   return (
    <main className="container error__container">
        <div className="error">
            <h1 className="error__title">404</h1>
            <p className="error__subtitle">Oups ! La page que vous demandez n'existe pas.</p>
        </div>
        <Link to='/'>Retourner sur la page d’accueil</Link>
    </main>
   ) 
}
export default Error