import styled from "styled-components/native";




export const ProductContainer = styled.View<{done: boolean}>`
    gap: 8px;
    padding-top: 12px;
    padding-right: 8px;
    padding-bottom: 12px;
    padding-left: 12px;
    border-width: 1px;
    width: 90%;
    padding: 12px;
    justify-content: space-between;
    border-radius: 6px;
    border-color: #808080;
    flex-direction: row;
    align-self: center;



`;
export const RadioButton = styled.TouchableOpacity``;

export const ProductDescription = styled.Text`

    flex: 1;
    font-size: 14px;
    color: #262626;
    margin-left: 8px;
    
`;
export const ProductDone = styled(ProductDescription)`
    flex: 1;
    font-size: 14px;
    color: #262626;
    margin-left: 8px;
    text-decoration: line-through;
`;

export const ButtonRemove = styled.TouchableOpacity`

    width: 32px;
`;
