import { Context }from './Context';

type Children = {
  children: JSX.Element | JSX.Element[]
}

export function Provider({ children }: Children) {
  const contextValue = {}

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  )
}
