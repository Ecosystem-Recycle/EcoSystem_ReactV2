import "./style.css"

export default function CardConfirmarColeta (props:any) {
    return(
        <div className="dados_doacao1">
        <div className="Title_Img_Donation">
          <h5>Celulares antigos de diversas marcas e modelos</h5>
          <img
            src={props.src}
            alt={props.alt}
          />
        </div>
        <div>
          <h4>Dados da Retirada</h4>
          <p>Data de publicação: {props.data}</p>
          <p>Quantidade de iten(s): {props.quantidade}</p>
          <p>Responsável: {props.responsavel}</p>
          <p>Descrição:</p>
          <p>
            <span>5x Celular Samsung A5</span>
          </p>
          <p>
            <span>2x Iphone 2</span>
          </p>
          <p>
            <span>7x Celular LG 320</span>
          </p>
          <p>
            <span>3x Tablet Samsung Galaxy Tab 2</span>
          </p>
          <p>
            <span>...</span>
          </p>
          <p>Condição: Para desmontagem/Retirada de peças</p>
          <p>
            Localização: AV do Brasil, N° 1000 - apt 25/Bloco D - SBC -
            SP CEP: 12345-678
          </p>
          <p>
            Disponibilidade de horário para agendamento: Seg - Sex /
            09:00 às 14:00
          </p>
        </div>
      </div>
    )
}