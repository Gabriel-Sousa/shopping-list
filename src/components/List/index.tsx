'use client'
import { useShoppingList } from '@/hooks/useShoppingList'
import {
  LuApple,
  LuMoreVertical,
  LuBeef,
  LuMilk,
  LuCarrot,
  LuSandwich,
  LuCheck,
} from 'react-icons/lu'

export function List() {
  const { shoppingList, changeChecked } = useShoppingList()

  function category(category: string) {
    switch (category) {
      case 'fruta':
        return <LuApple size={16} />
      case 'padaria':
        return <LuSandwich size={16} />
      case 'legume':
        return <LuCarrot size={16} />
      case 'bebida':
        return <LuMilk size={16} />
      case 'carne':
        return <LuBeef size={16} />
      default:
        return <LuApple size={16} />
    }
  }

  function upperCase(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  function buttonChecked(isChecked: boolean) {
    if (isChecked) {
      return (
        <div>
          <div
            className={`flex items-center rounded bg-success p-[2px] text-gray-100 transition-colors hover:bg-success-light`}
          >
            <LuCheck size={16} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div
            className={`h-[20px] w-[20px] rounded border-[2px] border-purple transition-colors hover:bg-purple-dark`}
          />
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {shoppingList?.map((product) => (
        <div
          key={product.id}
          className={`flex items-center justify-between rounded-lg border border-gray-300 bg-gray-400 p-4 
          ${product.isChecked && 'border-gray-400 bg-gray-500'}`}
        >
          <div className="flex items-center gap-4">
            <button onClick={() => changeChecked(product.id)}>
              {buttonChecked(product.isChecked)}
            </button>
            <div className="flex flex-col">
              <span
                className={`text-sm font-bold text-gray-100 
                ${product.isChecked && 'font-normal line-through opacity-50'}`}
              >
                {upperCase(product.name)}
              </span>
              <span
                className={`text-xs text-gray-200
                ${product.isChecked && 'font-normal opacity-50 '}`}
              >
                {product.amount + ' '}
                {product.type}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 ">
            <div
              className={`
              flex items-center gap-2 rounded-full  px-4 py-2 text-xs font-semibold 
              ${product.category === 'fruta' && 'bg-orange-dark text-orange'}
              ${product.category === 'bebida' && 'bg-blue-dark text-blue'}
              ${product.category === 'carne' && 'bg-pink-dark text-pink'}
              ${product.category === 'padaria' && 'bg-yellow-dark text-yellow'}
              ${product.category === 'legume' && 'bg-green-dark text-green'} 
              ${product.isChecked && 'opacity-50'}
              `}
            >
              {category(product.category)}
              <span>{product.category}</span>
            </div>

            <div className="text-purple">
              <LuMoreVertical size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
