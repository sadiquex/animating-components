import { createElement as $ } from "react";

import { Loader1, Container } from "./LoadersStyles";

const Loaders = () => {
    return $(
        Container, null, $(Loader1, null, $("ul", null, $("li", null), $("li", null), $("li", null), $("li", null), $("li", null)))
    )
}

export default Loaders;
