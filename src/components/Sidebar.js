import React from 'react';

function Sidebar({ onSelectOption }) {
  return (
    <aside className="w-16 md:w-64 transition-all duration-300 ease-in-out flex-none bg-gray-200 text-black p-2 flex-none flex flex-col justify-between ">
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

      <div className='flex'>
        <span className="material-symbols-outlined ml-auto p-2 rounded transition duration-200 hover:bg-gray-300">
          arrow_back_ios
        </span>
    </div>
    </aside>
  );
}

export default Sidebar;