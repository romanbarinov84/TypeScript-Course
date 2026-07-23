const User = {
    Admin:"ADMIN",
    User:"USER",
    Guest:"GUEST",
}as const

type UserRole = typeof User[keyof typeof User];


