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