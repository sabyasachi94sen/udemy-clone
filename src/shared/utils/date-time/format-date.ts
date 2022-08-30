import { format } from "date-fns";

/**
 * format date with specific format
 * dateFormat:@see https://date-fns.org/v2.24.0/docs/format
 * date: "2000-01-01", default current date
 */
export const formatDate = (
  dateFormat = "yyyy/MM/dd",
  date: string | Date = new Date()
): string => {
  return format(new Date(date), dateFormat);
};
