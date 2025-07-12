'use client';

import { DashboardStats } from '@/types/dashboard';

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  format?: 'currency' | 'number';
}

const formatValue = (val: string | number, format: 'currency' | 'number' = 'number') => {
  return format === 'currency' 
    ? `$${Number(val).toLocaleString('es-AR', { minimumFractionDigits: 2 })}` 
    : Number(val).toLocaleString('es-AR');
};

const StatCard = ({ title, value, change, icon, format = 'number' }: StatCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{formatValue(value, format)}</p>
          <div className="flex items-center mt-2">
            <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '↗' : '↘'} {Math.abs(change)}%
            </span>
            <span className="text-sm text-gray-500 ml-1">vs mes anterior</span>
          </div>
        </div>
        <div className="ml-4 p-3 bg-green-50 rounded-lg">{icon}</div>
      </div>
    </div>
  );
};

const icons = {
  sales: <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>,
  orders: <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
  products: <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  customers: <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>
};

export const StatsGrid = ({ stats }: { stats: DashboardStats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <StatCard title="Ventas Totales" value={stats.totalSales} change={stats.salesGrowth} format="currency" icon={icons.sales} />
    <StatCard title="Órdenes" value={stats.totalOrders} change={stats.ordersGrowth} icon={icons.orders} />
    <StatCard title="Productos" value={stats.totalProducts} change={5.2} icon={icons.products} />
    <StatCard title="Clientes" value={stats.totalCustomers} change={15.8} icon={icons.customers} />
  </div>
);
