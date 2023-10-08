//Give two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.
//Basycally you have only 1 chance to break a ball. When it hits true, the ball break and you loose it.
export default function two_crystal_balls(breaks: boolean[]): number {
    const n = Math.floor(Math.sqrt(breaks.length));
    for (let i = n; i < breaks.length; i += n) {
        if (breaks[i]) {
            for(let j = i - n; j < i; j++){
                if (breaks[j]) {
                    return j
                }
            }
        }
    }
    return -1
} 