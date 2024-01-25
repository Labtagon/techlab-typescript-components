import * as mx from "@labtagon/matrix42-workspace-management-types";
import * as angular from "angular";

export class SlideToUnlockController implements angular.IController {
    public static $inject = [
        '$scope',
        '$element',
        'mx.sb.public.service'
    ]

    sliderValue: number = 0;
    unlocked: boolean = false;

    constructor(
        private $scope: ng.IScope,
        private $element: JQLite,
        private publicService: mx.sb.public.service
    ) {
       
    }

    async validate($event: MouseEvent) {
        if (this.sliderValue < 95) {
            this.sliderValue = 0;
            this.unlocked = false;
        } else {
            this.sliderValue = 100;
            this.unlocked = true;

            let profile = await this.publicService.getUserProfile();
            console.log("Super, " + profile.firstName);

            this.publicService.http.get("api/userinfo").then(console.warn);
            this.publicService.getFullImageUrl
            let result = await this.publicService.notification.confirm("really ?", "are you sure", "hell yea", "na!");
            console.log(result);

        }
    }
}

const SlideToUnlockComponent = {
    controller: SlideToUnlockController,
    controllerAs: "vm",
    bindings: {
        "unlocked": "=",
    },
    template: require("ng-cache-loader?prefix=!./ltg-slide-to-unlock.html")
} as ng.IComponentOptions;

export default SlideToUnlockComponent;