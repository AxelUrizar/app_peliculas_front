export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('userToken'));

    if (user) {
      return { Authorization: 'Bearer ' + user };
    } else {
      return {};
    }
}