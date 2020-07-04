const ejectCurrentTab = async () => {
  const [{id: currentTabId}] = await browser.tabs.query({
    active: true,
    currentWindow: true,
  })

  if (!currentTabId) {
    console.error("No current tab found")
    return
  }

  browser.windows.create({tabId: currentTabId})
}

const main = () => {
  browser.commands.onCommand.addListener(
    command => command === "eject-current-tab" && ejectCurrentTab(),
  )
}

main()
