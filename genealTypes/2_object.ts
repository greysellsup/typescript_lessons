function getFullNameUser(userEntity: { firstName: string, surname: string }): string {
    return `${userEntity.firstName} ${userEntity.surname}`
}

const user = {
    firstName: 'Sega',
    surname: 'Chistiakov',
    age: 38,
    skills: {
        dev: true,
        frontend: true,
        backend: false
    }
}

console.log(getFullNameUser(user));

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