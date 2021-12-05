export const formatTodosMessage = (listMessages: string[]) => {
  return listMessages.reduce((previousValue, currentValue, currentIndex) => `${previousValue ? previousValue + '\n' : ''}${currentIndex + 1}. ${currentValue}`, '')
}