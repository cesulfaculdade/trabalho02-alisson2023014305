import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const ContainerTop = styled.View`

    background-color: #7A4A9E;
    height: 173px;

`;
export const Container = styled.View``;


export const ContainerInput= styled.View`

    justify-content: center;
    flex-direction: row;
    top: -25px;
    height:54px;
    padding-left: 24px;
    padding-right: 24px;

`;

export const Input= styled.TextInput`
    padding: 16px ;
    text-align: center;
    border-radius: 6px;
    border-color: #808080;
    border-width: 0.5px;
    background-color: white;
    flex: 1;
    font-size: 16px;
`;

export const Button= styled.TouchableOpacity`

    border-radius: 6px;
    background-color: #31C667;
    height: 54px;
    width: 54px;
    margin-left: 4px;
    justify-content: center;
    align-items: center;
`;

export const IconButton =styled(MaterialIcons)`
    color: white;
    font-size: 20px;
`;

export const ContainerText = styled.View`

    
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    margin-bottom: 20px;
    padding-bottom: 20px;

    border-bottom-width: 0.5px;
    border-bottom-color: #D9D9D9;


`;