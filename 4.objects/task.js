function Student(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
    this.marks = []
}

new Student("Василиса", "женский", 19)
new Student("Артём", "мужской", 25)

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks){
        this.marks.push(...marks);
    }else{
        return 0;
    }
}

Student.prototype.getAverage = function () {
    if (this.marks&&this.marks.length){
        return this.marks.reduce((m, mark) => m + mark, 0) / this.marks.length;
    }else{
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject
    delete this.marks
    this.excluded = reason
}
