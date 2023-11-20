export const routesObject = {
  persona: '/personas',
  createPersona: (id: number) => `/worksheets/persona-creation-worksheet/${id}`,
  profile: '/profile',
  worksheets: '/worksheets',
  createWorksheets: (id: number) => `/worksheets/worksheet-creation-worksheet/${id}`,
  showWorksheets: (id: number) => `/worksheets/worksheet-show-template/${id}`,
  auth: '/auth',
  registration: '/registration',
  resetPassword: '/reset-password',
  restorePassword: '/restore-password',
}
