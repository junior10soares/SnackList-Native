import { ButtonNewMeat } from "@components/ButtonNewMeat";
import { FormDataProps } from "@screens/NewMeat";

import imgOnDiet from "@assets/dietOn.png";
import imgOffDiet from "@assets/dietOff.png";

import { Box, Button, Container, Img, SubTitle, Title } from "./styles";

import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";


export function Finish() {

    const [list, setList] = useState<FormDataProps[]>([])

    const navigation = useNavigation()

    const { params } = useRoute();
    const { updatedData }: { updatedData?: FormDataProps } = params || {};

    useFocusEffect(
        useCallback(() => {
            if (updatedData) {
                setList((prevList) => [...prevList, updatedData])
            }
        }, [updatedData])
    );

    async function handleGoHome() {
        navigation.navigate('home', { updatedData });
    }

    return (
        <Container>
            {list.length > 0 && list[0].cor === "PRIMARY" ? (
                <Box>
                    <Title type="PRIMARY">Continue assim!</Title>
                    <SubTitle>Você está dentro da dieta!</SubTitle>
                    <Img source={imgOnDiet} />
                </Box>

            ) : (
                <Box>
                    <Title type="SECONDARY">Você tem que melhorar</Title>
                    <SubTitle>Você não está dentro da dieta!</SubTitle>
                    <Img source={imgOffDiet} />
                </Box>
            )}
            <Button>
                <ButtonNewMeat
                    title="Ir para a página inicial"
                    variant="none"
                    onPress={handleGoHome}
                />
            </Button>
        </Container >
    )
}