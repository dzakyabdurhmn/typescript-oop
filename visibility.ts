// public
// protected
// private

class Hewan7 {
  public nama: string;
  private kaki: number;
  protected mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }
  //   ini yang mau mengakses
  berjalan() {
    this.nama;
    this.kaki;
    this.mamalia;
  }
}
// ----------------------------- //
class Katak7 extends Hewan7 {
  private umurTelur: number = 4;
  private umurKecebong: number = 7;
  private umurKatak: number = 90;

  getUmur() {
    console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
  }
}

const katak = new Katak7("dssc", 2, false);
console.log(katak)