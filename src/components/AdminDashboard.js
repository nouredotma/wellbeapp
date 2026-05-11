"use client";

import { Edit, Plus, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    createProduct,
    deleteProduct,
    getProducts,
    updateProduct,
} from "../services/productService"; // Update path if needed
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Input from "./ui/input";
import { Label } from "./ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

// Form for creating/editing a product
function ServiceForm({ onSubmit, initialData = {}, onCancel }) {
    const [name, setName] = useState(initialData.product_name || "");
    const [description, setDescription] = useState(initialData.product_description || "");
    const [price, setPrice] = useState(initialData.product_price || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ product_name: name, product_description: description, product_price: Number(price) });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Nom</Label>
                <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">Description</Label>
                <Input
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">Prix (MAD)</Label>
                <Input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={onCancel}>Annuler</Button>
                <Button type="submit">Enregistrer</Button>
            </div>
        </form>
    );
}

export default function AdminDashboard() {
    const { id: establishmentId } = useParams();

    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [addingProduct, setAddingProduct] = useState(false);

    // Fetch products when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getProducts(establishmentId);
                setProducts(productsData);
            } catch (error) {
                console.error("❌ Failed to fetch products:", error);
            }
        };

        fetchData();
    }, [establishmentId]);

    const handleAddProduct = async (newProduct) => {
        try {
            const createdProduct = await createProduct({
                ...newProduct,
                establishment_uuid: establishmentId,
            });

            setProducts((prevProducts) => [...prevProducts, createdProduct]);
            setAddingProduct(false);
        } catch (error) {
            console.error("❌ Failed to add product:", error);
        }
    };

    const handleEditProduct = async (updatedProduct) => {
        try {
            const productId = editingProduct.product_uuid;
            const savedProduct = await updateProduct(productId, updatedProduct);

            setProducts((prevProducts) =>
                prevProducts.map((p) => (p.product_uuid === productId ? savedProduct : p))
            );
            setEditingProduct(null);
        } catch (error) {
            console.error("❌ Failed to update product:", error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await deleteProduct(productId);
            setProducts((prevProducts) =>
                prevProducts.filter((p) => p.product_uuid !== productId)
            );
        } catch (error) {
            console.error("❌ Failed to delete product:", error);
        }
    };

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Gestion des prestations</h1>
                <Button onClick={() => setAddingProduct(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Ajouter une prestation
                </Button>
            </div>

            {addingProduct && (
                <Card>
                    <CardHeader>
                        <CardTitle>Ajouter une prestation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ServiceForm
                            onSubmit={handleAddProduct}
                            onCancel={() => setAddingProduct(false)}
                        />
                    </CardContent>
                </Card>
            )}

            <div className="h-px bg-gray-200" />

            <Card>
                <CardHeader>
                    <CardTitle>Liste des prestations</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nom</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Prix (MAD)</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.product_uuid}>
                                    <TableCell className="font-medium">
                                        {editingProduct === product ? (
                                            <ServiceForm
                                                initialData={product}
                                                onSubmit={handleEditProduct}
                                                onCancel={() => setEditingProduct(null)}
                                            />
                                        ) : (
                                            product.product_name
                                        )}
                                    </TableCell>
                                    <TableCell>{product.product_description}</TableCell>
                                    <TableCell>{product.product_price.toFixed(2)} MAD</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setEditingProduct(product)}
                                            >
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-red-500"
                                                onClick={() => handleDeleteProduct(product.product_uuid)}
                                            >
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
