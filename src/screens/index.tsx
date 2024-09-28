import { Alert, Text, TextInput, View } from "react-native";
import { Button, Container, ContainerInput, ContainerTop, IconButton, Input } from "./styles";

import { Header } from "@components/header";
import { Product } from "@components/Product";
import { useState } from "react";

type Product = {
    name: string;
    done: boolean;
  };



export function Home(){

    const [products, setProducts] = useState<Product[]>([]);
    const [productName, setProductName] = useState("");
  
    const productDone = products.reduce((acc, product) => {
      return product.done ? acc + 1 : acc;
    }, 0);


    function handleProductAdd() {
        if (products.filter(({ name }) => name === productName).length >= 1) {
            return Alert.alert(
              "Produto já cadastrado!",
              "Já existe um produto na lista com este nome!"
            );
          }
          if (productName.length === 0) {
            return Alert.alert("Adicione um produto válido");
          }
          setProducts((prevState) => [
            ...prevState,
            { name: productName, done: false },
          ]);
          setProductName("");
        }

        function handleProductRemove(name: string) {
            Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
              {
                text: "Sim",
                onPress: () =>
                  setProducts((prevState) =>
                    prevState.filter((product) => product.name !== name)
                  ),
              },
              {
                text: "Não",
                style: "cancel",
              },
            ]);}


            function handleProductDone(name: string) {
                setProducts((prevState) =>
                  prevState.map((product) =>
                    product.name === name ? { ...product, done: !product.done } : product
                  )
                );
              }











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