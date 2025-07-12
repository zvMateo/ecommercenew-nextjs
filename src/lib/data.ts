import { DashboardStats, SalesData, Product, RecentOrder } from '@/types/dashboard';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getDashboardStats(): Promise<DashboardStats> {
  await delay(100);
  return {
    totalSales: 45250.80,
    totalOrders: 342,
    totalProducts: 28,
    totalCustomers: 156,
    salesGrowth: 12.5,
    ordersGrowth: 8.3,
  };
}

export async function getSalesData(): Promise<SalesData[]> {
  await delay(150);
  return [
    { date: '2025-07-04', sales: 3420, orders: 24 },
    { date: '2025-07-05', sales: 2890, orders: 19 },
    { date: '2025-07-06', sales: 4120, orders: 31 },
    { date: '2025-07-07', sales: 3680, orders: 28 },
    { date: '2025-07-08', sales: 5240, orders: 35 },
    { date: '2025-07-09', sales: 4890, orders: 33 },
    { date: '2025-07-10', sales: 6120, orders: 42 },
  ];
}

export async function getTopProducts(): Promise<Product[]> {
  await delay(120);
  return [
    { id: '1', name: 'Yerba Mate Premium Orgánica', price: 890, stock: 45, sales: 124 },
    { id: '2', name: 'Yerba Mate Tradicional', price: 650, stock: 78, sales: 98 },
    { id: '3', name: 'Yerba Mate Suave', price: 720, stock: 32, sales: 87 },
    { id: '4', name: 'Mate Compuesto Energizante', price: 950, stock: 23, sales: 65 },
    { id: '5', name: 'Yerba Mate Sin Palo', price: 780, stock: 56, sales: 52 },
  ];
}

export async function getRecentOrders(): Promise<RecentOrder[]> {
  await delay(80);
  return [
    { id: 'ORD-001', customerName: 'María González', total: 1540, status: 'delivered', date: '2025-07-10' },
    { id: 'ORD-002', customerName: 'Carlos Rodríguez', total: 890, status: 'shipped', date: '2025-07-10' },
    { id: 'ORD-003', customerName: 'Ana Martínez', total: 2340, status: 'processing', date: '2025-07-09' },
    { id: 'ORD-004', customerName: 'Luis Fernández', total: 650, status: 'pending', date: '2025-07-09' },
    { id: 'ORD-005', customerName: 'Sofia López', total: 1890, status: 'delivered', date: '2025-07-08' },
  ];
}
