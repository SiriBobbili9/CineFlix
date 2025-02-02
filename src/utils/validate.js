export const checkValidData = (email, password) => {
  const isEmailValid =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password);
  if (!email || !password) return "Please fill All fields"
    
  if (!isEmailValid)  return "Email is Not Valid";
  
  if (!isPasswordValid)  return "Password is Not Valid";
  
  return null;
};
