import {Component} from "react"
import { useState } from "react";


import flecheGauche from "../data/Vector.png"
import flecheDroite from "../data/VectorD.png"

import "../styles/carrousel.css"

export function Carrousel ({images}) {
    const [position, setPosition] = useState(0)
    let nbrImage = images.length;

    const imageSuivante = () => {
        if (position === nbrImage - 1 ) {
            setPosition(nbrImage = 0)
        }
        else {
            setPosition(position + 1)
        }
        return setPosition;
    }

    const imagePrecedent = () => {
        if (position ===  0) {
            setPosition(nbrImage - 1)
        }
        else {
            setPosition(position - 1)
        }
        return setPosition;
    }

    return (
        <div className="carrousel">
            <div className="carrousel-content">
                
                
                {images.map((image, index) => {
                    return(
                        <div
                            key={index}
                            className={
                                index === position ? "image-active" : "image-inactive"
                            }
                        >
                            {index === position && (
                                <img src={image} className="image-active" />
                            )}
                        </div>

                    )
                    }
                    )
                }
                {

                nbrImage > 1 && <img src={flecheGauche} className="fleche-gauche" onClick={imagePrecedent} />
                }

                {
                nbrImage > 1 && <img src={flecheDroite} className="fleche-droite" onClick={imageSuivante} />
                }
                {
                <p className="texte-position">{position + 1}/{nbrImage}</p>
                }
            </div>
        </div>
    )
}