import { ButtonRemove, 
  ProductContainer, 
  ProductDescription, 
  ProductDone, 
  RadioButton } from "./styles";

import { MaterialIcons, 
  MaterialCommunityIcons } from '@expo/vector-icons';


type Props = {
    name: string;
    onRemove: () => void;
    done: boolean;
    RadioPress: () => void;
}

export function Product({name, onRemove,done, RadioPress}: Props){
    return(

        <ProductContainer done={done}>
            <RadioButton onPress={RadioPress}>
        {done ? (
          <MaterialIcons name="check-circle" size={24} color="#7A4A9E" />
        ) : (
          <MaterialIcons name="radio-button-off" size={24} color="#31C667" />
        )}
      </RadioButton>

      {done ? (
        <ProductDone>{name}</ProductDone>
      ) : (
        <ProductDescription>{name}</ProductDescription>
      )}

      <ButtonRemove onPress={onRemove}>
        <MaterialCommunityIcons name="trash-can-outline" size={24} color="#262626" />
      </ButtonRemove>
    </ProductContainer>
  );
}




