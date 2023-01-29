import React, { useContext } from 'react'
import { dataContext } from './Home';

function ShowContact() {
    const { contacts, dispatch } = useContext(dataContext)
    return (
        <>
            <p>Tous les contacts</p>
            <div id="List">
                {
                    contacts.map(c =>
                        <div className="Contact" key={c.id}>
                            <div className="ContactIcon" style={{ display: 'flex', justifyContent: "center" }}>
                                
                            </div>
                            <div className="FullName">{c.Name}</div>
                            <div className="Phone">{c.Phone}</div>
                            <div className="city">{c.City}</div>
                            <div className='DeleteButton' onClick={() => dispatch({ Type: "Remove", Value: c.id })}>
                                <span className="material-symbols-outlined">
                                    delete_forever
                                </span>
                            </div>
                        </div>)
                }
            </div>
        </>
    )
}

export default ShowContact