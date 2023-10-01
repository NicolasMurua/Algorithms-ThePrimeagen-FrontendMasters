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