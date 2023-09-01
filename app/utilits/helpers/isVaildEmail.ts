export default function IsValidEmail(email : string) {
    return /\S+@\S+\.\S+/.test(email);
  }