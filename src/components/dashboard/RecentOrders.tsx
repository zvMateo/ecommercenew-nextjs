'use client';

import { RecentOrder } from '@/types/dashboard';
import { Badge } from '@/components/ui/Badge';

const statusConfig = {
  delivered: { variant: 'success', text: 'Entregado' },
  shipped: { variant: 'info', text: 'Enviado' },
  processing: { variant: 'warning', text: 'Procesando' },
  pending: { variant: 'neutral', text: 'Pendiente' },
} as const;

export const RecentOrders = ({ orders }: { orders: RecentOrder[] }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-900">Órdenes Recientes</h3>
      <button className="text-sm text-green-600 hover:text-green-700 font-medium">Ver todas</button>
    </div>
    
    <div className="space-y-4">
      {orders.map((order) => {
        const formattedDate = new Date(order.date).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' });
        const { variant, text } = statusConfig[order.status];
        
        return (
          <div key={order.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-900">{order.id}</h4>
                <p className="text-sm text-gray-500">{order.customerName}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">${order.total.toLocaleString('es-AR')}</p>
                <p className="text-xs text-gray-500">{formattedDate}</p>
              </div>
              
              <Badge variant={variant}>{text}</Badge>
            </div>
          </div>
        );
      })}
    </div>
    
    <div className="mt-6 pt-4 border-t border-gray-100">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Órdenes pendientes:</span>
        <span className="font-semibold text-orange-600">
          {orders.filter(o => o.status === 'pending').length}
        </span>
      </div>
    </div>
  </div>
);
