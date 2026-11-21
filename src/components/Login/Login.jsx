import { useState } from "react";


function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erreurs, setErreurs] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        const nouvellesErreurs = {};

        if (!email.trim()) {
            nouvellesErreurs.email = "Veuillez introduire votre email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            nouvellesErreurs.email = "Adresse email invalide";
        }

        if (!password.trim()) {
            nouvellesErreurs.password = "Veuillez introduire votre mot de passe";
        } else if (password.length < 8) {
            nouvellesErreurs.password = "Le mot de passe doit contenir au moins 8 caractères";
        } else if (!/[A-Z]/.test(password)) {
            nouvellesErreurs.password = "Ajoutez au moins une lettre majuscule";
        } else if (!/[0-9]/.test(password)) {
            nouvellesErreurs.password = "Ajoutez au moins un chiffre";
        } else if (!/[^a-zA-Z0-9]/.test(password)) {
            nouvellesErreurs.password = "Ajoutez au moins un caractère spécial";
        }

        setErreurs(nouvellesErreurs);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email"
                id="email"
                placeholder="Choisir votre email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
                {erreurs.email && <span>{erreurs.email}</span>}
                <br/>
                <label htmlFor="password">Password</label>
                <input type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
                {erreurs.password && <span>{erreurs.password}</span>}
                <button type="submit">Se connecter </button>
            </form>

        </div>
    )
}
export default Login;
