// ===== 1. كلاس الطالب =====
class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }

  // حساب المتوسط باستخدام reduce
  calculateAverage() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  }

  // التقدير بالحروف
  getGrade(average) {
    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else if (average >= 50) {
      return "E";
    } else {
      return "F";
    }
  }

  // النتيجة النهائية
  getFinalResult() {
    const average = this.calculateAverage();
    if (average >= 50 && this.attendance >= 75) {
      return "ناجح";
    } else {
      return "يحتاج مراجعة";
    }
  }
}

// ===== 3. مصفوفة الطلاب =====
const studentsList = [
  new Student(101, "أحمد علي", [90, 85, 95], 90),
  new Student(102, "سارة محمود", [45, 42, 48], 80),
  new Student(103, "محمد حسن", [40, 46, 44], 70),
  new Student(104, "منى إبراهيم", [70, 65, 75], 85)
];

// ===== 5. تقرير كل طالب =====
console.log("========== تقرير الطلاب ==========");
studentsList.forEach((student) => {
  const average = student.calculateAverage();
  console.log(`الاسم: ${student.name}`);
  console.log(`المتوسط: ${average.toFixed(2)}`);
  console.log(`التقدير: ${student.getGrade(average)}`);
  console.log(`النتيجة: ${student.getFinalResult()}`);
  console.log("--------------------------------");
});

// ===== 4. لجنة الرأفة =====

// الاستخراج
const strugglingStudents = studentsList.filter((student) => {
  const avg = student.calculateAverage();
  return avg >= 40 && avg <= 49;
});

// المعالجة
const leniencyResults = strugglingStudents.map((student) => {
  return {
    id: student.id,
    name: student.name,
    oldAverage: student.calculateAverage(),
    newAverage: student.calculateAverage() + 5
  };
});

// التحليل
const totalNewAverages = leniencyResults.reduce(
  (sum, student) => sum + student.newAverage,
  0
);

// المتوسط مع درع الحماية
const leniencyAverage =
  leniencyResults.length > 0
    ? totalNewAverages / leniencyResults.length
    : 0;

// ===== المخرجات النهائية =====
console.log("========== الطلاب المتعثرون بعد الرأفة ==========");
console.log(leniencyResults);

console.log("========== متوسط المتعثرين بعد التعديل ==========");
console.log(leniencyAverage.toFixed(2));