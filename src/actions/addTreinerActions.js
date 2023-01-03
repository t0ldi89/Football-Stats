export const addTreiner = (treinerName) =>{
    return{
        type: 'ADDTREINERNAME',
        addTreinerName: treinerName,
        
        // surname: surname,
        // team: team,
        // premission: premission
    }

}
export const addTreinerSurname = (treinerSurname) =>{
    return{
        type: 'ADDTREINERSURNAME',
        addTreinerSurname: treinerSurname
        // team: team,
        // premission: premission
    }

}