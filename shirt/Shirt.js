class Shirt {
  constructor(
    name,
    size,
    color,
    pocketNum,
    Length,
    Sleeve,
    dateAcquired,
    chest,
    image
  ) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.pocketNum = pocketNum;
    this.Length = Length;
    this.sleeve = Sleeve;
    this.chest = chest;
    this.dateAcquired = dateAcquired;
    this.image = image;
  }
  toggleSize(size) {
    this.size = size;
  }
  newLength(length) {
    this.Length = length;
  }
  shirtAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Shirt;
