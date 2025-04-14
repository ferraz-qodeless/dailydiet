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

      <Avatar source={{ uri: 'https://gitlab.com/uploads/-/system/user/avatar/26843990/avatar.png?width=800' }} />
    </Container>
  );
}