import { Tabs, Redirect } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { View, Text } from 'react-native';

export default function Layout() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('User state:', user);
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/sign-in" />; // ✅ dikkat: dosya adı sign-in.tsx olmalı
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Ana Sayfa' }} />
      <Tabs.Screen name="products" options={{ title: 'Ürünler' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
    </Tabs>
  );
}






