//Tri par Insertion
var liste = [3,0,-7,1,4,-2,8,4,5]
var liste_triee = []
console.log("liste avant tri : ", liste)


//  A faire --> le tri ne fonctionne pas
//Le tri fonctionne ! :) !!!

function insertSort(liste) {

    let n = liste.length
    for(let i = 1; i<n; i++){
        //L'itération commence au 2nd élément
        //Le 1er élément est trié par défaut
        //Chaque élément courant sera le 1er élément du tableau non-trié. 
        
        let current = liste[i];
        let j = i;

        //Grâce à une boucle while, nous parcourons le tableau trié et déplaçons les éléments vers la droite,... 
        //ouvrant un espace pour l' élément courant à insérer.

        while ((j > 0) && (liste[j-1]>current)){
            swap(liste, j, j-1)
        //   liste[j] = liste[j-1];
        //   liste[j-1] = current; 
           j = j-1;
        }
            
        liste[j] = current;
    }
}


//insertSort(liste)
//console.log("liste insert sort : ", liste);


// Créer une fonction swap qui échange deux elements dans un tableau
function swap(liste, premier, deuxieme){
    let current = liste[premier];
    liste[premier] = liste [deuxieme];
    liste[deuxieme] = current;
    
}


//Tri par selection 
function selectSort(liste){
    let n = liste.length; 
    for(let i =0; i < n; i++){
        //Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(liste[j] < liste[min]) {
                min=j; 
            }
        }
        swap(liste, i, min)

    }   
}

//selectSort(liste)
//console.log ("liste select sort : ", liste)





// Tri à Bulles

function bubbleSort(liste){
    let passage = 0;
    let permut = true;
    while (permut === true) {
        permut = false;
        for(let i =0; i < liste.length-1; i++){
            if(liste[i] > liste[i+1]) {
                swap(liste, i, i+1)
                permut = true
            }
        }
        passage = passage + 1 
    }
    return liste
}

//bubbleSort(liste);
//console.log(bubbleSort(liste));




//Tri par fusion

function fusionSort(liste){
    if(liste.length<=1){
        return liste
    } else{
        //       tableau de 0 à liste.length/2      tableau de liste.length/2 à fin
        return fusion(fusionSort(liste.slice(0, liste.length/2)),fusionSort(liste.slice(liste.length/2)))
    }

}

function fusion (tabA,tabB){
    if (tabA.length === 0){
        return tabB
    }
    if (tabB.length === 0){
        return tabA
    }

        // 1er dans sujet = case 0 >>> tabA[0]
    if (tabA [0] <= tabB[0]){
        //pareil
                            //tableau de case1 à la fin
        return [tabA.shift()].concat(fusion(tabA, tabB))
    }
    
    else {
        //Pareil
            return [tabB.shift()].concat(fusion(tabA, tabB))
        }
    
    
}

fusionSort(liste);
console.log(fusionSort(liste));


//Tri Rapide





