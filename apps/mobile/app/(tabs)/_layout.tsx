import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { LayoutDashboard, CalendarDays, User, Settings } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Remove o cabeçalho padrão (vamos usar o nosso ou do dashboard)
        tabBarShowLabel: true, // Mostra o nome embaixo do ícone
        tabBarActiveTintColor: '#0f172a', // Cor do ícone ativo (slate-900)
        tabBarInactiveTintColor: '#94a3b8', // Cor do ícone inativo (slate-400)
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0', // slate-200
          height: 60, // Um pouco mais alto para ficar confortável
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      {/* Aba 1: Dashboard (Aquele arquivo index.tsx que criamos) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <LayoutDashboard size={24} color={color} />,
        }}
      />

      {/* Aba 2: Turmas (Vou assumir que o arquivo é manage-classes.tsx) */}
      <Tabs.Screen
        name="manage-classes" // O nome do arquivo sem .tsx
        options={{
          title: 'Turmas',
          tabBarIcon: ({ color }) => <CalendarDays size={24} color={color} />,
        }}
      />

      {/* Aba 3: Configurações do Estúdio */}
      <Tabs.Screen
        name="studio-settings"
        options={{
          title: 'Estúdio',
          tabBarIcon: ({ color }) => <Settings size={24} color={color} />,
        }}
      />

      {/* Exemplo de aba oculta (se quiser uma página que não aparece na barra) */}
      {/* <Tabs.Screen
        name="detalhes-aula"
        options={{
          href: null, // Isso esconde da barra de baixo
        }}
      /> 
      */}
    </Tabs>
  );
}