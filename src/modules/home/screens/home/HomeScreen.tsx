import React from 'react';
import { useHome } from './useHome';
import { Button, Screen } from 'src/@restaurant/components';
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from './Home.styles';
import MapsImage from 'src/@restaurant/assets/homeMap.png';
import { Card } from 'src/modules/home/componets/card';
import { CardBusiness } from '../../componets/cardBusiness';
import { colors } from 'src/@restaurant/components/constants';

const HomeScreen = () => {
  const {
    onActivateGPS,
    onDidTapCard,
    onDidTapCardBusiness,
    Restaurants,
    Business,
  } = useHome();
  return (
    <Screen
      backgroundColor={colors.yellow}
      withSafeArea
      noPadding
      withKeyboard
      withScroll>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Localização</Text>
        </View>
        <Image style={styles.image} source={MapsImage} />
        <View style={styles.buttonContainer}>
          <Button label={'Ativar O GPS'} onPress={onActivateGPS} />
        </View>
        <View style={styles.line} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Serviços e Reservas Próximos</Text>
        </View>
        <View style={styles.containerCards}>
          <FlatList
            data={Restaurants}
            renderItem={({ item, index }) => (
              <Card
                id={item.id}
                onPress={onDidTapCard}
                activated={index === 0}
                image={item.image}
                title={item.title}
                rate={item.rate}
              />
            )}
            horizontal
            ListHeaderComponent={() => <View style={{ width: 10 }} />}
            ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Explore</Text>
        </View>
        <View style={[styles.containerCards, styles.marginBottom50]}>
          <FlatList
            data={Business}
            renderItem={({ item }) => (
              <CardBusiness
                onPress={onDidTapCardBusiness}
                image={item.image}
                title={item.title}
              />
            )}
            horizontal
            ListHeaderComponent={() => <View style={{ width: 10 }} />}
            ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
            keyExtractor={item => item.title}
          />
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;
