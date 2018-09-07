import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capLetter"
})
export class CapLetterPipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
