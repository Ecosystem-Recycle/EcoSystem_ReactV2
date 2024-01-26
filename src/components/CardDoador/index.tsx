import './style.css'
import imgIconeEditar from '../../assets/img/ico_edit.svg'
import imgIconeVisualizar from '../../assets/img/ico_eye.svg'
import imgIconeDeletar from '../../assets/img/ico_delete.svg'
import { Link } from 'react-router-dom';

function CardDoador(props:any) {

    function msgExcluirDoacao():void{
        alert('Doação deletada do sistema com sucesso!');
    };

    function FormataStringData(data:string):string {
        //formata a data do MYSQL -> (1900-12-25) para (25/12/1900)
        let ano  = data.split("-")[0];
        let mes  = data.split("-")[1];
        let dia  = data.split("-")[2];
      
        return dia + '/' + ("0"+mes).slice(-2) + '/' + ("0"+ano).slice(-2);
        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    }

    return (
        <>
            <div id='imgDoador'>
                <h4>{ props.title }</h4>
            
            
                <img className="fotoAnuncio"
                    src={"http://localhost:8090/img/" + props.imagem }
                    alt={"Imagem "+ props.index +" da Galeria de fotos"}
                />
            </div>
            <div id='cardDoador'>
            <div className="WrapperCard">
                <p><span>Data de publicação:</span> { FormataStringData(props.dataPubliq) }</p>
                <p><span>Quantidade de iten(s):</span> {props.totalItens}</p>
                <div className="Descriocaocards">
                    <p><span>Descrição:</span></p>
                    <div>
                            { 
                                props.descricoes.map((descricao: any, index: number) => {
                                    return <p key={ index }>{ descricao.quantidade+"x "+ descricao.nome }</p>
                                })
                            } 
                    </div>
                </div>
                <div className="card_Status">
                    <div className={"circle_Status " + props.corStatus}></div>
                    <p>
                        <span>Status:</span> {props.status}
                    </p>
                </div>
                <div className="iconesCards">
                    <Link to="/querodoarpt2"><img src={ imgIconeEditar } alt="Icone de Editar" /></Link>
                    <Link to="/querodoarpt2"><img src={ imgIconeVisualizar } alt="Icone de visualizar"/></Link>
                    <Link to="/querodoarpt1" onClick={ msgExcluirDoacao }><img src={ imgIconeDeletar } alt="Icone de Deletar"/></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardDoador;