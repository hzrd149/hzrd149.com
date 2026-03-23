import lume from "lume/mod.ts";

const site = lume();

site.ignore(".nsite");
site.ignore(".github");

site.data("layout", "layouts/main.vto");

site.add("https://fonts.cdnfonts.com/css/jetbrains-mono-2", "/font.css");
site.add(
  import.meta.resolve("npm:@owickstrom/the-monospace-web/src/reset.css"),
  "/reset.css",
);
site.add(
  import.meta.resolve("npm:@owickstrom/the-monospace-web/src/index.css"),
  "/style.css",
);
site.add("./static", "/");

export default site;
