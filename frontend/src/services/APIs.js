
const BASE_URL = "http://localhost:4000/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",

  ADD_QUERY:BASE_URL+"/auth/AskToProfessors",
  CONTACT_US_API: BASE_URL + "/auth/contactUs",
  ADD_BENEFITIER:BASE_URL+"/auth/addBenefitier",
  VERIFY_SIGNATURE:BASE_URL+"/auth/verifySignature",
  CAPTURE_PAYMENT :BASE_URL+"/auth/capturePayment",
  GET_SOLDIERS_DETAILS:BASE_URL+"/auth/getAllSoldiersDetail",
  GET_DONATE_HISTORY:BASE_URL+"/auth/getDonateHistory"
}


// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
}


// COURSE ENDPOINTS


// CONTACT-US API


// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}
