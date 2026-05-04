export function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

export function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

export function registerUser(user) {
    const users = getUsers();

    const exists = users.find((u) => u.email === user.email);

    if (exists) {
        return { success: false, message: "Diese E-Mail ist bereits registriert." };
    }

    const newUser = {
        id: Date.now(),
        vorname: user.vorname,
        nachname: user.nachname,
        email: user.email,
        password: user.password,
    };

    users.push(newUser);
    saveUsers(users);
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    return { success: true };
}

export function loginUser(email, password) {
    const users = getUsers();

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
        return { success: false, message: "E-Mail oder Passwort ist falsch." };
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    return { success: true, user };
}

export function logoutUser() {
    localStorage.removeItem("loggedInUser");
}

export function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("loggedInUser"));
}

export function updateLoggedInUser(updatedUser) {
    const users = getUsers();

    const updatedUsers = users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
    );

    saveUsers(updatedUsers);
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    return { success: true };
}