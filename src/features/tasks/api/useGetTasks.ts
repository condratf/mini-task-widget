import { useEffect, useRef } from "react"
// local
import { useLocalStorage } from "src/shared/hooks/useLocalStorage"
import { toTaskGroupMapper } from "src/shared/utils/tasks"
import { GET_TASKS_URL, LOCAL_STORAGE_KEY } from "../config"
import { useRequest } from "src/shared/api"
// types
import { TaskItemGroup } from "src/entities/tasks"
import { GetTasksResponse } from "./types"

export function useGetTasks() {
  const { storageError, storedValue, setValue } = useLocalStorage<Array<TaskItemGroup>>(LOCAL_STORAGE_KEY)
  const setStorageValue = useRef(setValue)

  const { data, isLoading, error } = useRequest<GetTasksResponse>({
    enabled: !storedValue || !!storageError,
    queryKey: [LOCAL_STORAGE_KEY],
    url: GET_TASKS_URL,
  })

  useEffect(() => {
    if (data?.length) {
      setStorageValue.current(data.map(toTaskGroupMapper))
    }
  }, [data])

  return {
    data: storedValue,
    isLoading: isLoading || !storedValue,
    setTasksStorageValue: setValue,
    error: storageError || error?.message || ''
  }
}

