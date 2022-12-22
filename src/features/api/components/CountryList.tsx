import axios from "axios"


const CountryList=()=>{
    const config={
        url: "https://restcountries.com/v2/all",
        method: "get",
    }

    return axios(config)
}


export const CountryListObj={
    country_list: CountryList
}

