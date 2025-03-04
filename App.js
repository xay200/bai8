import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./navigation/AuthStack";
import { MainStack } from "./navigation/MainStack";
import { AppProvider, AppContext } from "./context/AppContext";

const AppContent = () => {
  const { isLoggedIn } = useContext(AppContext);
  return <NavigationContainer>{isLoggedIn ? <MainStack /> : <AuthStack />}</NavigationContainer>;
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

