import React, { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { Logo } from "../../components/ui/logo";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useAuth } from "../../contexts/AuthContext";
import { Container } from "../../components/layout/container";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loadingAuth, isAuthenticated } = useAuth();

  async function handleLogin() {
    if (!email.trim() || !password.trim()) {
      //enviar notificacao de erro
      return;
    }
    await signIn({ email, password });
    setEmail("");
    setPassword("");
    Keyboard.dismiss();
  }

  return (
    <Container>
      <Logo />
      <View style={styles.form}>
        <Input
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button onPress={handleLogin} isLoading={loadingAuth}>
          Acessar
        </Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
});
