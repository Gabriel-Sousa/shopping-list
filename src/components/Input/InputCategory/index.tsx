import { useShoppingList } from '@/hooks/useShoppingList'
import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { ButtonCategory } from './ButtonCategory'

interface InputCategoryProps {
  name: string
}

export function InputCategory({ name }: InputCategoryProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  const { category } = useShoppingList()

  const categories = ['fruta', 'padaria', 'legume', 'bebida', 'carne']

  function closeCategoryMenu() {
    setIsCategoryOpen(false)
  }

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
