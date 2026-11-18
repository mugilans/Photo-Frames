export interface FrameProduct {
  id: number;
  name: string;
  description: string;
  /** Display size, e.g. "8 x 10 in". */
  size: string;
  material: string;
  colours: string[];
  /** Price in INR. */
  price: number;
  imagePath: string;
  stockQuantity: number;
}
