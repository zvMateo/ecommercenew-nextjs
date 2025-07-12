'use client';

import { Product } from '@/types/dashboard';

export const TopProducts = ({ products }: { products: Product[] }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-900">Productos Más Vendidos</h3>
      <button className="text-sm text-green-600 hover:text-green-700 font-medium">Ver todos</button>
    </div>
    
    <div className="space-y-4">
      {products.map((product, index) => (
        <div key={product.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-green-700">{index + 1}</span>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-gray-900 truncate">{product.name}</h4>
            <p className="text-sm text-gray-500">${product.price.toLocaleString('es-AR')} • Stock: {product.stock}</p>
          </div>
          
          <div className="flex-shrink-0 text-right">
            <p className="text-sm font-semibold text-gray-900">{product.sales} vendidos</p>
            <p className="text-xs text-gray-500">${(product.sales * product.price).toLocaleString('es-AR')}</p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-6 pt-4 border-t border-gray-100">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Total productos activos:</span>
        <span className="font-semibold text-gray-900">28</span>
      </div>
    </div>
  </div>
);
