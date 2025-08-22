import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const processImages = (images: any): string => {
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

const parseImages = (imagesString: string): string[] => {
  try {
    return JSON.parse(imagesString);
  } catch {
    return [];
  }
};


// Obtener todos los productos activos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      where: { isActive: true }
    });
    
    const productsWithParsedImages = products.map(product => ({
      ...product,
      images: parseImages(product.images)
    }));
    
    res.json(productsWithParsedImages);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

// Obtener un producto por ID
export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) }
    });
    
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    
    const productWithParsedImages = {
      ...product,
      images: parseImages(product.images)
    };
    
    res.json(productWithParsedImages);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Crear un nuevo producto
export const createProduct = async (req: Request, res: Response) => {
  const { code, name, description, price, stock, category, images } = req.body;
  
  try {
    const existingProduct = await prisma.product.findUnique({
      where: { code }
    });
    
    if (existingProduct) {
      return res.status(400).json({ error: 'El código del producto ya existe' });
    }
    
    const product = await prisma.product.create({
      data: {
        code,
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        category,
        images: processImages(images)
      }
    });
    
    const productWithParsedImages = {
      ...product,
      images: parseImages(product.images)
    };
    
    res.status(201).json(productWithParsedImages);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Actualizar un producto
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { code, name, description, price, stock, category, images } = req.body;
  
  try {
    const updateData: any = {
      code,
      name,
      description,
      price: price ? parseFloat(price) : undefined,
      stock: stock ? parseInt(stock) : undefined,
      category,
    };
    
    if (images !== undefined) {
      updateData.images = processImages(images);
    }
    
    const product = await prisma.product.update({
      where: { id: Number(id) },
      data: updateData
    });
    
    const productWithParsedImages = {
      ...product,
      images: parseImages(product.images)
    };
    
    res.json(productWithParsedImages);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Desactivar un producto
export const disableProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const product = await prisma.product.update({
      where: { id: Number(id) },
      data: { isActive: false }
    });
    
    const productWithParsedImages = {
      ...product,
      images: parseImages(product.images)
    };
    
    res.json({ message: 'Producto desactivado correctamente', product: productWithParsedImages });
  } catch (error) {
    res.status(500).json({ error: 'Error al desactivar el producto' });
  }
};