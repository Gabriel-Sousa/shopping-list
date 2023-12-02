import { useShoppingList } from '@/hooks/useShoppingList'
import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { ButtonType } from './ButtonType'

interface InputAmountProps {
  name: string
}

export function InputAmount({ name }: InputAmountProps) {
  const { amount, type, saveAmount } = useShoppingList()

  const types = ['UN.', 'L', 'KG']

  const [isTypeOpen, setIsTypeOpen] = useState(false)

  function checkIfString(teste: string) {
    if (isNaN(Number(teste))) {
      return
    }
    saveAmount(Number(teste))
  }

  function closeTypeMenu() {
    setIsTypeOpen(false)
  }

  return (
    <div className="flex w-full max-w-[145px] flex-col gap-2">
      <label
        htmlFor={name}
        className={`text-xs text-gray-200 ${amount > 0 && 'text-purple-light'}`}
      >
        Quantidade
      </label>
      <div className="relative flex">
        <input
          type="text"
          name={name}
          id={name}
          autoComplete="off"
          placeholder={'1'}
          value={Number(amount)}
          onChange={(e) => checkIfString(e.target.value)}
          className="w-1/2 rounded-bl-md rounded-tl-md border border-gray-300 bg-gray-500 p-3 text-gray-100 focus:outline focus:outline-purple-light"
        />

        <div className="relative w-2/4">
          <button
            type="button"
            onClick={() => {
              setIsTypeOpen(!isTypeOpen)
            }}
            className={`flex w-full items-center justify-between gap-2 rounded-br-md rounded-tr-md  border border-gray-300 bg-gray-500 p-3 text-left text-sm text-gray-100 
        ${type === 'Selecione' && 'text-gray-200'}
        ${isTypeOpen && 'border border-purple-light'}`}
          >
            <span className="text-base">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
            <span
              className={`
          transition-all duration-300
          ${isTypeOpen && 'rotate-180 text-purple '}`}
            >
              <LuChevronDown size={16} />
            </span>
          </button>

          {isTypeOpen && (
            <div className="absolute top-[52px] z-30 flex w-[85px] flex-col text-gray-100">
              {types.map((type) => (
                <ButtonType
                  key={type}
                  typeName={type}
                  onCloseTypeMenu={closeTypeMenu}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
