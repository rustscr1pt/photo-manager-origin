import {Ref} from "vue";
import gsap from "gsap";

export function uploadImagesComponentCollected_gsap(scopeRef : Ref<any, any>) : gsap.Context {
    let ctx = gsap.context((self) => {
        const li_targets = gsap.utils.toArray('.li-description-target');
        const h_target = document.querySelector('.h-description-target');

        const p_target = document.querySelector('.submit-form-target-gsap');

        const send_image_target = document.querySelector('.send-image-component-gsap-target');

        const timeline = gsap.timeline();

        timeline
            .from(h_target, {
                opacity: 0,
                xPercent: -40,
                duration: 0.5
            })
            .from(li_targets, {
                opacity: 0,
                yPercent: -50,
                stagger: 0.3
            })
            .from(p_target, {
                opacity: 0,
                xPercent: -40,
                duration: 0.5
            })
            .from(send_image_target, {
                opacity: 0,
                yPercent: -50
            })
    }, scopeRef.value)
    return ctx
}