// shared/utils.module.ts
export function tinhGiaiThua(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * tinhGiaiThua(n - 1);
    }
  }
  
  export function laSoNguyenTo(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  