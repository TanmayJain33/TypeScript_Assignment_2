export class Animal {
  name: string;
  color: string;
  sound: string;
  voice() {
    console.log(
      `My Name is ${this.name}. My color is ${this.color}. I ${this.sound}`
    );
  }
}
