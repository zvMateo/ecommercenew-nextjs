export interface DashboardStats {
  totalSales: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
  salesGrowth: number;
  ordersGrowth: number;
}

export interface SalesData {
  date: string;
  sales: number;
  orders: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  sales: number;
}

export interface RecentOrder {
  id: string;
  customerName: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}
