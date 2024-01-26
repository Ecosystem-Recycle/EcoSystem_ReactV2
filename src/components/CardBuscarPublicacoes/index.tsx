import './style.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import secureLocalStorage from 'react-secure-storage';



export default function CardBuscarPublicacoes(props: any) {

    const navigate = useNavigate()


    
    function FormataStringData(data:string):string {
        //formata a data do MYSQL -> (1900-12-25) para (25/12/1900)
        let ano  = data.split("-")[0];
        let mes  = data.split("-")[1];
        let dia  = data.split("-")[2];
      
        return dia + '/' + ("0"+mes).slice(-2) + '/' + ("0"+ano).slice(-2);
        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    }

    function agendarColeta(id:any):any{
        api.get("anuncio/" + id).then((responseAnuncio: any)=>{
            if(responseAnuncio.data){
                secureLocalStorage.setItem("anuncioInfo", responseAnuncio.data);
                navigate("/agendarcoleta") 
                return true;
            } else {
                return false;
            }
            
        })
        
    }

    return (

        <div id="cardBuscarPublicacoes" className="cardAgendar">
            <div>
                <img
                    src={"http://localhost:8090/img/" + props.imagem }
                    alt={"Imagem "+ props.index +" da Galeria de fotos"} 
                />
            </div>
            <div className="conteudoCard">
                <div className="cardInformacao">
                    <h2>{props.titulo}</h2>
                    <p><span>Data de publicação:</span> { FormataStringData(props.data) }</p>
                    <p><span>Quandidade de iten(s):</span> { props.quantidade }</p>
                    <div>
                        <p><span>Descrição:</span></p>
                        <div>
                            { 
                                props.descricoes.map((descricao: any, index: number) => {
                                    return <p key={ index }>{ descricao.quantidade+"x "+ descricao.nome }</p>
                                })
                            } 
                        </div>
                    </div>
                    <p>{props.cidade} - {props.estado}</p>
                </div>
                    {/* <Link 
                        onClick={ () => agendarColeta(props.id) }
                        to="/agendarcoleta"
                    >
                        Agendar
                    </Link> */}

                    <button 
                        type="button"
                        onClick={ () => agendarColeta(props.id) }
                    >
                        Agendar
                    </button>
            </div>
        </div>
    )

}