import { Text } from "@react-navigation/elements";
import { Image, View } from "react-native";
import {styles} from './styles';

export function BottomNav(){
    return (
        <View
            style={styles.container}   
        >
            <Image
                source={require('../../assets/icon-home.svg')}
                style={{width:24, height:24}}
            ></Image>
            <Image
                source={require('../../assets/icon-person.svg')}
                style={{width:24, height:24}}
            ></Image>
            <Image
                source={require('../../assets/icon-sell.svg')}
                style={{width:24, height:24}}
            ></Image>
            <Image
                source={require('../../assets/icon-menu.svg')}
                style={{width:24, height:24}}
            ></Image>
        </View>
    );
}