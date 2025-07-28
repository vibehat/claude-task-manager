"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskUpdateWithWhereUniqueWithoutParentTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskUpdateWithoutParentTaskInput_1 = require("../inputs/SubtaskUpdateWithoutParentTaskInput");
const SubtaskWhereUniqueInput_1 = require("../inputs/SubtaskWhereUniqueInput");
let SubtaskUpdateWithWhereUniqueWithoutParentTaskInput = class SubtaskUpdateWithWhereUniqueWithoutParentTaskInput {
};
exports.SubtaskUpdateWithWhereUniqueWithoutParentTaskInput = SubtaskUpdateWithWhereUniqueWithoutParentTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], SubtaskUpdateWithWhereUniqueWithoutParentTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateWithoutParentTaskInput_1.SubtaskUpdateWithoutParentTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateWithoutParentTaskInput_1.SubtaskUpdateWithoutParentTaskInput)
], SubtaskUpdateWithWhereUniqueWithoutParentTaskInput.prototype, "data", void 0);
exports.SubtaskUpdateWithWhereUniqueWithoutParentTaskInput = SubtaskUpdateWithWhereUniqueWithoutParentTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskUpdateWithWhereUniqueWithoutParentTaskInput", {})
], SubtaskUpdateWithWhereUniqueWithoutParentTaskInput);
