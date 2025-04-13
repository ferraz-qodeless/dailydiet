
import { theme } from '@theme/index';
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  width: 100%;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const BackButton = styled.TouchableOpacity`
  flex : 1;
`;

export const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  border: 2px solid ${theme.COLORS.GRAY_600};
`;
