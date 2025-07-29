"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelCountIssuesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelWhereInput_1 = require("../../inputs/IssueLabelWhereInput");
let LabelCountIssuesArgs = class LabelCountIssuesArgs {
};
exports.LabelCountIssuesArgs = LabelCountIssuesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereInput_1.IssueLabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereInput_1.IssueLabelWhereInput)
], LabelCountIssuesArgs.prototype, "where", void 0);
exports.LabelCountIssuesArgs = LabelCountIssuesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], LabelCountIssuesArgs);
