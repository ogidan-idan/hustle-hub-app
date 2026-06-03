import { PropsWithChildren, useState } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function AppLayout(props:PropsWithChildren) {
  return <SafeAreaView style={{ flex: 1 }}>
    {props.children}
  </SafeAreaView>
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("welcom");
  switch (currentPage) {
    case "welcome":
      return <WelcomeScreen />;
    case "home":
      return <Text>Home Screen</Text>;
    default:
      return <AppLayout>
        <Text>404 - Not Found</Text>
      </AppLayout>;
  }
}