import { ContainerProductCount, 
    NumberContainer, 
    NumberText, 
    TxtContainer } from "./styles";


type Props = {
    color: string;
    name: string;
    numeros: number
}

export function ProductCount({color, name, numeros}: Props){

    return(

        <ContainerProductCount>

        <TxtContainer style={{color}}>{name}</TxtContainer>

        <NumberContainer>
            <NumberText>{numeros}</NumberText>
        </NumberContainer>

        </ContainerProductCount>



    );
}