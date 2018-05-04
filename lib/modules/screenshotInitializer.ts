import hideWindowScrollbars from "../scripts/hideWindowScrollbars";
import disableCssAnimations from "../scripts/disableCssAnimations";
import addShadowPadding from "../scripts/addShadowPadding";

export default async function screenshotInitializer(
    executor: Function,
    options: {
        addressBarShadowPadding: number,
        disableCSSAnimation: boolean,
        hideScrollBars: boolean,
        toolBarShadowPadding: number
    }
) {
    // hide scrollbars if needed
    await executor(hideWindowScrollbars, options.hideScrollBars);

    // add shaddow padding to top / bottom
    await executor(addShadowPadding, {
        addressBarShadowPadding: options.addressBarShadowPadding,
        toolBarShadowPadding: options.toolBarShadowPadding
    });

    // disable the css animations
    await executor(disableCssAnimations, options.disableCSSAnimation)
}