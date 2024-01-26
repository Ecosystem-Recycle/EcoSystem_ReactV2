import './style.css'
import icoDeletar from '../../assets/img/del.svg'

export default function LinhaProduto(props:any) {
    return (
        <>
            <td data-cell="item">{props.descricaoNome ? props.descricaoNome : "TESTE"}</td>
            <td data-cell="quantidade">{props.descricaoQuantidade ? props.descricaoQuantidade : 2}</td>
            <td data-cell="del_Ico"><img src={ icoDeletar } alt="Ícone de deletar uma linha de doação" /></td>
        </>

    )
}

