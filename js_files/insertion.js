
function insertionSort(a) {
    const ren = document.querySelectorAll('.bars');
    var n = a.length;
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = a[i]; 
        j = i - 1; 
       
        while (j >= 0 && a[j] > key)
        
            {   ren[j+1].style.height = a[j] + "%";
               
                a[j + 1] = a[j]; 
                j = j - 1; 
            } 
            a[j + 1] = key; 
            ren[j+1].style.height = key + "%";
            ren[i].style.background = "green";
           
    } 
    
    ren[0].style.background = "green";
    console.log(arr)
}