import { Slider } from "@material-ui/core";
import { useState,useEffect } from "react";

import { Account } from "@/api";
import { BaseModal, Button, Form } from "@/shared/components";
import { useCreateActivity } from "@/shared/services/activity.service";
import { useModal } from "@/shared/stores/modal.store";
import { formatDate } from "@/shared/utils";
import Select from "react-select"
import { CountryListObj } from "@/features/api";
import { useQuery } from "@tanstack/react-query";

export function RemarkModal({ isOpen }: { isOpen: boolean }) {

 
    const { isModalOpen, onModalClose,selectedData } = useModal();
    console.log(selectedData)




  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-[35%]"
      title={`Remarks`}
      remarks={selectedData?.activity_name}
      onRequestClose={() => {
        onModalClose();
      }}
    >
   
     

      <p className="w-[80%] h-[60vh] m-5 pl-2 pt-2 rounded-lg mx-auto block bg-gray-200 break-words overflow-y-scroll" >
      
       {selectedData?.remarks}
      </p>

      
      
 
    </BaseModal>
  );
}
