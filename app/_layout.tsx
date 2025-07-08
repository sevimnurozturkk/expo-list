import { useEffect, useState } from 'react';
import { Tabs, Redirect } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { View, ActivityIndicator } from 'react-native';

export default function Layout() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#e91e63" />
      </View>
    );
  }

  if (!user) {
    // Giriş yapılmamışsa signin sayfasına yönlendir
    return <Redirect href="/sign-in" />;
  }

  // Giriş yapılmışsa tabları göster
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#e91e63' }}>
      <Tabs.Screen name="index" options={{ title: 'Ana Sayfa' }} />
      <Tabs.Screen name="products" options={{ title: 'Ürünler' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
    </Tabs>
  );
}




