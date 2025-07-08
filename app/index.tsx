// app/index.tsx
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold">Hoş geldiniz!</Text>
      <Text className="text-lg mt-2">Alışverişe başlamak için Ürünler sekmesine geçin.</Text>
    </View>
  );
}


