(async function () {
  const EVENT_NAME = 'website_visited';
  const WEBHOOKS_KEY = 'cP7cTI1ZLRjZacB2QoWtvJ';
  const CORS_PROXY = 'https://cors-proxy.enginerd.workers.dev?apiUrl=';
  try {
    const { ip, country, datacenter } = await fetch(CORS_PROXY).then(res => res.json());
    const { href: url } = window.location;
    const screenDimensions = `${window.screen.width} x ${window.screen.height}`;
    const { referrer } = document;
    const { userAgent } = navigator;
    const strToSend = [
      `IP: ${ip}`,
      `Country: ${country}`,
      `Datacenter: ${datacenter}`,
      `URL: ${url}`,
      `Screen Dimensions: ${screenDimensions}`,
      `Referrer: ${referrer}`,
      `User Agent: ${userAgent}`
    ].join('<br>');
    await fetch(CORS_PROXY + `https://maker.ifttt.com/trigger/${EVENT_NAME}/with/key/${WEBHOOKS_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value1: strToSend }),
    });
  } catch (error) {
    console.error(error);
  }
})();
