export const bindMethod = (getFormRef: any) => {
  // 重置表单
  const reset = () => {
    getFormRef().resetFields()
  }

  const validate = (callback: any) => {
    getFormRef().validate(callback)
  }

  return {
    reset,
    validate
  }
}
