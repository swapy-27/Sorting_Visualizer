async function selectionSort(a) {
    const ren = document.querySelectorAll('.bars');
    var i, j;
    var n = a.length;
    for (i = 0; i < n - 1; i++) {
        var idx = i;
        for (j = i + 1; j < n; j++) {
            ren[j].style.background = "red";
            ren[idx].style.background = "red";
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, 2)
            );
            if (a[j] < a[idx]) {
                ren[j].style.height = a[idx] + "%";
                ren[idx].style.height = a[j] + "%";
                var temp = a[j];
                a[j] = a[i];
                a[i] = temp;
            }
            ren[j].style.background = "yellow";
            ren[idx].style.background = "yellow";
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, 2)
            );
        }
        ren[i].style.background = "green";
    }
    ren[n-1].style.background = "green";
    console.log(arr);
}