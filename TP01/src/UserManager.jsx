class UserManager {
    constructor() {
        this.currentUser = null;
        this.users = [];
    }

    login(username, password) {
      const user = this.users.find((u) => u.username === username && u.password === password);
      if (user) {
        this.currentUser = user;
        return true;
      }
      return false;
    }

    logout() {
      this.currentUser = null;
    }

    register(newUser) {
      const existingUser = this.users.find((u) => u.username === newUser.username);
      if (existingUser) {
        return false;
      }

      this.users.push(newUser);
      this.currentUser = newUser;
      return true;
    }

    updateUser(updatedUser) {
      const index = this.users.findIndex((u) => u.username === this.currentUser.username);
      if (index !== -1) {
        this.users[index] = updatedUser;
        this.currentUser = updatedUser;
        return true;
      }
      return false;
    }
}

export default UserManager;
