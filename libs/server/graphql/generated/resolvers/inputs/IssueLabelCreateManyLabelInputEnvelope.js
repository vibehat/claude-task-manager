"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateManyLabelInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateManyLabelInput_1 = require("../inputs/IssueLabelCreateManyLabelInput");
let IssueLabelCreateManyLabelInputEnvelope = class IssueLabelCreateManyLabelInputEnvelope {
};
exports.IssueLabelCreateManyLabelInputEnvelope = IssueLabelCreateManyLabelInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateManyLabelInput_1.IssueLabelCreateManyLabelInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelCreateManyLabelInputEnvelope.prototype, "data", void 0);
exports.IssueLabelCreateManyLabelInputEnvelope = IssueLabelCreateManyLabelInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateManyLabelInputEnvelope", {})
], IssueLabelCreateManyLabelInputEnvelope);
