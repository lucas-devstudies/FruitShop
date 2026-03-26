import { Image, ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CardProps {
  nome: string;
  tipoPeso: string;
  preco: string;
  imagem: ImageSourcePropType;
}

export function Card({nome,tipoPeso,preco,imagem}:CardProps){
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={imagem}
                style={{width:'auto',height:100}}
            ></Image>
            <Text style={styles.title}>{nome}</Text>
            <Text style={styles.weigth}>{tipoPeso}</Text>
            <Text style={styles.price}>R$ {preco}</Text>
        </TouchableOpacity>
    );
}