import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/'); // Ana sayfaya yönlendir
    } catch (error: any) {
      alert('Giriş başarısız: ' + error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4">Giriş Yap</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="E-posta"
        className="w-4/5 border rounded-xl p-3 mb-3 bg-white"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Şifre"
        secureTextEntry
        className="w-4/5 border rounded-xl p-3 mb-4 bg-white"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-pink-600 px-6 py-3 rounded-xl"
      >
        <Text className="text-white font-bold">Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
}




