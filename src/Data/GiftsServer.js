import axios from "axios";
import GiftsStore from "./GiftsStore";
import UserStore from "./UserStore";
export async function getAllGifts() {
    try {
        let res = await axios.get("https://localhost:7256/api/Gift",)
        if (res.status == 200) {
            if (res.data != null) {
                GiftsStore.setGifts(res.data)
            }
        }
    } catch (error) {

    }
}
export async function UpdatesViews(GiftId) {
    try {
        let res = await axios.put(`https://localhost:7256/api/Gift/${GiftId}`,)
        if (res.status == 200) {
            if (res.data != null) {
                  GiftsStore.UpdateGift(GiftId,res.data)
            }
        }
    } catch (error) {
    }
}
export async function UpdatesGifts(GiftId,gift) {
    try {
        let res = await axios.put(`https://localhost:7256/api/Gift/update/${GiftId}`,gift)
        if (res.status == 200) {
            if (res.data != null) {
                  GiftsStore.UpdateGift(GiftId,res.data)
            }
        }
    } catch (error) {
    }
}
export async function DeleteGift(GiftId) {
    try {
        let res = await axios.delete(`https://localhost:7256/api/Gift/${GiftId}`,)
        if (res.status == 200) {
                  GiftsStore.delete(GiftId)
        }
    } catch (error) {

    }
}


export async function getAllGiftsFilter({ Age, EstimatedPrice, Gender, Events, Categry }) {
    try {
        let str = `${Age !== undefined ? 'Age=' + Age : ''}
        ${EstimatedPrice !== undefined ? '&EstimatedPrice=' + EstimatedPrice : ''}
        ${Gender !== undefined ? '&Gender=' + Gender : ''}
        ${Events !== undefined ? '&Events=' + Events : ''}
        ${Categry !== undefined ? '&Catgry=' + Categry : ''}`
        if (str.length > 0) {
            if (str[0] === '&') {
                str = str.split(1)
            }

            let res = await axios.get(`https://localhost:7256/api/Gift/filter?${str}`)
            if (res.status == 200) {
                if (res.data != null) {
                    console.log(res.data);
                    GiftsStore.setGifts(res.data)
                }
            }
        }
    } catch (error) {
        // UserStore.isLogin = false;

    }
}

export async function AddGift(gift) {

    let item={...gift,userId:UserStore.UserDetails.userId}
    try {
        let res = await axios.post("https://localhost:7256/api/Gift", item)
        if (res.status == 200) {
            if (res.data != null) {
                GiftsStore.AddGift(res.data)
            }
        }
    } catch (error) {
    }

}
// export async function getOpinion(GiftId) {
//     try {
//         let res = await axios.get(`https://localhost:7256/api/Gift/${GiftId}`)
//         if (res.status == 200) {
//             if (res.data != null) {
                
//             }
//         }
//     } catch (error) {
//         // UserStore.isLogin = false;

//     }
// }