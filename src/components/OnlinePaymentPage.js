"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import Switch from "./ui/switch";

export default function OnlinePaymentPage() {
    const [onlinePayment, setOnlinePayment] = useState(false); // Default to disabled

    const handleToggleOnlinePayment = (newCheckedState) => {
        setOnlinePayment(newCheckedState); // Update the state with the new value
    };

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">
                    Gestion des paiements en ligne
                </h1>
            </div>

            {/* Online Payment Toggle */}
            <Card>
                <CardHeader>
                    <CardTitle>Payement en ligne par carte</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="online-payment"
                            checked={onlinePayment}
                            onCheckedChange={handleToggleOnlinePayment}
                        />
                        <Label htmlFor="online-payment">
                            {onlinePayment ? "Activé" : "Désactivé"}
                        </Label>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
