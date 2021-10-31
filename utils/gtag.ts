declare global {
  interface Window {
    dataLayer: any;
  }
}

export const GTM_ID = "GTM-KCTZBT";

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
