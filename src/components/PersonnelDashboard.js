"use client";

import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";
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

import { createPersonnel, fetchEstablishmentPersonnel } from "../services/personnelService";

function PersonnelForm({ onSubmit, initialData = {}, onCancel }) {
    const [firstName, setFirstName] = useState(initialData.firstName || "");
    const [lastName, setLastName] = useState(initialData.lastName || "");
    const [email, setEmail] = useState(initialData.email || "");
    const [telephone, setTelephone] = useState(initialData.telephone || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ firstName, lastName, email, telephone });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="firstName" className="text-right">Prénom</Label>
                <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastName" className="text-right">Nom</Label>
                <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="telephone" className="text-right">Téléphone</Label>
                <Input
                    id="telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
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

export default function PersonnelDashboard() {
    const { id: establishmentId } = useParams();
    const [personnel, setPersonnel] = useState([]);
    const [editingPersonnel, setEditingPersonnel] = useState(null);
    const [addingPersonnel, setAddingPersonnel] = useState(false);

    useEffect(() => {
        const loadPersonnel = async () => {
            try {
                const data = await fetchEstablishmentPersonnel(establishmentId);
    
                // Map the response to exactly match the personnel structure
                const formattedPersonnel = data.map((item) => ({
                    id: item.user?.user_uuid,
                    firstName: item.user?.user_first_name || "personel",
                    lastName: item.user?.user_name || "test",
                    email: item.user?.user_email || "test@gmail.com",
                    telephone: item.user?.user_phone || "066666666",
                    active: item.user?.user_active ? "Actif" : "Inactif",
                    role: item.user?.role_id || "Non défini"  // In case you want to show role later
                }));
    
                setPersonnel(formattedPersonnel);
            } catch (error) {
                console.error("❌ Failed to fetch personnel:", error);
            }
        };
    
        loadPersonnel();
    }, [establishmentId]);
    

    const handleAddPersonnel = async (formData) => {
        try {
            const payload = {
                establishment_uuid: establishmentId,    // establishmentId comes from useParams()
                user_email: formData.email,
                user_name: formData.lastName,
                user_first_name: formData.firstName,
                user_phone: formData.telephone
            };
    
            const newPerson = await createPersonnel(payload);
    
            const addedPerson = {
                id: newPerson.user_uuid,
                firstName: newPerson.user_first_name,
                lastName: newPerson.user_name,
                email: newPerson.user_email,
                telephone: newPerson.user_phone,
            };
    
            setPersonnel((prev) => [...prev, addedPerson]);
            setAddingPersonnel(false);
        } catch (error) {
            console.error("❌ Failed to add personnel:", error);
        }
    };
    
    const handleDeletePersonnel = (personnelId) => {
        setPersonnel(personnel.filter((p) => p.id !== personnelId));
    };

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Gestion des employés</h1>
                {/* <Button onClick={() => setAddingPersonnel(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Ajouter un employé
                </Button> */}
            </div>

            {/* {addingPersonnel && (
                <Card>
                    <CardHeader>
                        <CardTitle>Ajouter un employé</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <PersonnelForm
                            onSubmit={handleAddPersonnel}
                            onCancel={() => setAddingPersonnel(false)}
                        />
                    </CardContent>
                </Card>
            )} */}

            <div className="h-px bg-gray-200" />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Prénom</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Téléphone</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {personnel.map((p) => (
                        <TableRow key={p.id}>
                            <TableCell>{p.firstName}</TableCell>
                            <TableCell>{p.lastName}</TableCell>
                            <TableCell>{p.email}</TableCell>
                            <TableCell>{p.telephone}</TableCell>
                            <TableCell className="text-right">
                                <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => handleDeletePersonnel(p.id)}
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
