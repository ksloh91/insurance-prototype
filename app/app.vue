<template>
  <NuxtRouteAnnouncer />
  <LandingPrototypeBanner />
  <NuxtPage />
  <LandingWhatsappFab />
</template>

<style>
html {
  scroll-padding-top: 5.5rem;
  background-color: #FAF7F2;
}

body {
  font-family: 'Public Sans', ui-sans-serif, system-ui, sans-serif;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
