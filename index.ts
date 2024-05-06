#! /usr/bin/env node
import inquirer from "inquirer";
import { Student_management_system,courses,menu_options } from "./classes.js";

//===========================================================================================
 type inquirer_types = "list"|"input"|"number"    // create type alias for inquirer
// ============================================================================================

   //create inquirer's function which ask questions from users
async function asker(name:string,type:inquirer_types,message:string,choices?:string[]){
    let ask = await inquirer.prompt(
        {
            name: name,
            type: type,
            message: message,
            choices: choices
        }

    )
    let answer = ask[name]
    return answer   // return inquirer result
}
//============================================================================================================
   
 function line_breaker(){
    console.log(`-`.repeat(60));
    console.log(`=`.repeat(60));
}

//=============================================================================================================
   // create async function which run on cli
async function student_management_system(){
    line_breaker()
    console.log("WEL-COME TO STUDENT MANAGEMNT SYSTEM BY SHABBIR");  //PRINT PROGRAM NAME
   

    let student = new Student_management_system()  // create a student object with class
    //perform while loop
    while(true){
        line_breaker(); // break line in display
        
        
            //   call asker function which ask questions and get answers from user
          let ask_menu_option = await asker("option", "list", "select option from the list", menu_options);
        
            // perform some logical statement (if in options array include answer which we get from user is match )
          if(menu_options[0].includes(ask_menu_option)){
            line_breaker()
            let ask_name = await asker("name","input","enter your name") //asking name from user through asker and store in variable , name ask_name

            if(ask_name!== ""){
                 
                student.add_student(ask_name.trim().toLowerCase()); //add student name in students array
                line_breaker()
                let ask_course = await asker("course","list","select an option from list",courses.courses_name)  //asking course name from user through asker
                let ask_id = await asker("id","number","enter your student id")         //asking id from user through asker and store in variable , name ask_id
                
                if(courses.courses_name[courses.courses_name.length-1] === ask_course){
                    let ask_course = await asker("course","input","enter a course name ")  //asking course name from user through asker and store in variable , name ask_course
                    let ask_id = await asker("id","number","enter your student id")         //asking id from user through asker and store in variable , name ask_id
                    student.add_a_course(ask_id,ask_course)                               // add course in the student's object
                    
                }else{
                    student.add_a_course(ask_id,ask_course)   //add course in the student's object
                }

            }else{
                console.log(`you must enter your name`);  // if user not enter name then print this msg
                
            }

          }else if(menu_options[1].includes(ask_menu_option)){              // perform some logical statement (if in options array include answer which we get from user is match )
            

            let ask_course = await asker("course","list","select an option from list",courses.courses_name)  //asking course name from user 
            let ask_id = await asker("id","number","enter your student id")         //asking student id from user


            if(courses.courses_name[courses.courses_name.length-1] === ask_course){
                // let ask_id = await asker("id","number","enter your student id")         //asking student id from user
                let ask_course = await asker("course","input","enter a course name ")  //asking course name from user 
                student.add_a_course(ask_id,ask_course)                               // and store in the student's object
                
            }else{
                student.add_a_course(ask_id,ask_course)
            }

            
        }else if(menu_options[2].includes(ask_menu_option)){              // perform some logical statement (if in options array include answer which we get from user is match )
            let ask_id = await asker("id","number","enter your student id")         //asking student id from user

            student.show_student_details(ask_id)
        }else if(menu_options[3].includes(ask_menu_option)){             // perform some logical statement (if in options array include answer which we get from user is match )
            let ask_id = await asker("id","number","enter your student id")         //asking student id from user

            student.show_balance(ask_id)
        }else if(menu_options[4].includes(ask_menu_option)){                    // perform some logical statement (if in options array include answer which we get from user is match )
            let ask_id = await asker("id","number","enter your student id")         //asking student id from user
            let ask_fee = await asker("fee","number","enter amount to pay fees")         //asking student id from user

            student.pay_tuition_fees(ask_id,ask_fee)  
        }else if(menu_options[5].includes(ask_menu_option)){               // perform some logical statement (if in options array include answer which we get from user is match )
            console.log(`exiting from program...`);

            console.log("done.");
            line_breaker()
            
            process.exit()

        }
        
    }

    
}


await student_management_system()   // call function

