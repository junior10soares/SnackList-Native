import { Plus } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  variant: 'flex' | 'none'
}

export const Container = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;
    height: 50px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`
export const TitleButton = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}`

export const Icon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 18
})) <Props>`
  display: ${({ variant }) => (variant === 'flex' ? 'flex' : 'none')};
`;