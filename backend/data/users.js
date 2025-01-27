import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Han Long",
        email: "han@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Shuang",
        email: "shuang@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
];

export default users;