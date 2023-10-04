import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type IconInputStyleTypeProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  variant?: IconInputStyleTypeProps
}

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    width: 100%;
    min-height: 49px;
    max-height: auto;
    border-radius: 6px;
    margin-top: 5px;
    align-items: center;
    padding: 5px;
    ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    margin-bottom: 8px;
  `}`

export const ContainerClock = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    borderRightWidth: 1px; 
    borderRightColor: ${theme.COLORS.GRAY_400};
    padding-right: 10px;//espaço na borda
  `}`

export const ContainerMeat = styled.Text`
    margin-left: 10px;
    flex: 1;
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}`

export const IconMeatInput = styled(Circle).attrs<Props>(({ theme, variant }) => ({
  color: variant === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 14,
  weight: 'fill'
})) <Props>``;

