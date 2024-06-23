
import axios from "axios";
import GiftsStore from "./GiftsStore";
export async function postOpinion(opinion) {
    try {
        let res = await axios.post("https://localhost:7256/api/Opinion", opinion)
        if (res.status == 200) {
            if (res.data != null) {
                GiftsStore.updateOpinion(opinion.giftId,opinion)
                return "Your opinion has been successfully received"

            }
        }
    } catch (error) {
        return "Error"

    }
}