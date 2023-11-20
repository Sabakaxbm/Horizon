export const cutString = (string_: string, element: number) => {
  return string_.length >= element ? `${string_.slice(0, element)}...` : string_
}
