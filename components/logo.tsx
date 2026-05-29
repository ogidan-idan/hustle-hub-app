import { ShoppingBag, Zap } from "lucide-react-native";
import { View } from "react-native";
import { APP_GENERAL } from "../styles";

export function AppLogo() {
    return (<View style={APP_GENERAL.logoContainer}>
        <ShoppingBag strokeWidth={2} color={"white"} size={96} />
        <View style={APP_GENERAL.logoBadge}>
            <Zap color={"#155dfc"} size={34} />
        </View>
    </View>);
}