import { Text, TextInput, View } from "react-native";
import { Button, Container, ContainerInput, ContainerTop, IconButton, Input } from "./styles";

import { Header } from "@components/header";
import { Product } from "@components/Product";


export function Home(){
    return(

    <Container>

        <ContainerTop>
      
            <Header/>
            
        </ContainerTop>

        <ContainerInput>

            <Input
            placeholder="Adicione um novo produto"
            placeholderTextColor="#BDBABA"
            keyboardType="default"
            />
            <Button>
              <IconButton name="add-circle-outline" />
            </Button>
            
        </ContainerInput>

        <Product 
            name="Banana" 
            onRemove={() => console.log('Remover produto')}
            done={false} 
            RadioPress={() => console.log('Toggle produto')}
            />

    </Container>
    )
}