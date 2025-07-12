'use client';

import { SalesData } from '@/types/dashboard';

export const SalesChart = ({ data }: { data: SalesData[] }) => {
  const maxSales = Math.max(...data.map(d => d.sales));
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Ventas de la Semana</h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Ventas</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => {
          const percentage = (item.sales / maxSales) * 100;
          const dayName = new Date(item.date).toLocaleDateString('es-AR', { weekday: 'short' });
          
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-600 capitalize">{dayName}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">${item.sales.toLocaleString('es-AR')}</span>
                  <span className="text-xs text-gray-500">{item.orders} órdenes</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total de la semana:</span>
          <span className="font-semibold text-gray-900">
            ${data.reduce((sum, item) => sum + item.sales, 0).toLocaleString('es-AR')}
          </span>
        </div>
      </div>
    </div>
  );
};
