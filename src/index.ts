export function sum(...nums: number[]): number {
    let i = 0,
        total = 0;
    for (; i < nums.length; i++) total += nums[i];
    return total;
}
