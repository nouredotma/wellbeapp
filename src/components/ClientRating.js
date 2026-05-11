"use client"

import { Star } from "lucide-react"
import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

// Star rating component
function StarRating({ rating, size = "sm" }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${
            star <= rating ? "text-emerald-500 fill-emerald-500" : "text-gray-200 fill-gray-200"
          } ${size === "lg" ? "w-6 h-6" : "w-4 h-4"}`}
        />
      ))}
    </div>
  )
}

// Initial reviews data
const reviews = [
  {
    id: 1,
    date: "23 févr.",
    rating: 5.0,
    client: "Client1",
    service: "Gainage (nude)",
    comment: "Ce client n'a pas laissé de commentaire",
  },
  {
    id: 2,
    date: "23 févr.",
    rating: 5.0,
    client: "Client2",
    service: "Gainage (nude)",
    comment: "Ce client n'a pas laissé de commentaire",
  },

]

// Categories with ratings
const categories = [
  { name: "Accueil", rating: 5.0 },
  { name: "Propreté", rating: 4.9 },
  { name: "Cadre & ambiance", rating: 5.0 },
  { name: "Qualité de la prestation", rating: 4.9 },
]

export default function ReviewsPage() {
    const [showDetails, setShowDetails] = useState(null);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-2">Avis modérés</h1>
      <p className="text-muted-foreground mb-8">Ces données sont celles qui apparaissent sur votre page WELLBE</p>

      {/* Overall rating section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Overall score */}
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold text-emerald-500">
              5,0<span className="text-base text-gray-500">/5</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">2 avis</div>
          </div>

          {/* Categories grid */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="flex justify-between items-center">
                <span className="text-sm">{category.name}</span>
                <StarRating rating={category.rating} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews section */}
      <h2 className="text-xl font-semibold mb-4">Tous vos avis modérés</h2>
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">Date</TableHead>
              <TableHead className="w-24">Note</TableHead>
              <TableHead className="w-64">Client</TableHead>
              <TableHead>Commentaire</TableHead>
              {/* <TableHead className="text-right">Refuser/Valider</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell className="align-top py-4">{review.date}</TableCell>
                <TableCell className="align-top">
                  <div className="space-y-1">
                    <div className="font-medium">{review.rating}</div>
                    <StarRating rating={review.rating} />
                  </div>
                </TableCell>
                <TableCell className="align-top">
                  <div className="space-y-2">
                    <div>{review.client}</div>
                    <div className="text-sm text-muted-foreground">{review.service}</div>
                    <div className="space-x-2 text-sm">
                      {/* <Button
                        variant="link"
                        className="text-muted-foreground p-0 h-auto"
                        onClick={() => setShowDetails(review.id === showDetails ? null : review.id)}
                      >
                        Détail
                      </Button>
                      <Button variant="link" className="text-muted-foreground p-0 h-auto">
                        Voir le RDV
                      </Button> */}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="align-top">
                  <span className="text-muted-foreground italic">{review.comment}</span>
                </TableCell>
                <TableCell className="text-right align-top">
                  {/* <Button variant="link" className="text-muted-foreground">
                    Répondre
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

