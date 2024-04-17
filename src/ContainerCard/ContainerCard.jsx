


const ContainerCard = ({imagem, titulo, texto, }) =>{
    return(
        <> 
        <img src={imagem} alt="" />
        <h1>{titulo}</h1>
        <p>{texto}</p>
        </>
    )
}

export default ContainerCard;