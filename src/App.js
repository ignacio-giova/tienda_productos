import React, { useState } from 'react'
import ProductList from './components/productList'
import Sidebar from './components/sidebar'
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
    <div className="min-h-screen bg-gray-100 font-satoshi">
    <Header title="Tienda de Productos" />
    
    <div className='flex'>
      <Sidebar onSelectOption={handleSelectOption} />
      <main>
        {renderContent()}
      </main>
    </div>

 </div>
  );
}

export default App;
