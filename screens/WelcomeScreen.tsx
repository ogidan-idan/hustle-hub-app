import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { button, HomeScreenStyles } from '../styles';
import { AppLogo } from '../components/logo';
import FeatureList from '../components/feature-item';
import { CheckCircle, ShoppingBag, TrendingUp } from 'lucide-react-native';

const featuresList = [
  {
    icon: CheckCircle,
    boldText: "Manage Task",
    smallText: "Stay organized with your assignments"
  },
  {
    icon: ShoppingBag,
    boldText: "Buy & Sell",
    smallText: "Campus marketplace for students"
  },
  {
    icon: TrendingUp,
    boldText: "Track Hustle",
    smallText: "Monitor your side income"
  }
];

const WelcomeScreen = () => {
  return (
    <View style={HomeScreenStyles.container}>
    <LinearGradient
      colors={["#2b7fff", "#155dfc"]}
      style={HomeScreenStyles.background} />
    <AppLogo />
    <View style={HomeScreenStyles.headerSection}>
      <Text style={HomeScreenStyles.heading}>Welcome to</Text>
      <Text style={HomeScreenStyles.heading}>HustleHub</Text>
      <Text style={HomeScreenStyles.subText}>Your all-in-one student productivity platform</Text>
    </View>
    <View style={{ width: "85%", marginVertical: 20 }}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={(props) => <FeatureList feature={props.item} />}
        data={featuresList} />
    </View>
    <TouchableOpacity style={button.secondary.container}>
      <Text style={button.secondary.text}>Get Started</Text>
    </TouchableOpacity>
  </View>
  );
}

export default WelcomeScreen