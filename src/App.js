import React, { useState } from 'react'
import ProductList from './components/ProductList'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import  AddProductForm from './components/AddProductForm'

function App() {
  const [currentView, setCurrentView] = useState('catalogo')

  const handleSelectOption =  (view) => {
    setCurrentView(view)
  }

  const renderContent = () => {
    switch (currentView) {
      case 'catalogo':
        return <ProductList />;
      case 'añadir':
        return <AddProductForm />;
      default:
        return <ProductList />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 font-satoshi">
    <Header title="Tienda de Productos" />
    
    <div className='flex flex-1 min-h-0'>
      <Sidebar onSelectOption={handleSelectOption} />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>

 </div>
  );
}

export default App;
