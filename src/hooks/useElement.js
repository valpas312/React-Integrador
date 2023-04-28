import { useSelector } from "react-redux";

const useElement = (element, login) => {
    const user = useSelector((state) => state.user);

    //SI EL USUARIO ESTÁ LOGUEADO, SE MUESTRA EL ELEMENTO, SINO SE MUESTRA EL LOGIN
    if (user.user?.email) {
        return element;
    } else {
        return login;
    }
};

export default useElement;