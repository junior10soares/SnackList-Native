import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    padding: 24px;
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const ContainerStatistic = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 8px;
    height: 102px;
    margin-top: 33px;
    justify-content: center;
`
export const TitleStatistic = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: white;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center
`
export const SubTitleStatistic = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: white;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  text-align: center;
`
export const Title = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-top: 50px;
  `}`

export const ContainerListMeat = styled.View`
    margin-top: 30px;
    flex: auto;
`
export const DateText = styled.Text`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.LG}px;
color: ${theme.COLORS.GRAY_100};
font-family: ${theme.FONT_FAMILY.BOLD};
padding-bottom: 8px;
`}`

export const ContainerButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;
    height: 50px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`







