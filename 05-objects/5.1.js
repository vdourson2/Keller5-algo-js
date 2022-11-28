//This function takes no arguments.
//It asks the user the name, production year and names of the cast members (as much as he wants) of his favorite TV serie,
//and returns an object containing this data.
function askTvSerie(){
    let favorite = { };
    favorite.name=prompt("What is the name of your favorite TV serie","Name");
    favorite.year=prompt("What is the year of production of this TV serie","Year");
    favorite.cast=[];
    let n=Number(prompt("How many cast members do you remember from this TV serie?","Number"));
    for (let i=1;i<=n;i++){
        favorite.cast.push(prompt("Give the name of cast member number" + i ,"Name"))
    }
    return favorite
}
console.log(JSON.stringify(askTvSerie()));


