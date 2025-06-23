import { IPhoto } from "../../interfaces/photo.interface";

export function buildPhotoList(): IPhoto[] {
    const photos: IPhoto[] = [];
    for (let i = 0; i < 8; i++) {
        photos.push({
            id: i + 1,
            description: 'Photo: ' + i,
            url: 'some url'
        })
    }
    return photos;
}