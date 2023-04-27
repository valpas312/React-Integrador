import { useSelector } from "react-redux";

const useElement = (element, login) => {
    const user = useSelector((state) => state.user);

    if (user.user?.email) {
        return element;
    } else {
        return login;
    }
};

export default useElement;