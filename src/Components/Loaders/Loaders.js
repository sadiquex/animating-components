import { createElement as $ } from "react";

import { Container, Loader1, Loader2, Loader3 } from "./LoadersStyles";

const Loaders = () => {
    return $(Container, null,
        // loader 1
        $(Loader1, null, $("ul", null, $("li", null), $("li", null), $("li", null), $("li", null), $("li", null))),
        // loader 2
        $(Loader2, null, $("div", { className: "line" }, $("div", { className: "hexagon" }))),
        // loader 3
        $(Loader3, null, $("div", { className: "loader" }, $("div", { className: "outer" }, $("div", { className: "middle" }), $("div", { className: "inner" }), $("div", { className: "dot" })))
        ))

}

export default Loaders;

