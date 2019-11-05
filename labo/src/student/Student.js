class Student {
    constructor(carnet, horario, schedule) {
        this._carnet = carnet;
        this._horario = horario;
        this._schedule = schedule;
    }

    get carnet() { return this._carnet }
    get horario() { return this._horario }
    get schedule(){return this._schedule}

    // Hacen falta las validaciones antes de la asignación
    set carnet(carnet) { this._carnet = carnet }
    set horario(horario) { this._horario = horario }

    set schedule(schedule){this._schedule = schedule}}

export default Student;