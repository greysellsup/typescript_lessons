function getFullName(fName: string, sName: string): string {
    return `${fName} ${sName}`
}

const getFullNameArrow = (fName: string, sName: string): string => {
    return `${fName} ${sName}`
}

console.log(getFullNameArrow('Sega', 'Mega'));

//типизация объекта
let obj: {
    "officeId": number,
    "isOpened": false,
    "contacts": {
        "phone": string,
        "email": string,
        "address": {
            "city": string
        }
    }
} =
{
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
}