import './style.css'

export default function CardFinalizada(props: any) {

    return (
        <div id='CardFinalizada'>
        <div className="cards">
            <h4>{props.tituloCard ? props.tituloCard : "Título"}</h4>
            {/* Arrumar rota de imagem */}
            <img
                src={ props.imgBackground }
                alt="Imagem com sucata de aparelhos celulares gsm"
            />
            <div className="WrapperCard">
                <p>Data de publicação: {props.conteudoCardData ? props.conteudoCardData : "dd/mm/aaaa"} </p>
                <p>Quantidade de iten(s): {props.conteudoCardQuantidade ? props.conteudoCardQuantidade : "x"}</p>
                <p>Responsável: {props.conteudoCardOwner ? props.conteudoCardOwner : "owner"}</p>

                <div className="Descricaocards">
                    <p>Descrição: </p>
                    <div>
                        <p>{props.quantidadeProduto1 ? props.quantidadeProduto1 : ''} {'x'} {props.descricao1 ? props.descricao1 : "-"}</p>
                        <p>{props.quantidadeProduto2 ? props.quantidadeProduto2 : ''} {'x'} {props.descricao2 ? props.descricao2 : "-"}</p>
                    </div>
                </div>
                <p>Localização: <strong>{props.localizacao ? props.localizacao : "localização"}</strong></p>
                {/* usar validador abaixo para alterar conforme o status*/}
                <div className="card_Status">
                    <div className="circle_Status circle_Green"></div>
                    <p>Status: Coleta Finalizada com Sucesso</p>
                </div>
            </div>
        </div>
        </div>
    )

}