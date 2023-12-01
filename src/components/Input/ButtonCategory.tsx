'use client'

import { useShoppingList } from '@/hooks/useShoppingList'

import {
  LuApple,
  LuBeef,
  LuMilk,
  LuCarrot,
  LuSandwich,
  LuCheck,
} from 'react-icons/lu'

type Category =
  | 'fruta'
  | 'padaria'
  | 'legume'
  | 'bebida'
  | 'carne'
  | 'Selecione'

interface ButtonCategoryProps {
  categoryName: string
  onCloseCategoryMenu: () => void
}

export function ButtonCategory({
  categoryName,
  onCloseCategoryMenu,
}: ButtonCategoryProps) {
  const { category, saveCategory } = useShoppingList()

  function categoryIcon(category: string) {
    switch (category) {
      case 'fruta':
        return (
          <div className="text-orange">
            <LuApple size={16} />
          </div>
        )
      case 'padaria':
        return (
          <div className="text-yellow">
            <LuSandwich size={16} />
          </div>
        )
      case 'legume':
        return (
          <div className="text-green">
            <LuCarrot size={16} />
          </div>
        )
      case 'bebida':
        return (
          <div className="text-blue">
            <LuMilk size={16} />
          </div>
        )
      case 'carne':
        return (
          <div className="text-pink">
            <LuBeef size={16} />
          </div>
        )
      default:
        return (
          <div className="text-orange">
            <LuApple size={16} />
          </div>
        )
    }
  }

  return (
    <button
      type="button"
      onClick={() => {
        saveCategory(categoryName as Category)
        onCloseCategoryMenu()
      }}
      className={`flex items-center justify-between  border border-gray-300 bg-gray-400 p-3  transition-colors hover:bg-gray-300
              ${category === categoryName && 'bg-gray-300'}
              first:rounded-tl first:rounded-tr
              last:rounded-bl last:rounded-br
              `}
    >
      <div className="flex items-center gap-2 ">
        {categoryIcon(categoryName)}
        <span className="text-gray-100">
          {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
        </span>
      </div>
      {category === categoryName && (
        <div className={`text-purple transition-all`}>
          <LuCheck size={16} />
        </div>
      )}
    </button>
  )
}
