import './style.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../utils/api';
import secureLocalStorage from 'react-secure-storage';
import Swal from 'sweetalert2';



export default function CardBuscarPublicacoes(props: any) {

    const navigate = useNavigate()

    const [userId, setUserId] = useState<any>({});

    useEffect(() => {
        const userObj: string | number | boolean | object | null = secureLocalStorage.getItem("userId");
        setUserId(userObj)
    }, [userId])

    function FormataStringData(data: string): string {
        //formata a data do MYSQL -> (1900-12-25) para (25/12/1900)
        let ano = data.split("-")[0];
        let mes = data.split("-")[1];
        let dia = data.split("-")[2];

        return dia + '/' + ("0" + mes).slice(-2) + '/' + ("0" + ano).slice(-2);
        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    }

    function agendarColeta(id: any): any {
        let validadorCadastro = true;

        async function validarCadastro() {
            Object.values(userId).forEach((valor) => {
                if (valor == null || valor == undefined) {
                    validadorCadastro = false;
                }
            });
            if (!validadorCadastro) {
                await Swal.fire({
                    title: "Atenção!",
                    text: "Por favor, complete o cadastro antes de continuar",
                    icon: "warning"
                });
                navigate("/editarperfilcoletor")
                return
            }
            api.get("anuncio/" + id).then((responseAnuncio: any) => {
                if (responseAnuncio.data) {
                    secureLocalStorage.setItem("anuncioInfo", responseAnuncio.data);
                    navigate("/agendarcoleta")
                    return true;
                } else {
                    return false;
                }

            })

        }
        validarCadastro()
    }

    return (

        <div id="cardBuscarPublicacoes" className="cardAgendar">
            <div>
                <img
                    src={"http://localhost:8090/img/" + props.imagem}
                    alt={"Imagem " + props.index + " da Galeria de fotos"}
                />
            </div>
            <div className="conteudoCard">
                <div className="cardInformacao">
                    <h2>{props.titulo}</h2>
                    <p><span>Data de publicação:</span> {FormataStringData(props.data)}</p>
                    <p><span>Quandidade de iten(s):</span> {props.quantidade}</p>
                    <div>
                        <p><span>Descrição:</span></p>
                        <div>
                            {
                                props.descricoes.map((descricao: any, index: number) => {
                                    return <p key={index}>{descricao.quantidade + "x " + descricao.nome}</p>
                                })
                            }
                        </div>
                    </div>
                    <p>{props.cidade} - {props.estado}</p>
                </div>
                <button
                    type="button"
                    onClick={() => agendarColeta(props.id)}
                >
                    Agendar
                </button>
            </div>
        </div>
    )

}