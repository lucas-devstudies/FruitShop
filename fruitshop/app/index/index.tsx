import { Text, View, TouchableOpacity, ScrollView,Image } from 'react-native';

import {styles} from './style';
import { Navbar } from '@/components/Navbar/Nabar';
import { BottomNav } from '@/components/BottomNav/BottomNav';
import { Card } from '@/components/Card/Card';
import { CardCat } from '@/components/CardCat';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1}}>
      <Navbar></Navbar>
        <ScrollView style={[styles.container,{marginBottom:40}]}>
          <ScrollView 
              contentContainerStyle={styles.rowItems} 
              horizontal={true} 
              showsHorizontalScrollIndicator={false}
          >
            <CardCat
              name='Frutas'
              imagem={require('../../assets/frutas.png')}
              color='#35AB4F'
            ></CardCat>
            <CardCat
              name='Verduras'
              imagem={require('../../assets/verduras.png')}
              color='#57EA78'
            ></CardCat>
            <CardCat
              name='Legumes'
              imagem={require('../../assets/legumes.png')}
              color='#B1FFFF'
            ></CardCat>
            <CardCat
              name='Tubérculos'
              imagem={require('../../assets/tuberculos.png')}
              color='#B3B3B3'
            ></CardCat>
          </ScrollView>
          <Text style={styles.cardNews}>Mais Vendidos</Text>
          <ScrollView
            contentContainerStyle={styles.rowFruits} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}> 
          
          <Card
              nome="Banana"
              tipoPeso="Palma"
              preco="6,50"
              imagem={require('../../assets/banana.png')}
            ></Card>
            <Card
              nome="Cenoura"
              tipoPeso="kg"
              preco="8,00"
              imagem={require('../../assets/cenoura.png')}
            ></Card>
            <Card
              nome="Pimentão"
              tipoPeso="kg"
              preco="12,00"
              imagem={require('../../assets/pimentao.png')}
            ></Card>
          </ScrollView>
          <Text style={styles.title}>Tubérculos</Text>
          <ScrollView
            contentContainerStyle={styles.rowFruits} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
          > 
          <Card
              nome="Banana Doce"
              tipoPeso="Kg"
              preco="7,00"
              imagem={require('../../assets/batataDoce.png')}
            ></Card>
            <Card
              nome="Batata"
              tipoPeso="kg"
              preco="16,00"
              imagem={require('../../assets/batata.png')}
            ></Card>
            <Card
              nome="Cará Roxo"
              tipoPeso="kg"
              preco="14,00"
              imagem={require('../../assets/cara.png')}
            ></Card>
          </ScrollView>
        </ScrollView>
      <BottomNav></BottomNav>
    </View>
  );
}