chrome.tabs.onCreated.addListener(closeAllTabs)
chrome.tabs.onUpdated.addListener(closeAllTabs)

function closeAllTabs() {
  chrome.tabs.query({}, async (tabs) => {
    const openedYoutubeTabs = tabs.filter(t => t.url.includes('www.youtube.com'))
    for (const tab of openedYoutubeTabs.slice(1)) {
      await chrome.tabs.remove(tab.id)
    }
  })
}
