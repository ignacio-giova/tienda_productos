import React from 'react';

function AddProductForm() {
  return (
    <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Añadir Nuevo Producto</h2>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">URL de la Imagen</label>
          <input 
            type="text" 
            id="imageUrl" 
            name="imageUrl" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="Ej: https://ejemplo.com/imagen.jpg"
          />
        </div>

        <div>
          <label htmlFor="altText" className="block text-sm font-medium text-gray-700">Texto Alternativo (altText)</label>
          <input 
            type="text" 
            id="altText" 
            name="altText" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="Ej: Camiseta de algodón azul"
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título del Producto</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="Ej: Camiseta Básica"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
          <input 
            type="number" 
            id="price" 
            name="price" 
            step="0.01" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="Ej: 29.99"
          />
        </div>

        <div className="flex justify-end">
          <button 
            type="submit"
            className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded-md shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Añadir Producto
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;