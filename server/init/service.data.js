const dummyServiceProviders = [
  {
    name: "John Smith",
    email: "john.smith@example.com",
    password: "pass123",
    phone: "9876543210",
    skills: ["Plumbing", "Pipe Repair"],
    location: {
      city: "New York",
      pin: "10001",
      coordinates: [-74.0060, 40.7128]
    },
    availability: [
      { day: "Monday", timeSlots: ["09:00-12:00", "14:00-17:00"] },
      { day: "Wednesday", timeSlots: ["10:00-13:00"] }
    ],
    isAvailable: true,
    rating: 4.5,
    totalReviews: 10,
    createdAt: new Date("2025-01-15T10:00:00Z")
  },
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    password: "secure456",
    phone: "9123456789",
    skills: ["Electrical", "Wiring"],
    location: {
      city: "Los Angeles",
      pin: "90001",
      coordinates: [-118.2437, 34.0522]
    },
    availability: [
      { day: "Tuesday", timeSlots: ["08:00-11:00", "13:00-16:00"] },
      { day: "Friday", timeSlots: ["09:00-12:00"] }
    ],
    isAvailable: true,
    rating: 4.8,
    totalReviews: 15,
    createdAt: new Date("2025-02-01T12:00:00Z")
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    password: "mike7890",
    phone: "9012345678",
    skills: ["Carpentry", "Furniture Assembly"],
    location: {
      city: "Chicago",
      pin: "60601",
      coordinates: [-87.6298, 41.8781]
    },
    availability: [
      { day: "Monday", timeSlots: ["10:00-14:00"] },
      { day: "Thursday", timeSlots: ["12:00-15:00"] }
    ],
    isAvailable: false,
    rating: 4.2,
    totalReviews: 8,
    createdAt: new Date("2025-03-10T09:00:00Z")
  },
  {
    name: "Sarah Davis",
    email: "sarah.davis@example.com",
    password: "sarah2023",
    phone: "9234567890",
    skills: ["Painting", "Interior Design"],
    location: {
      city: "Houston",
      pin: "77002",
      coordinates: [-95.3698, 29.7604]
    },
    availability: [
      { day: "Wednesday", timeSlots: ["09:00-12:00", "15:00-18:00"] }
    ],
    isAvailable: true,
    rating: 4.9,
    totalReviews: 20,
    createdAt: new Date("2025-04-05T14:00:00Z")
  },
  {
    name: "David Wilson",
    email: "david.wilson@example.com",
    password: "davidpass",
    phone: "9345678901",
    skills: ["HVAC", "AC Repair"],
    location: {
      city: "Phoenix",
      pin: "85001",
      coordinates: [-112.0740, 33.4484]
    },
    availability: [
      { day: "Friday", timeSlots: ["08:00-11:00", "14:00-17:00"] },
      { day: "Saturday", timeSlots: ["10:00-13:00"] }
    ],
    isAvailable: true,
    rating: 4.6,
    totalReviews: 12,
    createdAt: new Date("2025-01-20T11:00:00Z")
  },
  {
    name: "Lisa Martinez",
    email: "lisa.martinez@example.com",
    password: "lisa5678",
    phone: "9456789012",
    skills: ["Cleaning", "Deep Cleaning"],
    location: {
      city: "Philadelphia",
      pin: "19102",
      coordinates: [-75.1652, 39.9526]
    },
    availability: [
      { day: "Tuesday", timeSlots: ["09:00-12:00"] },
      { day: "Thursday", timeSlots: ["13:00-16:00"] }
    ],
    isAvailable: true,
    rating: 4.7,
    totalReviews: 18,
    createdAt: new Date("2025-02-15T10:30:00Z")
  },
  {
    name: "James Taylor",
    email: "james.taylor@example.com",
    password: "jtaylor123",
    phone: "9567890123",
    skills: ["Landscaping", "Gardening"],
    location: {
      city: "San Antonio",
      pin: "78201",
      coordinates: [-98.4936, 29.4241]
    },
    availability: [
      { day: "Monday", timeSlots: ["08:00-11:00"] },
      { day: "Saturday", timeSlots: ["09:00-12:00"] }
    ],
    isAvailable: true,
    rating: 4.3,
    totalReviews: 9,
    createdAt: new Date("2025-03-01T08:00:00Z")
  },
  {
    name: "Emily Anderson",
    email: "emily.anderson@example.com",
    password: "emily4567",
    phone: "9678901234",
    skills: ["Plumbing", "Leak Detection"],
    location: {
      city: "San Diego",
      pin: "92101",
      coordinates: [-117.1611, 32.7157]
    },
    availability: [
      { day: "Wednesday", timeSlots: ["10:00-13:00", "15:00-18:00"] }
    ],
    isAvailable: false,
    rating: 4.4,
    totalReviews: 11,
    createdAt: new Date("2025-04-10T13:00:00Z")
  },
  {
    name: "Robert Thomas",
    email: "robert.thomas@example.com",
    password: "robert789",
    phone: "9789012345",
    skills: ["Electrical", "Lighting Installation"],
    location: {
      city: "Dallas",
      pin: "75201",
      coordinates: [-96.7963, 32.7767]
    },
    availability: [
      { day: "Tuesday", timeSlots: ["09:00-12:00"] },
      { day: "Friday", timeSlots: ["14:00-17:00"] }
    ],
    isAvailable: true,
    rating: 4.8,
    totalReviews: 14,
    createdAt: new Date("2025-02-20T09:00:00Z")
  },
  {
    name: "Jennifer Lee",
    email: "jennifer.lee@example.com",
    password: "jenn1234",
    phone: "9890123456",
    skills: ["Carpentry", "Cabinet Making"],
    location: {
      city: "San Jose",
      pin: "95112",
      coordinates: [-121.8863, 37.3382]
    },
    availability: [
      { day: "Monday", timeSlots: ["10:00-13:00"] },
      { day: "Thursday", timeSlots: ["12:00-15:00"] }
    ],
    isAvailable: true,
    rating: 4.6,
    totalReviews: 16,
    createdAt: new Date("2025-03-15T11:00:00Z")
  },
  {
    name: "William Clark",
    email: "william.clark@example.com",
    password: "will4567",
    phone: "9011234567",
    skills: ["Painting", "Wallpapering"],
    location: {
      city: "Austin",
      pin: "78701",
      coordinates: [-97.7431, 30.2672]
    },
    availability: [
      { day: "Wednesday", timeSlots: ["09:00-12:00"] },
      { day: "Saturday", timeSlots: ["10:00-13:00"] }
    ],
    isAvailable: true,
    rating: 4.5,
    totalReviews: 13,
    createdAt: new Date("2025-01-25T10:00:00Z")
  },
  {
    name: "Sophia Walker",
    email: "sophia.walker@example.com",
    password: "sophia890",
    phone: "9123456781",
    skills: ["HVAC", "Heating Repair"],
    location: {
      city: "Jacksonville",
      pin: "32202",
      coordinates: [-81.6556, 30.3322]
    },
    availability: [
      { day: "Tuesday", timeSlots: ["08:00-11:00"] },
      { day: "Friday", timeSlots: ["13:00-16:00"] }
    ],
    isAvailable: false,
    rating: 4.7,
    totalReviews: 17,
    createdAt: new Date("2025-02-05T12:00:00Z")
  },
  {
    name: "Daniel Hall",
    email: "daniel.hall@example.com",
    password: "daniel123",
    phone: "9234567892",
    skills: ["Cleaning", "Carpet Cleaning"],
    location: {
      city: "San Francisco",
      pin: "94102",
      coordinates: [-122.4194, 37.7749]
    },
    availability: [
      { day: "Monday", timeSlots: ["09:00-12:00"] },
      { day: "Thursday", timeSlots: ["14:00-17:00"] }
    ],
    isAvailable: true,
    rating: 4.9,
    totalReviews: 19,
    createdAt: new Date("2025-03-20T10:00:00Z")
  },
  {
    name: "Olivia Young",
    email: "olivia.young@example.com",
    password: "olivia456",
    phone: "9345678903",
    skills: ["Landscaping", "Tree Trimming"],
    location: {
      city: "Columbus",
      pin: "43215",
      coordinates: [-82.9988, 39.9612]
    },
    availability: [
      { day: "Wednesday", timeSlots: ["10:00-13:00"] },
      { day: "Saturday", timeSlots: ["09:00-12:00"] }
    ],
    isAvailable: true,
    rating: 4.4,
    totalReviews: 10,
    createdAt: new Date("2025-04-01T09:00:00Z")
  },
  {
    name: "Thomas King",
    email: "thomas.king@example.com",
    password: "thomas789",
    phone: "9456789014",
    skills: ["Plumbing", "Drain Cleaning"],
    location: {
      city: "Charlotte",
      pin: "28202",
      coordinates: [-80.8431, 35.2271]
    },
    availability: [
      { day: "Tuesday", timeSlots: ["09:00-12:00"] },
      { day: "Friday", timeSlots: ["14:00-17:00"] }
    ],
    isAvailable: true,
    rating: 4.6,
    totalReviews: 14,
    createdAt: new Date("2025-02-10T11:00:00Z")
  },
  {
    name: "Ava Scott",
    email: "ava.scott@example.com",
    password: "ava12345",
    phone: "9567890125",
    skills: ["Electrical", "Circuit Repair"],
    location: {
      city: "Seattle",
      pin: "98101",
      coordinates: [-122.3321, 47.6062]
    },
    availability: [
      { day: "Monday", timeSlots: ["10:00-13:00"] },
      { day: "Thursday", timeSlots: ["12:00-15:00"] }
    ],
    isAvailable: true,
    rating: 4.8,
    totalReviews: 16,
    createdAt: new Date("2025-03-05T10:00:00Z")
  },
  {
    name: "Charles Green",
    email: "charles.green@example.com",
    password: "charles67",
    phone: "9678901236",
    skills: ["Carpentry", "Woodworking"],
    location: {
      city: "Denver",
      pin: "80202",
      coordinates: [-104.9903, 39.7392]
    },
    availability: [
      { day: "Wednesday", timeSlots: ["09:00-12:00"] },
      { day: "Saturday", timeSlots: ["10:00-13:00"] }
    ],
    isAvailable: true,
    rating: 4.5,
    totalReviews: 12,
    createdAt: new Date("2025-01-30T09:00:00Z")
  },
  {
    name: "Mia Adams",
    email: "mia.adams@example.com",
    password: "mia89012",
    phone: "9789012347",
    skills: ["Painting", "Exterior Painting"],
    location: {
      city: "Portland",
      pin: "97201",
      coordinates: [-122.6765, 45.5231]
    },
    availability: [
      { day: "Tuesday", timeSlots: ["08:00-11:00"] },
      { day: "Friday", timeSlots: ["13:00-16:00"] }
    ],
    isAvailable: false,
    rating: 4.7,
    totalReviews: 15,
    createdAt: new Date("2025-02-25T12:00:00Z")
  },
  {
    name: "Joseph Baker",
    email: "joseph.baker@example.com",
    password: "joseph345",
    phone: "9890123458",
    skills: ["HVAC", "Ventilation"],
    location: {
      city: "Boston",
      pin: "02108",
      coordinates: [-71.0589, 42.3601]
    },
    availability: [
      { day: "Monday", timeSlots: ["09:00-12:00"] },
      { day: "Thursday", timeSlots: ["14:00-17:00"] }
    ],
    isAvailable: true,
    rating: 4.9,
    totalReviews: 18,
    createdAt: new Date("2025-03-25T10:00:00Z")
  },
  {
    name: "Isabella Carter",
    email: "isabella.carter@example.com",
    password: "isabella12",
    phone: "9011234569",
    skills: ["Cleaning", "Window Cleaning"],
    location: {
      city: "Miami",
      pin: "33101",
      coordinates: [-80.1918, 25.7617]
    },
    availability: [
      { day: "Wednesday", timeSlots: ["10:00-13:00"] },
      { day: "Saturday", timeSlots: ["09:00-12:00"] }
    ],
    isAvailable: true,
    rating: 4.4,
    totalReviews: 11,
    createdAt: new Date("2025-04-15T09:00:00Z")
  },
  {
    name: "Christopher Evans",
    email: "chris.evans@example.com",
    password: "chris5678",
    phone: "9123456790",
    skills: ["Landscaping", "Lawn Mowing"],
    location: {
      city: "Atlanta",
      pin: "30303",
      coordinates: [-84.3880, 33.7490]
    },
    availability: [
      { day: "Tuesday", timeSlots: ["09:00-12:00"] },
      { day: "Friday", timeSlots: ["14:00-17:00"] }
    ],
    isAvailable: true,
    rating: 4.6,
    totalReviews: 13,
    createdAt: new Date("2025-02-15T11:00:00Z")
  },
  {
    name: "Charlotte Harris",
    email: "charlotte.harris@example.com",
    password: "charlotte9",
    phone: "9234567901",
    skills: ["Plumbing", "Pipe Installation"],
    location: {
      city: "Las Vegas",
      pin: "89101",
      coordinates: [-115.1398, 36.1699]
    },
    availability: [
      { day: "Monday", timeSlots: ["10:00-13:00"] },
      { day: "Thursday", timeSlots: ["12:00-15:00"] }
    ],
    isAvailable: true,
    rating: 4.8,
    totalReviews: 17,
    createdAt: new Date("2025-03-10T10:00:00Z")
  },
  {
    name: "Benjamin Lewis",
    email: "benjamin.lewis@example.com",
    password: "ben12345",
    phone: "9345679012",
    skills: ["Electrical", "Appliance Repair"],
    location: {
      city: "Orlando",
      pin: "32801",
      coordinates: [-81.3792, 28.5383]
    },
    availability: [
      { day: "Wednesday", timeSlots: ["09:00-12:00"] },
      { day: "Saturday", timeSlots: ["10:00-13:00"] }
    ],
    isAvailable: true,
    rating: 4.5,
    totalReviews: 14,
    createdAt: new Date("2025-01-10T09:00:00Z")
  },
  {
    name: "Amelia Walker",
    email: "amelia.walker@example.com",
    password: "amelia678",
    phone: "9456789013",
    skills: ["Carpentry", "Deck Building"],
    location: {
      city: "Tampa",
      pin: "33602",
      coordinates: [-82.4572, 27.9506]
    },
    availability: [
      { day: "Tuesday", timeSlots: ["08:00-11:00"] },
      { day: "Friday", timeSlots: ["13:00-16:00"] }
    ],
    isAvailable: false,
    rating: 4.7,
    totalReviews: 16,
    createdAt: new Date("2025-02-20T12:00:00Z")
  },
  {
    name: "Lucas Wright",
    email: "lucas.wright@example.com",
    password: "lucas9012",
    phone: "9567890124",
    skills: ["Painting", "Drywall Repair"],
    location: {
      city: "Raleigh",
      pin: "27601",
      coordinates: [-78.6382, 35.7796]
    },
    availability: [
      { day: "Monday", timeSlots: ["09:00-12:00"] },
      { day: "Thursday", timeSlots: ["14:00-17:00"] }
    ],
    isAvailable: true,
    rating: 4.9,
    totalReviews: 20,
    createdAt: new Date("2025-03-30T10:00:00Z")
  }
];

module.exports = dummyServiceProviders;
