

import { Suspense } from 'react';
import { getDashboardStats, getSalesData, getTopProducts, getRecentOrders } from '@/lib/data';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { TopProducts } from '@/components/dashboard/TopProducts';
import { RecentOrders } from '@/components/dashboard/RecentOrders';
import { StatsGridSkeleton, ChartSkeleton, ProductsSkeleton } from '@/components/dashboard/LoadingSkeletons';

// Server Components optimizados
const DashboardStatsServer = async () => <StatsGrid stats={await getDashboardStats()} />;
const SalesChartServer = async () => <SalesChart data={await getSalesData()} />;
const TopProductsServer = async () => <TopProducts products={await getTopProducts()} />;
const RecentOrdersServer = async () => <RecentOrders orders={await getRecentOrders()} />;

const quickActions = [
  { title: 'Nuevo Producto', color: 'green', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
  { title: 'Ver Órdenes', color: 'blue', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
  { title: 'Clientes', color: 'purple', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
  { title: 'Reportes', color: 'orange', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
];

const Dashboard = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard YerbaXanaes</h1>
            <p className="text-sm text-gray-600 mt-1">Resumen de tu ecommerce de yerba mate</p>
          </div>
          <span className="text-sm text-gray-500">
            {new Date().toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Stats Grid */}
      <Suspense fallback={<StatsGridSkeleton />}>
        <DashboardStatsServer />
      </Suspense>

      {/* Charts and Tables */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Suspense fallback={<ChartSkeleton />}>
          <SalesChartServer />
        </Suspense>
        <Suspense fallback={<ProductsSkeleton />}>
          <TopProductsServer />
        </Suspense>
      </div>

      {/* Recent Orders */}
      <div className="mt-8">
        <Suspense fallback={<ProductsSkeleton />}>
          <RecentOrdersServer />
        </Suspense>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button key={index} className={`flex items-center justify-center px-4 py-3 bg-${action.color}-600 text-white rounded-lg hover:bg-${action.color}-700 transition-colors`}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
              </svg>
              {action.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;