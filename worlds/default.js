// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {

    Constants.AvatarNames = [
        "newWhte", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];
    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "demo.js", "video.js", "lights.js", "bouncingBall.js", "bitcoinTracker.js", "fetch.js", "circle.js", "spin.js", "openPortal.js", "urlLink.js", "cradle.js", // "pendulum.js"
    ];

    const frameColor = 0xff0000;

    Constants.ShowCaseSpec = {
        voiceChat: true,
    };

    async function productData() {

        return await fetch(`https://www.retailjewels.com/RetailJewelsAPI/service.asmx/GetThumbnailProductSearch?Price=&Caratweight=&StoneShapes=&Stonesettings=&JewelleryCollections=&GroupId=8ed5c7da-6a9e-4ba7-8be2-ea4f18c666d3&NewArival=0&SpecialOffer=0&SortingBy=0&PageIndex=1&EternityCollection=&BestSeller=0&ProductRating=0`).then((response) => {
            return response.json();
        }).then((json) => {
            let data = json.map((item, index) => {
                return {
                    card: {
                        name: item.AffTitle,
                        className: "TextFieldActor",
                        translation: [-15.063744364022614, 5.0908487540842025, -16.87],
                        // translation: [5.875421017365224, 4.38622377915, 30.394897079467775],
                        rotation: [0, 0, 0],
                        depth: 0.10,
                        type: "text",
                        runs: [{ text: item.AffTitle }],
                        margins: { left: 15, top: 48, right: 10, bottom: 0 },
                        backgroundColor: 0x707070,
                        color: 0xB0841B,
                        frameColor: 0x222222,
                        width: 3.4,
                        height: 1,
                        textScale: 0.007,
                        shadow: true,
                        fullbright: true,
                        noDismissButton: true,
                    }
                }
            })
            return data
        })
    }
    var data
    var DefaultCards;
    async function fetchData() {
        data = await productData();
        console.log('productData', data);
        //Constants.DefaultCards = [...DefaultCards, ...data];
        const frameColor = 0xff0000;
        //Constants.DefaultCards = DefaultCards;
       // data = [...DefaultCards, ...data];
    }
    
    //fetchData();
    // console.warn(data, 'productData')
    
    DefaultCards = [
    
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [-15, 3, 12],
                rotation: [0, -Math.PI / 2, 0],
                spawn: "default",
            }
        },

        // this model is use for innner wall
        {
            card: {
                name: "world model",
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                type: "3d",
                privacy: "public",
                fileName: "/artgallery_042122.glb.zip",
                dataLocation: "./assets/images/6-optimised.glb",
                translation: [10, 0, 10],
                dataScale: [10, 10, 10],
                placeholder: true,
                placeholderSize: [4000, 0.1, 4000],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                translation: [9.5, 9, -28.5],
                scale: [14, 16, 4],
                rotation: [0, -Math.PI, 0],
                layers: ["pointer", "text"],
                behaviorModules: ["VideoPlayer"],
                fullBright: true,
                type: "2d",
                width: 4,
                textureType: "video",
                textureLocation: "./assets/cafetriavideo.mp4",
                textureHeight: 2048,
                textureWidth: 4096,
                title: "My Video",
                description: "This is a test video",
                text: {
                    content: "Sample Text",
                    fontSize: 44,
                    position: [0, 0.8, 0],
                    //color: 16777215,
                    align: "center"
                }
            },
            id: "main",
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                fileName: "/shanghai_riverside_2k.exr",
                dataLocation: "32nxXNZxuyT3h-bh0OX-2uMdBRJ0WmDduuTJwwewEE60WkZGQkEIHR1UW15XQRxHQRxRQF1DR1dGHFtdHUcddVZkUEtee0FzWWNRcGpWAXVKU0RLRWd5ZWtrAB1bXRxRQF1DR1dGHF9bUUBdRFdAQVcdAH9ae3ZoZVdYW1FVZgNDBVZ9SAR2R1lgalt_cAMfW1h5cXYAfGtWX3lQex1WU0ZTHXVreUhtUEFeU218aAYDRVxqAHB_Rn5YZmFFZWsAZERtWHF_WkIGZEtRdnM",
                dataType: "exr",
            }
        },
        {
            card: {
                name: "bitcointracker",
                //translation: [-12.063744364022614, 5.0908487540842025, -16.87],
                translation: [8.869901610664385, 12.280099883799043, 46.35655956317513],
                //scale: [8, 8, 2],
                rotation: [0, 0, 0, 0],
                //rotation: [-0.004412759358650033, -0.9998676011023606, 0.004552749290124767, 0.014986003288229438],
                scale: [3, 3, 3],
                type: "2d",
                layers: ["pointer"],
                textureType: "canvas",
                textureWidth: 1024,
                textureHeight: 768,
                width: 1,
                height: 0.75,
                frameColor: frameColor,
                // color: 0xffffff,
                depth: 0.05,
                cornerRadius: 0.1,
                behaviorModules: ["Elected", "FetchExample"],
                //behaviorModules: ["Elected", "BitcoinTracker"],
            },
            id: "main",
        },
       /*  {
            card: {
                name: "example",
                translation: [0, 1, -4],
                type: "object",
                behaviorModules: ["Elected", "FetchExample"],
            }
        } */

    ];





    Constants.DefaultCards = DefaultCards;
  //  Constants.DefaultCards = [...DefaultCards, ...data];
    /* setTimeout(() => {
        
    }, 5000); */

}
