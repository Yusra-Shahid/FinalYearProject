import { useHistory } from 'react-router-dom';


const Logout = () => {
    const history = useHistory();

    localStorage.removeItem('p_name');
    localStorage.removeItem('UserType');
    localStorage.removeItem('email');

    history.push('/');
    window.location.reload(true);



}
export default Logout;