"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledAuthInput = exports.AuthLabel = exports.AuthInputContainer = void 0;
var styled_components_1 = require("styled-components");
exports.AuthInputContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n"], ["\n    position: relative;\n"])));
exports.AuthLabel = styled_components_1["default"].label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    left: 0;\n    top: ", ";\n\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n"], ["\n    position: absolute;\n    left: 0;\n    top: ", ";\n\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n"])), function (_a) {
    var active = _a.active;
    return (active ? "-15px" : "5px");
}, function (_a) {
    var fontSize = _a.theme.fontSize, active = _a.active;
    return (active ? fontSize.sm : fontSize.lg);
}, function (_a) {
    var fontWeight = _a.theme.fontWeight, active = _a.active;
    return (active ? fontWeight.bold : fontWeight.light);
}, function (_a) {
    var colors = _a.theme.colors, active = _a.active;
    return (active ? colors.primary : colors.gray);
});
exports.StyledAuthInput = styled_components_1["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    height: 50px;\n    border-bottom: 1px solid ", ";\n    font-size: ", ";\n    font-weight: ", ";\n\n    border: none;\n    width: 100%;\n\n    :focus {\n        outline: none;\n    }\n"], ["\n    height: 50px;\n    border-bottom: 1px solid ", ";\n    font-size: ", ";\n    font-weight: ", ";\n\n    border: none;\n    width: 100%;\n\n    :focus {\n        outline: none;\n    }\n"])), function (_a) {
    var colors = _a.theme.colors;
    return colors.gray;
}, function (_a) {
    var fontSize = _a.theme.fontSize;
    return fontSize.lg;
}, function (_a) {
    var fontWeight = _a.theme.fontWeight;
    return fontWeight.light;
});
var templateObject_1, templateObject_2, templateObject_3;
