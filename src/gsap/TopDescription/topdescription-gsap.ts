import {Ref} from "vue";
import gsap from "gsap";

export function topDescriptionGsap(scopeRef : Ref<any, any>) : gsap.Context {
    let ctx = gsap.context((self) => {
        const li_targets = gsap.utils.toArray('.li-description-target');
        const h_target = document.querySelector('.h-description-target');

        const li_buffer = gsap.utils.toArray('.li-gsap-table-buffer')
        const h_buffer = document.querySelector('.h2-gsap-table-buffer')

        const table_target = document.querySelector('.card');
        const rows_target = gsap.utils.toArray(".p-datatable-tbody");

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
            .from(h_buffer, {
                opacity: 0,
                xPercent: -40,
                duration: 0.5
            })
            .from(li_buffer, {
                opacity: 0,
                yPercent: -50,
                stagger: 0.3
            })
            .from(table_target, {
                opacity: 0,
                xPercent: -40,
                duration: 0.5
            })
            .from(rows_target, {
                opacity: 0,
                yPercent: -50,
                stagger: 0.3
            })
    }, scopeRef.value);
    return ctx
}