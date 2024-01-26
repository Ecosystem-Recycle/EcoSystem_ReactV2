import './style.css'
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import secureLocalStorage from 'react-secure-storage';
function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState<string>("") 
    const [senha, setSenha] = useState<string>("")
   
    const [nome, setNome] = useState<string>("")
    const[emailCad, setEmailCad] = useState<string>("")
    const[senhaCad, setSenhaCad] = useState<string>("")
    const [validacao, setValidacao] = useState<string>("")
    const [opcao, setOpcao] = useState<string>("")

    function buscarUser(){
        api.get("usuarios/email/" + email).then((responseEmail: any)=>{
            // //Salva usuario[objetoU]
            secureLocalStorage.setItem("userId", responseEmail.data);
            if(responseEmail.data.tipousuario.nome == "doador") {
                navigate("/querodoarpt1")
                // navigate("/querodoarpt1/" + response.data.user.id)
            } else {
                navigate("/buscarpublicacoes/")
                // navigate("/buscarpublicacoes/" + response.data.user.id)
            } 
            navigate(0)
        })      
    }
    

    function fazerLogin(event:any) {
        event.preventDefault()

        const usuario: object = {
            email: email,
            senha: senha
        }

        api.post("login", usuario).then( (response) => {
             console.log(response)
            secureLocalStorage.setItem("tokenUser", response.data);
            buscarUser();

        } )

    }

    function cadastrarUsuario(event:any) {
        event.preventDefault()

        if (senhaCad != validacao){
            alert("A senha não confere")
            return
        }

        if(!opcao){
            alert("Selecione uma opção")
            return
        }

        api.post("endereco")
        .then( (responseEndereco) => {   
            const formData = new FormData() 
            
            formData.append("nome", nome)
            formData.append("email", emailCad)
            formData.append("senha", senhaCad)
            formData.append("tipo_User", opcao)
            formData.append("endereco_id",responseEndereco.data.id)

            api.post("usuarios/login", formData)
            .then( (response) => {
                console.log(response)
                alert("Cadastro realizado com sucesso")
                secureLocalStorage.setItem("userId", response.data);
                if(response.data.tipousuario.nome == "doador") {
                    navigate("/editarperfildoador")
                    
                } else {
                    navigate("/editarperfilcoletor")

                } 
                navigate(0)

            } )
            .catch( (error) => {
                console.log(error)
            } )
        } )
        .catch( (error) => {
            console.log(error)
        } )
        
        

    }


    return (
        <>
            <main id="login">
                <h1>página Login ecosystem &amp; recycle</h1>
                <section className="sessao_formulario_login">
                    <form onSubmit={fazerLogin} className="formulario_login" method='POST'>
                        
                        <div className="campo-form">
                            <h2>Conecte-se com sua conta</h2>
                        </div>

                        <div className="campo-form">
                            <label htmlFor="email">E-mail:</label>
                            <input 
                            type="email" 
                            name='login_email'
                            autoComplete='off'
                            id='email'
                            placeholder='Digite o email'
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="senha">Senha:</label>
                            <input 
                            type="password" 
                            name='login_senha'
                            id='senha'
                            placeholder="Digite sua senha"
                            onChange={(event) => setSenha(event.target.value)}
                            required
                            />
                        </div>

                            <button
                                className="formulario_botao"
                                type="submit"
                            >
                                Entrar
                            </button>
                      
                        
                        
                        
                    </form>

                    <form onSubmit={cadastrarUsuario} className="formulario_cadastro" method='POST'>
                        <div className="campo-form">
                            <h2>Crie a sua conta. É grátis!</h2>
                        </div>
                        <div className="campo-form">
                            <label htmlFor="cadastro_name">Nome Completo:</label>
                            <input
                                type="text"
                                name="cadastro_name"
                                id="cadastro_name"
                                placeholder="Digite seu nome completo"
                            required
                            onChange={(event) => setNome(event.target.value)}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="cadastro_email">E-mail:</label>
                            <input 
                                type="email"
                                name="cadastro_email"
                                id="cadastro_email"
                                placeholder="Digite seu e-mail"
                                onChange={(event) => setEmailCad(event.target.value)}             
                                required
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="login_senha">Senha:</label>
                            <input 
                                type="password"
                                name="login_senha"
                                id="login_senha"
                                placeholder="Digite sua senha"
                                onChange={(event) => setSenhaCad(event.target.value)}
                                required
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="confirmacao_senha">Confirmar Senha:</label>
                            <input 
                                type="password"
                                name="confirmacao_senha"
                                id="confirmacao_senha"
                                placeholder="Confirme sua senha"
                                onChange={(event) => setValidacao(event.target.value)}
                                required
                            />
                        </div>
                        <div className="opcao">
                            <div className="opcao_doador">
                                <input 
                                    type="radio" 
                                    name="tipo_usuario" 
                                    id="doador"
                                    value="doador"
                                    checked={opcao === 'doador'}
                                    onChange={(event) => setOpcao(event.target.value)}
                                />
                                <label htmlFor="doador">Sou Doador</label>
                            </div>
                            <div className="opcao_coletor">
                                <input 
                                    type="radio" 
                                    name="tipo_usuario" 
                                    id="coletor" 
                                    value="coletor"
                                    onChange={(event) => setOpcao(event.target.value)}
                                />
                                <label htmlFor="coletor">Sou Coletor</label>
                            </div>
                        </div>
                        <button  type="submit" className="formulario_botao">
                            Cadastrar
                        </button>
                    </form>
                </section>
            </main>

        </>
    )
}

export default Login;