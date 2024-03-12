import { Dispatch, SetStateAction, useState } from 'react'
import { useNotifyError } from '../useNotifyError'

type useLocalStorageResp<T> = {
  storedValue: T | undefined,
  setValue: Dispatch<SetStateAction<T | undefined>>,
  storageError: string
}

export function useLocalStorage<T>(
  key: string
): useLocalStorageResp<T> {
  const { notifyError } = useNotifyError()

  const [storageError, setError] = useState('')
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : undefined
    } catch (error) {
      notifyError(error)
      setError(String(error))
      return undefined
    }
  })

  const setValue: Dispatch<SetStateAction<T | undefined>> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      notifyError(error)
      setError(String(error))
    }
  }

  return { storedValue, setValue, storageError }
}