class FileDragAndDropActor {
    constructor() {
      this.currentCard = null;
      this.additionalCard = null;
    }
  
    fileUploaded(data) {
      let { dataId, fileName, type, translation, rotation, animationClipIndex, dataScale } = data;
      
      let cardType;
      if (type === "exr") {
        cardType = "lighting";
      } else if (type === "svg" || type === "img" || type === "pdf") {
        cardType = "2d";
      }else {
        cardType = "3d";
      }
  
      let options = {
        name: fileName,
        translation,
        rotation,
        type: cardType,
        fileName,
        modelType: type,
        shadow: true,
        singleSided: true
      };
  
      if (animationClipIndex !== undefined) {
        options.animationClipIndex = animationClipIndex;
      }
  
      if (cardType === "3d" && dataScale) {
        options.dataScale = dataScale;
      }
  
      if (type === "img") {
        options = {
          ...options,
          textureLocation: dataId,
          textureType: "image",
          scale: [8, 8, 2],
          cornerRadius: 0.02,
          rotation: [0, Math.PI / 2, 0],
          type: "2d",
          translation: [8, 7, 29.5],
          fullBright: true
        };
      } else if (type === "pdf") {
       
        options = {
          ...options,
          translation: [6, 6.2, 29.5],
          scale: [9, 9, 2],
          rotation: [0, Math.PI / 2, 0],
          behaviorModules: ["PDFView"],
          layers: ["pointer"],
          type: "2d",
          frameColor: 0xffffff,
          color: 0x888888,
          depth: 0.05,
          fullBright: true,
          pdfLocation: dataId,
                  
        };
      } else {
        options = { ...options, dataLocation: dataId };
      
      }
  
      if (type !== "exr") {
            // Remove the existing card before rendering the new one
        if (this.currentCard) {
          this.currentCard.destroy();
        }
        if (this.additionalCard) {
          this.additionalCard.destroy();
        }
        this.currentCard = this.createCard(options);
       
              
        } else {
        let light = [...this.service("ActorManager").actors.values()].find(o => o._cardData.type === "lighting");
        if (light) {
          light.updateOptions({ ...light._cardData, dataLocation: dataId, dataType: "exr" });
        }
      }
  
      this.publish(this.sessionId, "triggerPersist");
    }

  }

export default {
    modules: [
        {
            name: "FileDragAndDropHandler",
            actorBehaviors: [FileDragAndDropActor]
        }
    ]
}
