import axios from "axios";
import Swal from "sweetalert2";
import GiftsStore from "./GiftsStore";
import UserStore from "./UserStore";
//הרשמה
export  async function SignUpFunc(user) {
    try {
        let res = await axios.post("https://localhost:7256/api/User/signUp", user)
        if (res.status == 200) {
            if (res.data != null) {
                UserStore.isLogin = true;
                UserStore.setUser(res.data);
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There is already a user with this email!",
                })
            }
        }
    } catch (error) {
        UserStore.isLogin = false;

    }
}
//כניסה
export  async function SignInFunc(user) {
    try {
        let res = await axios.post("https://localhost:7256/api/User/signIn", user)
        if (res.status == 200) {
            if (res.data != null) {
                UserStore.isLogin = true;
                UserStore.setUser(res.data);
            }
        }
    } catch (error) {
        UserStore.isLogin = false;

    }

}

export  async function getGiftsOfUser(userId) {
    try {
        let res = await axios.get(`https://localhost:7256/api/User/Gifts/${userId}`)
        if (res.status == 200) {
            if (res.data != null) {
                GiftsStore.saveTemp(res.data)
            }
        }
    } catch (error) {
        //לבדוק אם חסום
        UserStore.isLogin = false;

    }

}