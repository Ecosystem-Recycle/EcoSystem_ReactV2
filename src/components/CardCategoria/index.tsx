import "./style.css"

export default function CardCategoria(props:any) {
    return (
        <div id="cardCategoria">
            <p>{props.titulo ? props.titulo : "Insira o título!"}</p>
            <img
                src={props.src}
                alt={props.alt ? props.alt : "Informativo Acessibilidade"}
            />
        </div>
    )
}
