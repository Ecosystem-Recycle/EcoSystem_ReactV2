import './style.css'
import { useState } from 'react';


function CardDuvidas(props: any) {
    // Função Esconder Menus -> DUVIDAS
    const [active, setActive] = useState<any>(false);

    const handleToggle = () => {
        setActive(!active);
    };

    return (
        <>
            <h3 className="faq-title">{props.pergunta}</h3>
            <p className={!active ? "ativo faq-text" : "faq-text"}>
                {props.resposta}
            </p>
            <button onClick={ handleToggle } className="faq-toggle">
                <i className="fas fa-chevron-down" />
                <i className="fas fa-times" />
            </button>
        </>
    )
}

export default CardDuvidas