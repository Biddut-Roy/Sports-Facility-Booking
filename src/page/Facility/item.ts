interface TItem {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  isDeleted: boolean;
  location: string;
  pricePerHour: number;
}
export default TItem;
