import gsap from "gsap";
import {Ref} from "vue";

export function authorizeGsap(scopeRef : Ref<any, any>) : gsap.Context {
    let ctx = gsap.context((self) => {
        const targets = gsap.utils.toArray('.gsap-animate-auth-float');
        const timeline = gsap.timeline();
        timeline
            .from(targets, {
                opacity : 0,
                yPercent: -50,
                stagger : 0.2
            })
            .from('#buttonRef', {
                opacity : 0,
                yPercent: 50,
                duration : 0.6
            })
    }, scopeRef.value);
    return ctx
}