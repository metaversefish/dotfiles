let steamListingInfo = {};
let steamListingAssets = {};
let listingInfoPromises = [];
let listingAssetPromises = [];
let inventoryItemRequests = [];
let inventoryOwnerRequests = [];
let isInventoryOwnerRequests = [];
let walletInfoRequests = [];
let partnerInfoRequests = [];
let tradeStatusRequests = [];

// retrieve g_rgListingInfo from page script
window.addEventListener('message', e => {
    if (e.data.type === 'listingInfo') {
        steamListingInfo = e.data.listingInfo;

        // resolve listingInfoPromises
        for (let promise of listingInfoPromises) promise(steamListingInfo);

        listingInfoPromises = [];
    } else if (e.data.type === 'inventoryItemDescription') {
        const unfulfilledRequests = [];

        for (const request of inventoryItemRequests) {
            if (request.assetId === e.data.assetId) {
                request.promise(e.data.description);
            } else {
                unfulfilledRequests.push(request);
            }
        }

        inventoryItemRequests = unfulfilledRequests;
    } else if (e.data.type === 'listingAssets') {
        steamListingAssets = e.data.assets[730][2];
        for (const promise of listingAssetPromises) promise(steamListingAssets);
    } else if (e.data.type === 'inventoryOwner') {
        for (const promise of inventoryOwnerRequests) promise(e.data.owner);
    } else if (e.data.type === 'walletInfo') {
        for (const promise of walletInfoRequests) promise(e.data.wallet);
    } else if (e.data.type === 'partnerInfo') {
        for (const promise of partnerInfoRequests) promise(e.data.partner);
    } else if (e.data.type === 'isInventoryOwner') {
        for (const promise of isInventoryOwnerRequests) promise(e.data.isOwner);
    } else if (e.data.type === 'tradeStatus') {
        for (const promise of tradeStatusRequests) promise(e.data.tradeStatus);
    }
});

const retrieveListingInfoFromPage = function(listingId) {
    if (listingId != null && listingId in steamListingInfo) {
        return Promise.resolve(steamListingInfo);
    }

    window.postMessage(
        {
            type: 'requestListingInfo'
        },
        '*'
    );

    return new Promise(resolve => {
        listingInfoPromises.push(resolve);
    });
};

const retrieveListingAssets = function(assetId) {
    if (assetId != null && assetId in steamListingAssets) {
        return Promise.resolve(steamListingAssets);
    }

    window.postMessage(
        {
            type: 'requestAssets'
        },
        '*'
    );

    return new Promise(resolve => {
        listingAssetPromises.push(resolve);
    });
};

const retrieveInventoryItemDescription = function(assetId) {
    window.postMessage(
        {
            type: 'requestInventoryItemDescription',
            assetId
        },
        '*'
    );

    return new Promise(resolve => {
        inventoryItemRequests.push({ promise: resolve, assetId });
    });
};

const retrieveInventoryOwner = function() {
    window.postMessage(
        {
            type: 'requestInventoryOwner'
        },
        '*'
    );

    return new Promise(resolve => {
        inventoryOwnerRequests.push(resolve);
    });
};

const isInventoryOwner = function() {
    window.postMessage(
        {
            type: 'requestIsInventoryOwner'
        },
        '*'
    );

    return new Promise(resolve => {
        isInventoryOwnerRequests.push(resolve);
    });
};

const retrieveWalletInfo = function() {
    window.postMessage(
        {
            type: 'requestWalletInfo'
        },
        '*'
    );

    return new Promise(resolve => {
        walletInfoRequests.push(resolve);
    });
};

const retrievePartnerInfo = function() {
    window.postMessage(
        {
            type: 'requestPartnerInfo'
        },
        '*'
    );

    return new Promise(resolve => {
        partnerInfoRequests.push(resolve);
    });
};

const retrieveTradeStatus = function() {
    window.postMessage(
        {
            type: 'requestTradeStatus'
        },
        '*'
    );

    return new Promise(resolve => {
        tradeStatusRequests.push(resolve);
    });
};

const checkMarketHash = function() {
    window.postMessage(
        {
            type: 'checkMarketHash'
        },
        '*'
    );
};

// register the message listener in the page scope
let script = document.createElement('script');
script.innerText = `
    window.csgofloat = true;

    window.addEventListener('message', (e) => {
        if (e.data.type == 'requestListingInfo') {
            window.postMessage({
                type: 'listingInfo',
                listingInfo: g_rgListingInfo
            }, '*');
        } else if (e.data.type == 'requestAssets') {
            window.postMessage({
                type: 'listingAssets',
                assets: g_rgAssets
            }, '*');
        } else if (e.data.type == 'requestInventoryItemDescription') {
            if (g_ActiveInventory.m_rgAssets) {
                const asset = g_ActiveInventory.m_rgAssets[e.data.assetId];
                
                if (!asset) {
                    window.postMessage({
                        type: 'inventoryItemDescription',
                        assetId: e.data.assetId,
                    }, '*');
                    return;
                }

                const key = asset.instanceid == "0" ? asset.classid : asset.classid + '_' + asset.instanceid;
                const description = g_ActiveInventory.m_rgDescriptions[key];
    
                window.postMessage({
                    type: 'inventoryItemDescription',
                    assetId: e.data.assetId,
                    description
                }, '*');
            } else {
                /* Trade inventory */
                const asset = g_ActiveInventory.rgInventory[e.data.assetId];
                if (!asset) {
                    window.postMessage({
                        type: 'inventoryItemDescription',
                        assetId: e.data.assetId,
                    }, '*');
                    return;
                }
                
                /* delete HTML elements */
                const clone = { ...asset };
                delete clone.element;
                delete clone.homeElement;

                window.postMessage({
                    type: 'inventoryItemDescription',
                    assetId: e.data.assetId,
                    description: clone
                }, '*');
            }
        } else if (e.data.type == 'changePageSize') {
            g_oSearchResults.m_cPageSize = e.data.pageSize;
            g_oSearchResults.GoToPage(0, true);
        } else if (e.data.type == 'requestInventoryOwner') {
            window.postMessage({
                type: 'inventoryOwner',
                owner: g_ActiveInventory.m_owner.strSteamId
            }, '*');
        } else if (e.data.type == 'requestWalletInfo') {
            window.postMessage({
                type: 'walletInfo',
                wallet: typeof g_rgWalletInfo !== 'undefined' && g_rgWalletInfo
            }, '*');
        } else if (e.data.type == 'requestPartnerInfo') {
            window.postMessage({
                type: 'partnerInfo',
                partner: g_ulTradePartnerSteamID
            }, '*');
        } else if (e.data.type == 'requestIsInventoryOwner') {
            window.postMessage({
                type: 'isInventoryOwner',
                isOwner: g_ActiveInventory.m_owner.strSteamId === g_steamID
            }, '*');
        } else if (e.data.type == 'requestTradeStatus') {
            window.postMessage({
                type: 'tradeStatus',
                tradeStatus: g_rgCurrentTradeStatus
            }, '*');
        } else if (e.data.type == 'checkMarketHash') {
            if (!BuyItemDialog.m_bInitialized) {
                MarketCheckHash();
            }
        }
    });
`;

document.head.appendChild(script);
