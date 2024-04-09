import { View } from "react-native";

import EditScreenInfo from "@/components/edit-screen-info";
import { Text } from "@/components/ui/text";

export default function TabOneScreen() {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>Tab One</Text>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = {
  container: `flex flex-1 items-center justify-center`,
  title: `text-4xl font-bold text-center`,
};
