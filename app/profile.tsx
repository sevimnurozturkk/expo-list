// app/profile.tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/sign-in');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-6">Profil</Text>
      <Text className="text-lg mb-8">{auth.currentUser?.email}</Text>

      <TouchableOpacity onPress={handleLogout} className="bg-red-600 px-8 py-3 rounded-xl">
        <Text className="text-white font-bold">Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}
