export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  if (config.public.gtagId) {
    const gtagScript = document.createElement('script')
    gtagScript.async = true
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.gtagId}`
    document.head.appendChild(gtagScript)

    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', config.public.gtagId)
  }

  if (config.public.metaPixelId) {
    const fbScript = document.createElement('script')
    fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${config.public.metaPixelId}');
      fbq('track', 'PageView');
    `
    document.head.appendChild(fbScript)
  }
})

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}
