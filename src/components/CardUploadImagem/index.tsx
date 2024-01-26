import "./style.css"

export default function CardUploadImagem(props:any) {
    return (
        <div id="cardUploadImagem">
        <img 
        src={props.src} 
        alt={props.alt} />
        </div>
    )
}