<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <!-- Logo -->
        <div class="logo">
          <div class="blood-drop"></div>
          <span class="logo-text">Smart Blood Donation</span>
        </div>

        <!-- Desktop Navigation -->
        <nav class="nav-desktop">
          <RouterLink to="/" class="nav-link active">Trang chủ</RouterLink>
          <a href="#" class="nav-link">Giới thiệu</a>
          <a href="#" class="nav-link">Đăng ký hiến máu</a>
          <a href="#" class="nav-link">Đặt lịch</a>
          <a href="#" class="nav-link">Tin tức & Chiến dịch</a>
          <a href="#" class="nav-link">Liên hệ</a>
        </nav>

        <!-- Login/Register -->
        <div class="auth-buttons">
          <button class="btn-outline">Đăng nhập</button>
          <button class="btn-primary">Đăng ký</button>
        </div>

        <!-- Mobile button -->
        <button class="btn-mobile" @click="toggleMobileMenu">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-show="mobileOpen" class="mobile-menu">
        <div class="mobile-links">
          <RouterLink to="/" class="mobile-link active">Trang chủ</RouterLink>
          <a href="#" class="mobile-link">Giới thiệu</a>
          <a href="#" class="mobile-link">Đăng ký hiến máu</a>
          <a href="#" class="mobile-link">Đặt lịch</a>
          <a href="#" class="mobile-link">Tin tức & Chiến dịch</a>
          <a href="#" class="mobile-link">Liên hệ</a>
          <div class="mobile-auth">
            <button class="btn-outline full">Đăng nhập</button>
            <button class="btn-primary full">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const mobileOpen = ref(false)
const toggleMobileMenu = () => { mobileOpen.value = !mobileOpen.value }
</script>

<style scoped>
/* Header */
.header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Flex wrapper */
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: #1f2937;
}

/* Blood drop icon */
.blood-drop {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
}

/* Navigation */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: 32px;
}
.nav-link {
  color: #4b5563;
  font-size: 15px;
  text-decoration: none;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #dc2626;
}
.nav-link.active {
  color: #dc2626;
  font-weight: 500;
}

/* Auth buttons */
.auth-buttons {
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn-outline {
  padding: 8px 16px;
  border: 1px solid #dc2626;
  border-radius: 8px;
  background: transparent;
  color: #dc2626;
  cursor: pointer;
  transition: background 0.3s;
}
.btn-outline:hover {
  background: #fef2f2;
}
.btn-primary {
  padding: 8px 16px;
  border-radius: 8px;
  background: #dc2626;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}
.btn-primary:hover {
  background: #b91c1c;
}

/* Mobile button */
.btn-mobile {
  display: none;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.icon {
  width: 24px;
  height: 24px;
  color: #374151;
}

/* Mobile menu */
.mobile-menu {
  padding-bottom: 16px;
}
.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.mobile-link {
  padding: 8px 0;
  font-size: 15px;
  color: #4b5563;
  text-decoration: none;
}
.mobile-link.active {
  color: #dc2626;
  font-weight: 500;
}
.mobile-auth {
  display: flex;
  gap: 12px;
  padding-top: 12px;
}
.full {
  flex: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-desktop,
  .auth-buttons {
    display: none;
  }
  .btn-mobile {
    display: block;
  }
}
</style>
