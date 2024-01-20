(async function () {
  const NOTIFIER = 'https://connect.enginerd.io:1880/nodes/cP7cTI1ZLRjZacB2QoWtvJ/visitor-notifier';
  try {
    const { href: url } = window.location;
    const screenDimensions = `${window.screen.width} x ${window.screen.height}`;
    const { referrer } = document;
    const { userAgent } = navigator;
    const hasTouchScreen = navigator?.maxTouchPoints > 0;
    await fetch(NOTIFIER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url,
        screenDimensions,
        referrer,
        userAgent,
        hasTouchScreen
      }),
    });
  } catch (error) {
    console.error(error);
  }
})();
