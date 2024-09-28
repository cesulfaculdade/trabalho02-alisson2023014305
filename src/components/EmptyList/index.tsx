import { Text, 
    View } from "react-native";

import { EmptyListContainer, 
    Image, 
    SubTitle, 
    Title } from "./styles";

import shopping_list from "../../assets/shopping_list.png"


export function EmptyList(){
    return(

        <EmptyListContainer>


            <Image source={shopping_list}></Image>

            <Title>Você ainda não tem produtos na lista de compra </Title>
            <SubTitle>Adicione produtos e organize sua lista de compras</SubTitle>
            
        </EmptyListContainer>


    );



}