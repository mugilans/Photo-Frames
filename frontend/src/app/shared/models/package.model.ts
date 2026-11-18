export interface PhotoPackage {
  id: number;
  name: string;
  imageQuantity: number;
  /** Price in INR. The backend is the source of truth for real orders. */
  price: number;
  description: string;
  isPopular?: boolean;
}
