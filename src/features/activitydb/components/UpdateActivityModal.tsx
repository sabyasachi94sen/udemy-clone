import { Slider } from "@material-ui/core";
import { useState, useEffect } from "react";

import { Account } from "@/api";
import { BaseModal, Button, Form } from "@/shared/components";
import { useUpdateActivity } from "@/shared/services/activity.service";
import { useModal } from "@/shared/stores/modal.store";
import { formatDate } from "@/shared/utils";
import Select from "react-select";
import { nullable } from "zod";
import { CountryListObj } from "@/features/api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { activityValid } from "@/features/helpers/validations";

export function UpdateActivityModal({ isOpen }: { isOpen: boolean }) {
  const [storeOptions, setStoreOptions] = useState(null);
  const [storeResidence, setStoreResidence] = useState(null);
  const [storeCitizen, setStoreCitizen] = useState(null);
  const [rangeType, setRangeType] = useState(null);
  const [keyDates, setKeyDates] = useState({
    registration_open: {
      is_active: false,
      date: null,
    },
    ra_deadline: {
      is_active: false,
      date: null,
    },
    activity_start: {
      is_active: false,
      date: null,
    },
    activity_end: {
      is_active: false,
      date: null,
    },
  });

  const activityTypeOptions = [
    {
      option: "Exam",
    },
    {
      option: "Competition",
    },
    {
      option: "STEP programs",
    },
    {
      option: "Online Course",
    },
    {
      option: "Summer Schools : selective speciality",
    },
    {
      option: "Summer Schools : credit bearing",
    },
    {
      option: "Other",
    },
  ];
  const subjectOptions = [
    {
      option: "Maths",
    },
    {
      option: "Computer Science",
    },
    {
      option: "Physics",
    },
    {
      option: "Chemistry",
    },

    {
      option: "Biology",
    },
    {
      option: "Environmental Science",
    },
    {
      option: "General Science",
    },
    {
      option: "Economics/Business/Finance",
    },

    {
      option: "English",
    },
    {
      option: "Political Science",
    },
    {
      option: "Psychology",
    },
    {
      option: "Other",
    },
  ];

  const applicationOptions = [
    {
      label: "Fee",
      value: "fee",
    },
    {
      label: "Form",
      value: "form",
    },
    {
      label: "Essay",
      value: "essay",
    },
    {
      label: "Multiple Essays",
      value: "multiple_essay",
    },
    {
      label: "LOR",
      value: "lor",
    },
    {
      label: "Multiple LORs",
      value: "multiple_lors",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  const locationTypeOptions = [
    {
      option: "Country / City",
    },
    {
      option: "Virtual",
    },
    {
      option: "Country / City & Virtual",
    },
  ];

  const { data } = useQuery(["country_list"], () =>
    CountryListObj.country_list(),
  );
  const countries=data?.data?.map((item)=>{
  
    return {
      label: item?.name?.common,
      value: item?.name?.common?.toLowerCase()
    }
  }).sort((a,b)=>{
  
    return a.label.localeCompare(b.label)
  })
  
   countries?.unshift({label:"OPEN",value: "open"})
  
  const [gradeVal, setGradeVal] = useState([0, 16]);
  const [ageVal, setAgeVal] = useState([0, 25]);

  const handleGradeVal = (e: SyntheticEvent, data: number[]) => {
    setGradeVal(data);
  };

  const handleAgeVal = (e: SyntheticEvent, data: number[]) => {
    setAgeVal(data);
  };

  const handleMultiOption = (value: { value: {}[] }) => {
    const select_options = value.map((item) => item.label);
    setStoreOptions(select_options);
  };

  const handleResidence = (value: { value: {}[] }) => {
    const residence = value.map((item) => item.label);
    setStoreResidence(residence);
  };

  const handleCitizen = (value: { value: {}[] }) => {
    const citizen = value.map((item) => item.label);
    setStoreCitizen(citizen);
  };

  const { isModalOpen, onModalClose, selectedData } = useModal();
  const updateActivityMutation = useUpdateActivity(() => {
    onModalClose();
  });

  useEffect(() => {
    if (selectedData != null) {
      setAgeVal(selectedData?.age_range);
      setGradeVal(selectedData?.grade_range);
    }
  }, [selectedData]);

  useEffect(() => {
    setStoreOptions(selectedData?.application_requirement);
    setStoreCitizen(selectedData?.only_open_to_citizens_of_these_countries);
    setStoreResidence(selectedData?.only_open_to_residence_of_these_countries);
    setKeyDates({
      registration_open: {
        is_active: false,
        date: selectedData?.registration_open,
      },
      ra_deadline: {
        is_active: false,
        date: selectedData?.application_deadline,
      },
      activity_start: {
        is_active: false,
        date: selectedData?.activity_start_date,
      },
      activity_end: {
        is_active: false,
        date: selectedData?.activity_end_date,
      },
    });

    setRangeType(selectedData?.range_type?.toLowerCase());
  }, []);

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-[90%]"
      title="Update Activity"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <Form<Account>
        form={{
          defaultValues: {
            activity_name: selectedData?.activity_name,
            country_citizenship: selectedData?.country_citizenship,
            url: selectedData?.url,
            registration_open: selectedData?.registration_open,
            application_deadline: selectedData?.application_deadline,
            activity_start_date: selectedData?.activity_start_date,
            activity_end_date: selectedData?.activity_end_date,
            remarks: selectedData?.remarks,
            range_type: selectedData?.range_type?.toLowerCase(),
          },
        }}
        onSubmit={(formData) => {
          activityValid
            .validate(formData, { abortEarly: false })
            .then((res) => {
              updateActivityMutation.mutate({
                data: {
                  ...formData,
                  url: formData.url.includes("https")
                    ? formData.url
                    : "https://" + formData.url,
                  application_requirement: storeOptions,
                  age_range: ageVal,
                  grade_range: gradeVal,
                  only_open_to_citizens_of_these_countries: storeCitizen,
                  only_open_to_residence_of_these_countries: storeResidence,
                },
                id: selectedData?.id,
              });
            })
            .catch((err) => {
              err.inner.map((item) => {
                toast.error(item.message);
              });
            });
        }}
      >
        {({ register }) => (
          <div>
            <div className="mx-auto flex h-[70vh] w-full justify-around overflow-y-scroll">
              <div className="h-auto w-[40%]">
                <h1 className="mb-6 text-[1.4rem] font-bold text-[#6F6F6F]">
                  Activity Information
                </h1>
                <div className="mt-2 flex items-center">
                  <span className="text-md font-bold">
                    Name<span className="ml-1 text-red-500">*</span>
                  </span>
                  <input
                    className="relative ml-[19.5%] h-[5vh] w-[73%] rounded-md bg-[#EEEE]"
                    {...register("activity_name")}
                    // defaultValue={name!=="Add an activity to the database"?individualActivityInfo?.activity_name: null}

                    type="text"
                  />
                  <br />
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">
                    Type<span className="ml-1 text-red-500">*</span>
                  </span>
                  <select
                    className="relative ml-[20.5%] h-[5vh] w-[73%] rounded-md bg-[#EEEE] outline-none"
                    {...register("activity_type")}
                  >
                    <option>Select Type</option>
                    {activityTypeOptions.map((item, index) => (
                      <option
                        key={index}
                        selected={selectedData?.activity_type == item.option}
                      >
                        {item.option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">
                    Subject<span className="ml-1 text-red-500">*</span>
                  </span>
                  <select
                    className="relative ml-[17%] h-[5vh] w-[73%] rounded-md bg-[#EEEE] outline-none"
                    {...register("subject")}
                  >
                    <option>Select Subject</option>
                    {subjectOptions.map((item, index) => (
                      <option
                        key={index}
                        selected={selectedData?.subject == item.option}
                      >
                        {item.option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-6 flex items-center">
                  <span className="text-md font-bold">
                    Application requirement
                  </span>

                  <Select
                    className="relative h-[5vh] w-[78%] rounded-md outline-none"
                    isMulti
                    options={applicationOptions}
                    onChange={handleMultiOption}
                    label="application_requirement"
                    isSearchable={true}
                    defaultValue={selectedData?.application_requirement?.map(
                      (item) => {
                        return { label: item };
                      },
                    )}
                  />
                </div>
                <div className="mt-8 flex items-center">
                  <span className="text-md font-bold">Location Type</span>
                  <select
                    className="relative ml-[11%] h-[5vh] w-[71%] rounded-md bg-[#EEEE] outline-none"
                    {...register("location_type")}
                  >
                    <option>Location Type</option>
                    {locationTypeOptions.map((item, index) => (
                      <option
                        key={index}
                        selected={selectedData?.location_type == item.option}
                      >
                        {item.option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">
                    Country of Activity
                    <span className="ml-1 text-red-500">*</span>
                  </span>
                  <select
                    className="relative ml-6 h-[5vh] w-[78%] rounded-md bg-[#EEEE] outline-none"
                    {...register("country_residence")}
                  >
                    <option>Select Country</option>

                    {countries?.map((item, index) => (
                      <option
                        key={index}
                        selected={
                          selectedData?.country_residence === item?.label
                        }
                      >
                        {item?.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">City of Activity</span>
                  <input
                    className="relative ml-16 h-[5vh] w-[80%] rounded-md bg-[#EEEE]"
                    {...register("country_citizenship")}
                    type="text"
                  />
                  <br />
                </div>

                <div className="mt-6 flex items-center">
                  <span className="text-md font-bold">URL</span>
                  <input
                    className="relative ml-[24%] h-[5vh] w-[71%] rounded-md bg-[#EEEE]"
                    {...register("url")}
                    // defaultValue={individualActivityInfo?.url}

                    type="text"
                  />
                  <br />
                </div>

                <h1 className="mt-6 mb-4 text-lg text-[1.45rem] font-bold text-[#6F6F6F]">
                  Key Dates
                </h1>
                <div className="mt-2 flex items-center">
                  <span className="text-md font-bold">
                    Registration open
                    <span className="ml-1 text-red-500">*</span>
                  </span>
                  <input
                    className="relative ml-7 h-[5vh] w-[78%] rounded-md bg-[#EEEE]"
                    {...register("registration_open")}
                    // defaultValue={individualActivityInfo?.registration_open}
                    max={keyDates.ra_deadline.date}
                    onChange={(e) => {
                      setKeyDates({
                        registration_open: {
                          is_active: true,
                          date: e.target.value,
                        },
                        ra_deadline: {
                          is_active: false,
                          date: null,
                        },
                        activity_start: {
                          is_active: false,
                          date: null,
                        },
                        activity_end: {
                          is_active: false,
                          date: null,
                        },
                      });
                    }}
                    type="date"
                  />
                  <br />
                </div>

                <div className="mt-4 mb-5 flex items-center">
                  <div className="w-[21%] break-words">
                    <span className="text-md font-bold">
                      R/A/S deadline<span className="ml-1 text-red-500">*</span>
                    </span>
                    <p className="text-sm text-gray-700">
                      R/A/S deadline means registration/application/submission
                      deadline, as applicable
                    </p>
                  </div>
                  <input
                    className="relative ml-12 h-[5vh] w-[71%] rounded-md bg-[#EEEE]"
                    {...register("application_deadline")}
                    // defaultValue={moment(individualActivityInfo?.created_at).format("YYYY-MM-DD")}
                    min={keyDates.registration_open.date}
                    max={keyDates.activity_start.date}
                    disabled={
                      keyDates.registration_open.date != null ? false : true
                    }
                    onChange={(e) => {
                      setKeyDates({
                        registration_open: {
                          is_active: true,
                          date: keyDates.registration_open.date,
                        },
                        ra_deadline: {
                          is_active: true,
                          date: e.target.value,
                        },
                        activity_start: {
                          is_active: false,
                          date: null,
                        },
                        activity_end: {
                          is_active: false,
                          date: null,
                        },
                      });
                    }}
                    type="date"
                  />
                  <br />
                </div>

                <div className="mb-6 flex items-center">
                  <span className="text-md font-bold">Activity Start</span>
                  <input
                    className="relative ml-[11.8%] h-[5vh] w-[73%] rounded-md bg-[#EEEE]"
                    {...register("activity_start_date")}
                    // defaultValue={individualActivityInfo?.activity_start_date}
                    min={keyDates.ra_deadline.date}
                    max={keyDates.activity_end.date}
                    disabled={keyDates.ra_deadline.date != null ? false : true}
                    onChange={(e) => {
                      setKeyDates({
                        registration_open: {
                          is_active: true,
                          date: keyDates.registration_open.date,
                        },
                        ra_deadline: {
                          is_active: true,
                          date: keyDates.ra_deadline.date,
                        },
                        activity_start: {
                          is_active: true,
                          date: e.target.value,
                        },
                        activity_end: {
                          is_active: false,
                          date: null,
                        },
                      });
                    }}
                    type="date"
                  />
                  <br />
                </div>

                <div className="mb-6 flex items-center">
                  <span className="text-md font-bold">Activity End</span>
                  <input
                    className="relative ml-[13%] h-[5vh] w-[74%] rounded-md bg-[#EEEE]"
                    {...register("activity_end_date")}
                    // defaultValue={individualActivityInfo?.activity_end_date}
                    min={keyDates.activity_start.date}
                    disabled={
                      keyDates.activity_start.date != null ? false : true
                    }
                    onChange={(e) => {
                      setKeyDates({
                        registration_open: {
                          is_active: true,
                          date: keyDates.registration_open.date,
                        },
                        ra_deadline: {
                          is_active: true,
                          date: keyDates.ra_deadline.date,
                        },
                        activity_start: {
                          is_active: true,
                          date: keyDates.activity_start.date,
                        },
                        activity_end: {
                          is_active: true,
                          date: e.target.value,
                        },
                      });
                    }}
                    type="date"
                  />
                  <br />
                </div>
              </div>
              <div className="h-auto w-[45%] border-l-2 border-l-cyan-400 pl-12">
                <h1 className="mb-6 text-[1.4rem] font-bold text-[#6F6F6F]">
                  Eligibility Restrictions
                </h1>
                <p className="-mt-6 text-sm text-gray-700">
                  In this section, please indicate whether this activity has
                  eligibility based on student grade, age, residence, or
                  citizenship. If there are no such restrictions, please enter
                  nothing
                </p>

                <div className="mt-6 flex items-center">
                  <span className="text-md font-bold">Range Type</span>
                  <select
                    className="relative left-16 h-[5vh] w-[40%] rounded-md bg-[#EEEE] outline-none"
                    {...register("range_type")}
                    onChange={(e) => setRangeType(e.target.value)}
                  >
                    <option>Select range type</option>
                    <option value="grade_range">Grade range</option>
                    <option value="age_range">Age range </option>
                    <option value="both">Both</option>
                  </select>
                </div>
                {rangeType === "grade_range" ||
                rangeType === "both" ||
                rangeType === (null || "Select range type") ? (
                  <div className="mt-4 flex w-[100%] items-center justify-between">
                    <span className="text-md font-bold">Grade Range</span>

                    <input
                      {...register("grade_low")}
                      className="relative left-[4%] h-[3vh] w-[8%]"
                      type="text"
                      value={gradeVal[0]}
                    />
                    <div className="w-[50%]">
                      <Slider
                        className="mt-2"
                        value={gradeVal}
                        onChange={handleGradeVal}
                        min={0}
                        max={16}
                      />
                    </div>

                    <input
                      {...register("grade_high")}
                      className="h-[3vh] w-[8%]"
                      type="text"
                      value={gradeVal[1]}
                    />
                  </div>
                ) : null}

                {rangeType === "age_range" ||
                rangeType === "both" ||
                rangeType === (null || "Select range type") ? (
                  <div className="mt-4 flex w-[100%] items-center justify-between">
                    <span className="text-md font-bold">Age Range</span>
                    {/* <div className="flex justify-around items-center w-[40%] ml-[4.6vw]">
                      <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative" name="name" type="text"/><br />
                      <hr className="h-[0.8vh] w-[2vw] bg-black ml-2"/>
                      <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative ml-3" name="name" type="text"/><br />
                    </div> */}

                    <input
                      className="relative left-[6%] w-[8%]"
                      type="text"
                      {...register("age_low")}
                      value={ageVal[0]}
                    />

                    <div className="w-[50%]">
                      <Slider
                        className="relative left-[2%] mt-2"
                        value={ageVal}
                        onChange={handleAgeVal}
                        min={0}
                        max={16}
                      />
                    </div>
                    <input
                      {...register("age_high")}
                      className="relative w-[8%]"
                      type="text"
                      value={ageVal[1]}
                    />
                  </div>
                ) : null}
                <div className="text-md mt-5 flex w-[60%] flex-col">
                  <p className="text-md font-bold font-bold ">
                    Only open to residents of these countries
                  </p>

                  <Select
                    className="text-small font-small mt-4 block h-auto w-[100%] rounded-md"
                    isMulti
                    options={countries}
                    onChange={handleResidence}
                    label="only_open_to_residence_of_these_countries"
                    isSearchable={true}
                    defaultValue={selectedData?.only_open_to_residence_of_these_countries?.map(
                      (item) => {
                        return { label: item };
                      },
                    )}
                  />
                </div>
                <div className="text-md mt-5 flex w-[60%] flex-col">
                  <p className="text-md font-bold font-bold ">
                    Only open to citizens of these countries
                  </p>
                  <Select
                    className="text-small font-small mt-4 block h-auto w-[100%] rounded-md"
                    isMulti
                    options={countries}
                    onChange={handleCitizen}
                    label="only_open_to_citizens_of_these_countries"
                    isSearchable={true}
                    defaultValue={selectedData?.only_open_to_citizens_of_these_countries?.map(
                      (item) => {
                        return { label: item };
                      },
                    )}
                  />
                </div>
                <div className="mt-14">
                  <h1 className="text-lg text-[1.45rem] font-bold text-[#6F6F6F]">
                    Remarks
                  </h1>
                  <textarea
                    className="mt-5 h-[15vh] w-[70%] bg-[#EEEE]"
                    {...register("remarks")}
                  />
                </div>

                <div className="mt-10 mb-10 flex items-center">
                  <span className="text-md font-bold">Last Update Date</span>
                  <input
                    className="relative ml-10 h-[5vh] w-[83%] rounded-md bg-[#EEEE]"
                    value={formatDate(selectedData?.updated_at)}
                    disabled
                    type="text"
                  />
                  <br />
                </div>
              </div>
            </div>
            <div className="mx-auto mt-6 mb-6 flex justify-center">
              <Button
                isLoading={updateActivityMutation.isLoading}
                type="submit"
                width="w-[15%]"
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </Form>
    </BaseModal>
  );
}
