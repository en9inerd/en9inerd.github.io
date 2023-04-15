(async function () {
  const EVENT_NAME = 'website_visited';
  const WEBHOOKS_KEY = 'cP7cTI1ZLRjZacB2QoWtvJ';
  try {
    const { ip } = await fetch('https://cors-proxy.enginerd.workers.dev/').then(res => res.json());
    const { href: url } = window.location;
    const screenDimensions = `${window.screen.width} x ${window.screen.height}`;
    const { referrer } = document;
    const { userAgent } = navigator;
    const strToSend = encodeURIComponent([
      `IP: ${ip}`,
      `URL: ${url}`,
      `Screen Dimensions: ${screenDimensions}`,
      `Referrer: ${referrer}`,
      `User Agent: ${userAgent}`
    ].join('<br>'));
    await fetch(`https://maker.ifttt.com/trigger/${EVENT_NAME}/with/key/${WEBHOOKS_KEY}?value1=${strToSend}`, {
      method: 'GET'
    });
  } catch (error) {
    console.error(error);
  }
})();
