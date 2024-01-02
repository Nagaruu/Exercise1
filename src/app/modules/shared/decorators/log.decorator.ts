export function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Toi ten la: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      return result;
    };
  
    return descriptor;
}
  