export default function IsValidNumber(number : string) {
    return /^\+20\d{10}$/.test(number);
  }