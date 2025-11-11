import { PrismaClient } from "@prisma/client"
import { Decimal } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

const seed = async () => {
    await prisma.digital_Entertainment.createMany({
        data: [
            { title: "Fast and Furious", type: "movie", director: "A John", budget: new Decimal(1000000.50), location: "New York", duration: "01:22:45", year: 2025 },
            { title: "Breaking Dawn", type: "movie", director: "S. Meyer", budget: new Decimal(1500000), location: "Los Angeles", duration: "01:45:30", year: 2023 },
            { title: "The Last Kingdom", type: "tv_show", director: "B. Thor", budget: new Decimal(800000.75), location: "London", duration: "00:55:00", year: 2022 },
            { title: "City of Dreams", type: "tv_show", director: "L. Smith", budget: new Decimal(900000.50), location: "Chicago", duration: "00:48:00", year: 2020 },
            {
                title: "Hidden Truth", type: "movie", director: "R. Lee", budget: new Decimal(700000), location: "Seattle", duration: "01:35:40", year: 2023
            },
            {
                title: "Cyber Heist", type: "movie", director: "K. Brown", budget: new Decimal(1300000.99), location: "Tokyo", duration: "01:50:00", year: 2024
            },
            {
                title: "Legends of Time", type: "tv_show", director: "M. King", budget: new Decimal(1000000), location: "Paris", duration: "00:52:00", year: 2022
            },
            {
                title: "Silent Shadows", type: "movie", director: "D. Carter", budget: new Decimal(1100000.50), location: "Berlin", duration: "01:48:30", year: 2021
            },
            {
                title: "Neon Nights", type: "movie", director: "T. Wong", budget: new Decimal(950000.75), location: "Hong Kong", duration: "01:40:20", year: 2023
            },
            {
                title: "Royal Affairs", type: "tv_show", director: "F. Davis", budget: new Decimal(850000), location: "London", duration: "00:50:00", year: 2020
            },
            {
                title: "Ocean’s Legacy", type: "movie", director: "G. Clooney", budget: new Decimal(1750000), location: "Miami", duration: "02:05:15", year: 2025
            },
        ]
    })
}

seed().then(() => prisma.$disconnect);