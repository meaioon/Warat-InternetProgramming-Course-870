import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="detail" />
      <Stack.Screen name="add" />
      <Stack.Screen name="categories" />
    </Stack>
  );
}