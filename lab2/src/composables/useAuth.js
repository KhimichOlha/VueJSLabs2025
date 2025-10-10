import { ref } from 'vue';

let sharedAuth = null;

export function useAuth() {
  if (!sharedAuth) {
    sharedAuth = {
      isAuthenticated: ref(false),
      user: ref(null), 

      login(email, password) {
        
        if (email === 'test@example.com' && password === 'password') {
          this.isAuthenticated.value = true;
          this.user.value = { name: 'Test User', email };
          return true;
        }
        return false;
      },

      register(name, email, password, confirmPassword) {
        if (password !== confirmPassword) return false;
        
        this.isAuthenticated.value = true;
        this.user.value = { name, email };
        return true;
      },

      logout() {
        this.isAuthenticated.value = false;
        this.user.value = null;
      }
    };
  }
  return sharedAuth;
}