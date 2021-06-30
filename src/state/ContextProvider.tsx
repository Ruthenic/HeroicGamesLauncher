import React from 'react'

import { ContextType } from 'src/types'
const Store = window.require('electron-store')
const store = new Store({
  cwd: 'store'
})

const initialContext: ContextType = {
  category: 'games',
  data: [],
  error: false,
  filter: 'all',
  gameUpdates: [],
  handleCategory: () => null,
  handleFilter: () => null,
  handleGameStatus: () => Promise.resolve(),
  handleLayout: () => null,
  handleSearch: () => null,
  layout: 'grid',
  libraryStatus: [],
  platform: 'unknown',
  refresh: () => Promise.resolve(),
  refreshLibrary: () => Promise.resolve(),
  refreshing: false,
  store: {...store},
  user: ''
}

export default React.createContext(initialContext)
