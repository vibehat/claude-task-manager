"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityCreateInput_1 = require("../../../inputs/IssuePriorityCreateInput");
const IssuePriorityUpdateInput_1 = require("../../../inputs/IssuePriorityUpdateInput");
const IssuePriorityWhereUniqueInput_1 = require("../../../inputs/IssuePriorityWhereUniqueInput");
let UpsertOneIssuePriorityArgs = class UpsertOneIssuePriorityArgs {
};
exports.UpsertOneIssuePriorityArgs = UpsertOneIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput)
], UpsertOneIssuePriorityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateInput_1.IssuePriorityCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateInput_1.IssuePriorityCreateInput)
], UpsertOneIssuePriorityArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityUpdateInput_1.IssuePriorityUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityUpdateInput_1.IssuePriorityUpdateInput)
], UpsertOneIssuePriorityArgs.prototype, "update", void 0);
exports.UpsertOneIssuePriorityArgs = UpsertOneIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneIssuePriorityArgs);
