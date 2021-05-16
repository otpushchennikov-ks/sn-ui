import ID from '@interfaces/ID';
import IUser from '@interfaces/IUser';
import PhotoCategory from '@interfaces/PhotoCategory';


export default interface IPhoto {
  id: ID
  created: string
  category: PhotoCategory
  url: string
  name: string
  description: string | null
  postedBy: IUser
}
