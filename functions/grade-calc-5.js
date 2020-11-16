
const gradeCalc = function (achievedScore, overallScore) {
    const result = achievedScore * 100 / overallScore
    let grade = ""
    if (result >= 90 ){
        grade = 'A'
    } else if (result >= 80) {
        grade = 'B'
    } else if (result >= 70) {
        grade = 'C'
    } else if (result >= 60) {
        grade = 'D'
    } else{
        grade = 'F'
    }
    return `You got a ${grade} (${result}%)!`
}

const grade = gradeCalc(50, 100)
console.log(grade)