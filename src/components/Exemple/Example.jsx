import { useState } from "react";
function Formulaire(){
    const [nom, setNom] = useState("");
    const [age, setAge] = useState("");
    function handleSubmit(e){
        e.preventDefault();//Arréte
        console.log(e)
        alert("Bonjour" + nom +",vous avez" + age +"ans.");
        setNom("");
        setAge("");
    }
    return(
        <div>
            <h2>Formulaire d'inscription</h2>
            <form onSubmit={handleSubmit}>
                <label>Nom:</label>
                <input
                type="text"
                value={nom}
                onChange={(e) => {setNom(e.target.value);console.log(e)}}
                required
                />
                <br />
                <label>Age:</label>
                <input
                type="text"
                value={age}
                onChange={(e)=>{setAge(e.target.value);console.log(e)}}
                required
                />
                <br /><br />
                <button type="submit">Valider</button>


            </form>
        </div>
    )
}
export default Formulaire;