'use client'

import { useShoppingList } from '@/hooks/useShoppingList'

import { LuCheck } from 'react-icons/lu'

interface ButtonCategoryProps {
  typeName: string
  onCloseTypeMenu: () => void
}

export function ButtonType({ typeName, onCloseTypeMenu }: ButtonCategoryProps) {
  const { type, saveType } = useShoppingList()

  return (
    <button
      type="button"
      onClick={() => {
        saveType(typeName)
        onCloseTypeMenu()
      }}
      className={`flex items-center justify-between  border border-gray-300 bg-gray-400 p-3  transition-colors hover:bg-gray-300
              ${type === typeName && 'bg-gray-300'}
              first:rounded-tl first:rounded-tr
              last:rounded-bl last:rounded-br
              `}
    >
      <div className="flex items-center gap-2 ">
        <span className="text-gray-100">
          {typeName.charAt(0).toUpperCase() + typeName.slice(1)}
        </span>
      </div>
      {type === typeName && (
        <div className={`text-purple transition-all`}>
          <LuCheck size={16} />
        </div>
      )}
    </button>
  )
}
