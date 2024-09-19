import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
        <div className="errorDiv">
            <h1 id="error404">404</h1>
            <p id="errorOups">Oups! La page que vous demandez n'existe pas.</p>
            <Link id="goBackLink" to={`/`}> <p>Retourner sur la page d’accueil </p></Link>
        </div>
    </>
  );
}

export default ErrorPage;
