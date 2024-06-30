// /If Else if Statement

let marks = prompt("Enter the Student Marks :");

if(marks >= 90 && marks <= 100)
    {
        console.log("Student is Pass A++ Gread.");
    }
    else if(marks >=80 && marks <= 90)
        {
            console.log("Student is Pass A Gread.");
        }
        else if(marks >= 70 && marks <= 80)
            {
                console.log("Student is Pass B+ Gread.");
            }
            else if(marks >= 60 && marks <= 70)
                {
                    console.log("Student is Pass B Gread.");
                }
                else if(marks >= 40 && marks <= 60)
                    {
                        console.log("Student is Pass C Gread.");
                    }
                    else
                    {
                        console.log("Student is Fail.")
                    }