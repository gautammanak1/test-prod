/* eslint-disable no-unused-vars */
export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}

export interface ImageProps {
  id: number;
  public_id: string;
  format: string;
  width: string;
  height: string;
  created_at: string;
}
