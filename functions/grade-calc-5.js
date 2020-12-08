
const gradeCalc = (achievedScore, overallScore) => {
    if (typeof achievedScore !== 'number' || typeof overallScore !== 'number') {
        throw Error('Arguments must be numbers')
    }
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

try {
    const grade = gradeCalc('5fff', 100)
    console.log(grade)
} catch (e) {
    console.log(e.message)
}

