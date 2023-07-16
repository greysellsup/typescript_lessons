function getFullName(fName: string, sName: string): string {
    return `${fName} ${sName}`
}

const getFullNameArrow = (fName: string, sName: string): string => {
    return `${fName} ${sName}`
}

console.log(getFullNameArrow('Sega', 'Mega'));