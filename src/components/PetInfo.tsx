import { useState } from "react";

import Pet from "../interfaces/Pet"

export function PetInfo() {

    const [pet, setPet] = useState<Pet>({ name: "Fido", breed: "German Shepherd", image: "dog1.jpg" });
    return (
        <div className="PetInfo">
         
            <img src={pet.image} alt = "Rover"></img>
            <p>{pet.name}</p>
            <p>{pet.breed}</p>

        </div>
    )
}