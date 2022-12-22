import { useQuery } from "@tanstack/react-query";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useMemo, useState } from "react";
import Select from "react-select";

import { Account } from "@/api";
import { CountryListObj } from "@/features/api";
import { getLocalStorage, setLocalStorage } from "@/features/helpers";
import { BaseTable } from "@/shared/components";

export default function HomePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [countryList, setCountryList] = useState([]);
  const [storeCapital,setStoreCapital]=useState([])
  const columnHelper = createColumnHelper<Account>();

  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row?.name, {
        id: "country",
        header: "Country",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.capital, {
        id: "capital",
        header: "Capital",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor(
        (row) => (row?.currencies != null ? row?.currencies[0]?.code : null),
        {
          id: "currency",
          header: "Currency",
          cell: (info) => info.getValue(),
        },
      ),
    ],
    [],
  );

  const { data } = useQuery(["country_list"], () =>
    CountryListObj.country_list(),
  );
  const countries = data?.data
    ?.map((item) => ({
        label: item?.name,
        value: item?.capital,
      }))

     

  const logout = () => {
    router.push("/login");
  };

  useEffect(() => {
    const userInfo = JSON.parse(getLocalStorage("userInfo"));
    const queryParams = router.query;

    if (userInfo === null)
      router.push("/login");
  }, []);

  useEffect(() => {
    setCountryList(data?.data);
    setLocalStorage("countryList", JSON.stringify(data?.data));
    setIsLoading(false);
  }, [data]);

  const searchCountry = (e: SyntheticEvent) => {
    const countryName = e.target.value;

    const SearchList = data?.data?.filter((item) =>
      item?.name?.includes(countryName),
    );

    setCountryList(SearchList);
  };

  const getCapital=(country:object)=>{
     if(country?.length!=0)
    setStoreCapital([{label:country[0]?.value,value:country[0]?.value}])
    else
    setStoreCapital([])
    


   
      
  }

  console.log(storeCapital)
  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/navy-blue-smoky-art-abstract-background_53876-102669.jpg?w=2000')",
      }}
    >
      <div className="h-[10vh] w-full bg-white shadow-lg">
        <button
          className="absolute right-9 mt-4 h-[6vh] w-[10vw] rounded-md bg-blue-500 text-white hover:bg-cyan-400"
          type="button"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
      <div className="h-[100vh] w-full overflow-y-scroll">
        <div className="mx-auto mt-6 mb-5 w-[90%]">
          <Select
            hideSelectedOptions
            isMulti
            isSearchable
            className="text-small font-small mt-4 block h-auto w-[30%] rounded-md"
            placeholder="Search for a country here"
            options={countries}
            onChange={getCapital}
            value={storeCapital}
            
            
      
          />
          <BaseTable<Account>
            columns={columns}
            data={countryList}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

HomePage.isPublicRoute = true;
