import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CalendarCheck, Users, TrendingUp } from 'lucide-react-native';

export default function Dashboard() {
  return (
    <ScrollView className="flex-1 bg-slate-50 p-4" contentContainerStyle={{ paddingBottom: 40 }}>
      <View className="mt-4 mb-6">
        <Text className="text-3xl font-bold text-slate-900">Dashboard</Text>
        <Text className="text-slate-500 text-base">Visão geral do estúdio</Text>
      </View>

      {/* Grid de Métricas */}
      <View className="flex-row flex-wrap justify-between">
        <MetricCard
          title="Agendamentos"
          value="2.345"
          icon={<CalendarCheck size={24} color="#2563eb" />}
          trend="+4.7%"
        />
        <MetricCard
          title="Professores"
          value="48"
          icon={<Users size={24} color="#7c3aed" />}
          trend="+2.1%"
        />
        <MetricCard
          title="Estúdios"
          value="12"
          icon={<TrendingUp size={24} color="#059669" />}
          trend="+12%"
        />
        {/* Card extra só para fechar o grid visualmente */}
        <View className="w-[48%]" />
      </View>

      <View className="mt-8 mb-4">
        <Text className="text-xl font-bold text-slate-900">Próximas Aulas</Text>
      </View>

      {/* Placeholder de lista de aulas */}
      <View className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-3">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="font-bold text-lg text-slate-900">08:00</Text>
          <View className="bg-blue-100 px-2 py-1 rounded-md">
            <Text className="text-blue-700 text-xs font-bold">Pilates Solo</Text>
          </View>
        </View>
        <Text className="text-slate-500">Sala A • Prof. Matheus</Text>
      </View>

      <View className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-3">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="font-bold text-lg text-slate-900">09:00</Text>
          <View className="bg-purple-100 px-2 py-1 rounded-md">
            <Text className="text-purple-700 text-xs font-bold">Reformer</Text>
          </View>
        </View>
        <Text className="text-slate-500">Sala B • Prof. Ana</Text>
      </View>

    </ScrollView>
  );
}

// Componente Auxiliar (só existe dentro desse arquivo)
function MetricCard({ title, value, icon, trend }: any) {
  return (
    <View className="bg-white w-[48%] p-4 rounded-2xl shadow-sm mb-4 border border-slate-100">
      <View className="bg-slate-100 self-start p-3 rounded-xl mb-3">
        {icon}
      </View>
      <Text className="text-slate-500 text-sm font-medium mb-1">{title}</Text>
      <Text className="text-2xl font-bold text-slate-900">{value}</Text>
      <Text className="text-green-600 text-xs font-bold mt-1">
        {trend} <Text className="text-slate-400 font-normal">vs mês anterior</Text>
      </Text>
    </View>
  );
}