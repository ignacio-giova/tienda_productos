export const processImages = (images: any): string => {
  if (Array.isArray(images)) {
    return JSON.stringify(images);
  }
  if (typeof images === 'string') {
    try {
      JSON.parse(images);
      return images;
    } catch {
      return JSON.stringify([images]);
    }
  }
  return JSON.stringify([]);
};

export const parseImages = (imagesString: string): string[] => {
  try {
    return JSON.parse(imagesString);
  } catch {
    return [];
  }
};