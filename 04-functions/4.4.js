
function pickLearner(inputAr, n){
    let array=[];
    for (let i=1;i<=n;i++){
        let number = Math.floor((Math.random() * n) + 1);
        if (array.includes(inputAr[number])){
            i--;
        }
        else{
            array.push(inputAr[number]);
        }
    }
    return array
}
let learners=["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];
let nb = Number(prompt("How many people do you want?","Number"));
console.log("The chosen learners are: " + pickLearner(learners, nb));