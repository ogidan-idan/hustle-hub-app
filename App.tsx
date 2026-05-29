import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity } from "react-native";
import { APP_GENERAL, button, HomeScreenStyles } from "./styles";
import { ShoppingBag, Star, Zap } from "lucide-react-native";
import { AppLogo } from "./components/logo";

export default function App() {
  return <View style={HomeScreenStyles.container}>
    <LinearGradient
      colors={["#2b7fff", "#155dfc"]}
      style={HomeScreenStyles.background} />
    <AppLogo />
    <View style={HomeScreenStyles.headerSection}>
      <Text style={HomeScreenStyles.heading}>Welcome to</Text>
      <Text style={HomeScreenStyles.heading}>HustleHub</Text>
      <Text style={HomeScreenStyles.subText}>Your all-in-one student productivity platform</Text>
    </View>
    <TouchableOpacity style={button.secondary.container}>
      <Text style={button.secondary.text}>Get Started</Text>
    </TouchableOpacity>
  </View>
}