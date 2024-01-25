import * as angular from "angular";

import SlideToUnlockService from "./Services/SlideToUnlockService";
import SlideToUnlockComponent from "./Components/ltg-slide-to-unlock/ltg-slide-to-unlock";

require("./module.css");

window.mx.workspacesConfig.modules.add('Labtagon.TechLabDemo', {});

angular.module('Labtagon.TechLabDemo')
    .service("SlideToUnlockService", SlideToUnlockService)
    .component("ltgSlideToUnlock", SlideToUnlockComponent);

console.log("Hello World.");