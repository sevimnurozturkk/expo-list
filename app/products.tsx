// app/products.tsx
import { View, Text, Image, ScrollView } from 'react-native';

const products = [
  { id: '1', name: 'Red Jacket',  price: '₺1499', image: require('../assets/ceket.jpg') },
  { id: '2', name: 'Blue Jacket', price: '₺1599', image: require('../assets/ceket.jpg') },
  { id: '3', name: 'Green Jacket',price: '₺1399', image: require('../assets/ceket.jpg') },
];

export default function Products() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Ürünler</Text>

      <View className="flex flex-wrap flex-row justify-between">
        {products.map(p => (
          <View key={p.id} className="bg-gray-100 rounded-2xl mb-4 w-[48%] overflow-hidden">
            <Image source={p.image} className="w-full h-40" resizeMode="cover" />
            <View className="p-2">
              <Text className="text-lg font-semibold">{p.name}</Text>
              <Text className="text-pink-600 font-bold">{p.price}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}


