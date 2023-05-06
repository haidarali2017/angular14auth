import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdBdt'
})
export class UsdBdtPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
    return value*x;
  }

}
