'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type Product = {
  id: string
  name: string
  amount: number
  type: string
  category: string
  isChecked: boolean
}

interface ShoppingListContextData {
  shoppingList: Product[]
  category: string
  amount: number
  type: string
  itemName: string
  addProductToShoppingList: () => void
  changeChecked: (id: string) => void
  saveCategory: (category: string) => void
  saveType: (type: string) => void
  saveAmount: (amount: number) => void
  saveItemName: (itemName: string) => void
}

interface ShoppingListProviderProp {
  children: ReactNode
}

export const ShoppingListContext = createContext({} as ShoppingListContextData)

export function ShoppingListProvider({ children }: ShoppingListProviderProp) {
  const [shoppingList, setShoppingList] = useState<Product[]>([])
  const [category, setCategory] = useState<string>('Selecione')
  const [amount, setAmount] = useState<number>(0)
  const [type, setType] = useState<string>('UN.')
  const [itemName, setItemName] = useState<string>('')

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@shopping-list:products-state-1.0.0',
    )

    if (storedStateAsJSON) {
      setShoppingList(JSON.parse(storedStateAsJSON))
    }
  }, [])

  function resetInput() {
    setCategory('Selecione')
    setAmount(0)
    setType('UN.')
    setItemName('')
  }

  function addProductToShoppingList() {
    const typeAllowed = ['UN.', 'L', 'KG']
    const verificationOfType = !typeAllowed.includes(type)

    const categoryAllowed = ['fruta', 'padaria', 'legume', 'bebida', 'carne']
    const verificationOfCategory = !categoryAllowed.includes(category)

    if (
      itemName === '' ||
      amount === 0 ||
      verificationOfCategory ||
      verificationOfType
    ) {
      return
    }

    const product = {
      id: String(Date.now()),
      name: itemName,
      amount,
      type,
      category,
      isChecked: false,
    }

    const storedStateAsJSON = localStorage.getItem(
      '@shopping-list:products-state-1.0.0',
    )

    if (storedStateAsJSON) {
      const dataAlreadyInLocalStorage = JSON.parse(
        storedStateAsJSON,
      ) as Product[]

      localStorage.setItem(
        '@shopping-list:products-state-1.0.0',
        JSON.stringify([product, ...dataAlreadyInLocalStorage]),
      )

      setShoppingList([product, ...shoppingList])
      resetInput()

      return
    }

    localStorage.setItem(
      '@shopping-list:products-state-1.0.0',
      JSON.stringify([product]),
    )

    setShoppingList([product])
    resetInput()
  }

  function changeChecked(id: string) {
    const changedItem = shoppingList.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked }
      } else {
        return item
      }
    })

    setShoppingList(changedItem)
    localStorage.setItem(
      '@shopping-list:products-state-1.0.0',
      JSON.stringify(changedItem),
    )
  }

  function saveCategory(category: string) {
    setCategory(category)
  }

  function saveType(type: string) {
    setType(type)
  }

  function saveAmount(amount: number) {
    setAmount(amount)
  }

  function saveItemName(itemName: string) {
    setItemName(itemName)
  }

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        category,
        amount,
        type,
        itemName,
        addProductToShoppingList,
        changeChecked,
        saveCategory,
        saveAmount,
        saveItemName,
        saveType,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  )
}

export function useShoppingList(): ShoppingListContextData {
  const context = useContext(ShoppingListContext)

  return context
}
