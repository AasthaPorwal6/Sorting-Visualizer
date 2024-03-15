

async function bubbleSort() {
    var i, j;
    await sleep(delay);

    for(i = 0; i < size - 1; i++) {
        for(j = 0; j < size - i - 1; j++) {
            await sleep(delay);

            setColor(j, COMPARE);
            setColor(j + 1, COMPARE);
            await sleep(delay);

            if(arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                await sleep(delay);
            }

            setColor(j, UNSORTED);
            setColor(j + 1, UNSORTED);
        }

        await sleep(delay);

        setColor(j, SORTED);
    }

    setColor(0, SORTED);


    // Time complexity display
    
    $("#time-worst").text("Time Complexity (Worst Case): O(N^2)");
    $("#time-average").text("Time Complexity (Average Case): Θ(N^2)");
    $("#time-best").text("Time Complexity (Best Case): Ω(N)");
   
}


