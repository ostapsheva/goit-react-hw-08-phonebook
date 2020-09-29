const name = state => state.auth.user.name;
const isAuth = state => state.auth.token;

export default { name, isAuth };
