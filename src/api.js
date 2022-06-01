import API from './db.json'

export function listarAlimentos(){
    return API.alimentos
} 

export function listarHorario(){
    return API.horarios
}

export function inserirAlimento(alimento){
    API.alimentos.push(alimento)
}


