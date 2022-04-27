async function bubbleSort(a) {
    const ren = document.querySelectorAll('.bars');
    var n = a.length;
    var i, j, temp;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            ren[j].style.background = "red";
            ren[j + 1].style.background = "red";
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, 2)
            );
            if (a[j] > a[j + 1]) {
                ren[j].style.height = a[j + 1] + "%";
                ren[j + 1].style.height = a[j] + "%";
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }

            ren[j].style.background = "yellow";
            ren[j + 1].style.background = "yellow";
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, 2)
            );
        }
        ren[n - i - 1].style.background = "green";
    }
    ren[0].style.background = "green";
    console.log(arr);
}
