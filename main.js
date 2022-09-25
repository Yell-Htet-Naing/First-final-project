let headingDiv = document.querySelector(".headingDiv");
headingDiv.style.margin = "30px 0px 10px 0px";
let mainDiv = document.querySelector(".heading");
let linearBackground = document.querySelector(".heading");

mainDiv.style.color = "white";

//popuation  comma with 3 digit
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Create Input field

let inputDiv = document.createElement("div");

let input = document.createElement("input");

input.style.outline = "2px"
input.style.borderRadius = "20px";  
input.placeholder = "Search country...";
input.style.width = "500px"
input.style.padding = "10px 10px";
input.style.margin = "40px 0px 40px 0px";

inputDiv.appendChild(input)
mainDiv.appendChild(inputDiv);

//Answer Section 
let ansDiv = document.createElement("div");

ansDiv.style.display = "flex";
ansDiv.style.flexWrap = "wrap"
ansDiv.style.justifyContent = "space-evenly"
ansDiv.style.width = "auto";
ansDiv.style.margin = "0px 0px 50px 0px";
ansDiv.style.padding = "20px 120px";
// ansDiv.style.backgroundColor = "#FFFFE3";

headingDiv.appendChild(ansDiv);


// Countries containing text


let one = document.querySelector(".one"); 

let two = document.querySelector(".two");

let a = true;


let countryNameArray = [];
let inputRelatedCountries = [];
let countriess = [];
countries.forEach(country=>countryNameArray.push(country.name));



        //Button one

one.addEventListener("click", e=>{
   
        two.style.backgroundColor = "#895BE6"
        one.style.backgroundColor = "#581CB8";
        //user input letter and show including word 

            function findCountries(wordToMatch, countryNameArray) {  

                return countryNameArray.filter(countryName=>{
                    
                    const regex = new RegExp(`^${wordToMatch}`, 'gi');
                    return countryName.match(regex);
                });
            }

           
           
    function displayMatch() {
        const haha = findCountries(this.value, countryNameArray);

        let result = input.value;
        let inputRelatedCountries = [];
        let para = document.querySelector(".countInclude");
        para.style.color = "black";

         para.textContent = `Countries start with ${result} are ${haha.length}`;
         
       
        
        if(a == true){
            ansDiv.innerHTML = " ";
            haha.sort();

        }else{
            ansDiv.innerHTML = " ";
            haha.reverse();
        }
        
       

        // ansDiv.innerHTML = " ";
        for(let i = 0;i < haha.length;i++){
            countries.forEach(country=>{
                if(haha[i] == country.name){
                    inputRelatedCountries.push(country);
                    let eachansDiv = document.createElement("div");
                    let countryName = document.createElement("p");
                    countryName.textContent = country.name;
                    countryName.style.fontSize = "20px";
                    countryName.style.color = "#ED2939";
                    eachansDiv.style.width = "200px";
                    eachansDiv.style.fontSize = "15px";
                    eachansDiv.style.paddingTop = "60px";
                    eachansDiv.style.height = "300px";
                    eachansDiv.style.backgroundImage = "linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.7))";
                    eachansDiv.style.backgroundSize = "cover";
                    eachansDiv.style.verticalAlign = "middle"
                    eachansDiv.innerHTML = `<img src="${country.flag}"  style="width:100px;height:50px;">`;                    
                    eachansDiv.style.textAlign = "center";
                    eachansDiv.style.backgroundPosition = "center";
                    eachansDiv.style.borderRadius = "5px";
                    eachansDiv.style.margin = "10px";
                    eachansDiv.style.color = "black";
                    eachansDiv.style.display = "inline-block";
                    let capitalName = document.createElement("p");
                    capitalName.style.margin = "10px";
                    capitalName.textContent = `Capital : ${country.capital}`;
                    let countryLanguage = document.createElement("p");
                    countryLanguage.style.margin = "10px";
                    countryLanguage.textContent = `Languages : ${country.languages}`;
                    let countryPopulation = document.createElement("p");
                    countryPopulation.style.margin = "10px";
                    countryPopulation.textContent = `Population : ${numberWithCommas(country.population)}`;

                    eachansDiv.appendChild(countryName);
                    eachansDiv.appendChild(capitalName);
                    eachansDiv.appendChild(countryLanguage);
                    eachansDiv.appendChild(countryPopulation);
                    ansDiv.appendChild(eachansDiv);
                    
                }
            })
            
        }    
            // console.log(inputRelatedCountries);
     }
        input.addEventListener("input",displayMatch);

        
        
})


        //button two
// let liveMostPopulation = [];
two.addEventListener("click", e=>{
            one.style.backgroundColor = "#895BE6";
            two.style.backgroundColor = "#581CB8";
            //user input letter and show including word 

                function findCountries(wordToMatch, countryNameArray) {   
                     
                    return countryNameArray.filter(countryName=>{
                        
                        const regex = new RegExp(wordToMatch, 'gi');
                        return countryName.match(regex);
                    });
                }
        function displayMatch() {
            const haha = findCountries(this.value, countryNameArray);

            let result = input.value;
            let inputRelatedCountries = [];
            let para = document.querySelector(".countInclude");
            para.style.color = "black"
         para.textContent = `Countries searching with ${result} letters are ${haha.length}`;
            if(a == true){
                ansDiv.innerHTML = " ";
                haha.sort();
            }else{
                ansDiv.innerHTML = " ";
                haha.reverse();
            }
          
            // ansDiv.innerHTML = " ";
            
            for(let i = 0;i < haha.length;i++){
                countries.forEach(country=>{
                    if(haha[i] == country.name){
                        inputRelatedCountries.push(country);
                       
                        // console.log(country);
                        let eachansDiv = document.createElement("div");
                        let countryName = document.createElement("p");
                        countryName.textContent = country.name;
                        countryName.style.fontSize = "20px";
                        countryName.style.color = "#ED2939";
                        eachansDiv.style.width = "200px";
                        eachansDiv.style.fontSize = "15px";
                        
                        eachansDiv.style.paddingTop = "60px";
                        eachansDiv.style.height = "300px"
                        eachansDiv.style.backgroundImage = "linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.7))";
                        eachansDiv.style.backgroundSize = "cover";
                        eachansDiv.style.verticalAlign = "middle"
                        eachansDiv.innerHTML = `<img src="${country.flag}"  style="width:100px;height:50px;">`;                    
                        eachansDiv.style.textAlign = "center";
                        eachansDiv.style.backgroundPosition = "center";
                        eachansDiv.style.borderRadius = "5px"
                        eachansDiv.style.margin = "10px";
                        eachansDiv.style.color = "black"
                        eachansDiv.style.display = "inline-block";
                        let capitalName = document.createElement("p");
                        capitalName.style.margin = "10px"
                        capitalName.textContent = `Capital : ${country.capital}`;
                        let countryLanguage = document.createElement("p");
                        countryLanguage.style.margin = "10px"
                        countryLanguage.textContent = `Languages : ${country.languages}`;
                        let countryPopulation = document.createElement("p");
                        countryPopulation.style.margin = "10px"
                        countryPopulation.textContent = `Population : ${numberWithCommas(country.population)}`;
    
                        eachansDiv.appendChild(countryName);
                        eachansDiv.appendChild(capitalName);
                        eachansDiv.appendChild(countryLanguage);
                        eachansDiv.appendChild(countryPopulation)
                        ansDiv.appendChild(eachansDiv);
                    }
                })
                
                
            }             
                // console.log(inputRelatedCountries);
                                         
        }
        input.addEventListener("input",displayMatch);
      
})




/////////////////////////////////////////////////////////////////////////////////////////////////////




//select display area
let wrap = document.querySelector(".wrapper");

wrap.style.padding = "20px 0px 10px 0px"
wrap.style.width = "95%";
wrap.style.margin = 'auto';
wrap.style.boxShadow =  "2px 4px 4px 4px #888888";


                 //Show data
let ans = document.querySelector('.graph-wrapper');

ans.style.padding = "0px 100px";

let graphTitle = document.querySelector(".graph-title");


//big to small countries data 
countries.sort(function(a, b) {
    return b.population - a.population;
});

//skill bar percentage
let total = 0;

for(let i = 0;i < countries.length; i++) {
    total += countries[i].population;
}

let firstButton = document.querySelector('.population');
firstButton.addEventListener("click",()=>{
    firstButton.style.backgroundColor =  "#F2A93B";
    secondButton.style.backgroundColor = "#895BE6";
})

firstButton.setAttribute("onclick", "firstButtonToggle()");

let secondButton = document.querySelector('.languages');
secondButton.addEventListener("click", ()=>{
    secondButton.style.backgroundColor = "#F2A93B";
    firstButton.style.backgroundColor = "#895BE6";
})
secondButton.setAttribute("onclick", "secondButtonToggle()")

let checkOne = document.getElementById("stat");
let checkTwo = document.getElementById("stat");

function firstButtonToggle() {
    checkOne.innerHTML = " ";

    graphTitle.textContent = `10 Most Population countries in the World`;
        graphTitle.style.textAlign = "center"
        graphTitle.style.padding = "10px 0px";

    for(let i = 0;i <10 ;i++ ) {
        let objchangeArray = countries[i];

       
        let oneLine = document.createElement('div');
   
        oneLine.style.padding = "10px 0px"

        let countryName = document.createElement("p");
        countryName.style.display = "inline-block";
        countryName.style.textAlign = "left";
        countryName.style.width = "400px"
        countryName.style.textAlign = "left"
        countryName.textContent = objchangeArray.name;

        oneLine.appendChild(countryName);

        let skillDiv = document.createElement("div");
        skillDiv.setAttribute("class","container");
        
        //real percent

        let realPercent = document.createElement("div");
        let percent =  (objchangeArray.population/total) * 100;
        realPercent.style.backgroundColor = "#FFA500";
        realPercent.style.width = `${percent}%` 


        realPercent.textContent = percent.toFixed(4);  
        skillDiv.appendChild(realPercent);

        skillDiv.style.display = "inline-block"
        skillDiv.style.textAlign = "center";
        skillDiv.style.backgroundColor = "#E7E9EB"
        skillDiv.style.width = "40%"
        
        oneLine.appendChild(skillDiv)

        let langu = document.createElement("p");
      
        langu.textContent = numberWithCommas(objchangeArray.population);
        langu.style.padding = "0px 0px 0px 150px";
        langu.style.display = "inline-block"

        oneLine.appendChild(langu);

        ans.appendChild(oneLine);
       
    }    
}

function secondButtonToggle() {
    checkTwo.innerHTML = " ";

    graphTitle.textContent = `10 Most languages countries in the world`;
    graphTitle.style.textAlign = "center"
    graphTitle.style.padding = "10px 0px";

    //pick languages and count 
    let lan = [];
    for(let i = 0; i < countries.length; i++) {
        lan.push(countries[i].languages);
    }
    var merged = [].concat.apply([], lan);

    const count = {};
    merged.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    }); 
   let check =  Object.entries(count).sort((a,b) => b[1]-a[1]);
  
    for(let i = 0;i <10 ;i++ ) {
        let objchangeArray = check[i];

        let oneLine = document.createElement('div');
        oneLine.style.padding = "10px 0px"


        let countryName = document.createElement("p");
        countryName.style.display = "inline-block";
        countryName.style.textAlign = "left";
        countryName.style.width = "400px"
        countryName.style.textAlign = "left"
        countryName.textContent = objchangeArray[0];

        oneLine.appendChild(countryName);

        let skillDiv = document.createElement("div");
        skillDiv.setAttribute("class","container");
        
        //real percent

        let realPercent = document.createElement("div");
        let percent =  (objchangeArray[1]/check.length) * 100;
        realPercent.style.backgroundColor = "#F2A93B";
        realPercent.style.width = `${percent}%` 

        realPercent.textContent = percent.toFixed(2);  
        skillDiv.appendChild(realPercent);

        skillDiv.style.display = "inline-block"
        skillDiv.style.textAlign = "left";
        skillDiv.style.backgroundColor = "#E7E9EB"
        skillDiv.style.width = "40%"
        
        oneLine.appendChild(skillDiv)

        let langu = document.createElement("p");
    
        langu.textContent = objchangeArray[1];
        langu.style.padding = "0px 0px 0px 150px";
        langu.style.display = "inline-block"
        oneLine.appendChild(langu)
        ans.appendChild(oneLine);
    }
}
let toTheTop = document.querySelector(".startPage");
toTheTop.addEventListener("click",(e)=>{
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});







    




    

   


