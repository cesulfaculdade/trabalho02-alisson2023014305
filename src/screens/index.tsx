import { Alert, FlatList, Text, TextInput, View } from "react-native";
import { Button, Container, ContainerInput, ContainerText, ContainerTop, IconButton, Input } from "./styles";

import { Header } from "@components/header";
import { Product } from "@components/Product";
import { useState } from "react";
import { ProductCount } from "@components/ProductCount";
import { EmptyList } from "@components/EmptyList";

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


        <ContainerText>

            <ProductCount name={ "Produtos"} color="#31C667" numeros={products.length}  />

            <ProductCount name={"Finalizados"} color="#7A4A9E" numeros={productDone} />

        </ContainerText>



        <FlatList
          data={products}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Product
              name={item.name}  done={item.done}

              onRemove={() => handleProductRemove(item.name)}
              RadioPress={() => handleProductDone(item.name)}
            />    
        )}

          showsVerticalScrollIndicator={ false }
          ListEmptyComponent={ <EmptyList/> }
        />
    

    </Container>
    )
}