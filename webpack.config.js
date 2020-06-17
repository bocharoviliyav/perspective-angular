import PerspectivePlugin from "@finos/perspective-webpack-plugin";

export const entry = "./in.js";
export const output = {
    filename: "out.js",
    path: "build"
};
export const plugins = [new PerspectivePlugin()];
