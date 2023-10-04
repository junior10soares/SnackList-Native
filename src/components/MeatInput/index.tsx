import { Container, ContainerClock, ContainerMeat, IconInputStyleTypeProps, IconMeatInput } from "./styles";

type Props = {
    name: string
    clock: string
    variant: IconInputStyleTypeProps
}

export function MeatInput({ name, clock, variant, ...rest }: Props) {

    return (
        <Container {...rest}>
            <ContainerClock>
                {clock}
            </ContainerClock>

            <ContainerMeat>
                {name}
            </ContainerMeat>

            <IconMeatInput variant={variant} />
        </Container>

    )
}