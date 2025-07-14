import { useState } from 'react'

type UseLocalStorageReturn<T> = [T, (value: T | ((val: T) => T)) => void]

const useLocalStorage = <T>(key: string, initialValue: T): UseLocalStorageReturn<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      return initialValue
    }
  })

  const setValue: (value: T | ((val: T) => T)) => void = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
