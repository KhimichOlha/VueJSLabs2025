<script setup>
import { useSettingsStore } from './stores/settings';

const settings = useSettingsStore();
</script>

<template>
  <header>
    <nav>
      <router-link to="/">{{ $t('nav.home') }}</router-link> |
      <router-link to="/products">{{ $t('nav.products') }}</router-link> |
      <router-link to="/cart">{{ $t('nav.cart') }}</router-link> |
      <router-link to="/profile">{{ $t('nav.profile') }}</router-link>
    </nav>

    <div class="lang-switch">
      <button 
        @click="settings.setLocale('ua')" 
        :class="{ active: settings.locale === 'ua' }"
      >UA</button>
      <button 
        @click="settings.setLocale('en')" 
        :class="{ active: settings.locale === 'en' }"
      >EN</button>
    </div>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style>
header { display: flex; justify-content: space-between; padding: 1rem; background: #f4f4f4; margin-bottom: 20px;}
.active { font-weight: bold; text-decoration: underline; }
button { margin-left: 5px; cursor: pointer; }
</style>
