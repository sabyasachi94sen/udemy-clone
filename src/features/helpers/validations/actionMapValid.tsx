import * as yup from "yup"


export const actionMapValid=yup.object({
    action: yup.string().required("Action is a required field"),
    deadline_days: yup.string().required("Deadline days is a required field")
})