export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    reviews: Review[];
    reservations: Reservation[];
    restaurants: Restaurant[];
}

export type Restaurant = {
    id: number
    name: string    
    address: string
    city: string
    description: string
    profileImg: string
    rating: number
    cuisineInfo: string
    priceInfo: string
    workHours: string
    diningStyle: string
    dressCode: string
    additional: string
    reviews: Review[]
    images: Image[]
    menus: Menu[]
    reservations: Reservation[]
}

export type Image = {
    id: number
    url: string
    restaurantId: number
}

export type Review = {
    id: number
    review: string
    rating: number
    restaurantId: number
    userId: number
}

export type Menu = {
    id: number
    name: string
    price: number
    restaurantId: number
}

export type Reservation = {
    id: number
    date: string
    time: string
    restaurantId: number
    userId: number
    claimedBy: User
}