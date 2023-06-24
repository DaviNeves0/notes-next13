/* eslint-disable @next/next/no-img-element */

export function Navigation() {
  return (
    <nav className="bg-zinc-800 h-screen rounded-r-2xl flex flex-col w-[20vw]">
      <div className=" h-[20vh] flex justify-center items-center">
        <img
          className=" h-20 w-20 ring-2 ring-white rounded-full"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Avatar"
        />
      </div>
      <div className="px-7 h-[80vh]">
        <span className="text-zinc-400">Dias da semana</span>
        <div className=" flex flex-col items-start gap-2 my-3">
          <button className="hover:bg-violet-700 py-2 w-full rounded text-start">
            <span className="ml-2">Segunda</span>
          </button>
          <button className="hover:bg-violet-700 py-2 w-full rounded text-start">
            <span className="ml-2">Terça</span>
          </button>
          <button className="hover:bg-violet-700 py-2 w-full rounded text-start">
            <span className="ml-2">Quarta</span>
          </button>
          <button className="hover:bg-violet-700 py-2 w-full rounded text-start">
            <span className="ml-2">Quinta</span>
          </button>
          <button className="hover:bg-violet-700 py-2 w-full rounded text-start">
            <span className="ml-2">Sexta</span>
          </button>
          <button className="hover:bg-violet-700 py-2 w-full rounded text-start">
            <span className="ml-2">Sábado</span>
          </button>
          <button className="hover:bg-violet-700 py-2 w-full rounded text-start">
            <span className="ml-2">Domingo</span>
          </button>
        </div>
        <span className="text-zinc-400">Opções</span>
        <div className="  flex flex-col items-start mt-3">
          <button className="hover:bg-violet-700 py-2 w-full rounded text-start">
            <span className="ml-2">Configurações</span>
          </button>
          <button className="hover:bg-violet-700 py-2 w-full rounded text-start">
            <span className="ml-2">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
