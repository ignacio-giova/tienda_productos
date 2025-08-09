// src/components/Sidebar.js
import React from 'react';

function Sidebar({ onSelectOption }) {
  return (
    <aside className="w-64 bg-gray-200 text-black min-h-screen p-4 flex-none">
      <nav>
        <ul className="space-y-2">
          <li>
            <a 
              href="#" 
              onClick={() => onSelectOption('catalogo')} 
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300"
            >
              Cátalogo
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={() => onSelectOption('añadir')} 
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300"
            >
              Añadir Producto
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;