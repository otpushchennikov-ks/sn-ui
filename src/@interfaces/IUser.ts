import IPhoto from '@interfaces/IPhoto';

export default interface IUser {
  githubLogin: string
  name: string | null
  avatar: string | null
  postedPhotos: IPhoto[]
}
