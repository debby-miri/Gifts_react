import axios from "axios";
import GenderEventsCategoryStore from "./GenderEventsCategoryStore";
//import GiftsStore from "./GiftsStore";
export async function getAllGender() {
    try {
        let res = await axios.get("https://localhost:7256/api/GendetEventsCategry/Gender",)
        if (res.status == 200) {
            if (res.data != null) {
                GenderEventsCategoryStore.setGender(res.data)
            }
        }
    } catch (error) {

    }
}
export async function getAllEvents() {
    try {
        let res = await axios.get("https://localhost:7256/api/GendetEventsCategry/Events",)
        if (res.status == 200) {
            if (res.data != null) {
                GenderEventsCategoryStore.setEvents(res.data)
            }
        }
    } catch (error) {

    }
}
export async function getAllCategory() {
    try {
        let res = await axios.get("https://localhost:7256/api/GendetEventsCategry/Category",)
        if (res.status == 200) {
            if (res.data != null) {
                GenderEventsCategoryStore.setCategory(res.data)
            }
        }
    } catch (error) {

    }
}