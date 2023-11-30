import { LuApple, LuMoreVertical } from 'react-icons/lu'

export function List() {
  const lista = [0, 1, 2, 3]
  return (
    <div className="flex flex-col gap-3">
      {lista.map((item) => (
        <div
          key={item}
          className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-400 p-4"
        >
          <div className="flex items-center gap-4">
            <div className="h-[14px] w-[14px]  border border-purple " />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-100">Maçã</span>
              <span className="text-xs text-gray-200">2 unidades</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 ">
            <div className="flex items-center gap-2 rounded-full bg-orange-dark px-4 py-2 text-xs font-semibold text-orange">
              <LuApple size={16} />
              <span>fruta</span>
            </div>

            <div className="text-purple">
              <LuMoreVertical size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>

    // lista.map((item) => (
    //   <div
    //     key={item}
    //     className="flex rounded-lg border border-gray-300 bg-gray-400 p-4"
    //   >
    //     <div>X</div>
    //     <div className="flex flex-col">
    //       <span>Maçã</span>
    //       <span>2 unidades</span>
    //     </div>
    //   </div>
    //   ))
    // </div>
  )
}
