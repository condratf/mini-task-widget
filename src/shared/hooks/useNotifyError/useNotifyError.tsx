export function useNotifyError() {
  const notifyError = (err: unknown) => {
    console.error(err)
  }

  return {
    notifyError
  }
}