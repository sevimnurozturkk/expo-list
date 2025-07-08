// app/signin.tsx
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignIn() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/');           // → Ana sekmeye
    } catch (error: any) {
      alert('Giriş başarısız: ' + error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/ceket.jpg')}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      <View className="bg-white/80 p-6 rounded-2xl w-[90%]">
        <Text className="text-2xl font-bold text-center mb-4">Giriş Yap</Text>

        <TextInput
          placeholder="E‑posta"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="bg-white border border-gray-300 rounded-xl px-4 py-3 mb-4"
        />

        <TextInput
          placeholder="Şifre"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="bg-white border border-gray-300 rounded-xl px-4 py-3 mb-6"
        />

        <TouchableOpacity onPress={handleLogin} className="bg-pink-600 py-3 rounded-xl">
          <Text className="text-center text-white font-bold">Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}




