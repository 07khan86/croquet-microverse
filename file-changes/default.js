// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io
export function init(Constants) {
    Constants.AvatarNames   = [
        "newWhte", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];
    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "demo.js","video.js", "lights.js", "bouncingBall.js", "bitcoinTracker.js", "spin.js", "openPortal.js", "urlLink.js", "cradle.js", // "pendulum.js"
    ];

    const frameColor = 0xff0000;
 
    Constants.ShowCaseSpec = {
        voiceChat: true,
      };
   

    Constants.DefaultCards = [
       
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [-15, 3,12],
                rotation: [0, -Math.PI / 2, 0],              
                spawn: "default",
            }
        },

        // this model is use for innner wall
        {
            card: {
                name:"world model",
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                type: "3d",
                privacy: "public",
                fileName: "/artgallery_042122.glb.zip",
                dataLocation: "./assets/images/6-optimised.glb",
                translation:[10, 0, 10],
                dataScale:[10,10,10],
                placeholder: true,
                placeholderSize: [4000, 0.1, 4000],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
              translation: [9.5,9, -28.5],
              scale: [14,16, 4],
              rotation: [0,-Math.PI, 0],
              layers: ["pointer"],
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
            },
            id: "main",
          },
        // {
        //     card: {
        //         translation: [7.1, 7.2, -30.5],
        //         scale: [4, 4, 4],
        //         rotation: [0, -Math.PI / 2, 0],
        //         layers: ["pointer"],
        //         behaviorModules: ["VideoPlayer"],
        //         fullBright: true,
        //         cardURL: "https://croquet.io",
        //         type: "2d",
        //         width: 4,
        //         textureType: "video",
        //         textureLocation: "./assets/videofortest.mp4",
        //         textureHeight: 2048,
        //         textureWidth: 4096,
        //         title: "My Video",
        //         description: "This is a test video",
        //       },
        // }
        // {
        //     card: {
        //         name:"model",
        //         type: "3d",
        //         fileName: "/artgallery_042122.glb.zip",
        //         dataLocation: "./assets/images/model.gbl",
        //         // singleSided: true,
        //         // shadow: true,
        //         // layers: ["walk"],
        //         translation: [10, 0.6, 10],
        //         dataScale:[0,0,0],

        //         placeholder: true,
        //         placeholderSize: [400, 0.1, 400],
        //         placeholderColor: 0x808080,
        //         placeholderOffset: [0, 0, 0],
        //     }
        // },
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
        // {
        //     card: {
        //         name: "image card",
        //         translation: [12, 0.6, 10.77],
        //         rotation: [0, -Math.PI / 2, 0],
        //         scale: [4, 4, 4],
        //         type: "2d",
        //         textureType: "image",
        //         textureLocation: "./assets/images/test.jpg",
        //         cardURL: "",

        //         cardHilite: 0xffffaa,
        //         behaviorModules: ["URLLink"],
        //         fullBright: true,
        //         frameColor: 0xcccccc,
        //         color: 0xbbbbbb,
        //         cornerRadius: 0.05,
        //         depth: 0.05,
        //         shadow: true,
        //     }
        // },
        // {
        //     card: {
        //         name: "image card",
        //         translation:[30, 50, 10],
        //         rotation: [0, -Math.PI / 2, 0],
        //         scale: [4, 4, 4],
        //         type: "2d",
        //         textureType: "image",
        //         textureLocation: "./assets/images/map.jpg",
        //         cardURL: "",
        //         cardHilite: 0xffffaa,
        //         // behaviorModules: ["URLLink"],
        //         fullBright: true,
        //         frameColor: 0xcccccc,
        //         color: 0xbbbbbb,
        //         cornerRadius: 0.05,
        //         depth: 0.05,
        //         shadow: true,
        //     }
        // },
        // {
        //     card:
        //     {
        //         type: "2d",
        //         translation: [0,0,12],
        //         rotation: [0, -Math.PI / 4, 0],
        //         scale: [4, 4, 4],
        //         depth: 0.025,
        //         textureType: "video",
        //         textureLocation: "./assets/images/video1.mp4",
        //         frameColor: 0x777777,
        //         fullBright: true,
        //         behaviorModules: ["VideoPlayer"],
        //     }
        // },
       
        // {
        //     card: {
        //         name: "image card",
        //         translation: [0,0,12],
        //         rotation: [0, -Math.PI / 4, 0],
        //         scale: [4, 4, 4],
        //         type: "2d",
        //         textureType: "image",
        //         textureLocation: "./assets/images/test.jpg",
        //         cardURL: "",
        //         cardHilite: 0xffffaa,
        //         // behaviorModules: ["URLLink"],
        //         fullBright: true,
        //         frameColor: 0xcccccc,
        //         color: 0xbbbbbb,
        //         cornerRadius: 0.05,
        //         depth: 0.05,
        //         shadow: true,
        //     }
        // },
        // {
        //     card: {
        //         name: "auggie stand",
        //         translation: [7.79, -1.72, -14.82],
        //         // rotation: [0, 0, 0, 1],
        //         layers: ["pointer"],
        //         behaviorModules: ["Billboard"],
        //         dataLocation: "3en5pHEDZi7EpsaJ-_yONogv4uVau9ZlIxyh1TH4AhAQDRERFRZfSkoDDAkAFksQFksGFwoUEAARSwwKShBKHzAREjUqHyMQKjZULgwCKD8MUFZcHSMhIl1VV0oMCksGFwoUEAARSwgMBhcKEwAXFgBLEwQLABYWBEoOPFcnN1A0MQFUNQJSCFArMhcyMj8hIx8RDCMBIB06LygUJgYULAEjFDBVSgEEEQRKUAoHFCdQMwYEESE1NCscPTckDggoDDUwDyIgFTFXVw5IDAhREDc6Jwc0MA",
        //         dataScale: [1, 1, 1],
        //         fileName: "/AuggieStand.glb",
        //         modelType: "glb",
        //         shadow: true,
        //         singleSided: true,
        //         type: "3d",
        //     }
        // },
        // {
        //     card: {
        //         name: "auggie award",
        //         translation: [7.79, -0.45, -14.82],
        //         // rotation: [0, 0, 0, 1],
        //         layers: ["pointer"],
        //         behaviorModules: ["Billboard"],
        //         dataLocation: "35hI1OQ1NaqWki0Or-uHXAVM9vipZGVZIc_emQwLfCAcXUFBRUYPGhpTXFlQRhtARhtWR1pEQFBBG1xaGkAaT2BBQmV6T3NAemYEflxSeG9cAAYMTXNxcg0FBxpcWhtWR1pEQFBBG1hcVkdaQ1BHRlAbQ1RbUEZGVBpebAd3ZwBkYVEEZVICWAB7YkdiYm9xc09BXHNRcE1qf3hEdlZEfFFzRGAFGlFUQVQabV1-bFdNZAdnBAxCfnAYXk9kamVaAUVbBnt3QUBaWwUEfnhPb1RWfhhqDQ",
        //         dataScale: [1, 1, 1],
        //         fileName: "/Auggie2.glb",
        //         modelType: "glb",
        //         license: "CC-BY",
        //         attribution: "'Auggie Awards Trophy AWE 2022' by Kai Oldman derived from 'Auggie Awards Trophy AWE 2021' (https://skfb.ly/otrIP) by oriinbar is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).",
        //         shadow: true,
        //         singleSided: true,
        //         type: "3d",
        //     }
        // },
        /*
        {
            card: {
                translation: [-12, -0.4, -10.2],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                className: "PortalActor",
                color: 16737996,
                cornerRadius: 0.05,
                depth: 0.05,
                frameColor: 8947848,
                height: 2.4,
                portalURL: "?world=refinery",
                type: "2d",
                width: 1.8,
            }
        },
        */
        // {
        //     card: {
        //         name:"bouncinglogo",
        //         translation: [12, 0.70, -10.24],
        //         rotation: [0, -Math.PI / 2, 0],
        //         behaviorModules: ["BouncingBall"],
        //         scale: [3, 3, 3],
        //         width: 1,
        //         height: 1,
        //         layers: ["pointer"],
        //         type: "2d",
        //         dataLocation: "./assets/SVG/full-circle.svg",
        //         textureType: "dynamic",
        //         textureWidth: 1024,
        //         textureHeight: 1024,
        //         frameColor: frameColor,
        //         color: 0xffffff,
        //         depth: 0.05,
        //         fullBright: true,
        //     }
        // },

        // translation: [-8.387217530074144, 5.0908487540842025, -16.87],
        // scale: [3, 3, 3],
        // rotation: [0, 0, 0, 1],
        // layers: ["pointer"],
        // behaviorModules: ["Elected", "BitcoinTracker"],
        // name: "bitcointracker",
        // cornerRadius: 0.1,
        // depth: 0.05,
        // frameColor: 16711680,
        // height: 0.75,
        // textureHeight: 768,
        // textureType: "canvas",
        // textureWidth: 1024,
        // type: "2d",
        // width: 1,

        {
            card: {
                name: "bitcointracker",
                translation: [-8.387217530074144, 5.0908487540842025, -16.87],
                rotation: [0, 0, 0],
                scale: [3, 3, 3],
                type: "2d",
                textureType: "canvas",
                textureWidth: 1024,
                textureHeight: 768,
                width: 1,
                height: 0.75,
                frameColor: frameColor,
                // color: 0xffffff,
                depth: 0.05,
                cornerRadius: 0.1,
                behaviorModules: ["Elected", "BitcoinTracker"],
            },
            id: "main",
        },
        // translation: [-5.063744364022614, 5.0908487540842025, -16.87],
        // scale: [3, 3, 3],
        // rotation: [0, 0, 0, 1],
        // layers: ["pointer"],
        // behaviorModules: ["Elected", "BitcoinTracker"],
        // name: "bitcointracker",
        // cornerRadius: 0.1,
        // depth: 0.05,
        // frameColor: 16711680,
        // height: 0.75,
        // textureHeight: 768,
        // textureType: "canvas",
        // textureWidth: 1024,
        // type: "2d",
        // width: 1,
        {
            card: {
                name: "bitcointracker",
                translation: [-5.063744364022614, 5.0908487540842025, -16.87],
                rotation: [0, 0, 0],
                scale: [3, 3, 3],
                type: "2d",
                textureType: "canvas",
                textureWidth: 1024,
                textureHeight: 768,
                width: 1,
                height: 0.75,
                frameColor: frameColor,
                // color: 0xffffff,
                depth: 0.05,
                cornerRadius: 0.1,
                behaviorModules: ["Elected", "BitcoinTracker"],
            },
            id: "main",
        },
        // translation: [-0.4503289609734269, 5.0908487540842025, -16.87],
        // scale: [3, 3, 3],
        // rotation: [0, 0, 0, 1],
        // layers: ["pointer"],
        // behaviorModules: ["Elected", "BitcoinTracker"],
        // name: "bitcointracker",
        // cornerRadius: 0.1,
        // depth: 0.05,
        // frameColor: 16711680,
        // height: 0.75,
        // textureHeight: 768,
        // textureType: "canvas",
        // textureWidth: 1024,
        // type: "2d",
        // width: 1,
        {
            card: {
                name: "bitcointracker",
                translation: [-0.4503289609734269, 5.0908487540842025, -16.87],
                rotation: [0, 0, 0],
                scale: [3, 3, 3],
                type: "2d",
                textureType: "canvas",
                textureWidth: 1024,
                textureHeight: 768,
                width: 1,
                height: 0.75,
                frameColor: frameColor,
                // color: 0xffffff,
                depth: 0.05,
                cornerRadius: 0.1,
                behaviorModules: ["Elected", "BitcoinTracker"],
            },
            id: "main",
        },
        {
            card: {
                name:"bitlogo",
                translation: [-0.35, 0.35, 0.1],
                scale: [0.25, 0.25, 0.25],
                parent: "main",
                type: "2d",
                fileName: "BitcoinSign.svg",
                dataLocation: "3N4qGVniVE2vDgL1m_b7BLvYMZP0LHvOv8wTRxL1nv1wJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthCSoYLDciBz0PJR8tDBYqfQk2Lzg3ORsFGRcXfGEnIWAtPCE_Oys6YCMnLTwhOCs8PSthLT9jIn4je3speQcKKQQLCgoNfgwnKTY3Y30oAyUJG3oGO3k-CX4ZdyUKF2EqLzovYTx3AAgWARoHHQsUHiU9An0NenstIB0FNwc6Axl-PgJ-JHo9fTgpHSsIABs",
                depth: 0.05,
                color: 0xffffff,
                frameColor: frameColor,
                behaviorModules: ["BitLogo"]
            }
        },
        {
            card: {
                name:"bar graph",
                translation:[0, -0.3, 0.1],
                color: 0xEEEEEE,
                frameColor: frameColor,
                type: "object",
                height: 0.4,
                parent: "main",
                behaviorModules: ["BarGraph"],
            }
        },

        // {
        //     card: {
        //         name: "text editor",
        //         className: "TextFieldActor",
        //         translation: [5.5, 0.4, -16.87],
        //         rotation: [0, 0, 0],
        //         depth: 0.05,
        //         type: "text",
        //         runs: [{text: "\nWelcome to the Croquet Gallery!\n"}],
        //         margins: {left: 20, top: 20, right: 20, bottom: 20},
        //         backgroundColor: 0xf4e056,
        //         color: 0x000000,
        //         //color: 0xf4e056,
        //         frameColor: frameColor,
        //         width: 2,
        //         height: 2,
        //         textScale: 0.002,
        //         shadow: true,
        //     }
        // },
        // {
        //     card: {
        //         name: "portal button",
        //         translation: [-12.1, 1.3, -10.17839395666378],
        //         behaviorModules: ["OpenRefineryPortalButton"],
        //         type: "object",
        //     }
        // },
        /*
        {
            card: {
                name: "sticky",
                className: "TextFieldActor",
                translation: [-12, 0.8, -12.2],
                behaviorModules: ["StickyNote"],
                rotation: [0, Math.PI / 2, 0],
                depth: 0.05,
                type: "text",
                runs: [{text: `
                translation: [-12, -0.4, -10.2],
                rotation: [0, -1.5707963267948966, 0],
                layers: ["pointer", "portal"],
                className: "PortalActor",
                color: 16737996,
                cornerRadius: 0.05,
                depth: 0.05,
                frameColor: 8947848,
                height: 2.4,
                portalURL: "?world=refinery",
                type: "2d",
                width: 1.8,
                `}],
                margins: {left: 20, top: 20, right: 20, bottom: 20},
                backgroundColor: 0xf4e056,
                //color: 0xf4e056,
                frameColor: frameColor,
                width: 1,
                height: 1,
                textScale: 0.002,
                shadow: true,
            }
        },
        */
        // {
        //     card: {
        //         translation: [10.1, 9.5, -28.5],
        //         scale: [22, 16, 10],
        //         rotation: [0, Math.PI, 0],
        //         layers: ["pointer"],
        //         behaviorModules: ["PDFView"],
        //         color: 8947848,
        //         depth: 0.05,
        //         frameColor: 16777215,
        //         fullBright: true,
        //         modelType: "pdf",
        //         fileName: "",
        //         pdfLocation: "3i2bjIBqONmUqz8XGj0oguUVu-wJleyHEiMp8RBLCX2sAR0dGRpTRkYPAAUMGkccGkcKGwYYHAwdRwAGRhxGLg0_CxAFIBooAjgKKzENWi4RCB8QHjwiPjAwW0YABkcKGwYYHAwdRwQAChsGHwwbGgxGWjFcGQxRBQY8IA4-UBkaLwMTHBsEIA1cEVsCGTY2LCgKIBlROw8tNg8-XUYNCB0IRhAeHRoqCw8EBjguAxMiBQQxBDw7Xl8AKiddMVkdIB02Nh4zIRskGyomXgI",
        //         shadow: true,
        //         singleSided: true,
        //         type: "2d",
        //     }
        // },
        /*
          {
            card: {
                translation: [11.914606500892997, 0.4, 0.25],
                scale: [4, 4, 4],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                name: "/22.05.23 Croquet AWE Presentation.jpg",
                cornerRadius: 0.02,
                fileName: "/22.05.23 Croquet AWE Presentation.jpg",
                fullBright: false,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "36xe210tezWr_E_zOXjWN7_Oz_Olw09j9csX_tqBoesMXkJCRkUMGRlQX1pTRRhDRRhVRFlHQ1NCGF9ZGUMZcVJgVE9af0V3XWdVdG5SBXFOV0BPQWN9YW9vBBlfWRhVRFlHQ1NCGFtfVURZQFNERVMZVFUPTHhQcEFMREMAV0N-WVF7RloCBU9ZVXRwB0RgDl5zAWwAUH1GDg8AVRlSV0JXGXtQDkRfW3lcBXJgZVx6b1xVfm4CemVAD0R8TF1DRnBVAAdjZ0JTegZUAWc",
                textureType: "image",
                type: "2d",
            }
        }
        {
            card: {
                name:"pendulum",
                type: "object",
                translation: [-0.03701975732147922, 3.2368919013826734, 8.444841625884546],
                behaviorModules: ["Rapier", "Pendulum"],
                layers: ["pointer"],
                scale: [0.2, 0.2, 0.2],
                color: 0xaa6666,
            }
        },
        */
        // {
        //     card: {
        //         name: "cradle",
        //         type: "object",
        //         translation: [-9.67915341742099, 3.2368919013826734, 4.368801765942323],
        //         behaviorModules: ["Cradle"],
        //         layers: ["pointer"],
        //         shadow: true,
        //         scale: [0.2, 0.2, 0.2],
        //     }
        // },
    ];
}
