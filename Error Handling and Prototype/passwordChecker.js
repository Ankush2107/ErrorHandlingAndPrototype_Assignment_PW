class User {

    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
   
    get password() {
      return '*'.repeat(this._password.length);
    }
  
    
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;      // we are changing existing password
        console.log('Password changed successfully');
      } else {
        console.error('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
}
  
 
const user = new User('Ankush', 'An@12345');
  
console.log(`Username: ${user.username}`);
console.log(`Password: ${user.password}`); 