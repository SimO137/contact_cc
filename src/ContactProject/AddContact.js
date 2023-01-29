import React, { useContext, useRef } from 'react'
import "./Style.css"
import { dataContext } from './Home';

function AddContact() {
    const { contacts, dispatch, setToggle } = useContext(dataContext)
    const nameRef = useRef(),
        phoneRef = useRef(),
        cityRef = useRef();

    const func = () => {
        if (nameRef.current.value !== "" && phoneRef.current.value !== "" && cityRef.current.value !== "") {

            dispatch({ Type: "Add", Value: { id: contacts.length + 1, Name: nameRef.current.value, Phone: phoneRef.current.value, City: cityRef.current.value } })
            window.alert("Le contact ajouté ");
            setToggle(false)
        } else {
            window.alert(" Remplire tous les champs !");
        }
    }
    return (
        <>
            <div id="Form">
                <div>
                    <input type="text" ref={nameRef} placeholder='Entrer Nom' />
                </div>
                <div>
                    <input type='tel' ref={phoneRef} placeholder='Entrer Numero' />
                </div>
                <div>
                    <input type="text" ref={cityRef} placeholder='Entrer Ville' />
                </div>
            </div>
            <div id="Buttons" onClick={func}>
                <button id='AddButton'>
                    <span className="material-symbols-outlined">
                        ➕
                    </span>
                    Ajouter Contact</button>
            </div>
        </>
    )
}

export default AddContact