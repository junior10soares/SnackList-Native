import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Image } from "react-native";
import { useCallback, useState } from "react";

import {
    Container,
    Header,
    Title,
    ContainerListMeat,
    DateText,
    ContainerStatistic,
    TitleStatistic,
    SubTitleStatistic,
} from "./styles";

import logoImg from "@assets/logo.png";
import perfilImg from "@assets/perfil.png";

import { ButtonNewMeat } from "@components/ButtonNewMeat";
import { MeatInput } from "@components/MeatInput";
import { FormDataProps } from "@screens/NewMeat";

export function Home() {
    const [list, setList] = useState<FormDataProps[]>([])

    const navigation = useNavigation();

    const { params } = useRoute();
    const { updatedData }: { updatedData?: FormDataProps } = params || {};

    let somaPrimary = 0;
    let somaSecondary = 0;

    list.forEach(item => {
        if (item.cor === 'PRIMARY') {
            somaPrimary++;
        } else if (item.cor === 'SECONDARY') {
            somaSecondary++;
        }
    });

    const total = somaPrimary + somaSecondary;
    const media = total > 0 ? (somaPrimary / total) * 100 : 0

    const formattedList = (list || []).map((item, index) => ({
        key: `${item.name}-${index}`,
        name: item.name,
        hour: item.hour,
        cor: item.cor,
        date: item.date
    }));

    async function handleNewMeat() {
        navigation.navigate('newmeat')
    }

    function formatHour(hourString: string) {
        if (hourString && hourString.length === 4) {
            const hours = hourString.substr(0, 2);
            const minutes = hourString.substr(2, 2);
            return `${hours}:${minutes}`;
        }
        return '';
    }

    useFocusEffect(
        useCallback(() => {
            if (updatedData) {
                setList((prevList) => [...prevList, updatedData])
            }
        }, [updatedData])
    );

    return (
        <Container>
            <Header>
                <Image source={logoImg} />
                <Image source={perfilImg} />
            </Header>

            <ContainerStatistic>
                <TitleStatistic>{media.toFixed(1)}%</TitleStatistic>
                <SubTitleStatistic>da dieta</SubTitleStatistic>
            </ContainerStatistic>

            <Title>Refeições</Title>

            <ButtonNewMeat
                variant="flex"
                title="Nova refeição"
                onPress={handleNewMeat}
            />

            <ContainerListMeat>
                {formattedList.length > 0 && (
                    <DateText>{formattedList[0].date}</DateText>
                )}

                <FlatList
                    data={formattedList}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <MeatInput
                            clock={formatHour(item.hour)}
                            name={item.name}
                            variant={item.cor === "PRIMARY" ? "PRIMARY" : "SECONDARY"}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <Title style={{ textAlign: 'center' }}>
                            Não há refeições registradas ainda. {'\n'}
                            Vamos adicionar ?
                        </Title>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </ContainerListMeat>
        </Container>
    );
}
