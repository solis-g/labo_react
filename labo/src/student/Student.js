class Student {
    constructor(carnet, horario, lastname) {
        this._carnet = carnet;
        this._horario = horario;
        this._lastname = lastname;
    }

    get carnet() { return this._carnet }
    get horario() { return this._horario }
    get lastname() { return this._lastname }

    // Hacen falta las validaciones antes de la asignación
    set carnet(carnet) { this._carnet = carnet }
    set horario(horario) { this._horario = horario }
    set lastname(lastname) { this._lastname = lastname }
}

export default Student;