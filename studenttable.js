const studentArr=[{Name:"ajay",City:"Delhi",CGPA:9.0},
                   {Name:"Mohit",City:"Agra",CGPA:8.5},
                   {Name:"Sumit",City:"Mumbai",CGPA:8.4}

];
console.table(studentArr)

for(let i=0;i<studentArr.length;i++)
{
    if(studentArr[i].CGPA>=9)
    {
        console.log(studentArr[i]);
    }
    else if(studentArr[i].City=="Mumbai")
    {
        console.log(studentArr[i]);
    }

}