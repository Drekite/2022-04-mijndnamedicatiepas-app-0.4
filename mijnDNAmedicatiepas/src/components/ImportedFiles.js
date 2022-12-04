import { createContext } from 'react'

const importedFiles = createContext({
  variantFile: false,
  coverageFile: false,
  justImported: false
})

export default importedFiles
