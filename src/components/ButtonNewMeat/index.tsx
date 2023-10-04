import { TouchableOpacityProps } from "react-native";
import { Container, Icon, TitleButton } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
    variant: 'flex' | 'none'
}

export function ButtonNewMeat({ title, variant = 'none', ...rest }: Props) {
    return (
        <Container {...rest}>

            <Icon variant={variant} />

            <TitleButton>
                {title}
            </TitleButton>

        </Container>
    )
}