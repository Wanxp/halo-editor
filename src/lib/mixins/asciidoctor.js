
const asciidoctor = require('asciidoctor')();

export default {
    data() {
        return {
        }
    },
    methods: {
        image_add(pos, url) {
            debugger
            console.log("image_add:" + pos + "|||" + url);
            // asciidoctor.image_add(pos, url);
        },

        render(src, func) {
            debugger
            // const res = markdown.render(src);
            const res = asciidoctor.convert(src)
            func(res);
        },
        renderMermaidDiagrams() {
            const mermaids = document.querySelectorAll('.v-show-content pre.mermaid > code')
            if (!mermaids.length) {
                return
            }
            for (let i = 0; i < mermaids.length; i++) {
                const mermaidDef = mermaids[i].innerText
                const mmElm = document.createElement('div')
                mmElm.innerHTML = `<div id="mermaid-id-${i}">${mermaid.render(`mermaid-id-${i}`, mermaidDef)}</div>`
                mermaids[i].parentElement.replaceWith(mmElm)
            }
        }
    }
};
