import { LogoLogin } from "./LogoLogin"

export function CreateUser() {
  return (
    <div className="w-full max-w-[1100px] flex justify-between mx-auto">

      <div className="max-w-[640px] mr-10 mt-48">
        <LogoLogin />
      </div>

      <div className="w-[500px] shadow-2xl text-center p-14 items-center mb-28 rounded-2xl bg-green-800 mt-28">
        <strong className="text-3xl">
          Cadastro
        </strong>
        <form action="" className="mt-5 flex flex-col gap-5 w-full">
          <input
            className="outline-green-200 flex-1 bg-green-600 p-4 rounded border-0 font-medium"
            type="text"
            placeholder="Nome"
            // value={ inputText }
            // onChange={ e => setInputText(e.target.value) }
            // onKeyUp={ handleKeyUp }
          />
          <input
            className=" outline-green-200 flex-1 bg-green-600 p-4 rounded border-0 font-medium"
            type="email"
            placeholder="Email"
            // value={ inputText }
            // onChange={ e => setInputText(e.target.value) }
            // onKeyUp={ handleKeyUp }
          />
          <input
            className="outline-green-200 flex-1 bg-green-600 p-4 rounded border-0 font-medium"
            type="password"
            placeholder="Senha"
            // value={ inputText }
            // onChange={ e => setInputText(e.target.value) }
            // onKeyUp={ handleKeyUp }
          />
          <button
            type="submit"
            className="text-xl font-semibold text-green-30 mt-4 bg-green-500 rounded-lg p-3 hover:bg-green-400 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
