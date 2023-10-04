import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

import {
    ContainerHeader,
    SubTitle,
    Title,
    Container,
    ContainerMain,
    InputName,
    InputDescrition,
    ContainerData,
    TextInputData,
    ContainerFooter,
    ContainerConfirmation,
    ContainerButton,
    TextConfirmation,
    Button,
    ContainerIcon,
    IconBack,
} from "./styles";

import { IconMeatInput } from "@components/MeatInput/styles";
import { ButtonNewMeat } from "@components/ButtonNewMeat";

export type FormDataProps = {
    name: string
    date: string
    hour: string
    cor?: string
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome da refeição'),
    date: yup.string().required(),
    hour: yup.string().required(),
    cor: yup.string()
});

export function NewMeat() {

    const navigation = useNavigation();
    const [data, setData] = useState<FormDataProps[]>([])
    const [selectedVariant, setSelectedVariant] = useState('');

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema),
    });

    async function handleButtonClick(variant: string) {
        setSelectedVariant(variant);
    }

    async function handleData({ name, date, hour }: FormDataProps) {
        const formData: FormDataProps = {
            name,
            date,
            hour,
            cor: selectedVariant === 'PRIMARY' ? 'PRIMARY' : selectedVariant === 'SECONDARY' ? 'SECONDARY' : '',
        }
        setData((prevDataArray) => [...prevDataArray, formData]);
        navigation.navigate('finish', { updatedData: formData })
    }

    async function handleGoback() {
        navigation.goBack()
    }

    return (
        <Container>
            <ContainerHeader>
                <ContainerIcon onPress={handleGoback}>
                    <IconBack />
                </ContainerIcon>
                <Title>Nova refeição</Title>
            </ContainerHeader>

            <ContainerMain>
                <SubTitle>Nome</SubTitle>

                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, value } }) => (
                        <InputName
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />

                <SubTitle>Descrição</SubTitle>
                <InputDescrition type="custom" />

                <ContainerData>
                    <ContainerFooter>
                        <SubTitle>Data</SubTitle>
                        <Controller
                            control={control}
                            name="date"
                            render={({ field: { onChange, value } }) => (
                                <TextInputData
                                    type="datetime"
                                    maxLength={8}
                                    keyboardType="numeric"
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                    </ContainerFooter>

                    <ContainerFooter>
                        <SubTitle>Hora</SubTitle>
                        <Controller
                            control={control}
                            name="hour"
                            render={({ field: { onChange, value } }) => (
                                <TextInputData
                                    type="only-numbers"
                                    maxLength={4}
                                    keyboardType="numeric"
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                    </ContainerFooter>
                </ContainerData>

                <ContainerConfirmation>
                    <SubTitle>Está dentro da dieta?</SubTitle>

                    <ContainerButton>

                        <Controller
                            control={control}
                            name="cor"
                            render={({ }) => (
                                <Button
                                    onPress={() => handleButtonClick('PRIMARY')}
                                    style={{
                                        borderWidth: selectedVariant === 'PRIMARY' ? 1 : 0,
                                        borderColor: selectedVariant === 'PRIMARY' ? 'green' : 'transparent',
                                    }}
                                >
                                    <IconMeatInput variant="PRIMARY" />
                                    <TextConfirmation>Sim</TextConfirmation>
                                </Button>
                            )}
                        />
                        <Controller
                            control={control}
                            name="cor"
                            render={({ }) => (
                                <Button
                                    onPress={() => handleButtonClick('SECONDARY')}
                                    style={{
                                        borderWidth: selectedVariant === 'SECONDARY' ? 1 : 0,
                                        borderColor: selectedVariant === 'SECONDARY' ? 'red' : 'transparent',
                                    }}
                                >
                                    <IconMeatInput variant="SECONDARY" />
                                    <TextConfirmation>Não</TextConfirmation>
                                </Button>
                            )}
                        />
                    </ContainerButton>

                </ContainerConfirmation>

                <ButtonNewMeat
                    title='Cadastrar refeição'
                    variant="none"
                    onPress={handleSubmit(handleData)}
                />
            </ContainerMain>
        </Container>
    );

}