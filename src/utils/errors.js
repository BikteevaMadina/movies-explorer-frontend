export default function Error(code) {
  console.log(code);
  switch (code) {
    case 409:
      return "Пользователь с таким логином и паролем уже зарегистрирован";
    default:
      return "Ошибка";
  }
}
