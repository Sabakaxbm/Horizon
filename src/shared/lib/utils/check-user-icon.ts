export const checkUserIcon = (userImageUrl?: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL
  return userImageUrl ? `${BASE_URL}/${userImageUrl}` : '/noUserImage.png'
}
