export default function bubble_sort(arr: number[]): void {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = i+1; j < n-i; j++) {
            if (arr[i] > arr[j]) {
                const tmp = arr[i];
                arr[i] = arr[j]; 
                arr[j] = tmp;
            }
        }
    }
}
//Prime Implementation.
function PrimeBubbleSort(arr:number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1 - i; j++) {            
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp
            }
        }        
    }
}