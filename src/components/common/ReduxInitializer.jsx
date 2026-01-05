import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/authSlice"

export default function ReduxInitializer() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        const userId = localStorage.getItem("userId");

        if (token && role && userId) {
            dispatch(setAuth({ token, role, userId }));
        }
    }, [dispatch]);

    return null;
}
