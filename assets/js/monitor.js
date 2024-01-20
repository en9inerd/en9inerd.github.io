(async function () {
  const NOTIFIER = 'https://connect.enginerd.io:1880/nodes/cP7cTI1ZLRjZacB2QoWtvJ/visitor-notifier';
  try {
    const { href: url } = window.location;
    const screenDimensions = `${window.screen.width} x ${window.screen.height}`;
    const { referrer } = document;
    const { userAgent } = navigator;
    await fetch(NOTIFIER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: url,
        screenDimensions: screenDimensions,
        referrer: referrer,
        userAgent: userAgent,
      }),
    });
  } catch (error) {
    console.error(error);
  }
})();
