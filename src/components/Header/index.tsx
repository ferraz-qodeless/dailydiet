import { Avatar, BackButton, Container, Logo } from "./styles";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = true }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <Logo source={require("@assets/Logo.png")} />
        </BackButton>
      )}

      <Avatar source={{ uri: 'https://github.com/leidianeferraz.png' }} />
    </Container>
  );
}