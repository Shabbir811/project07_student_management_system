// create a class of student object
 class Student {
    static id = 56789;
    name:string;
    student_id:number;
    courses:string[];
    balance:number;
    
    constructor(name:string){
        
        this.name = name;
        this.student_id = Student.id++
        this.courses = [];
        this.balance = 10000 ;
    }   
    
    // method for add course and deduct course fee
    enroll_course(course:string){
        this.courses.push(course)
      
    }
    //method for view student balance
    show_balance(){
        console.log(`${this.name} your balance: ${this.balance}`);
        
    }
    //method for pay fees of tuition for student 
    pay_touition_fee(amount:number){
        this.balance -= amount
        console.log(`you paid your tuition fee ${amount}rs`);
        console.log(`your remaining balance: ${this.balance}rs`);
        
        
    }
    //method for veiw student deatils 
    show_student_detail(){
        console.log(`student name: ${this.name}`);
        console.log(`student id: ${this.student_id}`);
        console.log(`student courses: ${this.courses}`);
        console.log(`student balance: ${this.balance}`);
        
    }
}

//------------------------------------------------------------------------------------------------------------------------

// create class to manage students and export
export class Student_management_system{
    students : Student[];

    constructor(){
        this.students = []

    }
    //method for add student and push into this students array its take a perameter student name
    add_student(student_name:string){
        let student = new Student (student_name)
        this.students.push(student)
        console.log(`${student_name} you have successfully added . your student_Id is ${student.student_id} `);
        

    }
    // make a method to find student by its id . is user input (id) === students.student_id.   it's take a student id  as perameter
    find_student(id:number){
      return this.students.find(student=> student.student_id === id)
      
    }
    // method  for add courses in this.students array, this method take course name and its fees
    add_a_course(id:number,course:string){
           let student = this.find_student(id)
           
        if(student){
            student.enroll_course(course)
            console.log(`you successfuly enrolled in ${course} course`);

        }else{
            console.log(`your student id is not found please enter correct student Id`);
            
        }
    }
    // method for view student balance  this method take student id
    show_balance(student_id:number){
        let student = this.find_student(student_id)
        if(student){
            student.show_balance()
        }else{
            console.log(`please enter correct student Id`);
            
        }

    }
    //method for pay fees of tuition 
    pay_tuition_fees(student_id:number, amount:number){
        let student = this.find_student(student_id)
        if(student){
            student.pay_touition_fee(amount)
        }else{
            console.log(`please enter correct student Id`);
            
        }
    }
    // show student details
    show_student_details(student_id:number){
        let student = this.find_student(student_id)
        if(student){
            student.show_student_detail()
        }else{
            console.log(`please enter correct student Id`);
            
        }
            
        
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------

     //create course names list in a object and export  
export let courses = {
    courses_name:["typescript","javascript","css","html","java","c++","python","other courses"]
    }

//------------------------------------------------------------------------------------------------------------------------

   // menu options store in a array
export let menu_options = ["add_new_student","add_course","show_student_deails","show_balance","pay_tuition_fees","exit"]


