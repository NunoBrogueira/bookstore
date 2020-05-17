import { groupBy } from 'lodash';

// Calculate Friday of one specific month
function lastFridayOfMonth(
    year: number,
    month: number
) {
    var lastDay = new Date(year, month + 1, 0);
    
    if (lastDay.getDay() < 5) {
        lastDay.setDate(lastDay.getDate() - 7);
    }

    if (month < 10) {
        lastDay.setDate(lastDay.getDate() - (lastDay.getDay() - 6));

        return lastDay;
    } else {
        lastDay.setDate(lastDay.getDate() - (lastDay.getDay() - 5));

        return lastDay;
    }
}

// See all fridays between two years
export const lastFridayBetweenTwoYears = () => {
    let year, month, days = [];

    for (year = 2020; year >= 2000; year -= 1) {
        for (month = 11; month >= 0; month -= 1) {
            var day = new Date(lastFridayOfMonth(year, month));
            days.push(day.toISOString().replace(/\.\d{3}Z$/, '').slice(0,11));
        }
    }

    return days;
}

export const checkAvailableFilters = (
    object: Array<Object>,
    filter: string
) => {
    const items = [];
    const a = groupBy(object, filter);
    
    for (let i in a) {
        items.push(i)
    }

    return items;
}

// Format Date
export const formatDate = (unparsedDate: string) => {
    let parsedDate = Date.parse(unparsedDate);
    let newDate = new Date(parsedDate);

    function appendLeadingZeroes(n: number){
        if(n <= 9){
            return "0" + n;
        }
        return n
    }
      
    let formatDate = newDate.getFullYear() + "-" + appendLeadingZeroes(newDate.getMonth() + 1) + "-" + appendLeadingZeroes(newDate.getDate());

    return formatDate;
}

// Generate unique ID
export const generateID = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}