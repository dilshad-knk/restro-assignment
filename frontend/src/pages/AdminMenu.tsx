import React, { useState, useEffect } from 'react';
import instance from '../axios/axios';

// Interfaces for TypeScript typing
interface IMenuItem {
  _id?: string;
  name: string;
  description: string;
  price: number;
}

interface IMenu {
  _id?: string;
  menuName: string;
  description: string;
  items: IMenuItem[];
}

const AdminPage: React.FC = () => {
 
  const [menus, setMenus] = useState<IMenu[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<IMenu | null>(null);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState<IMenuItem>({
    name: '',
    description: '',
    price: 0
  });

  
  useEffect(() => {
    fetchMenus();
  }, []);

  
  const fetchMenus = async () => {
    try {
      const response = await instance.get('menus');
     console.log(response);
      setMenus(response.data);
    } catch (error) {
      console.error('Failed to fetch menus', error);
    }
  };

  
  const handleCreateMenu = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await instance.post('/menus', selectedMenu);
      fetchMenus();
      setIsMenuModalOpen(false);
      setSelectedMenu(null);
    } catch (error) {
      console.error('Failed to create menu', error);
    }
  };

 
  const handleUpdateMenu = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMenu?._id) return;
    
    try {
      await instance.put(`menus/${selectedMenu._id}`, selectedMenu);
      fetchMenus();
      setIsMenuModalOpen(false);
      setSelectedMenu(null);
    } catch (error) {
      console.error('Failed to update menu', error);
    }
  };


  const handleDeleteMenu = async (menuId: string) => {
    try {
      await instance.delete(`menus/${menuId}`);
      fetchMenus();
    } catch (error) {
      console.error('Failed to delete menu', error);
    }
  };

 
  const handleAddMenuItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMenu) return;

    try {
     
      const updatedMenu = {
        ...selectedMenu,
        items: [...(selectedMenu.items || []), currentMenuItem]
      };

      await instance.put(`menus/${selectedMenu._id}`, updatedMenu);
      
      fetchMenus();
      setIsItemModalOpen(false);
     
      setCurrentMenuItem({ name: '', description: '', price: 0 });
    } catch (error) {
      console.error('Failed to add menu item', error);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6 md:px-44">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Admin Panel</h1>

      
        <div className="mb-4 mt-20">
          <button 
            onClick={() => {
              setSelectedMenu({ menuName: '', description: '', items: [] });
              setIsMenuModalOpen(true);
            }}
            className="flex items-center bg-green-700 font-medium text-lg text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Menu
          </button>
        </div>

       
        <div className="grid gap-4">
          {menus.map((menu) => (
            <div 
              key={menu._id} 
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center flex-wrap"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{menu.menuName}</h2>
                <p className="text-gray-600">{menu.description}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <strong>Items:</strong>
                </div>
                <ul className='space-y-3 my-4'>
                    {menu.items.length > 0 && menu.items.map((item,i)=> (
                        <li key={i} className='flex gap-20 my-2 bg-red-400 items-center'><span className='mx-3'>{i + 1}</span>{ item.name} <span className='ms-auto px-3'>${item.price}</span></li>
                    ))}
                </ul>
              </div>
              <div className="flex space-x-2 items-center">
               
                <button 
                  onClick={() => {
                    setSelectedMenu(menu);
                    setIsItemModalOpen(true);
                  }}
                  className="flex items-center bg-blue-500 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-600 transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Item
                </button>

              
                <button 
                  onClick={() => {
                    setSelectedMenu(menu);
                    setIsMenuModalOpen(true);
                  }}
                  className="flex items-center bg-yellow-500 text-white px-3 py-1.5 rounded text-sm hover:bg-yellow-600 transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Edit
                </button>

               
                <button 
                  onClick={() => handleDeleteMenu(menu._id || '')}
                  className="flex items-center bg-red-500 text-white px-3 py-1.5 rounded text-sm hover:bg-red-600 transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>

          ))}
        </div>

     
        {isMenuModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">
                {selectedMenu?._id ? 'Edit Menu' : 'Create New Menu'}
              </h2>
              <form onSubmit={selectedMenu?._id ? handleUpdateMenu : handleCreateMenu}>
                <div className="mb-4">
                  <label htmlFor="menuName" className="block text-gray-700 font-bold mb-2">
                    Menu Name
                  </label>
                  <input
                    type="text"
                    id="menuName"
                    value={selectedMenu?.menuName || ''}
                    onChange={(e) => setSelectedMenu(prev => 
                      prev ? { ...prev, menuName: e.target.value } : null
                    )}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={selectedMenu?.description || ''}
                    onChange={(e) => setSelectedMenu(prev => 
                      prev ? { ...prev, description: e.target.value } : null
                    )}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button 
                    type="button"
                    onClick={() => setIsMenuModalOpen(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                  >
                    {selectedMenu?._id ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        
        {isItemModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Add Menu Item</h2>
              <form onSubmit={handleAddMenuItem}>
                <div className="mb-4">
                  <label htmlFor="itemName" className="block text-gray-700 font-bold mb-2">
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    value={currentMenuItem.name}
                    onChange={(e) => setCurrentMenuItem(prev => ({
                      ...prev, name: e.target.value
                    }))}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="itemDescription" className="block text-gray-700 font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    id="itemDescription"
                    value={currentMenuItem.description}
                    onChange={(e) => setCurrentMenuItem(prev => ({
                      ...prev, description: e.target.value
                    }))}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="itemPrice" className="block text-gray-700 font-bold mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    id="itemPrice"
                    step="0.01"
                    value={currentMenuItem.price}
                    onChange={(e) => setCurrentMenuItem(prev => ({
                      ...prev, price: parseFloat(e.target.value)
                    }))}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button 
                    type="button"
                    onClick={() => setIsItemModalOpen(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                  >
                    Add Item
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;