import { Header } from '@/components/Header'
import Image from 'next/image'
import background from '../../public/background.png'
import { List } from '@/components/List'
import { ShoppingListProvider } from '@/hooks/useShoppingList'

export default function Home() {
  return (
    <ShoppingListProvider>
      <main className="relative w-full">
        <Image src={background} alt="" />
        <div className="relative z-10 mx-auto  max-w-3xl p-6 md:mt-[-135px]">
          <Header />
          <div className="mt-10">
            <List />
          </div>
        </div>
      </main>
    </ShoppingListProvider>
  )
}
