export default function bs_list(haystack: number[], needle: number): boolean {
    let min = 0
    let max = haystack.length - 1
    let mid : number

    while (min <= max) {
        mid = Math.floor((min + max)/2)
        if (haystack[mid] === needle) {
            return true
        }  else if( needle > haystack[mid]) {
            min = mid + 1
        } else {
            max = mid - 1
        }
        
    }
    return false
}  
// mid=floor(low + (high - low) / 2)
//in this way of calculating the mid point basically it adds low (meaning the offset from the beginnig) and the range bewteen high and low.
//The other big difference is that Prime uses "min < max" and max = mid meaning [low, high)
function BinarySearchPrime(array:number [], value:number):boolean {
    let low = 0;
    let high = array.length;
    do {
        const mid = Math.floor(low + (high - low) /2 );
        const v = array[mid];
        if (v === value){
            return true;
        } else if(v > value){
            high = mid
        } else {
            low = mid +1
        }
    }while (low < high)
    return false
}