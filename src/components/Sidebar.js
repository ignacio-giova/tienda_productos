import React, { useState } from 'react';

function Sidebar({ onSelectOption }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`transition-all duration-300 ease-in-out flex-none bg-gray-200 text-black p-2 flex flex-col justify-between
      ${isOpen ? 'w-64' : 'w-16'}`}
    >
      {/* Contenido del menú solo si está abierto */}
      {isOpen && (
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
      )}

      {/* Botón de colapsar/expandir */}
      <div className="flex mt-auto"> 
        <span
          className="material-symbols-outlined ml-auto p-2 rounded transition duration-200 hover:bg-gray-300 cursor-pointer"
          onClick={toggleSidebar}
        >
          arrow_back_ios
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;
