"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCreateManyParentTaskInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateManyParentTaskInput_1 = require("../inputs/SubtaskCreateManyParentTaskInput");
let SubtaskCreateManyParentTaskInputEnvelope = class SubtaskCreateManyParentTaskInputEnvelope {
};
exports.SubtaskCreateManyParentTaskInputEnvelope = SubtaskCreateManyParentTaskInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskCreateManyParentTaskInput_1.SubtaskCreateManyParentTaskInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskCreateManyParentTaskInputEnvelope.prototype, "data", void 0);
exports.SubtaskCreateManyParentTaskInputEnvelope = SubtaskCreateManyParentTaskInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskCreateManyParentTaskInputEnvelope", {})
], SubtaskCreateManyParentTaskInputEnvelope);
