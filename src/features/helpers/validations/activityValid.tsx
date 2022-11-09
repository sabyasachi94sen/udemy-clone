import * as yup from "yup"


export const activityValid=yup.object({
    activity_name:  yup.string().required("Name is a required field"),
    activity_type: yup.string().required("Activity type is a required field"),
    subject: yup.string().required("Subject is a required field"),
    country_residence: yup.string().required("Country of activity is a required field"),
    url: yup.string().required("Url is a required field"),
    application_deadline: yup.string().required("R/A/S deadline is a required field"),
    activity_start_date:yup.string().required("Activity start date is a required field"),
    activity_end_date:yup.string().required("Activity end date is a required field"),
    registration_open:yup.string().required("Registration open is a required field")
})


