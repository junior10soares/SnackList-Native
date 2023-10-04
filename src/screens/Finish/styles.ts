import { css } from "styled-components/native";
import styled from "styled-components/native";

type StyleTitleType = 'PRIMARY' | 'SECONDARY'

type Props = {
    type?: StyleTitleType
}

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`
export const Box = styled.View`
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text<Props>(({ theme, type }) => ({
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    fontSize: theme.FONT_SIZE.XL + 'px',
    fontFamily: theme.FONT_FAMILY.BOLD,
}));
export const SubTitle = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
`}`
export const Img = styled.Image`
    margin-top: 20px;
`
export const Button = styled.TouchableOpacity`
    margin-top: 40px;
    width: 191px
`

