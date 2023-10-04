import { ArrowLeft } from "phosphor-react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`
export const ContainerHeader = styled(SafeAreaView)`
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    padding: 24px;
    gap: 80px;
    align-items: center;
    flex-direction: row;
`
export const ContainerIcon = styled.TouchableOpacity`
`
export const Title = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}`
export const SubTitle = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.BOLD};
  margin-top: 10px;
`}`
export const ContainerMain = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 100%;
`
export const InputName = styled(TextInput)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-top: 5px;
  height: 48px;
  padding: 10px;
`
export const InputDescrition = styled(TextInputMask)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-top: 5px;
  height: 120px;
  padding: 10px;
  textAlignVertical: top;
`
export const ContainerData = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const TextInputData = styled(TextInputMask)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-top: 5px;
  padding: 10px;
  width: 153px;
  height: 48px;
`
export const ContainerFooter = styled.View`
  margin-top: 30px;
`
export const ContainerConfirmation = styled.View`
  margin-top: 30px;
  padding-bottom: 100px;
`
export const ContainerButton = styled.View`
  flex-direction: row;
  margin-top: 20px;
  gap: 15px;
`
export const Button = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 8px;
    height: 50px;
    width: 160px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;
export const TextConfirmation = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.BOLD};
`}`

export const IconBack = styled(ArrowLeft)`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
