import styled from "styled-components/native";




export const ContainerProductCount = styled.View`

    flex-direction: row;
    height: 19px;

`;
export const TxtContainer = styled.Text<{color : string}>`
    font-weight: bold;

`;
export const NumberContainer = styled.View`

    display: flex;
    background-color: #D9D9D9;
    border-radius: 30px;
    margin-left: 10px;
    height: 19px;
    width: 25px;
    flex-direction: column;
    align-items: center;


`;

export const NumberText = styled.Text``;