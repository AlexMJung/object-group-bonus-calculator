var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
 var soupOrNoSoup = []; 
function Wage(name, bonusPercentage, totalComp, totalBonus) {
            this.name = name;
            this.bonusPercentage = bonusPercentage;
            this.totalComp = totalComp;
            this.totalBonus = totalBonus;
        }
            
function bonusCalc(arr) {
    
    for(i = 0; i < arr.length; i ++){
        var employee = employees[i]
       
        var bonusPercentage = 0;
    
        if (employee.reviewRating === 5){
            bonusPercentage = 0.10
        }
        else if (employee.reviewRating === 4) {
            bonusPercentage = 0.06;
        }
        else if (employee.reviewRating === 3) {
            bonusPercentage = 0.04;
        }
        else {
            bonusPercentage = 0;
        };//end of if else
        
        if(employee.employeeNumber.length === 4) {
            bonusPercentage += 0.05;
        };//end of if
        
        if(employee.annualSalary > 65,000){
            bonusPercentage -= 0.01;
        };//end of if
        if(bonusPercentage >= 0.13){
        bonusPercentage = 0.13;
        }
        else if(bonusPercentage < 0){
            bonusPercentage = 0;
        }//end of else if
        var name = employee.name
        var bonus = Math.round(employee.annualSalary * bonusPercentage);
        var totalComp = bonus + parseInt(employee.annualSalary);

          console.log(new Wage(name, bonusPercentage, totalComp, bonus));
    }
}

bonusCalc(employees);
