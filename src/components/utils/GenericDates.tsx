import { addDays, differenceInDays, formatISO, parse, subDays } from 'date-fns'

/**
 * The function fromDateToISODate converts a Date object to an ISO date
 * string and returns only the date part, example: '2024-01-30'.
 * The returned string is in localTime format
 */
export const fromDateToISODate = (date: Date | null) => {
  // TODO: Replantear por que si es fijo que llegue una fecha el tipo devuelto deberia de ser una fecha intentar validar el tipo de instancia igual a fecha
  return date ? formatISO(date, { representation: 'date' }) : null
}

/**
 * The function fromDateToISODateTime converts a Date object to an ISO date
 * string.
 * The returned string is in UTC format
 */
export const fromDateToISODateTime = (date: Date | null) => {
  return date ? formatISO(date).slice(0, 19) + 'Z' : null
}

/**
 * The function fromISOToDate converts a ISO like formatted date string to a Date
 * object.
 * The returned date is in localTime format
 */
export const fromISOToDate = (date: string | null) => {
  const regex = /^\d{4}-\d{2}(-\d{2})?$/

  if (typeof date === 'string') {
    const dateLength = date.length
    if (!regex.test(date)) {
      throw new Error('Invalid date string — incomplete or badly formatted.')
    }

    return parse(date, dateLength === 10 ? 'yyyy-MM-dd' : 'yyyy-MM', new Date())
  }
  return null
}

/**
 * The function fromISOToDateTime converts a ISO like formatted datetime string to a Date
 * object.
 * The returned date is in localTime format
 */
export const fromISOToDateTime = (date: string | null) => {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/

  if (typeof date === 'string') {
    const normalizedDate = date.slice(0, 19)

    if (!regex.test(normalizedDate)) {
      throw new Error(
        'Invalid datetime string — incomplete or badly formatted.',
      )
    }

    return parse(normalizedDate, "yyyy-MM-dd'T'HH:mm:ss", new Date())
  }
  return null
}

/**
 * The function handleDateOffset calculates a new date based on the input
 * date and a specified number of days offset.
 * daysOffset > 0 ==> future date.
 * daysOffset < 0 ==> past date.
 * WARNING: daysOffset comes from date and wish to be date difference
 * example:  2025-01-10 - 2025-01-01 = 9
 * I mean, entire days between startDate at 0 hours and endDate at 0 hours
 * like:  2025-01-01 00:00:00 and 2025-01-02 00:00:00 there is one ENTIRE DAY
 */
export const handleDateOffset = (
  daysOffset: number,
  date: Date | null,
  stripTime = true,
) => {
  if (!Number.isFinite(daysOffset)) {
    throw new Error('daysOffset must be a finite number in handleDateOffset.')
  }

  if (date) {
    const newDate =
      daysOffset < 0
        ? subDays(date, Math.abs(daysOffset))
        : addDays(date, daysOffset)

    return stripTime ? new Date(newDate.setHours(0, 0, 0, 0)) : newDate
  }

  return null
}

/**
 * The function datesBetweenRange calculates if an startDate and endDate are between a specified number of days.
 * WARNING: rangeBetweenDays comes from startDate and wish to be endDate difference
 * example:  2025-01-10 - 2025-01-01 = 9
 * I mean, entire days between startDate at 0 hours and endDate at 0 hours
 * like:  2025-01-01 00:00:00 and 2025-01-02 00:00:00 there is one ENTIRE DAY
 */
export const dateWithinInterval = (
  startDate: Date | null,
  endDate: Date | null,
  rangeBetweenDays: number,
) => {
  if (!startDate || !endDate || !Number.isFinite(rangeBetweenDays)) {
    throw new Error(
      'startDate, endDate, and rangeBetweenDays are required and must be valid.',
    )
  }

  return (
    Math.abs(differenceInDays(startDate, endDate)) <= Math.abs(rangeBetweenDays)
  )
}
