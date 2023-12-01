import { useShoppingList } from '@/hooks/useShoppingList'
import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { ButtonCategory } from './ButtonCategory'

interface InputProps {
  variant: 'item' | 'quantity' | 'category'
  name: string
}

export function Input({ variant, name }: InputProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  const { category } = useShoppingList()

  const categories = ['fruta', 'padaria', 'legume', 'bebida', 'carne']

  function closeCategoryMenu() {
    setIsCategoryOpen(false)
  }

  if (variant === 'item') {
    return (
      <div className="flex w-[364px] flex-col gap-2 max-md:w-full ">
        <label htmlFor={name} className="text-xs text-gray-200 ">
          Item
        </label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          id={name}
          className="rounded-md border border-gray-300 bg-gray-500 p-3 text-gray-100 focus:outline focus:outline-purple-light"
        />
      </div>
    )
  } else if (variant === 'quantity') {
    return (
      <div className="flex w-full max-w-[145px] flex-col gap-2">
        <label htmlFor={name} className="text-xs text-gray-200 ">
          Quantidade
        </label>
        <div className="flex">
          <input
            type="text"
            name={name}
            id={name}
            autoComplete="off"
            placeholder={'1'}
            className="w-1/2 rounded-bl-md rounded-tl-md border border-gray-300 bg-gray-500 p-3 text-gray-100 focus:outline focus:outline-purple-light"
          />
          <select
            name={'type'}
            defaultValue={'unidade'}
            className="w-1/2 rounded-br-md rounded-tr-md border border-gray-300 bg-gray-500 p-3 text-gray-200 focus:outline focus:outline-purple-light"
          >
            <option value="unidade">UN.</option>
            <option value="litro">L</option>
            <option value="quilogramas">kg</option>
          </select>
        </div>
      </div>
    )
  } else {
    return (
      <div className="relative flex w-[200px] flex-col gap-2 ">
        <label
          htmlFor={name}
          className={`text-xs text-gray-200
           ${isCategoryOpen && 'text-purple-light'}
           ${category !== 'Selecione' && 'text-purple-light'}`}
        >
          Categoria
        </label>

        <button
          type="button"
          onClick={() => {
            setIsCategoryOpen(!isCategoryOpen)
          }}
          className={`flex items-center justify-between rounded-md border border-gray-300 bg-gray-500 p-3 text-left text-sm text-gray-100 
          ${category === 'Selecione' && 'text-gray-200'}
          ${isCategoryOpen && 'border border-purple-light'}`}
        >
          <span className="text-base">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <span
            className={`
            transition-all duration-300
            ${isCategoryOpen && 'rotate-180 text-purple '}`}
          >
            <LuChevronDown size={16} />
          </span>
        </button>

        {isCategoryOpen && (
          <div className="absolute top-[76px] z-30 flex w-[220px] flex-col text-gray-100">
            {categories.map((category) => (
              <ButtonCategory
                key={category}
                categoryName={category}
                onCloseCategoryMenu={closeCategoryMenu}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}
