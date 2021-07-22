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
        return [tabA[0]].concat(fusion(tabA.slice(1, tabA.length, tabB)))
    }
    
    else {
        //Pareil
            return [tabB[0]].concat(fusion(tabA, tabB.slice(1, tabB.length)))            
        }
    
    
}

fusionSort(liste);
console.log(fusionSort(liste));

/*

function merge(left, right){
    // La fonction merge() fusionne 2 tableaux "left" et "right".

    //"tab" correspond ici à "liste"

    l = 0, r = 0;

    // La variable "l" garde la trace de l'index pour le tableau "left".

    // La variable "r" fait la même chose pour le tableu "right". 

    while (l < left.length && r < right.length){
        if (left[l] < right[r]){
            liste.push(l++);
        } else {
            liste.push(r++);
        }
        }

        return liste.concat(left.slice(1)).concat(right.slice(r));
        // Chaque fois qu’une valeur est ajoutée au tableau, sa variable d’index correspondante est incrémentée.
        // Dès que l’un des tableaux est épuisé, les valeurs restantes sont ajoutées à la fin du tableau « liste » à l’aide de concat(ligne 94).
    }

    function fusionSort (liste){

        if (liste.length < 2) {
            return liste;
        }
    

    var mid = Math.floor(liste.length / 2),
    right = liste.slice(mid),
    left = liste.slice(0, mid)
    p= merge(fusionSort(left), fusionSort(right));

    p.unshift(0, liste.length);
    liste.splice.apply(liste, p);
    return liste; 

}  



 fusionSort(liste); 

 console.log(liste);

*/


//Tri Rapide

//Création d'une fonction "partition"
function partition(liste, start, end){
    //Prendre le dernier élément en tant que pivot
    const pivotValue = liste[end];
    let pivotIndex = start;
    // La variable "pivotIndex" est utilisée pour garder une empreinte de la position "médiane".
    // Tous les éléments à gauche sont inférieurs à "pivotValue"
    // Tous les éléments à droite sont supérieurs à "pivotValue"  

    for (let i = start; i <end; i++){
        //boucle parcourant le tableau
        if (liste[i] < pivotValue){
        //Echanger les éléments
        [liste[i], liste [pivotIndex]] = [liste[pivotIndex], liste[i]]
        //Déplacement vers l'élément suivant
        pivotIndex++;    
        }
    }

    // Déplacer la valeur pivot au milieu. 
    [liste[pivotIndex], liste[end]] = [liste[end], liste[pivotIndex]]
    return pivotIndex;
    
};

//Création d'une fonction récursive
function quickSortRecursive(liste, start, end){
    //Case de Base ou Case Finale
    if (start>=end) {
        return;
    }

    //Retourner "pivotIndex"
    let index = partition(liste, start, end);
    
    //Appliquer la même logique de manière récursive vers la aguche et la droite des sous-tableaux
    quickSort(liste, start, index -1);
    quickSort(liste, index, +1, end);
}

    // //Test du code
    // quickSortRecursive(liste, 0, liste.length -1)

    // console.log(liste)

