import { Image, ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import {styles} from './styles.js'

interface card{
    color:string;
    imagem: ImageSourcePropType;
    name:string;
}

export function CardCat({name,color,imagem}:card){
     return(
        <TouchableOpacity style={styles.touchCard}>
            <TouchableOpacity style={[styles.card,{backgroundColor: color}]} onPress={() => alert('Frutas adicionada!')}>
            <Image
                source={imagem}
                style={{width:40, height:40}}
            />
            </TouchableOpacity>
            <Text style={{fontWeight:600}}>{name}</Text>
        </TouchableOpacity>
    );
}