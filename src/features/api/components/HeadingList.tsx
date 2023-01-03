import axios from "axios"


const HeadingList=()=>{
    const config={
        url: "https://mocki.io/v1/3bd2a4af-d50e-49f6-9ffa-98c6becae814",
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    }

    return axios(config)
}


export const HeadingListObj={
    heading_list: HeadingList
}

