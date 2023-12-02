import { useShoppingList } from '@/hooks/useShoppingList'

interface InputItemProps {
  name: string
}

export function InputItem({ name }: InputItemProps) {
  const { itemName, saveItemName } = useShoppingList()

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
        value={itemName}
        onChange={(e) => saveItemName(e.target.value)}
        className="rounded-md border border-gray-300 bg-gray-500 p-3 text-gray-100 focus:outline focus:outline-purple-light"
      />
    </div>
  )
}
