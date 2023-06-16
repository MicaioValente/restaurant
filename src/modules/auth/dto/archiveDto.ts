export type ArchiveDto = {
  fileSize: string;
  assetId: string;
  width: string;
  type: string;
  height: string;
  fileName: string;
  uri: string;
  base64: string | null;
  exif: string | null;
  duration: number | null;
};

export type ArchiveRequestDto = {
  file: ArchiveDto;
  type: string;
};
