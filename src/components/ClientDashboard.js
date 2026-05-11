"use client"

import { Eye, Plus } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import Input from "./ui/input"
import { Label } from "./ui/label"

// Initial clients data
const initialClients = [
  {
    id: "1",
    name: "Client1",
    phone: "06 03 49 95 93",
    email: "client1@gmail.com",
    deleted: false,
  },
  {
    id: "2",
    name: "Client2",
    phone: "07 67 91 50 35",
    email: "client2@gmail.com",
    deleted: false,
  },
]

export default function ClientsDashboard() {
  const [clients, setClients] = useState(initialClients)
  const [searchQuery, setSearchQuery] = useState("")
  const [showDeleted, setShowDeleted] = useState(false)
  const [editingClient, setEditingClient] = useState(null)
  const [newClient, setNewClient] = useState({ name: "", phone: "", email: "" })

  // Filter clients based on search query and deleted status
  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.includes(searchQuery) ||
      (client.email && client.email.toLowerCase().includes(searchQuery.toLowerCase()))

    return showDeleted ? client.deleted : !client.deleted && matchesSearch
  })

  // Handle client creation
  const handleCreateClient = () => {
    if (newClient.name && newClient.phone) {
      setClients([
        ...clients,
        {
          id: String(clients.length + 1),
          ...newClient,
          deleted: false,
        },
      ])
      setNewClient({ name: "", phone: "", email: "" })
    }
  }

  // Handle client modification
  const handleModifyClient = (id) => {
    if (editingClient) {
      setClients(clients.map((client) => (client.id === id ? { ...client, ...editingClient } : client)))
      setEditingClient(null)
    }
  }

  // Handle client deletion
  const handleDeleteClient = (id) => {
    setClients(clients.map((client) => (client.id === id ? { ...client, deleted: true } : client)))
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-col space-y-4">
        {/* Search and Create section */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-[300px]">
            <Input
              placeholder="Chercher un client par nom ou téléphone"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                <Plus className="mr-2 h-4 w-4" />
                Créer
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Créer un nouveau client</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    className="col-span-3"
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    className="col-span-3"
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="col-span-3"
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                  />
                </div>
              </div>
              <Button onClick={handleCreateClient}>Enregistrer</Button>
            </DialogContent>
          </Dialog>
        </div>

        {/* Show deleted clients toggle and counter */}
        <div className="flex items-center justify-end gap-4 text-sm text-muted-foreground">
          <Button variant="ghost" className="text-muted-foreground" onClick={() => setShowDeleted(!showDeleted)}>
            <Eye className="mr-2 h-4 w-4" />
            Afficher les clients supprimés
          </Button>
          <span>Nbre de clients: {clients.filter((c) => !c.deleted).length}</span>
        </div>

        {/* Clients list */}
        <div className="space-y-2">
          {filteredClients.map((client) => (
            <div key={client.id} className="flex items-start justify-between py-4 border-b">
              <div className="space-y-1">
                <div className="font-medium">{client.name}</div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>{client.phone}</div>
                  {client.email && <div>{client.email}</div>}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => setEditingClient(client)}
                    >
                      Modifier
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Modifier le client</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edit-name">Nom</Label>
                        <Input
                          id="edit-name"
                          className="col-span-3"
                          value={editingClient?.name || ""}
                          onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edit-phone">Téléphone</Label>
                        <Input
                          id="edit-phone"
                          className="col-span-3"
                          value={editingClient?.phone || ""}
                          onChange={(e) => setEditingClient({ ...editingClient, phone: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edit-email">Email</Label>
                        <Input
                          id="edit-email"
                          type="email"
                          className="col-span-3"
                          value={editingClient?.email || ""}
                          onChange={(e) => setEditingClient({ ...editingClient, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <Button onClick={() => handleModifyClient(client.id)}>Enregistrer</Button>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="link"
                  className="text-muted-foreground hover:text-destructive"
                  onClick={() => handleDeleteClient(client.id)}
                >
                  Supprimer
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

