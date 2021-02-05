import { useState, useEffect } from 'react'

const IS_BROWSER = typeof window !== 'undefined'

export function useLocalStorage<T> (key: string, initial: T) {
  const [state, setState] = useState<T>(() => {
    if (IS_BROWSER) {
      try {
        const data = localStorage.getItem(key)

        if (data) {
          return JSON.parse(data)
        }

        return initial
      } catch (e) {
        return initial
      }
    }
  })

  const onStorage = (ev: StorageEvent) => {
    if (ev.key === key) {
      const data = JSON.parse(ev.newValue)

      if (data) {
        setState(data)
      }
    }
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
    window.addEventListener('storage', onStorage)

    return () => window.removeEventListener('storage', onStorage)
  }, [state])

  return [state, setState] as const
}
