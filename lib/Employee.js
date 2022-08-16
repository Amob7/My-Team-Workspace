class Employee {
    constructor(name, email){
        this.name = name;
        this.email = email;
        let id = 0;
    }

    getName() {
        return this.name;
    }
    getId() {
        return id += 1;
    }
    getEmail() {
        return this.email;
    }
    get()   {
        return $(`Employee`)
    }
}

module.exports = Employee