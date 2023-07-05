// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

/*

This module manages a list of recent values from a bitcoin position
server. It is used with the Elected module, so that one of
participants is chosen to fetch values.

*/

class FetchExampleActor {
    setup() {
        this.listen("history", "history");
    }

    history(data) {
        console.warn(data, 'translationtranslationtranslation');
        if (this.boxes) {
            this.boxes.forEach((box) => box.destroy())
        }
        this.boxes = [];

        // let number = parseInt(data);
        // let even = number % 2 === 0;

        // console.log(number, even);
        var translateX = -0.520792774666728 //-0.7028726240277707;
        var translateY = -0.4630022395073956;
        var imageTranslateX = -0.3364821190145677;
        var imageTranslateY = -0.15079114345349476;

        console.warn(data, 'translationtranslationtranslation');

        data.map((item, index) => {
            this.boxes.push(this.createCard(
                {
                    name: item.title,
                    className: "TextFieldActor",
                    type: "text",
                    runs: [{ text: item.title + '\n' +  'Price:'  + item.price }],
                   // runs: [{ text: 'title: ' + item.title + '\n' +  'Price:'  + index }],
                    parent: this,
                   // behaviorModules: ["Box"],
                   // textureType: "canvas",
                    textureWidth: 568,
                    textureHeight: 368,
                    translation: [translateX, translateY, -0.04070320803159577],
                    rotation: [0, -0.99, 0, 0],
                    color: 0x222222,
                    margins: { left: 15, top: 48, right: 10, bottom: 0 },
                    backgroundColor: 0x707070,
                    //color: 0xB0841B,
                    frameColor: 0x222222,
                    width: 2,
                    height: 1.5,
                    textScale: 0.002,
                //translation: [-0.3364821190145677, -0.15079114345349476, -0.07072540565595595],
                },
                
                ));
                this.boxes.push(this.createCard(
                    {
                            type: "2d",
                            parent: this,
                            //behaviorModules: ["Box"],
                            translation: [imageTranslateX, imageTranslateY, 0.017721645701314154],
                            scale: [1.6, 1.2, 2],
                            rotation: [0, 0, 0, 1],
                
                           // translation: [1, 0.5, 0.1],
                            textureType: "image",
                            textureLocation: item.image,
                            name: "image card",
                           // rotation: [0, 0, 0],
                           // scale: [4, 4, 4],
                          // textureWidth: 468,
                          // textureHeight: 468,
                            fullBright: true,
                            frameColor: 0xcccccc,
                            color: 0xbbbbbb,
                            cornerRadius: 0.05,
                            frameColor: 0x222222,
                            //margins: { left: 15, top: 48, right: 10, bottom: 0 },
                            width: 2,
                            height: 1.5,
                            // depth: 0.05,
                            shadow: true,
                
                
                         }
                    
                    ));
                // 

            //   translation: [-0.3364821190145677, -1.3451418492111298, -0.669168658397895],
            if(index < 6){
                console.log(index, 'indexindex')
                translateX += 2;
                imageTranslateX += 2;
            }else if(index == 6){
                translateX = -0.520792774666728
                translateY = -1.6923016892537226 //-1.3451418492111298
                imageTranslateX = -0.3364821190145677
                imageTranslateY = -1.3451418492111298
            }else if(index < 12){
                translateX += 2;
                imageTranslateX += 2;
               // translateY -= 1
            }else if(index == 12){
                translateX = -0.520792774666728
                imageTranslateX = -0.3364821190145677 
                translateY -= 1
                imageTranslateY -=1
            }else if(index < 20){
                translateX += 2;
                imageTranslateX +=2;
            }else{
                translateX += 2;
                imageTranslateX += 2;
                //console.log(index, 'indexindex')

            }
        })
        //console.log(this.boxes, 'this.boxes')
        // if (even) {
        //     this.boxes.push(this.createCard({
        //         type: "object",
        //         parent: this,
        //         behaviorModules: ["Click", "Box"],
        //         translation: [1, 0.5, 0.1],
        //         color: 0x2222ff
        //     }));
        // }
    }

    addCard(data) {
        console.warn(data, 'datattataattatattatata');
    }
}

class FetchExamplePawn {
    setup() {
        // Those two messages are sent from the Elected module.
        // When handleElected is sent, it signifies that it newly becomes a leader.
        // When handleUnelected is sent, it signifies that it is not a leader anymore.
        this.listen("handleElected", "handleElected");
        this.listen("handleUnelected", "handleUnelected");

        // Upon start up, this message query the current status from the Elected module.
        this.say("electionStatusRequested");

        this.setupPlane();
    }

    /*
      When data is undefined, it is a result from electionStatusRequested.
      When data and data.to is filled with the elected viewId.
    */
    handleElected(data) {
        if (!data || data.to === this.viewId) {
            console.log("this view is elected");
            this.fetchHistory();
        }
    }

    /*
      When this peer is unelected.
    */
    handleUnelected() {
    }

    setupPlane() {
        let { THREE } = Microverse;

        if (this.box) {
            this.box.geometry.dispose();
            this.box.material.dispose();
            this.box.removeFromParent();
        }

        let geometry = new THREE.BoxGeometry(2, 1, 0.05);
        let material = new THREE.MeshBasicMaterial({ color: 0x4d4d4d });
        this.box = new THREE.Mesh(geometry, material);

        this.shape.add(this.box);
    }

    /*
      At the initialization time, we fetch more data via an http end point.
    */

    async fetchHistory() {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Shopify-Access-Token': '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'
           // 'X-Shopify-Storefront-Access-Token': '4cd63e10b0c567837f49b505c0241375'
          });

        console.log("Fetching BTC-USD history from Coinbase...");
        // return fetch(`https://api.coinbase.com/v2/prices/BTC-USD/historic?period=day`).then((response) => {
        //return await fetch(`https://www.retailjewels.com/RetailJewelsAPI/service.asmx/GetThumbnailProductSearch?Price=&Caratweight=&StoneShapes=&Stonesettings=&JewelleryCollections=&GroupId=8ed5c7da-6a9e-4ba7-8be2-ea4f18c666d3&NewArival=0&SpecialOffer=0&SortingBy=0&PageIndex=1&EternityCollection=&BestSeller=0&ProductRating=0`).then((response) => {

       // const response = await fetch('https://9d2294-2.myshopify.com/admin/api/2023-04/products.json', {
        const response = await fetch('https://9d2294-2.myshopify.com/admin/api/2023-04/graphql', {
            method: 'POST',
            headers: headers,
            crossDomain: true,
            body: JSON.stringify({query: "{products(first: 5) {edges {node {id handle}}pageInfo {hasNextPage}}}"})
          });
          const shopifyData = await response.json();
          console.log(shopifyData, 'shopifyDatashopifyData')
    //     return await fetch('https://9d2294-2.myshopify.com/admin/api/2023-04/products.json', {
	// 	method: 'GET',
	// 	headers: {
    //         'Content-Type': 'application/json',
	// 		'X-Shopify-Access-Token': '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',
    //         //'Access-Control-Allow-Origin': '*'
	// 	},
	// }).then((response) => {
    //         return response.json();
    //     }).then((json) => {
    //         console.log(json, 'json Shopify response')
    //         const prices = JSON.stringify(json[0]);
    //         // const prices = json.data.prices;
    //         // let last = prices[prices.length - 1];
    //         const productData = json.map((item, index) => {
    //             //if(index < 5){
    //             return {
    //                 title: item.ProductName,
    //                 price: item.RetailPrice,
    //                 image: item.URL
    //             }
    //             //  }else{return false}
    //         })
    //         this.say("history", productData);
    //     });
    }
}

class ClickActor {
    setup() {
        this.addEventListener("pointerDown", "removeClickActor");
    }

    removeClickActor() {
        this.removeBehaviorModule("Click");
        this.say("setColor", 0xff2222);
    }

    teardown() {
        console.log("tear down ClickActor");
        this.removeEventListener("pointerDown", "removeClickActor");
    }
}

class BoxPawn {
    setup() {
        this.listen("setColor", "setColor");
        this.setColor(this.actor._cardData.color);
    }

    setColor(color) {
        let { THREE } = Microverse;

        if (this.box) {
            this.box.geometry.dispose();
            this.box.material.dispose();
            this.box.removeFromParent();
        }

        let geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        let material = new THREE.MeshBasicMaterial({ color });
        this.box = new THREE.Mesh(geometry, material);

        this.shape.add(this.box);
    }
    
   /*  setColor(color) {
        if (color === this.lastColor) {return;}
        let material = this.makePlaneMaterial(this.actor._cardData.depth, color, this.actor._cardData.frameColor, false);
        let obj = this.shape.children.find((o) => o.name === "2d");
        if (!obj || !obj.children || obj.children.length === 0) {return;}
        obj = obj.children[0];
        obj.material = material;
        this.lastColor = color;
    } */
}

export default {
    modules: [
        {
            name: "FetchExample",
            actorBehaviors: [FetchExampleActor],
            pawnBehaviors: [FetchExamplePawn],
        },
        {
            name: "Box",
            pawnBehaviors: [BoxPawn]
        },
        {
            name: "Click",
            actorBehaviors: [ClickActor]
        }
    ]
}

/* globals Microverse */
