var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
var soupOrNoSoup = []; 
function bonusCalc(arr) {
     
    for(i = 0; i < arr.length; i ++){
        var employee = employees[i]
        var name = employee.name
        var bonus = employee.annualSalary * bonusPercentage;
        var totalComp = bonus + employee.annualSalary;
        var bonusPercentage = 0;
        function eNum(num){
            if(num.length === 4) {
                bonusPercentage += 0.05;
            }
        }
        function dedSal(sal){
            if(sal >= 65,000){
                bonusPercentage -= 0.01;
            }//end of if
        }
        function bonMax(bonusPercentage){
            if(bonusPrecentage >= 0.13){
                bonusPrecentage = 0.13;
            }
        }
        if (employee.reviewRating === 5){
            bonusPercentage = 0.10
                eNum(employee.employeeNumber);
                dedSal(employee.annualSalary);
                bonMax(bonusPercentage);
            return bonus
        }
        else if (employee.reviewRating === 4) {
            bonusPercentage = 0.06;
            eNum(employee.employeeNumber);
                dedSal(employee.annualSalary);
                bonMax(this.bonusPercentage);
            
            return bonus;
        }
        else if (employee.reviewRating === 3) {
            bonusPercentage = 0.04;
            eNum(employee.employeeNumber);
                dedSal(employee.annualSalary);
                bonMax(this.bonusPercentage);
            
            return bonus;
        }
        else {
            eNum(employee.employeeNumber);
                dedSal(employee.annualSalary);
                bonMax(this.bonusPercentage);
            
            bonus = "No soup for YOU!!!";
        }
    }

 }
console.log(bonusCalc(soupOrNoSoup));
