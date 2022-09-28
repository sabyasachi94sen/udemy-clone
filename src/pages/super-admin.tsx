import { useState } from "react";
import toast from "react-hot-toast";
import { HiSearch } from "react-icons/hi";
import { useMutation, useQueryClient } from "react-query";

import { CreateSuperAdminForm, EditSuperAdminForm } from "@/features/admin";
import { NewSuperAdminTable } from "@/features/admin/components/NAdminTable";
import { SuperAdminResObj } from "@/features/api";
import { ActiveStatus } from "@/features/ui";
import { Button, Input } from "@/shared/components";

export default function SuperAdmin() {
  const [backgroundBlurAddAdmin, setBackGroundBlurAddAdmin] = useState(false);
  const [backgroundBlurEditAdmin, setBackGroundBlurEditAdmin] = useState(false);
  const [backgroundBlurDeleteAdmin, setBackGroundBlurDeleteAdmin] =
    useState(false);

  const [isTable, setIsTable] = useState(false);
  const [specificSuperAdminData, setSpecificSuperAdminData] = useState({});
  const [superAdminId, setSuperAdminId] = useState(null);
  const [mutateParams, setMutateParams] = useState({
    mutateFunc: SuperAdminResObj.super_admin_info_submit,
    action: "create_user",
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation(mutateParams.mutateFunc, {
    onSuccess: () => {
      if (mutateParams.action === "create_user")
        setBackGroundBlurAddAdmin(!backgroundBlurAddAdmin);
      else if (mutateParams.action === "edit_user") {
        setBackGroundBlurEditAdmin(!backgroundBlurEditAdmin);
      } else if (mutateParams.action === "delete_user") {
        setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
      }

      setTimeout(() => {
        queryClient.invalidateQueries("super-admin-list");
      }, 1000);
    },
    onError: () => {
      toast.error("This Email Already Exist");
    },
  });

  // const { data } = useQuery(["super-admin-list"], () =>
  //   SuperAdminResObj.super_admin_info_list(),
  // );

  const handleAddBlur = () => {
    setBackGroundBlurAddAdmin(!backgroundBlurAddAdmin);
  };

  const handleEditBlur = (id: string, superAdminData: object) => {
    setBackGroundBlurEditAdmin(!backgroundBlurEditAdmin);

    setSuperAdminId(id);
    setSpecificSuperAdminData(superAdminData);
  };

  const handleDeleteBlur = (id) => {
    setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);

    setSuperAdminId(id);
  };

  const handleAddSubmit = (postData: object) => {
    setMutateParams({
      mutateFunc: SuperAdminResObj.super_admin_info_submit,
      action: "create_user",
    });
    setTimeout(() => {
      mutate(postData);
    }, 1000);
  };

  const isTableCheck = () => {
    setIsTable(!isTable);
  };

  const handleEditSubmit = (putData: object) => {
    const putDataObj = {
      data: putData,
      id: superAdminId,
    };

    setMutateParams({
      mutateFunc: SuperAdminResObj.super_admin_info_edit,
      action: "edit_user",
    });

    setTimeout(() => {
      mutate(putDataObj);
    }, 1000);
  };

  const handleDeleteSubmit = (confirmStatus) => {
    if (confirmStatus) {
      setMutateParams({
        mutateFunc: SuperAdminResObj.super_admin_info_delete,
        action: "delete_user",
      });
      setTimeout(() => {
        mutate(superAdminId);
      }, 1000);
    } else {
      setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
    }
  };

  const deleteStatus = (e, flag) => {
    if (flag == 1) setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
  };

  return (
    <>
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-sans text-3xl font-bold">Super Admin Table</h1>
        <div className="mt-8 flex justify-between">
          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search the staff member here"
            width="96"
          />
          <Button width="max">Add Staff</Button>
        </div>
        <NewSuperAdminTable />

        {/* <AdminTable
            adminData={data && data?.data && data.data?.results}
            handleAddBlur={handleAddBlur}
            handleDeleteBlur={handleDeleteBlur}
            handleEditBlur={handleEditBlur}
            name="Essai Super Admin Roster"
            tableCheck={isTableCheck}
          /> */}
      </div>
      {backgroundBlurAddAdmin ? (
        <CreateSuperAdminForm
          handleAddBlur={handleAddBlur}
          handleAddSubmit={handleAddSubmit}
          title="Create Super Admin role"
        />
      ) : null}

      {backgroundBlurEditAdmin ? (
        <EditSuperAdminForm
          handleEditBlur={handleEditBlur}
          handleEditSubmit={handleEditSubmit}
          header="Are you sure you want to make this Super Admin inactive?"
          specificData={specificSuperAdminData}
          title="Edit a Super Admin role"
        />
      ) : null}

      {backgroundBlurDeleteAdmin ? (
        <ActiveStatus
          confirm={deleteStatus}
          handleDeleteSubmit={handleDeleteSubmit}
          header="Are you sure you want to delete this Super Admin?"
        />
      ) : null}
    </>
  );
}
