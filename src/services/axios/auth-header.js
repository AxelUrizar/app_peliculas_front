export default function authHeader() {
    const user = localStorage.getItem('user');
    // console.log(user)

    if (user) {
      return { Authorization: user };
    } else {
      return {};
    }
}